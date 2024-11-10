import { useState, useEffect, useCallback } from "react";

// custom types
import TemplateDataType from "../../types/TemplateDataType";
import BlockDataType from "../../types/BlockDataType";

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

// utils
import fetchTemplateData from "../../shared/utils/fetchTemplateData";

// styles
import "./Forge.scss";

interface ForgeProps {
    templateName: string;
}

const mobileWidthBreakpoint = 900; // in px

export default function Forge({ templateName }: ForgeProps) {
    const isMobile = useMediaQuery(`(max-width:${mobileWidthBreakpoint}px)`);

    const [markdown, setMarkdown] = useState("");
    const [templateData, setTemplateData] = useState<TemplateDataType | null>(
        null
    );

    // block related states
    const [usedBlocksList, setUsedBlocksList] = useState<BlockDataType[]>([]);
    const [activeBlockId, setActiveBlockId] = useState<string | null>(null);

    // setting up the forge workspace based on the template
    useEffect(() => {
        const fetchTemplate = async () => {
            const fetchedTemplateData = await fetchTemplateData(templateName);
            if (fetchedTemplateData !== null) {
                setTemplateData(fetchedTemplateData);
                if (!usedBlocksList.length && templateData) {
                    setUsedBlocksList(fetchedTemplateData.usedBlocks);
                }
            } else {
                console.log(
                    `Error fetching the template data from ${templateName}`
                );
            }
        };

        // checking for a saved local version
        const localSavedTemplateData = localStorage.getItem(
            `${templateName}-template-latest-save`
        );
        if (localSavedTemplateData) {
            try {
                const parsedTemplateData = JSON.parse(
                    localSavedTemplateData
                ) as TemplateDataType;
                setTemplateData(parsedTemplateData);
                setUsedBlocksList(parsedTemplateData.usedBlocks);
            } catch (error) {
                console.error("Error parsing data:", error);
                fetchTemplate();
            }
        } else {
            fetchTemplate();
        }
    }, [templateName]);

    // saving the updated template locally for future use
    useEffect(() => {
        if (templateData) {
            // saving template data in local storage
            const parsedTemplateData = JSON.stringify(templateData);
            localStorage.setItem(
                `${templateName}-template-latest-save`,
                parsedTemplateData
            );
        }
    }, [templateData]);

    // update the template data based on usedBlocks
    useEffect(() => {
        if (usedBlocksList.length > 0) {
            setTemplateData(
                (prev) =>
                    prev && {
                        ...prev,
                        usedBlocks: usedBlocksList,
                    }
            );
        }
    }, [usedBlocksList]);

    // setting up the markdown based on the activeBlockId
    useEffect(() => {
        if (activeBlockId !== null) {
            const activeBlockData = usedBlocksList.find(
                (block) => block.id === activeBlockId
            );
            if (activeBlockData) {
                setMarkdown(activeBlockData.markdown);
            }
        }
    }, [activeBlockId]);

    // updating the active block markdown when the markdown gets updated
    useEffect(() => {
        if (activeBlockId) {
            setUsedBlocksList((prev) =>
                prev.map((block) =>
                    block.id === activeBlockId ? { ...block, markdown } : block
                )
            );
        }
    }, [markdown]);

    const onUsedBlocksOrderChanged = useCallback(
        (newOrder: BlockDataType[]) => {
            setUsedBlocksList(newOrder);
        },
        []
    );

    const onBlockSelected = useCallback((selectedBlockId: string) => {
        setActiveBlockId(selectedBlockId);
    }, []);

    const onAddBlock = useCallback((newBlock: BlockDataType) => {
        setUsedBlocksList((prev) => [...prev, newBlock]);
    }, []);

    const markdownBlocks = (
        <div className="blocks-container">
            {!templateData ? (
                <CircularProgress />
            ) : (
                <>
                    <SearchField />
                    <Divider flexItem />
                    <div className="used-blocks">
                        <UsedBlocks
                            usedBlocksList={usedBlocksList}
                            onBlockOrderChanged={onUsedBlocksOrderChanged}
                            onBlockSelected={onBlockSelected}
                        />
                    </div>
                    <Divider flexItem />
                    <div className="available-blocks">
                        <AvailableBlocks
                            blockCategories={
                                templateData.availableBlockCategories
                            }
                            onAddBlock={onAddBlock}
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
                <div className="markdown-editor">
                    {activeBlockId ? (
                        <MarkdownEditor
                            markdownInput={markdown}
                            handleChange={(value) => setMarkdown(value)}
                        />
                    ) : (
                        <div>
                            Please select a block from the blocks pane to edit!
                        </div>
                    )}
                </div>
                <div className="markdown-preview">
                    <MarkdownPreview markdownInput={markdown} />
                </div>
            </div>
        </div>
    );
}
