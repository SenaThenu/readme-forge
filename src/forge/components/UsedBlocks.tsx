import { useCallback } from "react";
import {
    DragEndEvent,
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

// types
import BlockDataType from "../../types/BlockDataType";

// components
import SortableBlock from "./SortableBlock";

interface UsedBlocksProps {
    usedBlocksList: BlockDataType[];
    activeBlockId: string | null;
    onBlockOrderChanged: (newBlockOrder: BlockDataType[]) => void;
    onBlockSelected: (selectedBlockId: string) => void;
}

export default function UsedBlocks({
    usedBlocksList,
    activeBlockId,
    onBlockOrderChanged,
    onBlockSelected,
}: UsedBlocksProps) {
    const sensors = useSensors(
        useSensor(TouchSensor),
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

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
            modifiers={[restrictToVerticalAxis]}
            sensors={sensors}>
            <SortableContext
                items={usedBlocksList}
                strategy={verticalListSortingStrategy}>
                {usedBlocksList.map((block) => (
                    <SortableBlock
                        key={block.id}
                        id={block.id}
                        activatedBlock={block.id === activeBlockId}
                        onBlockSelected={onBlockSelected}>
                        {block.displayName}
                    </SortableBlock>
                ))}
            </SortableContext>
        </DndContext>
    );
}
