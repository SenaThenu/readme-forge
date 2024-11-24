import { useState } from "react";

// types
import BlockDataType from "../../types/BlockDataType";

// material ui components
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

// components
import Block from "./Block";
import AddBlockDialog from "./AddBlockDialog";

// styles
import "./AddBlock.scss";

interface AddBlockProps {
    onAddBlock: (newBlock: BlockDataType) => void;
}

export default function AddBlock(props: AddBlockProps) {
    const [addBlockDialogOpen, setAddBlockDialogOpen] = useState(false);

    return (
        <>
            <AddBlockDialog
                open={addBlockDialogOpen}
                setOpen={setAddBlockDialogOpen}
                onAddBlock={props.onAddBlock}
            />
            <Block
                className="add-block"
                onClick={() => {
                    setAddBlockDialogOpen(true);
                }}>
                <AddCircleOutlineRoundedIcon fontSize="small" />
                Add
            </Block>
        </>
    );
}
