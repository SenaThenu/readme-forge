import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius: "25px",
    boxShadow: "none !important",
    textTransform: "none",
    color:
        theme.palette.mode === "dark"
            ? theme.palette.text.primary // Dark theme color
            : theme.palette.text.secondary, // Light theme color
}));

export default function StyledButton(props: ButtonProps) {
    return <CustomButton {...props} />;
}
