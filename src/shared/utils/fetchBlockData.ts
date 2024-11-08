import { v4 as uuidv4 } from "uuid";

// types
import BlockDataType from "../../types/BlockDataType";

export default async function fetchBlockData(blockPathName: string) {
    const [category, name] = blockPathName.split("/");

    let blockData: BlockDataType | null = null;

    try {
        const jsonData = await import(
            `../../data/md-blocks/${category}.json`
        );

        blockData = jsonData.default.blocks.find(
            (block: BlockDataType) => block.name === name
        ) as BlockDataType;

        if (!blockData["id"]) {
            // assigning an id if it doesn't have one
            blockData["id"] = uuidv4();
        }
    } catch (error) {
        console.error("Error loading JSON file:", error);
    }

    return blockData;
}