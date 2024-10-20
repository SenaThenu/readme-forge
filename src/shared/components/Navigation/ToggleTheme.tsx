import { useColorScheme } from "@mui/material";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

// components
import StyledButton from "../UIElements/StyledButton";

export default function ToggleTheme() {
    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }

    const themeToggler = () => {
        if (mode == "dark") {
            setMode("light");
        } else {
            setMode("dark");
        }
    };

    return (
        <StyledButton
            onClick={themeToggler}
            aria-label="Toggle Theme"
            startIcon={
                mode == "dark" ? (
                    <DarkModeRoundedIcon />
                ) : (
                    <LightModeRoundedIcon />
                )
            }
            variant="contained"
        />
    );
}
