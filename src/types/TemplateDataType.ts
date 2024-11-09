import BlockDataType from "./BlockDataType";

interface TemplateDataType {
    name: string;
    displayTitle: string;
    usedBlocks: BlockDataType[];
    availableBlockCategories: string[];
}

export default TemplateDataType