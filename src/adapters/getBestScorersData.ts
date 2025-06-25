import { players } from "../constants/players";
import type { ScorerData } from "../types/data";

function getBestScorersData(scorersData: Array<ScorerData & { position: number }>): any {
  const bestScorers = scorersData.slice(0, 3).map(scorer => {
    const photo = players.find(player => player.name === scorer.name)?.photo || '/src/assets/default.jpg';

    return {
      ...scorer,
      photo: photo
    }
  });
  console.log("XXX:", scorersData.slice(0, 3), bestScorers);
  return bestScorers;
}

export default getBestScorersData;