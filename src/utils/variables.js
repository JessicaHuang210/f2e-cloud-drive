export const primaryColor = "#FFD46E";

// bg
export const sidebarBgColor = "#2F3136";

// text
export const btnTextColor = "#25272C";
export const linkTextColor = "#F3F2EF";

// trandition
export const transitionNormal = ".2s";
export const transitionSlow = ".5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

//font size
export const fsNormal = "1.4rem";

// rwd
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
  unMobileS: `(max-width: ${size.mobileS})`,
  unMobileM: `(max-width: ${size.mobileM})`,
  unMobileL: `(max-width: ${size.mobileL})`,
  unTablet: `(max-width: ${size.tablet})`,
  unLaptop: `(max-width: ${size.laptop})`
};

// layout
export const sidebarWidth = "22rem";
