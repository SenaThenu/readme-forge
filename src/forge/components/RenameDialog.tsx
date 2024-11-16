// material ui components
import StyledButton from "../../shared/components/UIElements/StyledButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import { useTheme } from "@mui/material/styles";

// components
import StyledTextField from "../../shared/components/UIElements/StyledTextField";

// styles
import "./RenameDialog.scss";

interface RenameDialogProps {
    renameInput: string;
    onRenameInputChange: (newName: string) => void;
    open: boolean;
    handleClose: () => void;
    onSubmit: () => void;
}

export default function RenameDialog(props: RenameDialogProps) {
    const theme = useTheme(); // get current theme

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            PaperProps={{
                component: "form",
                onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    props.onSubmit();
                },
            }}
            sx={{
                ".MuiDialog-paper": {
                    backgroundColor:
                        theme.palette.mode === "dark"
                            ? "rgba(0, 0, 0, 0.5)"
                            : "rgba(255, 255, 255, 0.7)",
                },
            }}>
            <DialogTitle>Rename</DialogTitle>
            <DialogContent>
                <StyledTextField
                    id="rename-field"
                    placeholder="Enter a new name"
                    value={props.renameInput}
                    onChange={(e) => props.onRenameInputChange(e.target.value)}
                    startIcon={<DriveFileRenameOutlineRoundedIcon />}
                />
            </DialogContent>
            <DialogActions>
                <StyledButton onClick={props.handleClose}>Cancel</StyledButton>
                <StyledButton onClick={props.onSubmit}>Rename</StyledButton>
            </DialogActions>
        </Dialog>
    );
}
