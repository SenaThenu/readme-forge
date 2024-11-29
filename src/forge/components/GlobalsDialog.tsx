// types
import GlobalDataType from "../../types/GlobalDataType";

// material ui components
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

// components
import StyledDialog from "../../shared/components/UIElements/StyledDialog";
import StyledButton from "../../shared/components/UIElements/StyledButton";
import GlobalsGrid from "./GlobalsGrid";
import StyledTooltip from "../../shared/components/UIElements/StyledTooltip";

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
            <DialogTitle
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: "10px",
                }}>
                Globals
                <StyledTooltip title="{{global}} is replaced with the value">
                    <InfoRoundedIcon />
                </StyledTooltip>
            </DialogTitle>
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
