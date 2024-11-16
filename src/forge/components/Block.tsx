import Card, { CardProps } from "@mui/material/Card";
import CardContent, { CardContentProps } from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

// components
import StyledTooltip from "../../shared/components/UIElements/StyledTooltip";

interface BlockProps extends CardProps {
    blockDescription?: string;
}

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    minHeight: "45px",
    borderRadius: "15px",
    cursor: "pointer",
    boxShadow: "none",
    backgroundColor: theme.palette.secondary.main,
}));

const StyledCardContent = styled(CardContent)<CardContentProps>(() => ({
    fontSize: "1rem",
    fontWeight: 400,
    textAlign: "left",
    padding: "5px 10px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
}));

export default function Block(props: BlockProps) {
    const blockCard = (
        <StyledCard
            onClick={props.onClick}
            className={`block-card ${props.className}`}>
            <StyledCardContent className="block-card-content">
                {props.children}
            </StyledCardContent>
        </StyledCard>
    );

    return (
        <>
            {props.blockDescription ? (
                <StyledTooltip title={props.blockDescription}>
                    {blockCard}
                </StyledTooltip>
            ) : (
                blockCard
            )}
        </>
    );
}
