import Button, { ButtonProps } from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";

function getCustomButton(iconOnly: boolean) {
    return styled(Button)<ButtonProps>(({ theme }) => ({
        padding: iconOnly ? 0 : undefined,
        height: "45px",
        minWidth: iconOnly ? "45px" : undefined,
        borderRadius: "25px",
        boxShadow: "none !important",
        textTransform: "none",
        fontSize: "1rem",
        backgroundColor:
            theme.palette.mode === "dark"
                ? alpha(theme.palette.primary.main, 0.8)
                : alpha(theme.palette.accent.main, 0.7),
        backdropFilter: "blur(5px)", // glass effect
        color: theme.palette.text.primary,
        "& .MuiButton-startIcon": {
            margin: iconOnly ? 0 : undefined,
            marginRight: iconOnly ? 0 : "5px",
        },
    }));
}

export default function StyledButton(props: ButtonProps) {
    const CustomButton = getCustomButton(props.children == null);
    return <CustomButton {...props} />;
}
