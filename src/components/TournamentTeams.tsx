import { useEffect, useMemo, useState } from "react";
import {
  TOURNAMENT_CHANGE_EVENT,
  TOURNAMENT_OPTIONS,
  TOURNAMENT_STORAGE_KEY,
} from "../constants/tournaments";
import type { Player, PlayersData, ResultsData } from "../types/data";

interface TournamentTeamsProps {
  tournaments: Record<string, { results: ResultsData; players: PlayersData }>;
}

function readStoredId(): string {
  if (typeof window === "undefined") return "current";
  const raw = localStorage.getItem(TOURNAMENT_STORAGE_KEY);
  const valid = TOURNAMENT_OPTIONS.some((o) => o.id === raw);
  return valid && raw ? raw : "current";
}

/** Nivel por defecto para estrellas cuando no hay dato en la plantilla */
const DEFAULT_LEVEL = 2.5;

function groupPlayersByTeam(players: PlayersData): { name: string; players: Player[] }[] {
  const map = new Map<string, Player[]>();
  for (const p of players) {
    const list = map.get(p.team);
    if (list) list.push(p);
    else map.set(p.team, [p]);
  }
  return Array.from(map.entries()).map(([name, pls]) => ({
    name,
    players: pls,
  }));
}

const TournamentTeams: React.FC<TournamentTeamsProps> = ({ tournaments }) => {
  const [tournamentId, setTournamentId] = useState<string>("current");

  useEffect(() => {
    setTournamentId(readStoredId());
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (id in tournaments) setTournamentId(id);
    };
    window.addEventListener(TOURNAMENT_CHANGE_EVENT, handler as EventListener);
    return () =>
      window.removeEventListener(TOURNAMENT_CHANGE_EVENT, handler as EventListener);
  }, [tournaments]);

  const players = useMemo(() => {
    const bundle = tournaments[tournamentId] ?? tournaments.current;
    return bundle.players;
  }, [tournamentId, tournaments]);

  const teams = useMemo(() => groupPlayersByTeam(players), [players]);

  return (
    <main className="flex flex-col gap-8 pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.name} className="bg-dark-light rounded-lg p-6 flex flex-col gap-4">
            <h2 className="lg:text-lg font-semibold text-center mb-4 text-yellow-500">
              {team.name}
            </h2>

            <div className="flex flex-col gap-4">
              {team.players.map((player) => {
                const level = player.level ?? DEFAULT_LEVEL;
                const fullStars = Math.floor(level);
                const hasHalfStar = level % 1 !== 0;
                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                const photo = player.photo?.trim() ? player.photo : "/default.jpg";

                return (
                  <div
                    key={player.id}
                    className="flex flex-col items-center gap-2 p-3 bg-dark rounded-lg hover:bg-dark-light transition-colors"
                  >
                    <img
                      src={photo}
                      alt={player.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500/30 mb-2"
                    />
                    <div className="flex items-center gap-0.5 text-xl">
                      {Array.from({ length: fullStars }).map((_, i) => (
                        <span key={`f-${i}`} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                      {hasHalfStar && (
                        <span className="half-star-wrapper">
                          <span className="half-star-filled">★</span>
                          <span className="half-star-empty">☆</span>
                        </span>
                      )}
                      {Array.from({ length: emptyStars }).map((_, i) => (
                        <span key={`e-${i}`} className="text-gray-600">
                          ☆
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-300 font-medium">{player.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TournamentTeams;
