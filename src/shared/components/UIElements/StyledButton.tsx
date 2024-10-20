import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function getCustomButton(iconOnly: boolean) {
    return styled(Button)<ButtonProps>(({ theme }) => ({
        padding: iconOnly ? 0 : undefined,
        height: "45px",
        minWidth: iconOnly ? "45px" : undefined,
        borderRadius: "25px",
        boxShadow: "none !important",
        textTransform: "none",
        fontSize: "1rem",
        color:
            theme.palette.mode === "dark"
                ? theme.palette.text.primary // Dark theme color
                : theme.palette.text.secondary, // Light theme color
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
