import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// components
import App from "./App.tsx";
import ThemeWrapper from "./shared/components/UIElements/ThemeWrapper.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeWrapper>
            <App />
        </ThemeWrapper>
    </StrictMode>
);
