import { useEffect, useMemo, useState } from "react";
import {
  TOURNAMENT_CHANGE_EVENT,
  TOURNAMENT_OPTIONS,
  TOURNAMENT_STORAGE_KEY,
  type RosterChange,
  type TournamentClientBundle,
} from "../constants/tournaments";
import type { Player, PlayersData } from "../types/data";

interface TournamentTeamsProps {
  tournaments: Record<string, TournamentClientBundle>;
}

function readStoredId(): string {
  if (typeof window === "undefined") return "current";
  const raw = localStorage.getItem(TOURNAMENT_STORAGE_KEY);
  const valid = TOURNAMENT_OPTIONS.some((o) => o.id === raw);
  return valid && raw ? raw : "current";
}

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
    players: [...pls].sort((a, b) => {
      const levelA = a.level ?? DEFAULT_LEVEL;
      const levelB = b.level ?? DEFAULT_LEVEL;
      return levelB - levelA || a.name.localeCompare(b.name);
    }),
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

  const bundle = useMemo(
    () => tournaments[tournamentId] ?? tournaments.current,
    [tournamentId, tournaments],
  );
  const players = bundle.players;
  const rosterChanges = bundle.rosterChanges ?? [];

  const teams = useMemo(() => groupPlayersByTeam(players), [players]);
  const teamRatings = useMemo(() => {
    return new Map(
      teams.map((team) => [
        team.name,
        team.players.reduce((total, player) => total + (player.level ?? DEFAULT_LEVEL), 0),
      ]),
    );
  }, [teams]);

  const changesByTeam = useMemo(() => {
    const map = new Map<string, RosterChange[]>();
    for (const ch of rosterChanges) {
      const list = map.get(ch.team);
      if (list) list.push(ch);
      else map.set(ch.team, [ch]);
    }
    return map;
  }, [rosterChanges]);

  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        {teams.map((team) => {
          const teamChanges = changesByTeam.get(team.name) ?? [];
          return (
          <div key={team.name} className="bg-dark-light border border-gold/15 rounded-lg p-6 flex flex-col gap-4">
            <h2 className="mb-4 flex items-center justify-center gap-2 text-center font-semibold text-gold lg:text-lg">
              <span>{team.name}</span>
              <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold-light">
                {(teamRatings.get(team.name) ?? 0).toFixed(1)} val.
              </span>
            </h2>

            {teamChanges.length > 0 ? (
              <div className="mb-1 flex flex-col gap-2 rounded-md border border-gold/20 bg-dark/60 px-3 py-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gold">
                  Cambios de plantilla
                </p>
                <ul className="flex flex-col gap-2">
                  {teamChanges.map((c, idx) => (
                    <li
                      key={`${c.matchday}-${c.outPlayer}-${c.inPlayer}-${idx}`}
                      className="border-l-2 border-gold/50 pl-2.5 text-xs text-gray"
                    >
                      <span className="text-gray">{c.matchday}</span>
                      <span className="mx-1 text-gray">·</span>
                      <span className="text-white/70">{c.outPlayer}</span>
                      <span className="text-gray"> → </span>
                      <span className="text-gold">{c.inPlayer}</span>
                      {c.reason ? (
                        <span className="mt-0.5 block text-[11px] italic text-gray">
                          Motivo: {c.reason}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-4">
              {team.players.map((player) => {
                const level = player.level ?? DEFAULT_LEVEL;
                const fullStars = Math.floor(level);
                const hasHalfStar = level % 1 !== 0;
                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                const photo = player.photo?.trim() ? player.photo : "/default.jpg";

                return (
                  <div
                    key={player.id}
                    className="min-w-full lg:min-w-36 flex flex-col items-center gap-2 p-3 bg-dark rounded-lg hover:bg-dark-light border border-transparent hover:border-gold/30 transition-colors cursor-pointer"
                  >
                    <img
                      src={photo}
                      alt={player.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-gold/30 mb-2"
                    />
                    <div className="flex items-center gap-0.5 text-xl">
                      {Array.from({ length: fullStars }).map((_, i) => (
                        <span key={`f-${i}`} className="text-gold">
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
                        <span key={`e-${i}`} className="text-gray">
                          ☆
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-white font-medium">{player.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          );
        })}
      </div>
    </main>
  );
};

export default TournamentTeams;
