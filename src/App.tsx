import { useColorScheme } from "@mui/material";

// components
import StyledButton from "./shared/components/UIElements/StyledButton";

export default function App() {
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
        <div id="app">
            <div className="nav-bar">
                <StyledButton variant="contained" onClick={themeToggler}>
                    Toggle Theme
                </StyledButton>
            </div>
            <div className="forge-area">
                <div className="left-pane">
                    <div className="selected-components"></div>
                    <div className="available-components"></div>
                </div>
                <div className="component-form"></div>
                <div className="markdown-preview"></div>
            </div>
        </div>
    );
}
