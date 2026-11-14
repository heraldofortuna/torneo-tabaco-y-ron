import { useEffect, useMemo, useState } from "react";
import {
  TOURNAMENT_CHANGE_EVENT,
  TOURNAMENT_OPTIONS,
  TOURNAMENT_STORAGE_KEY,
  type RosterChange,
  type TournamentClientBundle,
} from "../constants/tournaments";
import { mergeTeamLogos } from "../constants/teamLogos";
import type { Player, PlayersData } from "../types/data";
import TeamLogo from "./TeamLogo";

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
      const bajoA = a.bajo ? 1 : 0;
      const bajoB = b.bajo ? 1 : 0;
      if (bajoA !== bajoB) return bajoA - bajoB;
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
  const teamLogos = mergeTeamLogos(bundle.teamLogos);

  const absencesByPlayer = useMemo(() => {
    const map = new Map<string, number>();
    for (const fecha of bundle.results) {
      for (const absence of fecha.absences ?? []) {
        const name = absence.player.trim();
        if (!name) continue;
        map.set(name, (map.get(name) ?? 0) + 1);
      }
    }
    return map;
  }, [bundle.results]);

  const teams = useMemo(() => groupPlayersByTeam(players), [players]);

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
            <div className="mb-4 flex flex-col items-center justify-center gap-4 text-center">
              {teamLogos[team.name] ? (
                <TeamLogo
                  src={teamLogos[team.name]}
                  alt={`Escudo de ${team.name}`}
                  size="lg"
                  className="drop-shadow-[0_4px_12px_rgba(212,175,55,0.25)]"
                />
              ) : null}
              <h2 className="font-semibold text-gold text-lg sm:text-xl">
                {team.name}
              </h2>
            </div>

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

            <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
              {team.players.map((player) => {
                const level = player.level ?? DEFAULT_LEVEL;
                const fullStars = Math.floor(level);
                const hasHalfStar = level % 1 !== 0;
                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                const photo = player.photo?.trim() ? player.photo : "/default.jpg";
                const absences = absencesByPlayer.get(player.name) ?? 0;

                return (
                  <div
                    key={player.id}
                    className="flex w-full min-w-0 flex-col items-center gap-2 rounded-lg border border-transparent bg-dark p-3 transition-colors hover:border-gold/30 hover:bg-dark-light"
                  >
                    <img
                      src={photo}
                      alt={player.name}
                      className="mb-2 h-20 w-20 rounded-full border-2 border-gold/30 object-cover"
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
                    <div className="text-center text-sm font-medium text-white">{player.name}</div>
                    {player.captain || player.bajo ? (
                      <div className="flex flex-wrap items-center justify-center gap-1">
                        {player.captain ? (
                          <span className="rounded border border-white/30 bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                            Capitán
                          </span>
                        ) : null}
                        {player.bajo ? (
                          <span className="rounded border border-gold/40 bg-gold/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                            Bajo
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                    {player.bajo ? (
                      <p className={`text-center text-[11px] ${absences >= 2 ? "font-medium text-[#fecaca]" : "text-gray"}`}>
                        {absences === 1 ? "1 falta" : `${absences} faltas`}
                      </p>
                    ) : null}
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
