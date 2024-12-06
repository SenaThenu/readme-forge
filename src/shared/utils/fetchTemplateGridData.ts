// types
import TemplateGridDataType from "../../types/TemplateGridDataType";

// utils
import fetchTemplateData from "./fetchTemplateData";

export default async function fetchTemplateGridData() {
    try {
        // import all block category JSON files
        const templateFiles = import.meta.glob('../../data/md-templates/*.json');

        // extract filenames without extensions
        const templateFilenames = Object.keys(templateFiles).map((path) => {
            const filename = path.split('/').pop()?.replace(".json", "");
            if (!filename) throw new Error(`Invalid path: ${path}`);
            return filename;
        });

        // fetch display names for each filename
        const templateGridDataPromises = templateFilenames.map(async (filename) => {
                const templateData = await fetchTemplateData(filename);
                if (templateData !== null) {
                    return {displayName: templateData?.displayName, route: filename, description: templateData?.description} as TemplateGridDataType;
                } else {
                    return null
                }
       });

        // resolve all display name promises
        const templateGridData = await Promise.all(templateGridDataPromises);

        return templateGridData.filter(template => template !== null);
    } catch (error) {
        throw new Error(`Error reading block category files: ${(error as Error).message}`);
    }
}
