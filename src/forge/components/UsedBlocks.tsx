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

export default function UsedBlocks({
    usedBlocksList,
    onBlockOrderChanged,
    onBlockSelected,
}: UsedBlocksProps) {
    const handleDragEnd = useCallback(
        (event: DragEndEvent) => {
            const { active, over } = event;
            if (active.id !== over?.id) {
                let blocksOrder = [...usedBlocksList];
                const oldIndex = blocksOrder.findIndex(
                    (block) => active.id === block.id
                );
                const newIndex = blocksOrder.findIndex(
                    (block) => over!.id === block.id
                );

                // Only update if the order has changed
                if (oldIndex !== newIndex) {
                    blocksOrder = arrayMove(blocksOrder, oldIndex, newIndex);
                    onBlockOrderChanged(blocksOrder);
                }
            }
        },
        [usedBlocksList, onBlockOrderChanged]
    );

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}>
            <SortableContext
                items={usedBlocksList.map((block) => block.id)}
                strategy={verticalListSortingStrategy}>
                {usedBlocksList.map((block) => (
                    <SortableBlock
                        key={block.id}
                        id={block.id}
                        blockDescription={block.description}
                        onBlockSelected={onBlockSelected}>
                        {block.displayName}
                    </SortableBlock>
                ))}
            </SortableContext>
        </DndContext>
    );
}
