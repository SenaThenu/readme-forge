import BlockDataType from "./BlockDataType";

interface TemplateDataType {
    name: string;
    displayName: string;
    usedBlocks: BlockDataType[];
    availableBlockCategories: string[];
}

export default TemplateDataType