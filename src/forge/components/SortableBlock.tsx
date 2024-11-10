import { ReactNode, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// material ui components
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

// material ui icons
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

// components
import Block from "./Block";

// styles
import "./SortableBlock.scss";

interface SortableBlockProps {
    id: string;
    onBlockSelected: (selectedBlockId: string) => void;
    activatedBlock: boolean;
    children: ReactNode;
}

export default function SortableBlock(props: SortableBlockProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: props.id,
    });

    const handleBlockMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleBlockMenuClose = () => {
        setAnchorEl(null);
    };

    // block menu button click handlers
    const handleRenameClick = () => {
        handleBlockMenuClose();
    };
    const handleDuplicateClick = () => {
        handleBlockMenuClose();
    };
    const handleResetClick = () => {
        handleBlockMenuClose();
    };
    const handleDeleteClick = () => {
        handleBlockMenuClose();
    };

    const style = {
        opacity: isDragging ? 0.5 : undefined,
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            className={`sortable-block-container ${
                props.activatedBlock && "is-active"
            }`}>
            <div {...listeners} className="drag-handle-container">
                <Block>
                    <DragIndicatorRoundedIcon />
                </Block>
            </div>
            <Block
                onClick={(e) => {
                    e.preventDefault();
                    props.onBlockSelected(props.id);
                }}>
                {props.children}
                {props.activatedBlock && (
                    <>
                        <div
                            id="toggle-block-menu-btn"
                            aria-controls={open ? "block-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleBlockMenuOpen}>
                            <MoreHorizRoundedIcon />
                        </div>
                        <Menu
                            id="block-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleBlockMenuClose}
                            MenuListProps={{
                                "aria-labelledby": "toggle-block-menu-btn",
                            }}>
                            <MenuItem onClick={handleRenameClick}>
                                <ListItemIcon>
                                    <DriveFileRenameOutlineRoundedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Rename</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleDuplicateClick}>
                                <ListItemIcon>
                                    <ContentCopyRoundedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Duplicate</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleResetClick}>
                                <ListItemIcon>
                                    <RotateLeftRoundedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Reset</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleDeleteClick}>
                                <ListItemIcon>
                                    <DeleteRoundedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Delete</ListItemText>
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </Block>
        </div>
    );
}
