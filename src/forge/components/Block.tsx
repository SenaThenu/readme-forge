import Card, { CardProps } from "@mui/material/Card";
import CardContent, { CardContentProps } from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

// components
import StyledTooltip from "../../shared/components/UIElements/StyledTooltip";

interface BlockProps extends CardProps {
    blockDescription: string;
}

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
    width: "100%",
    borderRadius: "25px",
    cursor: "pointer",
    boxShadow: "none",
    backgroundColor: theme.palette.secondary.main,
}));

const StyledCardContent = styled(CardContent)<CardContentProps>(() => ({
    fontSize: "1rem",
    fontWeight: 400,
    textAlign: "left",
    padding: "5px 10px !important",
}));

export default function Block(props: BlockProps) {
    return (
        <StyledTooltip title={props.blockDescription}>
            <StyledCard onClick={props.onClick}>
                <StyledCardContent>{props.children}</StyledCardContent>
            </StyledCard>
        </StyledTooltip>
    );
}
