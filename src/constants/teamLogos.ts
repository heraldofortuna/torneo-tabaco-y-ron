import santaCarolinaLogo from "../assets/teams/santa-carolina-fc.png";

export type TeamLogoMap = Record<string, string>;

/** Escudos embebidos en el build (siempre disponibles aunque falte teamLogos en el torneo) */
export const SHARED_TEAM_LOGOS: TeamLogoMap = {
  "Santa Carolina FC":
    typeof santaCarolinaLogo === "string" ? santaCarolinaLogo : santaCarolinaLogo.src,
};

export function mergeTeamLogos(overrides?: TeamLogoMap): TeamLogoMap {
  return { ...SHARED_TEAM_LOGOS, ...overrides };
}
