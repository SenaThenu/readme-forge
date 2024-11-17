import { useRef, useEffect, useState } from "react";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import { history, redo, undo } from "@codemirror/commands";
import { keymap } from "@codemirror/view";

// material ui components
import { useTheme } from "@mui/material/styles";

// styles
import "./MarkdownEditor.scss";

interface MarkdownEditor {
    markdownInput: string;
    resetEditHistory: boolean;
    handleChange: (rawMarkdownInput: string) => void;
    handleFinishReset: () => void;
}

const baseExtensions = [
    markdown({ base: markdownLanguage, codeLanguages: languages }),
    history(),
    keymap.of([
        { key: "Mod-z", run: undo },
        { key: "Mod-y", run: redo },
        { key: "Shift-Mod-z", run: redo },
    ]),
];

export default function MarkdownEditor(props: MarkdownEditor) {
    const editorRef = useRef<ReactCodeMirrorRef>(null);
    const theme = useTheme();
    const [key, setKey] = useState(0); // add a key state to force remount

    useEffect(() => {
        if (props.resetEditHistory) {
            setKey((prev) => prev + 1); // increment key to force remount
        }

        console.log("reset success!");
        props.handleFinishReset();
    }, [props.resetEditHistory]);

    return (
        <CodeMirror
            key={key} // add key prop to force remount when it changes
            ref={editorRef}
            value={props.markdownInput}
            onChange={(value) => props.handleChange(value)}
            className={`editor ${theme.palette.mode}`}
            theme={theme.palette.mode === "dark" ? githubDark : githubLight}
            extensions={[
                ...baseExtensions,
                theme.palette.mode === "dark" ? githubDark : githubLight,
            ]}
        />
    );
}
