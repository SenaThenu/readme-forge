import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import rehypeRaw from "rehype-raw";

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
export default function MarkdownPreview(props: MarkdownEditorProps) {
    let markdown = props.markdownInput;

    markdown = markdownTokenReplace(
        markdown,
        props.globalsList,
        false,
        props.usedBlockList
    );

    return (
        <div className="markdown-preview-components">
            <Markdown
                remarkPlugins={[
                    remarkGfm,
                    [remarkRehype, { allowDangerousHtml: true }],
                ]}
                rehypePlugins={[rehypeHighlight, rehypeReact, rehypeRaw]}>
                {markdown}
            </Markdown>
        </div>
    );
}
