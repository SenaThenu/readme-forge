// types
import GlobalDataType from "../../types/GlobalDataType";

// material ui components
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

// components
import StyledDialog from "../../shared/components/UIElements/StyledDialog";
import StyledButton from "../../shared/components/UIElements/StyledButton";
import GlobalsGrid from "./GlobalsGrid";

interface GlobalsDialogProps {
    open: boolean;
    globalsList: GlobalDataType[];
    onGlobalsListChange: (newList: GlobalDataType[]) => void;
    setOpen: (isOpen: boolean) => void;
}

export default function GlobalsDialog(props: GlobalsDialogProps) {
    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <StyledDialog open={props.open} onClose={handleClose}>
            <DialogContent>
                <GlobalsGrid
                    initialRows={props.globalsList}
                    onRowsUpdate={props.onGlobalsListChange}
                />
            </DialogContent>
            <DialogActions>
                <StyledButton onClick={handleClose}>Done</StyledButton>
            </DialogActions>
        </StyledDialog>
    );
}
