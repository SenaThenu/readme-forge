// material ui components
import Menu, { MenuProps } from "@mui/material/Menu";
import { styled } from "@mui/material/styles";

const CustomMenu = styled(Menu)<MenuProps>(({ theme }) => ({
    ".MuiPaper-root": {
        borderRadius: "15px",
        boxShadow: "none",
        background:
            theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(10px)",
        fontSize: "5rem",
    },
}));

export default function StyledMenu(props: MenuProps) {
    return <CustomMenu {...props} />;
}
