// material ui components
import StyledButton from "../../shared/components/UIElements/StyledButton";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";

// components
import StyledTextField from "../../shared/components/UIElements/StyledTextField";
import StyledDialog from "../../shared/components/UIElements/StyledDialog";

interface TextFieldDialogProps {
    dialogTitle: string;
    textFieldPlaceHolder: string;
    textInput: string;
    submitBtnName: string;
    onTextInputChange: (newName: string) => void;
    open: boolean;
    handleClose: () => void;
    onSubmit: () => void;
}

export default function TextFieldDialog(props: TextFieldDialogProps) {
    return (
        <StyledDialog
            open={props.open}
            onClose={props.handleClose}
            PaperProps={{
                component: "form",
                onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    props.onSubmit();
                },
            }}>
            <DialogTitle>{props.dialogTitle}</DialogTitle>
            <DialogContent>
                <StyledTextField
                    placeholder={props.textFieldPlaceHolder}
                    value={props.textInput}
                    onChange={(e) => props.onTextInputChange(e.target.value)}
                    startIcon={<DriveFileRenameOutlineRoundedIcon />}
                />
            </DialogContent>
            <DialogActions>
                <StyledButton onClick={props.handleClose}>Cancel</StyledButton>
                <StyledButton
                    onClick={props.onSubmit}
                    disabled={props.textInput === ""}>
                    {props.submitBtnName}
                </StyledButton>
            </DialogActions>
        </StyledDialog>
    );
}
