import { useEffect, useState } from "react";
import { motion } from "motion/react";

// types
import TemplateGridDataType from "../../types/TemplateGridDataType";

// components
import TemplateGridItem from "../components/TemplateGridItem";
import NavBar from "../../shared/components/Navigation/NavBar";

// utils
import fetchTemplateGridData from "../../shared/utils/fetchTemplateGridData";

// styles
import "./Templates.scss";

export default function Templates() {
    const [templateGridData, setTemplateGridData] = useState<
        TemplateGridDataType[]
    >([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetchTemplateGridData();
            setTemplateGridData(fetchedData);
        };

        document.title = "Templates - Readme Forge";

        fetchData();
    }, []);

    return (
        <div className="templates-root">
            <NavBar />
            <div className="templates-content">
                <div className="templates-title">Templates</div>
                <motion.div layout className="templates-grid">
                    {templateGridData.map((template, index) => {
                        return (
                            <TemplateGridItem
                                templateName={template.displayName}
                                templateRoute={template.route}
                                templateDescription={template.description}
                                key={index}
                            />
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
