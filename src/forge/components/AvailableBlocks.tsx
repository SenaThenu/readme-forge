import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// types
import BlockCategoryType from "../../types/BlockCategoryType";
import BlockDataType from "../../types/BlockDataType";

// components
import Block from "./Block";

// utils
import fetchBlockCatData from "../../shared/utils/fetchBlockCatData";

// styles
import "./AvailableBlocks.scss";

interface AvailableBlocksProps {
    blockCategories: string[]; // the names of the block categories available in the template
    onAddBlock: (newBlock: BlockDataType) => void;
}

export default function AvailableBlocks(props: AvailableBlocksProps) {
    const [blockCategories, setBlockCategories] = useState<BlockCategoryType[]>(
        []
    );

    useEffect(() => {
        const fetchAndOrderCats = async () => {
            const loadedCategories: BlockCategoryType[] = [];

            for (let blockCatName of props.blockCategories) {
                try {
                    const blockCatData = await fetchBlockCatData(blockCatName);

                    if (blockCatData !== null) {
                        loadedCategories.push(blockCatData);
                    }
                } catch (error) {
                    console.error("Error loading JSON file:", error);
                }
            }

            // sorting based on the name of the category
            loadedCategories.sort(
                (a: BlockCategoryType, b: BlockCategoryType) =>
                    a.name.localeCompare(b.name)
            );

            setBlockCategories(loadedCategories);
        };

        fetchAndOrderCats();
    }, [props.blockCategories]);

    return blockCategories.map((category, index) => (
        <div className="block-category-container" key={index}>
            <div className="block-category-name">{category.displayName}</div>

            {category.blocks
                .sort((a: BlockDataType, b: BlockDataType) =>
                    a.name.localeCompare(b.name)
                )
                .map((block, index) => (
                    <Block
                        blockDescription={block.description}
                        key={index}
                        onClick={(e) => {
                            e.preventDefault();
                            const newBlock = { ...block, id: uuidv4() }; // duplicate the block
                            props.onAddBlock(newBlock);
                        }}>
                        {block.displayName}
                    </Block>
                ))}
        </div>
    ));
}
