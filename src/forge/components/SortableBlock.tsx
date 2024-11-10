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
    onBlockSelected: (selectedBlockId: string) => void;
    activatedBlock: boolean;
    children: ReactNode;
}

export default function SortableBlock(props: SortableBlockProps) {
    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: props.id,
    });

    const style = {
        opacity: isDragging ? 0.5 : undefined,
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            className={`sortable-block-container ${
                props.activatedBlock && "is-active"
            }`}>
            <div {...listeners} className="drag-handle-container">
                <Block>
                    <DragIndicatorRoundedIcon />
                </Block>
            </div>
            <Block
                onClick={(e) => {
                    e.preventDefault();
                    props.onBlockSelected(props.id);
                }}>
                {props.children}
            </Block>
        </div>
    );
}
