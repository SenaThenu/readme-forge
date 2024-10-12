import Card, { CardProps } from "@mui/material/Card";
import CardContent, { CardContentProps } from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

export default function Block(props: CardProps) {
    const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
        width: "100%",
        borderRadius: "25px",
        cursor: "pointer",
        boxShadow: "none",
        backgroundColor: theme.palette.secondary.main,
    }));

    const StyledCardContent = styled(CardContent)<CardContentProps>(() => ({
        fontSize: "1.1rem",
        fontWeight: 500,
        textAlign: "left",
        padding: "5px 10px !important",
    }));

    return (
        <StyledCard onClick={props.onClick}>
            <StyledCardContent>{props.children}</StyledCardContent>
        </StyledCard>
    );
}
