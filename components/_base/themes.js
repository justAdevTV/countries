const baseTheme = {
  colors: {},
  shadows: {},
  devices: {
    max: "(max-width: 1440px)",
    large: "(max-width: 1300px)",
    medium: "(max-width: 900px)",
    small: "(max-width: 510px)",
    smallest: "(max-width: 375px)",
  },
};

const light = {
  colors: {
    primary: "#ffffff",
    background: "#F2F2F2",
    text: "#111517",
  },
};

const dark = {
  colors: {
    primary: "#2B3844",
    background: "#202C36",
    text: "#ffffff",
  },
};

export { light, dark, baseTheme };
