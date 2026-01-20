import type { PositionData, ResultsData } from "../types/data";

function getPositionsData(results: ResultsData): Array<PositionData & { position: number }> {
  const teams: Record<string, PositionData> = {};

  // Inicializar todos los equipos
  const allTeams = new Set<string>();
  results.forEach((date) => {
    date.matches.forEach((match) => {
      allTeams.add(match.home);
      allTeams.add(match.away);
    });
  });

  // Inicializar stats para cada equipo
  Array.from(allTeams).forEach((team) => {
    teams[team] = {
      team: team,
      played: 0,
      won: 0,
      lost: 0,
      drawn: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
    };
  });

  // Procesar cada partido
  results.forEach((date) => {
    // Procesar sanciones de la fecha
    if (date.sanctions) {
      date.sanctions.forEach((sanction) => {
        if (teams[sanction.team]) {
          teams[sanction.team].points += sanction.points; // sanction.points normalmente será -3
        }
      });
    }

    date.matches.forEach((match) => {
      // Caso 1: Partido no jugado (ambos son null)
      if (match.homeScorers === null && match.awayScorers === null) {
        return; // No procesar partidos no jugados
      }

      // Caso 2: Un equipo no se presentó
      if (match.homeScorers === null || match.awayScorers === null) {
        if (match.homeScorers === null && match.awayScorers !== null) {
          // Equipo local no se presentó, visitante gana 3-0
          teams[match.away].played += 1;
          teams[match.away].won += 1;
          teams[match.away].points += 3;
          teams[match.away].goalsFor += 3;
          teams[match.away].goalDifference += 3; // ← CORRECCIÓN AQUÍ

          teams[match.home].played += 1;
          teams[match.home].lost += 1;
          teams[match.home].goalsAgainst += 3;
          teams[match.home].goalDifference -= 3;
        } else if (match.awayScorers === null && match.homeScorers !== null) {
          // Equipo visitante no se presentó, local gana 3-0
          teams[match.home].played += 1;
          teams[match.home].won += 1;
          teams[match.home].points += 3;
          teams[match.home].goalsFor += 3;
          teams[match.home].goalDifference += 3; // ← CORRECCIÓN AQUÍ
          
          teams[match.away].played += 1;
          teams[match.away].lost += 1;
          teams[match.away].goalsAgainst += 3;
          teams[match.away].goalDifference -= 3;
        }
        return;
      }

      // Caso 3: Partido normal (ambos arrays tienen datos)
      const homeGoals = match.homeScorers.length;
      const awayGoals = match.awayScorers.length;

      // Actualizar stats del equipo local
      teams[match.home].played += 1;
      teams[match.home].goalsFor += homeGoals;
      teams[match.home].goalsAgainst += awayGoals;
      teams[match.home].goalDifference += homeGoals - awayGoals;

      // Actualizar stats del equipo visitante
      teams[match.away].played += 1;
      teams[match.away].goalsFor += awayGoals;
      teams[match.away].goalsAgainst += homeGoals;
      teams[match.away].goalDifference += awayGoals - homeGoals;

      // Determinar resultado del partido
      if (homeGoals > awayGoals) {
        teams[match.home].won += 1;
        teams[match.home].points += 3;
        teams[match.away].lost += 1;
      } else if (awayGoals > homeGoals) {
        teams[match.away].won += 1;
        teams[match.away].points += 3;
        teams[match.home].lost += 1;
      } else {
        teams[match.home].drawn += 1;
        teams[match.away].drawn += 1;
        teams[match.home].points += 1;
        teams[match.away].points += 1;
      }
    });
  });

  // Convertir a array, ordenar y añadir posición
  return Object.values(teams)
    .sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference)
    .map((team, index) => ({
      position: index + 1,
      ...team,
    }));
}

export default getPositionsData;