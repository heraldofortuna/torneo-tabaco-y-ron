import fcPalaoCityLogo from "../assets/teams/fc-palao-city.png";
import losAlaracosLogo from "../assets/teams/los-alaracos-fc.png";
import penaIndependienteLogo from "../assets/teams/pena-independiente-76.png";
import santaCarolinaLogo from "../assets/teams/santa-carolina-fc.png";

export type TeamLogoMap = Record<string, string>;

function logoSrc(asset: string | { src: string }): string {
  return typeof asset === "string" ? asset : asset.src;
}

/** Escudos embebidos en el build (siempre disponibles aunque falte teamLogos en el torneo) */
export const SHARED_TEAM_LOGOS: TeamLogoMap = {
  "Los Alaracos FC": logoSrc(losAlaracosLogo),
  "Santa Carolina FC": logoSrc(santaCarolinaLogo),
  "Peña Independiente 76": logoSrc(penaIndependienteLogo),
  "FC. Palao City": logoSrc(fcPalaoCityLogo),
};

export function mergeTeamLogos(overrides?: TeamLogoMap): TeamLogoMap {
  return { ...SHARED_TEAM_LOGOS, ...overrides };
}
