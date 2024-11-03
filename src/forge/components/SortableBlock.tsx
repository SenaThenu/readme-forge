import { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// material ui components
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";

// components
import Block from "./Block";

// styles
import "./SortableBlock.scss";

interface SortableBlockProps {
    id: string;
    blockDescription: string;
    children: ReactNode;
}

export default function SortableBlock(props: SortableBlockProps) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            className="sortable-block-container">
            <div {...listeners} className="drag-handle-container">
                <Block>
                    <DragIndicatorRoundedIcon />
                </Block>
            </div>
            <Block blockDescription={props.blockDescription}>
                {props.children}
            </Block>
        </div>
    );
}
