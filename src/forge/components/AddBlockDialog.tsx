import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// types
import BlockDataType from "../../types/BlockDataType";

// material ui components
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// components
import StyledDialog from "../../shared/components/UIElements/StyledDialog";
import StyledButton from "../../shared/components/UIElements/StyledButton";
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
    const handleSelectedBlockCatChange = (event: SelectChangeEvent) => {
        setSelectedBlockCat(event.target.value as string);
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
                    <FormControl fullWidth>
                        <InputLabel id="block-cat-select-label">
                            Block Category
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={selectedBlockCat}
                            label="Block Category"
                            onChange={handleSelectedBlockCatChange}
                            sx={{ minWidth: "200px" }}>
                            {availableBlockCatsToAdd.map((blockCat, index) => {
                                // displaying the options
                                return (
                                    <MenuItem value={blockCat} key={index}>
                                        {blockCat}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
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
