import { MouseEventHandler } from "react";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

// components
import StyledButton from "../../shared/components/UIElements/StyledButton";

interface ExportButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function ExportButton(props: ExportButtonProps) {
    return (
        <StyledButton
            onClick={props.onClick}
            startIcon={<FileDownloadRoundedIcon />}
            variant="contained">
            Export
        </StyledButton>
    );
}
