import { useEffect, useState } from "react";

// types
import BlockCategoryType from "../../types/BlockCategoryType";
import BlockDataType from "../../types/BlockDataType";

// components
import Block from "./Block";

// styles
import "./AvailableBlocks.scss";

interface AvailableBlocksProps {
    blockCategories: string[]; // the names of the block categories available in the template
}

export default function AvailableBlocks(props: AvailableBlocksProps) {
    const [blockCategories, setBlockCategories] = useState<BlockCategoryType[]>(
        []
    );

    useEffect(() => {
        const fetchBlockCatData = async () => {
            const loadedCategories: BlockCategoryType[] = [];

            for (let blockCatName of props.blockCategories) {
                try {
                    const jsonData = await import(
                        `../../data/md-blocks/${blockCatName}.json`
                    );

                    loadedCategories.push(
                        jsonData.default as BlockCategoryType
                    );
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

        fetchBlockCatData();
    }, [props.blockCategories]);

    return blockCategories.map((category, index) => (
        <div className="block-category-container" key={index}>
            <div className="block-category-name">{category.displayName}</div>

            {category.blocks
                .sort((a: BlockDataType, b: BlockDataType) =>
                    a.name.localeCompare(b.name)
                )
                .map((block, index) => (
                    <Block blockDescription={block.description} key={index}>
                        {block.displayName}
                    </Block>
                ))}
        </div>
    ));
}
