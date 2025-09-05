const primary = {
  main: "#385C89",
  light: `#6E7191`,
  dark: "#2E285C",
  lighter: "#6E7191",
};

const secondary = {
  main: "#9E9E9E",
  dark: "#1E0A52",
};

const text = {
  primary: "#2F2F2F",
  secondary: "#292929",
};

const success = {
  light: "#EEF9F3",
  main: "#7FEAB8",
  dark: "#4DBC87",
};

const error = {
  main: "#FF4C35",
};

const warning = {
  main: "#F4C553",
  dark: "#E59940",
  light: "#FDF6EC",
};

const info = {
  main: "#60C1FF",
  dark: "#4C93F3",
  light: "#EFF8FF",
};

const grey = {
  0: "#adafca",
  500: "#667085",
  600: "#ADAEBA",
};

const divider = "#999999";

const action = {
  disabledBackground: "#CCCCCC",
  disabled: "#CCCCCC",
};

const background = {
  default: "#FFFFFF",
};

const common = {
  white: "#ffffff",
  black: "#000000",
  text_gray: "#7A7782",
  bg_grey: "#F7F8FA",
  lightest_purple: "#CFD4FA",
  light_orange: "#ECAE49",
  light_green: "#56C590",
  tinted_white: "#FDFCFE",
  card_bg_purple: "#FAF8FF",
  textfield_grey: "#F4F4F4",
  periwinkle_tint: "#C4C8EE",
  text_underline: "#FBE7A1",
  light_background: "#f9f9fd",
  bg_brown: "#FDF9F4",
  lightest_gray_border: "#D9D9D9",
  light_pink: "#FFC3BB",
  light_blue: "##C9DEFD",
  light_yellow: "#FEECA0",
  lightest_pink: "#FABFDD",
  rose_gold: "#FCD9C5",
  link: "#6B21F3",
  bg_dark: "#272835",
  bg_dull: "#2E2E3E",
};

export const palette = {
  common,
  primary,
  secondary,
  success,
  error,
  warning,
  info,
  text,
  grey,
  divider,
  action,
  background,
};

declare module "@mui/material/styles" {
  interface CommonColors {
    border_disabled?: string;
    border?: string;
    text_gray?: string;
    bg_grey?: string;
    lightest_purple?: string;
    light_orange?: string;
    light_green?: string;
    tinted_white?: string;
    periwinkle_tint?: string;
    text_underline?: string;
    light_background?: string;
    bg_brown?: string;
    light_pink?: string;
    light_blue?: string;
    light_yellow?: string;
    lightest_pink?: string;
    rose_gold?: string;
    link?: string;
    bg_dark?: string;
    bg_dull?: string;
  }
}
