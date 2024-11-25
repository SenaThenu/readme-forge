import BlockDataType from "./BlockDataType";

interface TemplateDataType {
    displayName: string;
    usedBlocks: BlockDataType[];
    availableBlockCategories: string[];
}

export default TemplateDataType