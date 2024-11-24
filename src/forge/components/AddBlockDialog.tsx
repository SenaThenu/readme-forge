import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// types
import BlockDataType from "../../types/BlockDataType";

// material ui components
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

// components
import StyledDialog from "../../shared/components/UIElements/StyledDialog";
import StyledButton from "../../shared/components/UIElements/StyledButton";
import StyledSelect from "../../shared/components/UIElements/StyledSelect";
import Block from "./Block";
import TextualDivider from "../../shared/components/UIElements/TextualDivider";
import TextFieldDialog from "./TextFieldDialog";

// utils
import toKebabCase from "../../shared/utils/toKebabCase";
import getAllBlockCats from "../../shared/utils/getAllBlockCats";

interface AddBlockDialogProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
    usedBlockCats: string[];
    onAddBlockCat: (blockCatName: string) => void;
    onAddBlock: (newBlock: BlockDataType) => void;
}

export default function AddBlockDialog(props: AddBlockDialogProps) {
    const [customBlockDialogOpen, setCustomBlockDialogOpen] = useState(false);
    const [customBlockName, setCustomBlockName] = useState("");

    const [addBlockCatDialogOpen, setAddBlockCatDialogOpen] = useState(false);
    const [selectedBlockCat, setSelectedBlockCat] = useState("");

    // clear up states on mount
    useEffect(() => {
        setCustomBlockName("");
        setSelectedBlockCat("");
    }, [props.open]);

    const allAvailableBlockCats = useMemo(() => {
        return getAllBlockCats();
    }, []);
    const availableBlockCatsToAdd = useMemo(() => {
        return allAvailableBlockCats.filter(
            // filtering non-used block cats
            (blockCat) => blockCat && !props.usedBlockCats.includes(blockCat)
        );
    }, [props.usedBlockCats]);

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

    const closeAddBlockCatDialog = () => {
        setAddBlockCatDialogOpen(false);
    };
    const handleSelectedBlockCatChange = (blockCat: string) => {
        setSelectedBlockCat(blockCat);
    };
    const handleAddBlockCatSubmit = () => {
        if (selectedBlockCat !== "") {
            props.onAddBlockCat(selectedBlockCat);
        }
        closeAddBlockCatDialog();
    };

    return (
        <>
            {/* main dialog */}
            <StyledDialog open={props.open} onClose={handleClose}>
                <DialogContent>
                    {availableBlockCatsToAdd.length > 0 && (
                        <>
                            <Block
                                onClick={() => {
                                    setAddBlockCatDialogOpen(true);
                                }}>
                                Add Built-In Blocks
                            </Block>
                            <TextualDivider text="OR" />
                        </>
                    )}
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

            {/* add custom block dialog */}
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

            {/* add built-in block cat dialog */}
            <StyledDialog
                open={addBlockCatDialogOpen}
                onClose={closeAddBlockCatDialog}>
                <DialogContent>
                    <StyledSelect
                        label="Select Block Category"
                        menuItems={availableBlockCatsToAdd as string[]}
                        selectedValue={selectedBlockCat}
                        onSelectChange={handleSelectedBlockCatChange}
                    />
                </DialogContent>
                <DialogActions>
                    <StyledButton onClick={closeAddBlockCatDialog}>
                        Cancel
                    </StyledButton>
                    <StyledButton
                        onClick={handleAddBlockCatSubmit}
                        disabled={selectedBlockCat === ""}>
                        Add
                    </StyledButton>
                </DialogActions>
            </StyledDialog>
        </>
    );
}
