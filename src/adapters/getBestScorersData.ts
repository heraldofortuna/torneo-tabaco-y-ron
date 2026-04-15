import type { PlayersData, ScorerData } from "../types/data";

function getBestScorersData(
  scorersData: Array<ScorerData & { position: number }>,
  players: PlayersData,
): any {
  const bestScorers = scorersData.slice(0, 3).map(scorer => {
    const photo = players.find(player => player.name === scorer.name)?.photo || '/default.jpg';

    return {
      ...scorer,
      photo: photo
    }
  });

  return bestScorers;
}

export default getBestScorersData;