import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";

// material ui components
import { useTheme } from "@mui/material/styles";

// styles
import "./MarkdownEditor.scss";

interface MarkdownEditor {
    markdownInput: string;
    handleChange: (rawMarkdownInput: string) => void;
}

const extensions = [
    markdown({ base: markdownLanguage, codeLanguages: languages }),
];

export default function MarkdownEditor(props: MarkdownEditor) {
    const theme = useTheme();

    return (
        <CodeMirror
            value={props.markdownInput}
            onChange={(value) => props.handleChange(value)}
            className={`editor ${theme.palette.mode}`}
            theme={theme.palette.mode === "dark" ? githubDark : githubLight}
            extensions={extensions}
        />
    );
}
