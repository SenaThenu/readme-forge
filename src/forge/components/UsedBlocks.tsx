import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
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

    // block related actions
    const findBlockById = (id: string) => {
        return usedBlocksList.find((block) => block.id === id);
    };
    const deleteBlock = (blockId: string) => {
        onBlockOrderChanged(
            usedBlocksList.filter((block) => block.id !== blockId)
        );
    };
    const duplicateBlock = (blockId: string) => {
        let focusedBlock = findBlockById(blockId);
        if (focusedBlock) {
            const duplicatedBlock = { ...focusedBlock, id: uuidv4() };
            onBlockOrderChanged([...usedBlocksList, duplicatedBlock]);
        }
    };
    const renameBlock = (blockId: string, newBlockName: string) => {
        let updatedBlockList = usedBlocksList.map((block) =>
            block.id === blockId
                ? { ...block, displayName: newBlockName }
                : { ...block }
        );
        onBlockOrderChanged(updatedBlockList);
    };
    const resetBlock = (blockId: string) => {
        let updatedBlockList = usedBlocksList.map((block) =>
            block.id === blockId
                ? { ...block, originalMarkdown: block.markdown }
                : { ...block }
        );
        onBlockOrderChanged(updatedBlockList);
    };

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
            sensors={sensors}>
            <SortableContext
                items={usedBlocksList
                    .map((block) => block.id)
                    .filter((id) => id !== undefined)}
                strategy={verticalListSortingStrategy}>
                {usedBlocksList.map((block) => {
                    if (block.id) {
                        return (
                            <SortableBlock
                                key={block.id}
                                id={block.id}
                                activatedBlock={block.id === activeBlockId}
                                onBlockSelected={onBlockSelected}
                                onDelete={deleteBlock}
                                onDuplicate={duplicateBlock}
                                onRename={renameBlock}
                                onReset={resetBlock}>
                                {block.displayName}
                            </SortableBlock>
                        );
                    } else {
                        console.error(`${block.displayName} id is not found!`);
                        return <></>;
                    }
                })}
            </SortableContext>
        </DndContext>
    );
}
