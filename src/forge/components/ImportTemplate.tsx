import { useRef, ChangeEvent } from "react";

// types
import TemplateDataType from "../../types/TemplateDataType";
import BlockDataType from "../../types/BlockDataType";

// material ui components
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";

// components
import Block from "./Block";

interface ImportTemplateProps {
    onTemplateLoaded: (loadedTemplate: TemplateDataType) => void;
}

export default function ImportTemplate(props: ImportTemplateProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;

        if (!file || file.type !== "application/json") {
            alert("Please select a valid JSON file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            try {
                const jsonData = JSON.parse(reader.result as string);

                if (jsonData) {
                    console.log("Uploaded Template Data:", jsonData);
                    props.onTemplateLoaded(jsonData as TemplateDataType);
                    alert("File uploaded and validated successfully!");
                } else {
                    throw new Error(
                        "The file does not match the required template format."
                    );
                }
            } catch (error) {
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
