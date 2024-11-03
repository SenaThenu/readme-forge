import { useState, useEffect } from "react";

// custom types
import TemplateDataType from "../../types/TemplateDataType";

// material ui components
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";

// components
import NavLayout from "../../shared/components/Navigation/NavLayout";
import SearchField from "../components/SearchField";
import MarkdownEditor from "../components/MarkdownEditor";
import MarkdownPreview from "../components/MarkdownPreview";
import AvailableBlocks from "../components/AvailableBlocks";
import UsedBlocks from "../components/UsedBlocks";

// styles
import "./Forge.scss";

interface ForgeProps {
    templateName: string;
}

const mobileWidthBreakpoint = 900; // in px

export default function Forge({ templateName }: ForgeProps) {
    const [markdown, setMarkdown] = useState("");
    const [templateData, setTemplateData] = useState<TemplateDataType | null>(
        null
    );
    const isMobile = useMediaQuery(`(max-width:${mobileWidthBreakpoint}px)`);

    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const jsonData = await import(
                    `../../data/md-templates/${templateName}.json`
                );
                setTemplateData(jsonData.default as TemplateDataType);
            } catch (error) {
                console.error("Error loading JSON file:", error);
            }
        };

        fetchTemplateData();
    }, [templateName]);

    const markdownBlocks = (
        <div className="blocks-container">
            {!templateData ? (
                <CircularProgress />
            ) : (
                <>
                    <SearchField />
                    <Divider flexItem />
                    <div className="used-blocks">
                        <UsedBlocks usedBlockNames={templateData.usedBlocks} />
                    </div>
                    <Divider flexItem />
                    <div className="available-blocks">
                        <AvailableBlocks
                            blockCategories={
                                templateData.availableBlockCategories
                            }
                        />
                    </div>
                </>
            )}
        </div>
    );

    return (
        <div id="forge-root">
            <NavLayout
                navBarMode="forge"
                currentNavLinkText="Forge"
                mobileWidthBreakpoint={mobileWidthBreakpoint}
                drawerComponents={markdownBlocks}
            />
            <div className="forge-area">
                {!isMobile && markdownBlocks}
                <div className="component-form">
                    <MarkdownEditor
                        markdownInput={markdown}
                        handleChange={(value) => setMarkdown(value)}
                    />
                </div>
                <div className="markdown-preview">
                    <MarkdownPreview markdownInput={markdown} />
                </div>
            </div>
        </div>
    );
}
