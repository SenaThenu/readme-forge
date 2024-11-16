import { ReactNode } from "react";
import {
    ThemeProvider,
    createTheme,
    useColorScheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// configuring the color palette type to add a custom "accent" color
declare module "@mui/material/styles" {
    interface Palette {
        accent: Palette["primary"];
    }
    interface PaletteOptions {
        accent?: PaletteOptions["primary"];
    }
}

const theme = createTheme({
    colorSchemes: {
        dark: {
            palette: {
                text: {
                    primary: "#e0f4ff",
                    secondary: "#000304",
                },
                background: {
                    default: "#041020",
                },
                primary: {
                    main: "#0d3f77",
                },
                secondary: {
                    main: "#233f53",
                },
                accent: {
                    main: "#35b7fd",
                    light: "#b5e5ff",
                    dark: "#2389d7",
                    contrastText: "#e2f5ff",
                },
            },
        },
        light: {
            palette: {
                text: {
                    primary: "#000304",
                    secondary: "#e0f4ff",
                },
                background: {
                    default: "#dfebfb",
                },
                primary: {
                    main: "#04448e",
                },
                secondary: {
                    main: "#9ec1d9",
                },
                accent: {
                    main: "#49a8db",
                    light: "#69c2e5",
                    dark: "#3b88b9",
                    contrastText: "#2b5782",
                },
            },
        },
    },
    typography: {
        fontFamily: '"Space Grotesk", sans-serif',
    },
});

const cache = createCache({
    key: "css",
    prepend: true,
});

interface ThemeWrapperProps {
    children?: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
    const { mode } = useColorScheme();

    return (
        <ThemeProvider theme={theme} defaultMode={mode ?? "dark"}>
            <StyledEngineProvider injectFirst>
                <CacheProvider value={cache}>
                    <CssBaseline />
                    {children}
                </CacheProvider>
            </StyledEngineProvider>
        </ThemeProvider>
    );
}
