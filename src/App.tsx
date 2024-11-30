import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./home/pages/Home";
import Templates from "./templates/pages/Templates";
import Forge from "./forge/pages/Forge";
import NotFound from "./shared/pages/NotFound";

// styles
import "./styles/global.scss";

export default function App() {
    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route
                        path="/forge"
                        element={<Forge templateName="default" />}
                    />
                    <Route
                        path="/forge/:name"
                        element={<Forge templateName="default" />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
