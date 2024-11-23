import TemplateDataType from "../../types/TemplateDataType";

export default function exportAsJson(templateData: TemplateDataType) {
    const jsonData = JSON.stringify(templateData, null, 2);

    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "readme-forge-template.json"; // json file name
    link.click();

    // clean up
    URL.revokeObjectURL(url);
}