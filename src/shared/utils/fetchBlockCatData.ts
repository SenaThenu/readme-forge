// types
import BlockCategoryType from "../../types/BlockCategoryType";

export default async function fetchBlockCatData(blockCatName: string) {
    let blockCatData: BlockCategoryType | null = null; 

    try {
        const jsonData = await import(
            `../../data/md-blocks/${blockCatName}.json`
        );

        blockCatData = jsonData.default as BlockCategoryType
    } catch (error) {
        console.error("Error loading JSON file:", error);
    }

    return blockCatData;
}