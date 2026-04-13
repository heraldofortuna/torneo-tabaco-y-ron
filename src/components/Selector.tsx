import { useEffect, useState } from "react";
import {
  TOURNAMENT_CHANGE_EVENT,
  TOURNAMENT_OPTIONS,
  TOURNAMENT_STORAGE_KEY,
} from "../constants/tournaments";
import type { TournamentOption } from "../types/data";

interface SelectorProps {
  options?: TournamentOption[];
  className?: string;
}

function readStoredId(): string {
  if (typeof window === "undefined") return "current";
  const raw = localStorage.getItem(TOURNAMENT_STORAGE_KEY);
  const valid = TOURNAMENT_OPTIONS.some((o) => o.id === raw);
  return valid && raw ? raw : "current";
}

const Selector: React.FC<SelectorProps> = ({
  options = TOURNAMENT_OPTIONS,
  className = "",
}) => {
  const [value, setValue] = useState("current");

  useEffect(() => {
    setValue(readStoredId());
  }, []);

  useEffect(() => {
    const onExternal = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (options.some((o) => o.id === id)) setValue(id);
    };
    window.addEventListener(TOURNAMENT_CHANGE_EVENT, onExternal as EventListener);
    return () =>
      window.removeEventListener(TOURNAMENT_CHANGE_EVENT, onExternal as EventListener);
  }, [options]);

  const onSelect = (id: string) => {
    setValue(id);
    localStorage.setItem(TOURNAMENT_STORAGE_KEY, id);
    window.dispatchEvent(new CustomEvent(TOURNAMENT_CHANGE_EVENT, { detail: id }));
  };

  return (
    <label
      className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300 w-full max-w-xs mx-auto ${className}`}
    >
      <select
        className="w-full sm:flex-1 rounded-md border border-white/15 bg-dark-light px-3 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-[#A9DFD8]/60"
        value={value}
        onChange={(e) => onSelect(e.target.value)}
        aria-label="Seleccionar torneo"
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Selector;
