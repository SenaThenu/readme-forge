// material ui components
import Menu, { MenuProps } from "@mui/material/Menu";
import { styled } from "@mui/material/styles";

const CustomMenu = styled(Menu)<MenuProps>(() => ({
    ".MuiPaper-root": {
        borderRadius: "15px",
        boxShadow: "none",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        fontSize: "5rem",
    },
}));

export default function StyledMenu(props: MenuProps) {
    return <CustomMenu {...props} />;
}
