import BlockDataType from "./BlockDataType";
import GlobalDataType from "./GlobalDataType";

interface TemplateDataType {
    displayName: string;
    usedBlocks: BlockDataType[];
    availableBlockCategories: string[];
    globals: GlobalDataType[]
    description?: string;
}

export default TemplateDataType