import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// types
import BlockDataType from "../../types/BlockDataType";

// material ui components
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// components
import StyledDialog from "../../shared/components/UIElements/StyledDialog";
import StyledButton from "../../shared/components/UIElements/StyledButton";
import Block from "./Block";
import TextualDivider from "../../shared/components/UIElements/TextualDivider";
import TextFieldDialog from "./TextFieldDialog";

// utils
import toKebabCase from "../../shared/utils/toKebabCase";

interface AddBlockDialogProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
    onAddBlock: (newBlock: BlockDataType) => void;
}

export default function AddBlockDialog(props: AddBlockDialogProps) {
    const [customBlockDialogOpen, setCustomBlockDialogOpen] = useState(false);
    const [customBlockName, setCustomBlockName] = useState("");

    // clear up states on mount
    useEffect(() => {
        setCustomBlockName("");
    }, [props.open]);

    const handleClose = () => {
        props.setOpen(false);
    };

    // child dialog handlers
    const closeCustomBlockDialog = () => {
        setCustomBlockDialogOpen(false);
    };
    const onCustomBlockDialogSubmit = () => {
        if (customBlockName !== "") {
            props.onAddBlock({
                id: uuidv4(),
                name: toKebabCase(customBlockName),
                displayName: customBlockName,
                markdown: `## ${customBlockName}\n\n`,
                description: `A custom block named ${customBlockName}`,
            });
            closeCustomBlockDialog();
            handleClose();
        }
    };

    return (
        <>
            <TextFieldDialog
                dialogTitle="Create Block"
                handleClose={closeCustomBlockDialog}
                onSubmit={onCustomBlockDialogSubmit}
                open={customBlockDialogOpen}
                submitBtnName="Create"
                textFieldPlaceHolder="Enter a block name..."
                textInput={customBlockName}
                onTextInputChange={setCustomBlockName}
            />
            <StyledDialog open={props.open} onClose={handleClose}>
                <DialogContent>
                    <Block onClick={() => {}}>Add Built-In Blocks</Block>
                    <TextualDivider text="OR" />
                    <Block
                        onClick={() => {
                            setCustomBlockDialogOpen(true);
                        }}>
                        Create a Custom Block
                    </Block>
                </DialogContent>
                <DialogActions>
                    <StyledButton onClick={handleClose}>Cancel</StyledButton>
                </DialogActions>
            </StyledDialog>
        </>
    );
}
