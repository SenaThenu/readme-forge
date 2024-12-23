import { useEffect, useState, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

// types
import BlockCategoryType from "../../types/BlockCategoryType";
import BlockDataType from "../../types/BlockDataType";

// material icons
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

// components
import Block from "./Block";
import StyledButton from "../../shared/components/UIElements/StyledButton";
import FeedbackSnackbar from "../../shared/components/UIElements/FeedbackSnackbar";
import TextualDivider from "../../shared/components/UIElements/TextualDivider";

// utils
import fetchBlockCatData from "../../shared/utils/fetchBlockCatData";
import calcMinEditDistance from "../../shared/utils/calcMinEditDistance";

// styles
import "./AvailableBlocks.scss";

interface AvailableBlocksProps {
    blockCategories: string[]; // the names of the block categories available in the template
    onAddBlock: (newBlock: BlockDataType) => void;
    searchQuery: string;
    onRemoveBlockCat: (blockCatName: string) => void;
    onAddBlockCat: (blockCatName: string) => void;
}

export default function AvailableBlocks(props: AvailableBlocksProps) {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("Category removed!");
    const [removeBlockCatName, setRemoveBlockCatName] = useState<string | null>(
        null
    );
    const [blockCategories, setBlockCategories] = useState<BlockCategoryType[]>(
        []
    );

    // fetching the different block categories and sorting them alphabetically
    const fetchAndOrderCats = useCallback(async () => {
        try {
            const loadedCategories = await Promise.all(
                props.blockCategories.map(async (blockCatName) => {
                    try {
                        return await fetchBlockCatData(blockCatName);
                    } catch (error) {
                        console.error(
                            `Error loading block category ${blockCatName}:`,
                            error
                        );
                        return null;
                    }
                })
            );

            const validCategories = loadedCategories
                .filter((cat): cat is BlockCategoryType => cat !== null)
                .sort((a, b) => a.name.localeCompare(b.name));

            setBlockCategories(validCategories);
        } catch (error) {
            console.error("Error loading categories:", error);
        }
    }, [props.blockCategories]);

    useEffect(() => {
        fetchAndOrderCats();
    }, [fetchAndOrderCats]);

    // sorting blocks based on the search query
    const sortBlocks = useCallback(
        (a: BlockDataType, b: BlockDataType) => {
            if (props.searchQuery === "") {
                return a.name.localeCompare(b.name);
            } else {
                const distanceA = calcMinEditDistance(
                    props.searchQuery,
                    a.displayName
                );
                const distanceB = calcMinEditDistance(
                    props.searchQuery,
                    a.displayName
                );
                return distanceA - distanceB; // ascending order of edit distance
            }
        },
        [props.searchQuery]
    );

    const createBlockClickHandler = useCallback(
        (block: BlockDataType) => (e: React.MouseEvent) => {
            e.preventDefault();
            props.onAddBlock({
                ...block,
                id: uuidv4(),
                originalMarkdown: block.markdown,
            });
        },
        [props.onAddBlock]
    );

    const processedCategories = useMemo(() => {
        return blockCategories.map((category) => ({
            ...category,
            filteredBlocks: category.blocks
                .filter(
                    (block) =>
                        !props.searchQuery ||
                        calcMinEditDistance(
                            props.searchQuery,
                            block.displayName
                        ) <=
                            Math.abs(
                                block.displayName.length -
                                    props.searchQuery.length
                            )
                )
                .sort(sortBlocks),
        }));
    }, [blockCategories, props.searchQuery, sortBlocks]);

    const searchResultsAreEmpty = useMemo(() => {
        return processedCategories.every(
            (category) => category.filteredBlocks.length === 0
        );
    }, [processedCategories]);

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

    return (
        <>
            <FeedbackSnackbar
                open={snackbarOpen}
                message={snackbarMessage}
                setOpen={setSnackbarOpen}
                severity="warning"
                includeUndo
                onUndo={() => {
                    if (removeBlockCatName) {
                        props.onAddBlockCat(removeBlockCatName);
                    }
                }}
            />
            {searchResultsAreEmpty ? (
                <TextualDivider text="No Block is Found!" />
            ) : (
                processedCategories.map((category) => (
                    <div
                        className="block-category-container"
                        key={`${category.name}-${uuidv4()}`}>
                        {category.filteredBlocks.length > 0 && (
                            <>
                                <div className="block-category-name">
                                    {category.displayName}
                                    <StyledButton
                                        onClick={() => {
                                            props.onRemoveBlockCat(
                                                category.name
                                            );
                                            setSnackbarMessage(
                                                `Removed ${category.displayName} Block Category!`
                                            );
                                            openSnackbar();
                                            setRemoveBlockCatName(
                                                category.name
                                            );
                                        }}
                                        startIcon={<CancelRoundedIcon />}
                                        blurBg
                                        sx={{
                                            minWidth: "28px",
                                            height: "28px",
                                        }}
                                    />
                                </div>

                                {category.filteredBlocks.map((block, index) => (
                                    <Block
                                        blockDescription={block.description}
                                        key={index}
                                        onClick={createBlockClickHandler(
                                            block
                                        )}>
                                        {block.displayName}
                                    </Block>
                                ))}
                            </>
                        )}
                    </div>
                ))
            )}
        </>
    );
}
