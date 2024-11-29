import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import rehypeRaw from "rehype-raw";

// types
import GlobalDataType from "../../types/GlobalDataType";

// styles
import "highlight.js/styles/tokyo-night-dark.css"; // for code highlighting
import "./MarkdownPreview.scss";

interface MarkdownEditorProps {
    markdownInput: string;
    globalsList: GlobalDataType[];
}
export default function MarkdownPreview(props: MarkdownEditorProps) {
    let markdown = props.markdownInput;

    for (let global of props.globalsList) {
        markdown = markdown.replace(`{{${global.global}}}`, global.value);
    }

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
