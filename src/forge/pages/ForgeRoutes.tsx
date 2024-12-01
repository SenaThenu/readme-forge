import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import CircularProgress from "@mui/material/CircularProgress";

// pages
import Forge from "./Forge";
import NotFound from "../../shared/pages/NotFound";

// utils
import fetchAllTemplateNames from "../../shared/utils/fetchAllTemplateNames";

export default function ForgeRoutes() {
    const [templateNames, setTemplateNames] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const { name } = useParams();

    useEffect(() => {
        const loadNames = async () => {
            const loadedNames = await fetchAllTemplateNames();
            setTemplateNames(loadedNames);
            setLoading(false);
        };

        loadNames();
    }, []);

    if (loading) {
        return (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <CircularProgress />
            </div>
        );
    }

    if (name && templateNames.includes(name)) {
        return <Forge templateName={name} />;
    } else {
        return <NotFound />;
    }
}
