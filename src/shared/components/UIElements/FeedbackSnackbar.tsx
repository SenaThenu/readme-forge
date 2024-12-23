// material ui components
import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Slide, { SlideProps } from "@mui/material/Slide";

interface FeedbackSnackbarProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
    message: string;
    severity: "success" | "error" | "info" | "warning";
    includeUndo?: boolean;
    onUndo?: () => void;
}

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}

export default function FeedbackSnackbar(props: FeedbackSnackbarProps) {
    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason
    ) => {
        if (reason === "clickaway") {
            return;
        }

        props.setOpen(false);
    };

    const handleUndo = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason
    ) => {
        if (props.onUndo) {
            props.onUndo();
        }
        handleClose(event, reason);
    };

    const action = (
        <>
            {props.includeUndo && (
                <Button
                    color="inherit"
                    sx={{ transition: "none", borderRadius: "25px" }}
                    size="small"
                    onClick={handleUndo}>
                    UNDO
                </Button>
            )}
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}>
                <CloseRoundedIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <Snackbar
            open={props.open}
            autoHideDuration={5000}
            onClose={handleClose}
            TransitionComponent={SlideTransition}
            sx={{ borderRadius: "25px" }}>
            <Alert
                onClose={handleClose}
                severity={props.severity}
                variant="filled"
                sx={{
                    width: "100%",
                    borderRadius: "25px",
                    opacity: 0.95,
                }}
                action={action}>
                {props.message}
            </Alert>
        </Snackbar>
    );
}
