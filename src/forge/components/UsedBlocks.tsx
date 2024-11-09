import { useCallback } from "react";
import { DragEndEvent, DndContext, closestCenter } from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

// types
import BlockDataType from "../../types/BlockDataType";

// components
import SortableBlock from "./SortableBlock";

interface UsedBlocksProps {
    usedBlocksList: BlockDataType[];
    onBlockOrderChanged: (newBlockOrder: BlockDataType[]) => void;
    onBlockSelected: (selectedBlockId: string) => void;
}

export default function UsedBlocks(props: UsedBlocksProps) {
    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            // rearranging the blocks order
            // if the block is moved away from its initial position
            let blocksOrder = [...props.usedBlocksList];

            const oldIndex = blocksOrder.findIndex(
                (block) => active.id === block.id
            );
            const newIndex = blocksOrder.findIndex(
                (block) => over!.id === block.id
            );

            blocksOrder = arrayMove(blocksOrder, oldIndex, newIndex);

            props.onBlockOrderChanged(blocksOrder);
        }
    }, []);

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}>
            <SortableContext
                items={props.usedBlocksList.map((block) => block.id)}
                strategy={verticalListSortingStrategy}>
                {props.usedBlocksList.map((block) => (
                    <SortableBlock
                        key={block.id}
                        id={block.id}
                        blockDescription={block.description}
                        onBlockSelected={props.onBlockSelected}>
                        {block.displayName}
                    </SortableBlock>
                ))}
            </SortableContext>
        </DndContext>
    );
}
