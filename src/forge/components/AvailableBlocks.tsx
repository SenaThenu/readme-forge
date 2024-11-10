import { useEffect, useState, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

// types
import BlockCategoryType from "../../types/BlockCategoryType";
import BlockDataType from "../../types/BlockDataType";

// components
import Block from "./Block";

// utils
import fetchBlockCatData from "../../shared/utils/fetchBlockCatData";
import calcMinEditDistance from "../../shared/utils/calcMinEditDistance";

// styles
import "./AvailableBlocks.scss";

interface AvailableBlocksProps {
    blockCategories: string[]; // the names of the block categories available in the template
    onAddBlock: (newBlock: BlockDataType) => void;
    searchQuery: string;
}

export default function AvailableBlocks(props: AvailableBlocksProps) {
    const [blockCategories, setBlockCategories] = useState<BlockCategoryType[]>(
        []
    );

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
                return distanceA - distanceB; // ascending order
            }
        },
        [props.searchQuery]
    );

    const createBlockClickHandler = useCallback(
        (block: BlockDataType) => (e: React.MouseEvent) => {
            e.preventDefault();
            props.onAddBlock({ ...block, id: uuidv4() });
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

    return processedCategories.map((category) => (
        <div
            className="block-category-container"
            key={`${category.name}-${uuidv4()}`}>
            <div className="block-category-name">{category.displayName}</div>

            {category.filteredBlocks.map((block, index) => (
                <Block
                    blockDescription={block.description}
                    key={index}
                    onClick={createBlockClickHandler(block)}>
                    {block.displayName}
                </Block>
            ))}
        </div>
    ));
}
