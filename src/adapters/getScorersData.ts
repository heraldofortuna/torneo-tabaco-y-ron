import type { ResultsData, ScorerData } from "../types/data";

function getScorersData(results: ResultsData): Array<ScorerData & { position: number }> {
  const playerData: Record<string, { goals: number; team: string }> = {};

  results.forEach(fecha => {
    fecha.matches.forEach(match => {
      // Procesar goleadores locales (filtrar strings vacíos)
      match.homeScorers?.forEach(player => {
        // Ignorar strings vacíos que indican goles sin goleador confirmado
        if (player && player.trim() !== '') {
          if (!playerData[player]) {
            playerData[player] = { goals: 0, team: match.home };
          }
          playerData[player].goals += 1;
        }
      });

      // Procesar goleadores visitantes (filtrar strings vacíos)
      match.awayScorers?.forEach(player => {
        // Ignorar strings vacíos que indican goles sin goleador confirmado
        if (player && player.trim() !== '') {
          if (!playerData[player]) {
            playerData[player] = { goals: 0, team: match.away };
          }
          playerData[player].goals += 1;
        }
      });
    });
  });

  // Convertir a array, ordenar y añadir posición
  return Object.entries(playerData)
    .map(([name, data]) => ({
      name,
      goals: data.goals,
      team: data.team
    }))
    .sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name))
    .map((scorer, index) => ({
      position: index + 1,
      ...scorer
    }));
}

export default getScorersData;