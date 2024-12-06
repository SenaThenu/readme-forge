import { motion } from "motion/react";
import { useTheme } from "@mui/material";

// styles
import "./RainbowButton.scss";

interface RainbowButtonProps {
    text: string;
}

export default function RainbowButton({ text }: RainbowButtonProps) {
    const theme = useTheme();

    const btnVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },
        focus: { scale: 1.05 },
        tap: { scale: 0.9 },
    };

    return (
        <motion.button
            className={`rainbow-btn ${theme.palette.mode}`}
            style={{ color: theme.palette.text.primary }}
            variants={btnVariants}
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
            {text}
        </motion.button>
    );
}
