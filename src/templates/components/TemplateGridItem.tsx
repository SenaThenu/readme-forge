import { useState } from "react";
import { motion } from "motion/react";

import { useTheme } from "@mui/material/styles";

// styles
import "./TemplateGridItem.scss";

interface TemplateGridItemProps {
    templateName: string;
    templateDescription: string;
}

export default function TemplateGridItem(props: TemplateGridItemProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const theme = useTheme();

    const onClickHandle = () => {
        console.log("redirecting sir!");
    };

    return (
        <motion.div
            className="template-grid-item"
            onClick={onClickHandle}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}>
            <motion.div
                className="card"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.9,
                }}>
                <div
                    className="front"
                    style={{
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? theme.palette.primary.main
                                : theme.palette.accent.main,
                    }}>
                    {props.templateName}
                </div>
                <div
                    className="back"
                    style={{
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? theme.palette.primary.dark
                                : theme.palette.accent.light,
                    }}>
                    {props.templateDescription}
                </div>
            </motion.div>
        </motion.div>
    );
}
