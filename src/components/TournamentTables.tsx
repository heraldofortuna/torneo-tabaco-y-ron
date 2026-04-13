import { useEffect, useMemo, useState } from "react";
import getBestScorersData from "../adapters/getBestScorersData";
import getPositionsData from "../adapters/getPositionsData";
import getScorersData from "../adapters/getScorersData";
import {
  TOURNAMENT_CHANGE_EVENT,
  TOURNAMENT_OPTIONS,
  TOURNAMENT_STORAGE_KEY,
} from "../constants/tournaments";
import type { ResultsData } from "../types/data";
import Podium from "./Podium";
import Table from "./Table";

interface TournamentTablesProps {
  tournaments: Record<string, ResultsData>;
}

function readStoredId(): string {
  if (typeof window === "undefined") return "current";
  const raw = localStorage.getItem(TOURNAMENT_STORAGE_KEY);
  const valid = TOURNAMENT_OPTIONS.some((o) => o.id === raw);
  return valid && raw ? raw : "current";
}

const TournamentTables: React.FC<TournamentTablesProps> = ({ tournaments }) => {
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

  const results = tournaments[tournamentId] ?? tournaments.current;

  const positionsData = useMemo(() => getPositionsData(results), [results]);
  const scorersData = useMemo(() => getScorersData(results), [results]);
  const bestScorersData = useMemo(
    () => getBestScorersData(scorersData),
    [scorersData],
  );

  const allSanctions = useMemo(
    () =>
      results.flatMap((date) =>
        (date.sanctions ?? []).map((sanction) => ({
          ...sanction,
          dateName: date.name,
          date: date.date,
        })),
      ),
    [results],
  );

  const positionHeaders = [
    "Pos.",
    "Equipo",
    "J",
    "G",
    "P",
    "E",
    "GF",
    "GC",
    "DG",
    "Puntos",
  ];
  const scorerHeaders = ["Pos.", "Jugador", "Goles", "Equipo"];

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-6 pb-6">
      <section className="bg-dark-light flex-1 flex flex-col gap-4 p-4 rounded-lg">
        <h2 className="font-semibold">Tabla de posiciones</h2>
        <Table
          data={positionsData}
          headers={positionHeaders}
          highlightFirst
        />
        {allSanctions.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <h3 className="font-semibold text-sm mb-3 text-yellow-500">Sanciones</h3>
            <div className="space-y-2">
              {allSanctions.map((sanction, i) => (
                <div
                  key={`${sanction.team}-${sanction.dateName}-${i}`}
                  className="text-xs sm:text-sm text-gray-300"
                >
                  <span className="font-medium text-red-400">
                    {sanction.points} puntos a {sanction.team} en la fecha{" "}
                    {sanction.dateName} por {sanction.reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="bg-dark-light flex-1 flex flex-col gap-4 p-4 rounded-lg">
        <h2 className="font-semibold">Tabla de goleadores</h2>
        <Table
          data={scorersData}
          headers={scorerHeaders}
          highlightFirst
          maxRows={10}
        />
        <Podium winners={bestScorersData} />
      </section>
    </div>
  );
};

export default TournamentTables;
