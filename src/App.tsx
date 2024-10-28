import Forge from "./forge/pages/Forge";

// styles
import "./styles/global.scss";

export default function App() {
    return (
        <div id="app">
            <Forge templateName="default" />
        </div>
    );
}
