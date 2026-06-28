import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeCtx = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = localStorage.getItem("theme");

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggle: () => {
        setTheme((currentTheme) =>
          currentTheme === "dark" ? "light" : "dark",
        );
      },
    }),
    [theme],
  );

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeCtx);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/50 text-foreground transition hover:bg-accent"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}