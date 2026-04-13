import { useEffect, useMemo, useState } from "react";
import {
  TOURNAMENT_CHANGE_EVENT,
  TOURNAMENT_OPTIONS,
  TOURNAMENT_STORAGE_KEY,
} from "../constants/tournaments";
import type { ResultsData } from "../types/data";

interface TournamentDatesProps {
  tournaments: Record<string, ResultsData>;
}

function readStoredId(): string {
  if (typeof window === "undefined") return "current";
  const raw = localStorage.getItem(TOURNAMENT_STORAGE_KEY);
  const valid = TOURNAMENT_OPTIONS.some((o) => o.id === raw);
  return valid && raw ? raw : "current";
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

  const results = useMemo(
    () => tournaments[tournamentId] ?? tournaments.current,
    [tournamentId, tournaments],
  );

  return (
    <main className="flex flex-col gap-6 pb-6">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
        {results.map((result) => (
          <li key={result.id} className="flex flex-col">
            <section className="bg-dark-light h-full flex flex-col gap-2 p-4 rounded-lg">
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
                    <div className="flex flex-1 justify-between items-center">
                      <div>
                        <h3 className="text-left">{match.home}</h3>
                        <p className="text-gray text-xs text-left">
                          {match.homeScorers ? match.homeScorers.join(", ") : ""}
                        </p>
                      </div>
                      <p className="text-xl font-bold">
                        {!match.homeScorers && !match.awayScorers
                          ? ""
                          : match.homeScorers
                            ? match.homeScorers.length
                            : "W.O"}
                      </p>
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                      <p className="text-xl">vs</p>
                    </div>
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-xl font-bold">
                        {!match.homeScorers && !match.awayScorers
                          ? ""
                          : match.awayScorers
                            ? match.awayScorers.length
                            : "W.O"}
                      </p>
                      <div>
                        <h3 className="text-right">{match.away}</h3>
                        <p className="text-gray text-xs text-right">
                          {match.awayScorers ? match.awayScorers.join(", ") : ""}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TournamentDates;
