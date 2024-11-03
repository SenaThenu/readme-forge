import { useState, useEffect } from "react";
import { DragEndEvent, DndContext, closestCenter } from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { v4 as uuidv4 } from "uuid";

// types
import BlockDataType from "../../types/BlockDataType";

// components
import SortableBlock from "./SortableBlock";

interface UsedBlockDataType extends BlockDataType {
    id: string;
}
interface UsedBlocksProps {
    usedBlockNames: string[]; // names of the used blocks (in the format: category/name)
}

export default function UsedBlocks(props: UsedBlocksProps) {
    const [usedBlocksList, setUsedBlocksList] = useState<UsedBlockDataType[]>(
        []
    );
    useEffect(() => {
        const fetchBlockCatData = async () => {
            const loadedBlocks: UsedBlockDataType[] = [];

            for (let blockName of props.usedBlockNames) {
                const [category, name] = blockName.split("/");

                try {
                    const jsonData = await import(
                        `../../data/md-blocks/${category}.json`
                    );

                    const blockData = jsonData.default.blocks.find(
                        (block: BlockDataType) => block.name === name
                    ) as UsedBlockDataType;

                    blockData["id"] = uuidv4();

                    loadedBlocks.push(blockData);
                } catch (error) {
                    console.error("Error loading JSON file:", error);
                }
            }

            setUsedBlocksList(loadedBlocks);
        };

        fetchBlockCatData();
    }, [props.usedBlockNames]);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            setUsedBlocksList((blocksList) => {
                const oldIndex = blocksList.findIndex(
                    (block) => active.id === block.id
                );
                const newIndex = blocksList.findIndex(
                    (block) => over!.id === block.id
                );
                return arrayMove(blocksList, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}>
            <SortableContext
                items={usedBlocksList}
                strategy={verticalListSortingStrategy}>
                {usedBlocksList.map((block) => (
                    <SortableBlock
                        key={block.id}
                        id={block.id}
                        blockDescription={block.description}>
                        {block.displayName}
                    </SortableBlock>
                ))}
            </SortableContext>
        </DndContext>
    );
}
