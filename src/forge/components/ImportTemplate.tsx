import { useRef, ChangeEvent } from "react";
import { z } from "zod";

// types
import TemplateDataType from "../../types/TemplateDataType";

// material ui components
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";

// components
import Block from "./Block";

const BlockDataTypeSchema = z.object({
    id: z.string(),
    name: z.string(),
    displayName: z.string(),
    description: z.string(),
    markdown: z.string(),
    originalMarkdown: z.string().optional(),
});

const GlobalDataTypeSchema = z.object({
    id: z.string(),
    global: z.string(),
    value: z.string(),
});

const TemplateDataTypeSchema = z.object({
    displayName: z.string(),
    usedBlocks: z.array(BlockDataTypeSchema), // array of BlockDataType
    availableBlockCategories: z.array(z.string()), // array of strings
    globals: z.array(GlobalDataTypeSchema), // array of GlobalDataTypeSchema
});

interface ImportTemplateProps {
    onTemplateLoaded: (loadedTemplate: TemplateDataType) => void;
}

export default function ImportTemplate(props: ImportTemplateProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;

        if (!file || file.type !== "application/json") {
            alert("Please select a valid template file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            try {
                const jsonData = JSON.parse(reader.result as string);

                const parsedTemplate =
                    TemplateDataTypeSchema.safeParse(jsonData);

                if (parsedTemplate.success) {
                    props.onTemplateLoaded(
                        parsedTemplate.data as TemplateDataType
                    );
                    alert("Template Imported Successfully!");
                } else {
                    throw new Error(
                        `The file does not match the required template format: ${
                            parsedTemplate.error.format()._errors
                        }`
                    );
                }
            } catch (error) {
                alert("Importing Failed. Make sure the file is not corrupted!");
                console.error("Error parsing JSON:", error);
            }

            event.target.value = ""; // reset file input
        };

        reader.onerror = () => {
            console.error("Error reading file:", reader.error);

            event.target.value = ""; // reset file input
        };

        reader.readAsText(file);
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <Block translucentBg onClick={triggerFileInput}>
            <input
                type="file"
                accept="application/json"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
            />
            Import Template
            <CloudUploadRoundedIcon />
        </Block>
    );
}
