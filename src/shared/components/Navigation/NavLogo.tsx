import { Link } from "react-router-dom";
import { motion } from "motion/react";

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
    const variants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
        focus: { scale: 1.05 },
        tap: { scale: 0.9 },
    };

    return (
        <motion.div
            className="nav-logo-container"
            variants={variants}
            initial="initial"
            whileHover="hover"
            whileFocus="focus"
            whileTap="tap"
            transition={{
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500,
            }}>
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
        </motion.div>
    );
}
