import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)<ButtonProps>(() => ({
    borderRadius: "25px",
}));

export default function StyledButton(props: ButtonProps) {
    return <CustomButton {...props} />;
}
