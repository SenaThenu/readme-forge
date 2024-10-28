import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import rehypeRaw from "rehype-raw";

// styles
import "highlight.js/styles/tokyo-night-dark.css"; // for code highlighting
import "./MarkdownPreview.scss";

interface MarkdownEditorProps {
    markdownInput: string;
}
export default function MarkdownPreview(props: MarkdownEditorProps) {
    return (
        <div className="markdown-preview-components">
            <Markdown
                remarkPlugins={[
                    remarkGfm,
                    [remarkRehype, { allowDangerousHtml: true }],
                ]}
                rehypePlugins={[rehypeHighlight, rehypeReact, rehypeRaw]}>
                {props.markdownInput}
            </Markdown>
        </div>
    );
}
