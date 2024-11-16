import Button, { ButtonProps } from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";

function getCustomButton(iconOnly: boolean) {
    return styled(Button)<ButtonProps>(({ theme }) => ({
        padding: iconOnly ? 0 : undefined,
        height: "50px",
        minWidth: iconOnly ? "50px" : undefined,
        borderRadius: "50px",
        boxShadow: "none !important",
        textTransform: "none",
        transition: "none",
        fontSize: "1rem",
        backgroundColor:
            theme.palette.mode === "dark"
                ? alpha(theme.palette.primary.main, 0.6)
                : alpha(theme.palette.accent.main, 0.5),
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
