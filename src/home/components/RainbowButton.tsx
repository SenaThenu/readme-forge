import { useTheme } from "@mui/material";

// styles
import "./RainbowButton.scss";

interface RainbowButtonProps {
    text: string;
}

export default function RainbowButton({ text }: RainbowButtonProps) {
    const theme = useTheme();
    return (
        <button
            className={`rainbow-btn ${theme.palette.mode}`}
            style={{ color: theme.palette.text.primary }}>
            {text}
        </button>
    );
}
