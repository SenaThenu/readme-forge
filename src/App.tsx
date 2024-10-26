// components
import NavLayout from "./shared/components/Navigation/NavLayout";
import Block from "./forge/components/Block";
import SearchField from "./forge/components/SearchField";

// styles
import "./styles/global.scss";

export default function App() {
    return (
        <div id="app">
            <NavLayout
                navBarMode="forge"
                currentNavLinkText="Forge"
                navLinks={[
                    { text: "Home", link: "/" },
                    { text: "Templates", link: "/" },
                    { text: "Forge", link: "/" },
                ]}
            />
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
