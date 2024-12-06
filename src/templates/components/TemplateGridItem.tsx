import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

// material ui components
import { useTheme } from "@mui/material/styles";

// styles
import "./TemplateGridItem.scss";

interface TemplateGridItemProps {
    templateName: string;
    templateRoute: string;
    templateDescription?: string;
}

export default function TemplateGridItem(props: TemplateGridItemProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();

    const onClickHandle = () => {
        if (props.templateRoute === "default") {
            navigate(`/forge/`);
        } else {
            navigate(`/forge/${props.templateRoute}`);
        }
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
                    {props.templateDescription || props.templateName}
                </div>
            </motion.div>
        </motion.div>
    );
}
