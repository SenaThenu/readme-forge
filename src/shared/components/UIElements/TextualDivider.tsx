// material ui
import { useTheme } from "@mui/material/styles";

// styles
import "./TextualDivider.scss";

interface TextualDividerProps {
    text?: string;
    className?: string;
}

export default function TextualDivider({
    text,
    className = "",
}: TextualDividerProps) {
    const theme = useTheme();

    // Get the text color from the theme
    const lineColor = theme.palette.text.primary;

    const containerStyle = {
        "--line-color": lineColor,
    } as React.CSSProperties;

    if (!text) {
        return (
            <hr
                className={`textual-divider ${className}`}
                style={containerStyle}
            />
        );
    }

    return (
        <div
            className={`textual-divider-container ${className}`}
            style={containerStyle}>
            <div className="textual-divider-line" />
            <span className="textual-divider-text">{text}</span>
            <div className="textual-divider-line" />
        </div>
    );
}
