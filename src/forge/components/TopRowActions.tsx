import { useState } from "react";

// types
import GlobalDataType from "../../types/GlobalDataType";

// material ui components
import { useTheme } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

// components
import StyledDialog from "../../shared/components/UIElements/StyledDialog";
import StyledButton from "../../shared/components/UIElements/StyledButton";
import Block from "./Block";
import GlobalsDialog from "./GlobalsDialog";

// styles
import "./TopRowActions.scss";

interface TopRowActionsProps {
    onReset: () => void;
    globalsList: GlobalDataType[];
    onGlobalsListChange: (newList: GlobalDataType[]) => void;
}

export default function TopRowActions(props: TopRowActionsProps) {
    const [globalsDialogOpen, setGlobalsDialogOpen] = useState(false);
    const [resetDialogOpen, setResetDialogOpen] = useState(false);

    const theme = useTheme();

    const handleResetDialogClose = () => {
        setResetDialogOpen(false);
    };

    return (
        <>
            <div className="top-row-actions">
                <Block blockDescription="Repo" className="top-row-action">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <title>github_fill</title>
                        <g id="github_fill" fill="none">
                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                            <path
                                fill={theme.palette.text.primary}
                                d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032.4.444.5 1.188.571 1.756.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276-.712-.302-1.208-.77-1.581-1.218-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088.48.62.87 1.43 1.63 1.753.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581 9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719.59-.653 1.584-.268 2.28-.031Z"
                            />
                        </g>
                    </svg>
                </Block>
                <Block blockDescription="Sponsor" className="top-row-action">
                    <FavoriteRoundedIcon />
                </Block>
                <Block
                    onClick={() => {
                        setResetDialogOpen(true);
                    }}
                    blockDescription="Reset"
                    className="top-row-action">
                    <RotateLeftRoundedIcon />
                </Block>
                <Block
                    onClick={() => {
                        setGlobalsDialogOpen(true);
                    }}
                    blockDescription="Globals"
                    className="top-row-action">
                    <PublicRoundedIcon />
                </Block>
            </div>

            {/* globals dialog */}
            <GlobalsDialog
                open={globalsDialogOpen}
                setOpen={setGlobalsDialogOpen}
                globalsList={props.globalsList}
                onGlobalsListChange={props.onGlobalsListChange}
            />

            <StyledDialog open={resetDialogOpen}>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogActions>
                    <StyledButton onClick={handleResetDialogClose}>
                        Cancel
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            props.onReset();
                            handleResetDialogClose();
                        }}>
                        Reset
                    </StyledButton>
                </DialogActions>
            </StyledDialog>
        </>
    );
}
