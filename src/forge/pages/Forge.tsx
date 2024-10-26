// material ui components
import Divider from "@mui/material/Divider";

// components
import NavLayout from "../../shared/components/Navigation/NavLayout";
import Block from "../components/Block";
import SearchField from "../components/SearchField";

// styles
import "./Forge.scss";

export default function Forge() {
    return (
        <div id="forge-root">
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
                <div className="components-container">
                    <SearchField />
                    <Divider flexItem />
                    <div className="selected-components">
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                    </div>
                    <Divider flexItem />
                    <div className="available-components">
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                        <Block blockDescription="Name of a random person!">
                            Senash
                        </Block>
                    </div>
                </div>
                <div className="component-form"></div>
                <div className="markdown-preview"></div>
            </div>
        </div>
    );
}
