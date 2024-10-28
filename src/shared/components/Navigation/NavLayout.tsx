import { useState, ReactNode } from "react";

// material ui components
import { useTheme } from "@mui/material/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";

// components
import ToggleTheme from "./ToggleTheme";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import StyledButton from "../UIElements/StyledButton";
import ExportButton from "../../../forge/components/ExportButton";

// styles
import "./NavLayout.scss";

interface NavLayoutProps {
    navBarMode: "default" | "forge";
    currentNavLinkText?: string;
    navLinks?: { text: string; link: string }[];
    drawerComponents?: ReactNode;
    mobileWidthBreakpoint?: number;
}

export default function NavLayout(props: NavLayoutProps) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(
        `(max-width:${props.mobileWidthBreakpoint || 600}px)`
    );

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    const toggleDrawerButton = (
        <StyledButton
            onClick={handleDrawerToggle}
            aria-label="Toggle Drawer"
            startIcon={<MenuRoundedIcon />}
            variant="contained"
        />
    );

    const drawerElement = (
        <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
                "& .MuiDrawer-paper": {
                    minWidth: "200px",
                    backgroundColor: theme.palette.background.default,
                    padding: "15px 20px",
                },
            }}>
            <>
                <div className="drawer-title-container">
                    {toggleDrawerButton}
                    <NavLogo />
                </div>
                {props.drawerComponents ? (
                    props.drawerComponents
                ) : (
                    <NavLinks
                        linksLayout="vertical"
                        navLinksList={props.navLinks}
                        currentLinkText={props.currentNavLinkText}
                    />
                )}
            </>
        </Drawer>
    );

    const menuButton = (
        <>
            {isMobile && (
                <>
                    {toggleDrawerButton}
                    {drawerElement}
                </>
            )}
        </>
    );

    const getNavBar = () => {
        if (props.navBarMode === "forge") {
            return (
                <>
                    <div className="left-end-controls-container">
                        {menuButton}
                        <ToggleTheme />
                    </div>
                    {isMobile ? (
                        <div className="right-end-controls-container">
                            <NavLogo />
                            <ExportButton />
                        </div>
                    ) : (
                        <>
                            <NavLogo includeTitle />
                            <ExportButton includeText />
                        </>
                    )}
                </>
            );
        } else {
            return (
                <>
                    {menuButton}
                    <NavLogo />
                    {!isMobile && (
                        <NavLinks
                            linksLayout="horizontal"
                            navLinksList={props.navLinks}
                            currentLinkText={props.currentNavLinkText}
                        />
                    )}
                    <ToggleTheme />
                </>
            );
        }
    };

    return <nav className="nav-bar">{getNavBar()}</nav>;
}