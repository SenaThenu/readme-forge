// components
import NavLogo from "./shared/components/Navigation/NavLogo";
import ToggleTheme from "./shared/components/Navigation/ToggleTheme";
import Block from "./forge/components/Block";
import ExportButton from "./forge/components/ExportButton";
import SearchField from "./forge/components/SearchField";

// styles
// import "./styles/global.scss";

export default function App() {
    return (
        <div id="app">
            <div className="nav-bar">
                <ToggleTheme />
                <NavLogo includeTitle />
                <ExportButton />
            </div>
            <div className="forge-area">
                <div className="left-pane">
                    <div className="selected-components">
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <SearchField />
                    </div>
                    <div className="available-components"></div>
                </div>
                <div className="component-form"></div>
                <div className="markdown-preview"></div>
            </div>
        </div>
    );
}
