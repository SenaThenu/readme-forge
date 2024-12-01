import { Link } from "react-router-dom";

// components
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
            <Link to="/">
                <div
                    className="nav-logo"
                    style={{
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? alpha(theme.palette.primary.main, 0.6)
                                : alpha(theme.palette.accent.main, 0.5),
                        color: theme.palette.text.primary,
                        padding: props.includeTitle ? "1px 20px" : "5px",
                    }}>
                    <img
                        src={logo}
                        alt="The logo of Readme Forge"
                        draggable={false}
                    />
                    {props.includeTitle && <h1>Readme Forge</h1>}
                </div>
            </Link>
        </div>
    );
}
