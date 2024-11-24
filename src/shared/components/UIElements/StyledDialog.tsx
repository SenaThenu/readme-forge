import { ReactElement, forwardRef } from "react";

// material ui components
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import { TransitionProps } from "@mui/material/transitions";

const SlideTransition = forwardRef(function SlideTransition(
    props: TransitionProps & { children: ReactElement },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
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
