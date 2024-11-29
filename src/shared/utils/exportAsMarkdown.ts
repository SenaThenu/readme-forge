import TemplateDataType from "../../types/TemplateDataType";

export default function exportAsMarkdown(templateData: TemplateDataType) {
    let outputMarkdown = "";

    for (let block of templateData.usedBlocks) {
        outputMarkdown += block.markdown
        // line break
        outputMarkdown += "\n\n"
    }

    for (let global of templateData.globals) {
        outputMarkdown = outputMarkdown.replace(`{{${global.global}}}`, global.value);
    }

    const blob = new Blob([outputMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = "README.md";
    link.click();
    
    // clean up
    URL.revokeObjectURL(url);
}