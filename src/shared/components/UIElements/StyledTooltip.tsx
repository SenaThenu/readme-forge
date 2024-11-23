import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Zoom } from "@mui/material";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.primary.dark,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.primary.dark,
        fontSize: "0.75rem",
        borderRadius: "25px",
        color:
            theme.palette.mode === "dark"
                ? theme.palette.text.primary // Dark theme color
                : theme.palette.text.secondary, // Light theme color
    },
}));

export default function StyledTooltip(props: TooltipProps) {
    return <CustomTooltip {...props} TransitionComponent={Zoom} />;
}
