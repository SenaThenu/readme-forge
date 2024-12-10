// types
import BlockDataType from "../../types/BlockDataType";
import GlobalDataType from "../../types/GlobalDataType";

// utils
import generateToc from "./generateToc";

export default function markdownTokenReplace(
    markdown: string,
    globalsList: GlobalDataType[],
    allMarkdownBlocksCombined: boolean = false,
    usedBlocksList: BlockDataType[] | null = null
) {
    // auto generated table of content replace
    if (markdown.includes("{{auto_generated_toc}}")) {
        let combinedMarkdown = "";
        if (!allMarkdownBlocksCombined && usedBlocksList !== null) {
            for (let block of usedBlocksList) {
                combinedMarkdown += block.markdown;
                // line break
                combinedMarkdown += "\n\n";
            }
        } else {
            combinedMarkdown = markdown;
        }

        markdown = markdown.replace(
            "{{auto_generated_toc}}",
            generateToc(combinedMarkdown)
        );
    }

    // globals replace
    for (let global of globalsList) {
        markdown = markdown.replace(`{{${global.global}}}`, global.value);
    }

    return markdown;
}
