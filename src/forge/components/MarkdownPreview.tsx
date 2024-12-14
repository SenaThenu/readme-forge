import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import rehypeRaw from "rehype-raw";
import { Element, ElementContent, Text } from "hast";
import { useTheme } from "@mui/material/styles";

// types
import GlobalDataType from "../../types/GlobalDataType";
import BlockDataType from "../../types/BlockDataType";

// utils
import markdownTokenReplace from "../../shared/utils/markdownTokenReplace";

// styles
import "highlight.js/styles/tokyo-night-dark.css"; // for code highlighting
import "./MarkdownPreview.scss";

interface MarkdownEditorProps {
    markdownInput: string;
    globalsList: GlobalDataType[];
    usedBlockList: BlockDataType[];
}

const extractTextFromNode = (node: ElementContent): string => {
    if (node.type === "text") {
        return (node as Text).value;
    }
    if (node.type === "element" && node.children) {
        return node.children
            .map((child) =>
                child.type === "text"
                    ? (child as Text).value
                    : child.type === "element"
                    ? extractTextFromNode(child)
                    : ""
            )
            .join("");
    }
    return "";
};

export default function MarkdownPreview(props: MarkdownEditorProps) {
    const theme = useTheme();

    let markdown = props.markdownInput;

    markdown = markdownTokenReplace(
        markdown,
        props.globalsList,
        false,
        props.usedBlockList
    );

    return (
        <div className={`markdown-preview-components ${theme.palette.mode}`}>
            <Markdown
                remarkPlugins={[
                    remarkGfm,
                    [remarkRehype, { allowDangerousHtml: true }],
                ]}
                rehypePlugins={[rehypeHighlight, rehypeReact, rehypeRaw]}
                components={{
                    blockquote: ({ children, node }) => {
                        // support for github like block quotes
                        if (node) {
                            // the first line block quote type
                            const blockQuoteFirstLine = node
                                .children?.[1] as Element;
                            console.log(node.children);
                            const blockQuoteData = blockQuoteFirstLine
                                .children[0] as Text;

                            const blockQuoteDataChunks =
                                blockQuoteData.value.split("\n");
                            const blockQuoteType = blockQuoteDataChunks[0];

                            const match = blockQuoteType.match(
                                /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i
                            );

                            if (match) {
                                const type = match[1].toLowerCase();
                                return (
                                    <blockquote data-type={type}>
                                        {/* the rest of the blockQuoteDataChunks is some text following it */}
                                        <p>
                                            {blockQuoteDataChunks
                                                .slice(1)
                                                .join(" ")}
                                        </p>
                                        {/* adding the other lines contained in the block quote  */}
                                        {node.children.map((child, index) => {
                                            if (
                                                index !== 1 &&
                                                child.type === "element"
                                            ) {
                                                const childTextElement = child
                                                    .children[0] as Text;
                                                return (
                                                    <p>
                                                        {childTextElement.value
                                                            .split("\n")
                                                            .join(" ")}
                                                    </p>
                                                );
                                            }
                                        })}
                                    </blockquote>
                                );
                            }
                        }

                        return <blockquote>{children}</blockquote>;
                    },
                }}>
                {markdown}
            </Markdown>
        </div>
    );
}
