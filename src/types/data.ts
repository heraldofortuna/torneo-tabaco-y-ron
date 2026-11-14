export type PlayersData = Player[];

export interface Player {
  id: number;
  name: string;
  team: string;
  photo: string;
  level?: number;
  /** Los dos jugadores de menor exigencia del equipo. */
  bajo?: boolean;
  captain?: boolean;
}

export type ResultsData = DayResults[];

/** Bajo que no asistió a una fecha. La 3.ª falta y las siguientes son −3 puntos. */
export interface Absence {
  player: string;
  team?: string;
}

export interface DayResults {
  id: number;
  name: string;
  date: string;
  mvp?: {
    name: string;
    image: string;
  };
  matches: Match[];
  sanctions?: Sanction[];
  absences?: Absence[];
}

export interface Sanction {
  team: string;
  points: number; // Normalmente -3
  reason: string; // Explicación de la sanción
}

export interface Match {
  home: string;
  away: string;
  homeScorers: string[] | null;
  awayScorers: string[] | null;
  /** Opcional: nombres de jugadores con tarjeta roja (equipo local) */
  homeRedCards?: string[] | null;
  /** Opcional: nombres de jugadores con tarjeta roja (equipo visitante) */
  awayRedCards?: string[] | null;
}

export interface PositionData {
  team: string;
  played: number;
  won: number;
  lost: number;
  drawn: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface ScorerData {
  name: string;
  goals: number;
  team: string;
}

export interface TournamentOption {
  id: string;
  label: string;
}