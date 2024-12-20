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
import FeedbackSnackbar from "../../shared/components/UIElements/FeedbackSnackbar";

// utils
import toKebabCase from "../../shared/utils/toKebabCase";
import fetchAllBlockCatNames from "../../shared/utils/fetchAllBlockCatNames";

interface AddBlockDialogProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
    usedBlockCats: string[];
    onAddBlockCat: (blockCatName: string) => void;
    onAddBlock: (newBlock: BlockDataType) => void;
}

export default function AddBlockDialog(props: AddBlockDialogProps) {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("Success!");

    const [customBlockDialogOpen, setCustomBlockDialogOpen] = useState(false);
    const [customBlockName, setCustomBlockName] = useState("");

    const [addBlockCatDialogOpen, setAddBlockCatDialogOpen] = useState(false);
    const [selectedBlockCat, setSelectedBlockCat] = useState("");
    const [allAvailableBlockCats, setAllAvailableBlockCats] = useState<
        Record<string, string>
    >({});

    // clear up states on mount
    useEffect(() => {
        setCustomBlockName("");
        setSelectedBlockCat("");
    }, [props.open]);

    // fetch all available block cats
    useEffect(() => {
        const initAvailableAllBlockCatNames = async () => {
            const blockCatNamesDict = await fetchAllBlockCatNames();
            if (blockCatNamesDict) {
                setAllAvailableBlockCats(blockCatNamesDict);
            }
        };

        initAvailableAllBlockCatNames();
    }, []);

    const availableBlockCatsToAdd = useMemo(() => {
        return Object.keys(allAvailableBlockCats).filter(
            // filtering non-used block cats
            (blockCat) => blockCat && !props.usedBlockCats.includes(blockCat)
        );
    }, [allAvailableBlockCats, props.usedBlockCats]);

    const availableBlockCatsDisplayNames = useMemo(() => {
        return availableBlockCatsToAdd.map(
            (blockName) => allAvailableBlockCats[blockName]
        );
    }, [availableBlockCatsToAdd]);

    const handleClose = () => {
        props.setOpen(false);
    };

    const openSnackbar = () => {
        if (snackbarOpen) {
            setSnackbarOpen(false);
            setTimeout(() => {
                setSnackbarOpen(true);
            }, 100);
        } else {
            setSnackbarOpen(true);
        }
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
            setSnackbarMessage(`${customBlockName} Block Created`);
            openSnackbar();
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
            setSnackbarMessage(
                `${allAvailableBlockCats[selectedBlockCat]} Block Category Added`
            );
            openSnackbar();
        }
        closeAddBlockCatDialog();
        handleClose();
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

            {/* feedback snackbar */}
            <FeedbackSnackbar
                open={snackbarOpen}
                message={snackbarMessage}
                setOpen={setSnackbarOpen}
                severity="success"
            />

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
                        menuItemValues={availableBlockCatsToAdd}
                        menuItemsDisplayNames={availableBlockCatsDisplayNames}
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
