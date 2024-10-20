import { useTheme, alpha } from "@mui/material/styles";

// logo
import logo from "../../../assets/logo.svg";

// styles
import "./NavLogo.scss";

interface NavLogoProps {
    includeTitle?: boolean;
}

export default function NavLogo(props: NavLogoProps) {
    const theme = useTheme();

    return (
        <div className="nav-logo-container">
            <a href="/">
                <div
                    className="nav-logo"
                    style={{
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? alpha(theme.palette.primary.main, 0.4)
                                : alpha(theme.palette.accent.main, 0.4),
                        color: theme.palette.text.primary,
                    }}>
                    <img
                        src={logo}
                        alt="The logo of Readme Forge"
                        draggable={false}
                    />
                    {props.includeTitle && <h1>Readme Forge</h1>}
                </div>
            </a>
        </div>
    );
}
