import { useMemo } from "react";

// material ui components
import Button, { ButtonProps } from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

interface StyledButtonProps extends ButtonProps {
    blurBg?: boolean;
}

function getButtonBg(theme: Theme, isBlurBg?: boolean) {
    if (isBlurBg) {
        if (theme.palette.mode === "dark") {
            return "rgba(255, 255, 255, 0.2)";
        } else {
            return "rgba(0, 0, 0, 0.1)";
        }
    } else {
        if (theme.palette.mode === "dark") {
            return alpha(theme.palette.primary.main, 0.6);
        } else {
            return alpha(theme.palette.accent.main, 0.5);
        }
    }
}

function getCustomButton(iconOnly: boolean, isBlurBg?: boolean) {
    return styled(Button)<ButtonProps>(({ theme }) => ({
        padding: iconOnly ? 0 : undefined,
        height: "50px",
        minWidth: iconOnly ? "50px" : undefined,
        borderRadius: "50px",
        boxShadow: "none !important",
        textTransform: "none",
        transition: "none",
        fontSize: "1rem",
        backgroundColor: getButtonBg(theme, isBlurBg),
        color: theme.palette.text.primary,
        "& .MuiButton-startIcon": {
            margin: iconOnly ? 0 : undefined,
            marginRight: iconOnly ? 0 : "5px",
        },
    }));
}

export default function StyledButton({ blurBg, ...props }: StyledButtonProps) {
    const CustomButton = useMemo(() => {
        return getCustomButton(props.children == null, blurBg);
    }, [props.children]);
    return (
        <CustomButton {...props} variant="contained" disableRipple={blurBg} />
    );
}
