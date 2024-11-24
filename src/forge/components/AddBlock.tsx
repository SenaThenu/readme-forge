// material ui components
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

// components
import Block from "./Block";
import StyledDialog from "../../shared/components/UIElements/StyledDialog";

// styles
import "./AddBlock.scss";

export default function AddBlock() {
    return (
        <Block className="add-block">
            <AddCircleRoundedIcon />
            Add
        </Block>
    );
}
