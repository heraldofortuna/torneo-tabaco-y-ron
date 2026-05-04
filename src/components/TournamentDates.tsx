import { useEffect, useMemo, useRef, useState } from "react";
import {
  TOURNAMENT_CHANGE_EVENT,
  TOURNAMENT_OPTIONS,
  TOURNAMENT_STORAGE_KEY,
} from "../constants/tournaments";
import type { DayResults, Match, PlayersData, ResultsData } from "../types/data";
import CapturePngButton from "./CapturePngButton";

function matchHomeScore(m: Match): string | number {
  if (!m.homeScorers && !m.awayScorers) return "";
  if (m.homeScorers) return m.homeScorers.length;
  return "W.O";
}

function matchAwayScore(m: Match): string | number {
  if (!m.homeScorers && !m.awayScorers) return "";
  if (m.awayScorers) return m.awayScorers.length;
  return "W.O";
}

function redCardNameList(names?: string[] | null): string[] {
  return (names ?? []).map((n) => n.trim()).filter(Boolean);
}

function RedCardPlayersList({ names, align }: { names?: string[] | null; align: "left" | "right" }) {
  const list = redCardNameList(names);
  if (list.length === 0) return null;
  const text = list.join(", ");
  return (
    <div
      className={`mt-1 flex flex-wrap items-baseline gap-1 text-[11px] font-medium text-red-400 ${align === "right" ? "justify-end text-right" : "text-left"}`}
      title={`Tarjeta roja: ${text}`}
    >
      <span
        className="inline-flex h-3.5 min-w-[12px] shrink-0 items-center justify-center rounded-sm bg-red-600 px-0.5 text-[9px] font-bold uppercase leading-none text-white"
        aria-hidden
      >
        R
      </span>
      <span className="min-w-0 text-red-300/95">{text}</span>
    </div>
  );
}

interface TournamentDatesProps {
  tournaments: Record<string, { results: ResultsData; players: PlayersData }>;
}

function readStoredId(): string {
  if (typeof window === "undefined") return "current";
  const raw = localStorage.getItem(TOURNAMENT_STORAGE_KEY);
  const valid = TOURNAMENT_OPTIONS.some((o) => o.id === raw);
  return valid && raw ? raw : "current";
}

function FechaCard({ result }: { result: DayResults }) {
  const captureRef = useRef<HTMLDivElement>(null);

  return (
    <li className="flex flex-col">
      <section className="bg-dark-light h-full flex flex-col gap-2 p-4 rounded-lg relative">
        <div
          ref={captureRef}
          className="rounded-lg bg-[#21222D] p-3 flex flex-col gap-2 pr-14"
        >
          <div className="flex flex-col">
            <h2 className="font-semibold text-base">{result.name}</h2>
            <p className="text-gray text-xs">{result.date}</p>
          </div>
          {result.mvp ? (
            <div className="flex flex-col items-center gap-0">
              <div className="rounded-full bg-white/20 flex items-center justify-center mt-4 mb-2 backdrop-blur-sm border-2 border-white w-12 h-12 sm:w-16 sm:h-16">
                <img
                  src={`/${result.mvp.image}`}
                  alt="MVP de la fecha"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="font-semibold">{result.mvp.name}</h3>
            </div>
          ) : null}
          <ul className="grid grid-cols-1">
            {result.matches.map((match, mi) => (
              <li
                key={`${result.id}-${match.home}-${match.away}-${mi}`}
                className="flex justify-between gap-2 p-2 border-b border-white/10 md:border-b-0"
              >
                <div className="flex flex-1 justify-between items-center gap-2 min-w-0">
                  <div className="min-w-0">
                    <h3 className="text-left">{match.home}</h3>
                    <p className="text-gray text-xs text-left">
                      {match.homeScorers ? match.homeScorers.join(", ") : ""}
                    </p>
                    <RedCardPlayersList names={match.homeRedCards} align="left" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xl font-bold tabular-nums shrink-0" title="Goles">
                    <span>{matchHomeScore(match)}</span>
                  </span>
                </div>
                <div className="flex flex-1 justify-center items-center">
                  <p className="text-xl">vs</p>
                </div>
                <div className="flex flex-1 justify-between items-center gap-2 min-w-0">
                  <span className="inline-flex items-center gap-1 text-xl font-bold tabular-nums shrink-0" title="Goles">
                    <span>{matchAwayScore(match)}</span>
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-right">{match.away}</h3>
                    <p className="text-gray text-xs text-right">
                      {match.awayScorers ? match.awayScorers.join(", ") : ""}
                    </p>
                    <RedCardPlayersList names={match.awayRedCards} align="right" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <CapturePngButton
            captureRef={captureRef}
            filenamePrefix={`fecha-${result.id}`}
            label={`Descargar imagen PNG de ${result.name}`}
            title="Guardar esta fecha como imagen PNG (alta calidad)"
          />
        </div>
      </section>
    </li>
  );
}

const TournamentDates: React.FC<TournamentDatesProps> = ({ tournaments }) => {
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

  const results = useMemo(() => {
    const bundle = tournaments[tournamentId] ?? tournaments.current;
    return bundle.results;
  }, [tournamentId, tournaments]);

  return (
    <main className="flex flex-col gap-6 pb-6">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
        {results.map((result) => (
          <FechaCard key={result.id} result={result} />
        ))}
      </ul>
    </main>
  );
};

export default TournamentDates;
