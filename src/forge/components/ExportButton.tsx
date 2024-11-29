import { useState } from "react";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

// material ui components
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

// material ui icons
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

// components
import StyledButton from "../../shared/components/UIElements/StyledButton";
import StyledMenu from "../../shared/components/UIElements/StyledMenu";
import CongratsDialog from "./CongratsDialog";

interface ExportButtonProps {
    onExportAsJson: () => void;
    onExportAsMarkdown: () => void;
    includeText?: boolean;
}

export default function ExportButton(props: ExportButtonProps) {
    const [congratsDialogOpen, setCongratsDialogOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleExportMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleExportMenuClose = () => {
        setAnchorEl(null);
    };

    const handleCongratsDialogOpen = () => {
        setCongratsDialogOpen(true);
    };

    // export options handlers
    const handleExportMarkdown = () => {
        handleCongratsDialogOpen();
        // props.onExportAsMarkdown();
        handleExportMenuClose();
    };

    const handleExportJson = () => {
        props.onExportAsJson();
        handleExportMenuClose();
    };

    return (
        <>
            {/* export menu */}
            <StyledMenu
                id="export-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleExportMenuClose}
                MenuListProps={{
                    "aria-labelledby": "toggle-export-menu-btn",
                }}
                container={document.body}>
                <MenuItem onClick={handleExportMarkdown}>
                    <ListItemIcon>
                        <DescriptionRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Export as Markdown</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleExportJson}>
                    <ListItemIcon>
                        <DataObjectRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Export as Template</ListItemText>
                </MenuItem>
            </StyledMenu>

            {/* congrats dialog */}
            <CongratsDialog
                open={congratsDialogOpen}
                setOpen={(isOpen) => setCongratsDialogOpen(isOpen)}
            />
            <StyledButton
                id="toggle-export-menu-btn"
                onClick={handleExportMenuOpen}
                aria-controls={open ? "export-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                startIcon={<FileDownloadRoundedIcon />}>
                {props.includeText && "Export"}
            </StyledButton>
        </>
    );
}
