import { useCallback, useState } from "react";
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
import FeedbackSnackbar from "../../shared/components/UIElements/FeedbackSnackbar";

interface UsedBlocksProps {
    usedBlocksList: BlockDataType[];
    activeBlockId: string | null;
    onBlockOrderChanged: (newBlockOrder: BlockDataType[]) => void;
    onBlockSelected: (selectedBlockId: string) => void;
    onAddBlock: (newBlock: BlockDataType) => void;
    updateMarkdown: (newMarkdown: string) => void;
}

interface UndoActionType {
    blockId: string;
    action: "restore" | "replace";
    block: BlockDataType;
}

export default function UsedBlocks({
    usedBlocksList,
    activeBlockId,
    onBlockOrderChanged,
    onBlockSelected,
    onAddBlock,
    updateMarkdown,
}: UsedBlocksProps) {
    const [undoAction, setUndoAction] = useState<UndoActionType | null>(null);

    // snackbar states
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("Action Done!");
    const [snackbarSeverity, setSnackbarSeverity] = useState<
        "success" | "error" | "warning" | "info"
    >("success");
    const [snackbarUndoVisible, setSnackbarUndoVisible] = useState(true);

    // dnd sensors
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

    const performUndo = useCallback(() => {
        if (undoAction) {
            if (undoAction.action === "replace") {
                let updatedBlockList = usedBlocksList.map((block) =>
                    block.id === undoAction.blockId
                        ? { ...undoAction.block }
                        : { ...block }
                );
                updateMarkdown(undoAction.block.markdown);
                onBlockOrderChanged(updatedBlockList);
            } else {
                onAddBlock(undoAction.block);
            }
            setUndoAction(null);
        }
    }, [undoAction]);

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

    // block related actions
    const deleteBlock = (blockId: string) => {
        // setting up the undo action
        let toDeleteBlock = usedBlocksList.find(
            (block) => block.id === blockId
        );
        if (toDeleteBlock) {
            setUndoAction({
                action: "restore",
                block: toDeleteBlock,
                blockId: blockId,
            });
        }

        // performing the action
        onBlockOrderChanged(
            usedBlocksList.filter((block) => block.id !== blockId)
        );

        // displaying the snackbar
        setSnackbarMessage("Block Deleted!");
        setSnackbarSeverity("warning");
        setSnackbarUndoVisible(true);
        openSnackbar();
    };
    const duplicateBlock = (blockId: string) => {
        const blockIndex = usedBlocksList.findIndex(
            (block) => block.id === blockId
        );
        if (blockIndex >= 0) {
            const focusedBlock = usedBlocksList[blockIndex];
            const duplicatedBlock = { ...focusedBlock, id: uuidv4() };

            // adding the duplicated block right after the focused block
            const updatedBlocks = [
                ...usedBlocksList.slice(0, blockIndex + 1),
                duplicatedBlock,
                ...usedBlocksList.slice(blockIndex + 1),
            ];

            onBlockOrderChanged(updatedBlocks);

            // displaying the snackbar
            setSnackbarMessage("Block Duplicated!");
            setSnackbarSeverity("success");
            setSnackbarUndoVisible(false);
            openSnackbar();
        }
    };
    const renameBlock = (blockId: string, newBlockName: string) => {
        // setting up the undo action
        let toRenameBlock = usedBlocksList.find(
            (block) => block.id === blockId
        );
        if (toRenameBlock) {
            setUndoAction({
                action: "replace",
                block: toRenameBlock,
                blockId: blockId,
            });
        }

        // performing the action
        let updatedBlockList = usedBlocksList.map((block) =>
            block.id === blockId
                ? { ...block, displayName: newBlockName }
                : { ...block }
        );
        onBlockOrderChanged(updatedBlockList);

        // displaying the snackbar
        setSnackbarMessage(`Block Renamed To ${newBlockName}!`);
        setSnackbarSeverity("success");
        setSnackbarUndoVisible(true);
        openSnackbar();
    };
    const resetBlock = (blockId: string) => {
        // setting up the undo action
        let toResetBlock = usedBlocksList.find((block) => block.id === blockId);
        if (toResetBlock) {
            setUndoAction({
                action: "replace",
                block: toResetBlock,
                blockId: blockId,
            });
        }

        // performing the action
        let updatedBlockList = usedBlocksList.map((block) =>
            block.id === blockId
                ? { ...block, markdown: block.originalMarkdown as string }
                : { ...block }
        );
        updateMarkdown(
            updatedBlockList.find((block) => block.id === blockId)!.markdown
        );
        onBlockOrderChanged(updatedBlockList);

        // displaying the snackbar
        setSnackbarMessage("Block Reset!");
        setSnackbarSeverity("warning");
        setSnackbarUndoVisible(true);
        openSnackbar();
    };

    return (
        <>
            <FeedbackSnackbar
                open={snackbarOpen}
                message={snackbarMessage}
                setOpen={setSnackbarOpen}
                severity={snackbarSeverity}
                includeUndo={snackbarUndoVisible}
                onUndo={performUndo}
            />
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
                                    displayName={block.displayName}
                                    activatedBlock={block.id === activeBlockId}
                                    onBlockSelected={onBlockSelected}
                                    onDelete={deleteBlock}
                                    onDuplicate={duplicateBlock}
                                    onRename={renameBlock}
                                    onReset={resetBlock}
                                    resettable={
                                        block.originalMarkdown !== null
                                    }>
                                    {block.displayName}
                                </SortableBlock>
                            );
                        } else {
                            console.error(
                                `${block.displayName} id is not found!`
                            );
                            return <></>;
                        }
                    })}
                </SortableContext>
            </DndContext>
        </>
    );
}
