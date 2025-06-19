import type { ResultsData, ScorerData } from "../types/data";

function getScorersData(results: ResultsData): Array<ScorerData & { position: number }> {
  const playerData: Record<string, { goals: number; team: string }> = {};

  results.forEach(fecha => {
    fecha.matches.forEach(match => {
      // Procesar goleadores locales
      match.homeScorers.forEach(player => {
        if (!playerData[player]) {
          playerData[player] = { goals: 0, team: match.home };
        }
        playerData[player].goals += 1;
      });

      // Procesar goleadores visitantes
      match.awayScorers.forEach(player => {
        if (!playerData[player]) {
          playerData[player] = { goals: 0, team: match.away };
        }
        playerData[player].goals += 1;
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