import { createContext, useContext, useReducer } from "react";
import { AppProvider } from "../components";
import { baseTheme, dark, light } from "../components/_base/themes";

const ThemeContext = createContext(null);

const defaultTheme = { ...baseTheme, ...light };

// Reducer for swappign themes
const themeReducer = (_, action) => {
  switch (action.type) {
    case "light":
      return defaultTheme;
    case "dark":
      return { ...theme, ...dark };
    default:
      throw new Error();
  }
};

function MyApp({ Component, pageProps }) {
  const [theme, themeDispatcher] = useReducer(themeReducer, defaultTheme);

  return (
    <ThemeContext.Provider value={{ themeDispatcher }}>
      <AppProvider theme={theme}>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
