import { ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "../theme";
import usePersistedState from "../hooks/UsePersistedState";
import { createContext, ReactNode, useCallback, useContext, useMemo } from "react";

interface IAppThemeContextData {
    themeName: 'dark' | 'light';
    toggleTheme: () => void;
}

export const AppThemeContext = createContext({} as IAppThemeContextData);

export const useAppThemeContext = () => {
    return useContext(AppThemeContext);
}

interface IAppThemeProviderProps {
    children: ReactNode
}

export const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
    const [themeName, setThemeName] = usePersistedState<"dark" | "light">("theme", "light");

    const toggleTheme = useCallback(() => {
        setThemeName((prev) => prev === 'dark' ? 'light' : 'dark');
    }, [])

    const theme = useMemo(() => {

        switch (themeName) {
            case "dark":
                return DarkTheme;

            case "light":
                return LightTheme;

            default:
                return LightTheme;
        }

    }, [themeName]);

    return (
        <AppThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}