// types
import TemplateDataType from "../../types/TemplateDataType";

export default async function fetchTemplateData(templateName: string) {
    let templateData: TemplateDataType | null = null;

    try {
        const jsonData = await import(
            `../../data/md-templates/${templateName}.json`
        );

        templateData = jsonData.default as TemplateDataType;
    } catch (error) {
        console.error("Error loading JSON file:", error);
    }

    return templateData;
}