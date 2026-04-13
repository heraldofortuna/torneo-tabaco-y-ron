import type { TournamentOption } from "../types/data";

export const TOURNAMENT_STORAGE_KEY = "tyr-tournament-id";

export const TOURNAMENT_CHANGE_EVENT = "tyr-tournament-change";

export const TOURNAMENT_OPTIONS: TournamentOption[] = [
  { id: "1", label: "Torneo Junio 2025" },
  { id: "2", label: "Torneo Agosto 2025" },
  { id: "3", label: "Torneo Octubre 2025" },
  { id: "current", label: "Torneo actual (2026)" },
];
