// material ui components
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Slide, { SlideProps } from "@mui/material/Slide";
import { styled } from "@mui/material/styles";

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}

const CustomDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
    ".MuiDialog-paper": {
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.7)",
        margin: 0,
        borderRadius: "15px",
        boxShadow: "none",
        backdropFilter: "blur(5px)",
    },
}));

export default function StyledDialog(props: DialogProps) {
    return <CustomDialog {...props} TransitionComponent={SlideTransition} />;
}
