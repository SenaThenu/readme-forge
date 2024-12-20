import { useState, useEffect, useCallback } from "react";

// custom types
import TemplateDataType from "../../types/TemplateDataType";
import BlockDataType from "../../types/BlockDataType";
import GlobalDataType from "../../types/GlobalDataType";

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
import SelectBlockImg from "../components/SelectBlockImg";
import AddBlock from "../components/AddBlock";
import TextualDivider from "../../shared/components/UIElements/TextualDivider";
import ImportTemplate from "../components/ImportTemplate";
import BrowseTemplates from "../components/BrowseTemplates";
import TopRowActions from "../components/TopRowActions";

// utils
import fetchTemplateData from "../../shared/utils/fetchTemplateData";
import exportAsMarkdown from "../../shared/utils/exportAsMarkdown";
import exportAsJson from "../../shared/utils/exportAsJson";

// styles
import "./Forge.scss";

interface ForgeProps {
    templateName: string;
}

const mobileWidthBreakpoint = 900; // in px

export default function Forge({ templateName }: ForgeProps) {
    const isMobile = useMediaQuery(`(max-width:${mobileWidthBreakpoint}px)`);

    const [searchQuery, setSearchQuery] = useState("");
    const [templateData, setTemplateData] = useState<TemplateDataType | null>(
        null
    );

    // markdown editor related states
    const [markdown, setMarkdown] = useState("");
    const [resetEditHistory, setResetEditHistory] = useState(false);

    // block related states
    const [usedBlocksList, setUsedBlocksList] = useState<BlockDataType[]>([]);
    const [activeBlockId, setActiveBlockId] = useState<string | null>(null);

    // globals states
    const [globalsList, setGlobalsList] = useState<GlobalDataType[]>([]);

    // setting up the forge workspace based on the template
    useEffect(() => {
        // checking for a saved local version
        const localSavedTemplateData = localStorage.getItem(
            `${templateName}-template-latest-save`
        );
        if (localSavedTemplateData) {
            try {
                const parsedTemplateData = JSON.parse(
                    localSavedTemplateData
                ) as TemplateDataType;
                setUsedBlocksList(parsedTemplateData.usedBlocks);
                setGlobalsList(parsedTemplateData.globals);
                setTemplateData(parsedTemplateData);
            } catch (error) {
                console.error("Error parsing data:", error);
                fetchTemplate();
            }
        } else {
            fetchTemplate();
        }
    }, [templateName]);

    // side effects based on the templateData
    useEffect(() => {
        if (templateData) {
            // setting the document title
            document.title = `${templateData.displayName} - Readme Forge`;

            // saving the updated template locally for future use
            const parsedTemplateData = JSON.stringify(templateData);
            localStorage.setItem(
                `${templateName}-template-latest-save`,
                parsedTemplateData
            );
        }
    }, [templateData]);

    // update the template data based on usedBlocks
    useEffect(() => {
        setTemplateData(
            (prev) =>
                prev && {
                    ...prev,
                    usedBlocks: usedBlocksList,
                }
        );

        // checking if the active block is deleted
        let activeBlock = usedBlocksList.find(
            (block) => block.id === activeBlockId
        );
        if (activeBlock === undefined) {
            setMarkdown("");
            setActiveBlockId(null);
        }
    }, [usedBlocksList]);

    // update the template data based on globalsList
    useEffect(() => {
        setTemplateData((prev) => prev && { ...prev, globals: globalsList });
    }, [globalsList]);

    // setting up the markdown based on the activeBlockId
    useEffect(() => {
        if (activeBlockId !== null) {
            const activeBlockData = usedBlocksList.find(
                (block) => block.id === activeBlockId
            );
            if (activeBlockData) {
                setMarkdown(activeBlockData.markdown);
            }
            setTimeout(() => {
                setResetEditHistory(true);
            }, 50);
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

    const fetchTemplate = useCallback(async () => {
        const fetchedTemplateData = await fetchTemplateData(templateName);
        if (fetchedTemplateData !== null) {
            setTemplateData(fetchedTemplateData);
            setUsedBlocksList(fetchedTemplateData.usedBlocks);
            setGlobalsList(fetchedTemplateData.globals);
        } else {
            console.log(
                `Error fetching the template data from ${templateName}`
            );
        }
    }, []);

    const onImportTemplate = useCallback((loadedTemplate: TemplateDataType) => {
        setGlobalsList(loadedTemplate.globals);
        setUsedBlocksList(loadedTemplate.usedBlocks);
        setTemplateData(loadedTemplate);
    }, []);

    const onUsedBlocksOrderChanged = useCallback(
        (newOrder: BlockDataType[]) => {
            setUsedBlocksList(newOrder);
        },
        []
    );

    const onReset = () => {
        fetchTemplate();
        setActiveBlockId(null);
        setMarkdown("");
    };

    const onUpdateMarkdown = (newMarkdown: string) => {
        setMarkdown(newMarkdown);
    };

    const onBlockSelected = useCallback((selectedBlockId: string) => {
        setActiveBlockId(selectedBlockId);
    }, []);

    const onAddBlock = useCallback((newBlock: BlockDataType) => {
        setUsedBlocksList((prev) => [...prev, newBlock]);
    }, []);

    const onRemoveAvailableBlockCat = useCallback((blockCatName: string) => {
        setTemplateData(
            (prev) =>
                prev && {
                    ...prev,
                    availableBlockCategories:
                        prev.availableBlockCategories.filter(
                            (catName) => catName !== blockCatName
                        ),
                }
        );
    }, []);

    const onAddAvailableBlockCat = useCallback((blockName: string) => {
        setTemplateData(
            (prev) =>
                prev && {
                    ...prev,
                    availableBlockCategories: [
                        ...prev.availableBlockCategories,
                        blockName,
                    ],
                }
        );
    }, []);

    const onGlobalsListChange = useCallback((newList: GlobalDataType[]) => {
        setGlobalsList(newList);
    }, []);

    const markdownBlocks = (
        <div className="blocks-container">
            {!templateData ? (
                <CircularProgress />
            ) : (
                <>
                    <TopRowActions
                        onReset={onReset}
                        globalsList={globalsList}
                        onGlobalsListChange={onGlobalsListChange}
                        onTemplateLoaded={onImportTemplate}
                    />
                    <Divider flexItem />
                    <div className="used-blocks">
                        {usedBlocksList.length > 0 ? (
                            <UsedBlocks
                                usedBlocksList={usedBlocksList}
                                activeBlockId={activeBlockId}
                                onBlockOrderChanged={onUsedBlocksOrderChanged}
                                onBlockSelected={onBlockSelected}
                                onAddBlock={onAddBlock}
                                updateMarkdown={onUpdateMarkdown}
                            />
                        ) : (
                            <>
                                <TextualDivider text="No Block is Used!" />
                                <ImportTemplate
                                    onTemplateLoaded={onImportTemplate}
                                />
                                <BrowseTemplates />
                            </>
                        )}
                    </div>
                    <Divider flexItem />
                    <SearchField
                        onSearchQueryChange={(newQuery) =>
                            setSearchQuery(newQuery)
                        }
                    />
                    <AddBlock
                        usedBlockCats={templateData.availableBlockCategories}
                        onAddBlockCat={onAddAvailableBlockCat}
                        onAddBlock={onAddBlock}
                    />
                    <div className="available-blocks">
                        <AvailableBlocks
                            blockCategories={
                                templateData.availableBlockCategories
                            }
                            onRemoveBlockCat={onRemoveAvailableBlockCat}
                            onAddBlockCat={onAddAvailableBlockCat}
                            onAddBlock={onAddBlock}
                            searchQuery={searchQuery}
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
                mobileWidthBreakpoint={mobileWidthBreakpoint}
                drawerComponents={markdownBlocks}
                onExportAsJson={() => {
                    templateData && exportAsJson(templateData);
                }}
                onExportAsMarkdown={() => {
                    templateData && exportAsMarkdown(templateData);
                }}
            />
            <div className="forge-area">
                {!isMobile && markdownBlocks}
                {activeBlockId ? (
                    <>
                        <div className="markdown-editor">
                            <MarkdownEditor
                                markdownInput={markdown}
                                handleChange={onUpdateMarkdown}
                                resetEditHistory={resetEditHistory}
                                handleFinishReset={() =>
                                    setResetEditHistory(false)
                                }
                            />
                        </div>
                        <div className="markdown-preview">
                            <MarkdownPreview
                                markdownInput={markdown}
                                globalsList={globalsList}
                                usedBlockList={usedBlocksList}
                            />
                        </div>
                    </>
                ) : (
                    <div className="select-block-screen">
                        <div className="select-block-image">
                            <SelectBlockImg />
                        </div>
                        <div className="select-block-text">
                            Please select a block from the blocks pane!
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
