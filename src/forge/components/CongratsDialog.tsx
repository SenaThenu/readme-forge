import { useState } from "react";

// material ui components
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import CoffeeRoundedIcon from "@mui/icons-material/CoffeeRounded";

// components
import StyledDialog from "../../shared/components/UIElements/StyledDialog";
import StyledButton from "../../shared/components/UIElements/StyledButton";
import Block from "./Block";
import ShareDialog from "./ShareDialog";

// styles
import "./CongratsDialog.scss";

// assets
import congratsImg from "../../assets/images/congrats/congrats.webp";

interface CongratsDialogProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
}

export default function CongratsDialog(props: CongratsDialogProps) {
    const [shareDialogOpen, setShareDialogOpen] = useState(false);
    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <>
            <ShareDialog open={shareDialogOpen} setOpen={setShareDialogOpen} />
            <StyledDialog open={props.open} onClose={handleClose}>
                <DialogContent className="congrats-dialog-content">
                    <img
                        src={congratsImg}
                        draggable={false}
                        alt="Congrats image - a readme document joyfully jumping in a shower of confetti"
                    />
                    <div className="congrats-title">Exported Successfully!</div>
                    <div className="congrats-para">
                        Thank you for using Readme Forge! If you find it useful,
                        you can support me :)
                    </div>
                    <div className="support-actions">
                        <Block
                            onClick={() => {
                                setShareDialogOpen(true);
                            }}>
                            <ShareRoundedIcon />
                            Share
                        </Block>
                        <Block>
                            <FavoriteRoundedIcon />
                            Sponsor
                        </Block>
                        <Block>
                            <CoffeeRoundedIcon />
                            Buy Me a Coffee
                        </Block>
                    </div>
                </DialogContent>
                <DialogActions>
                    <StyledButton onClick={handleClose}>Bravo!</StyledButton>
                </DialogActions>
            </StyledDialog>
        </>
    );
}
