import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
const storageKey = "portfolio-theme";
const ThemeContext = createContext({ isDarkMode: false, toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return window.localStorage.getItem(storageKey) === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => current === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{
      isDarkMode: theme === "dark",
      toggleTheme,
    }}>
      <div className="portfolio-root" data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
