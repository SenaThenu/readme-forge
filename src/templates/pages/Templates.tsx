// components
import NavLayout from "../../shared/components/Navigation/NavLayout";
import TemplateGridItem from "../components/TemplateGridItem";

// styles
import "./Templates.scss";

export default function Templates() {
    return (
        <div className="templates-root">
            <div className="nav-container">
                <NavLayout
                    navBarMode="default"
                    navLinks={[
                        { text: "Home", link: "/" },
                        { text: "Templates", link: "/templates" },
                        { text: "Forge", link: "/forge" },
                    ]}
                />
            </div>
            <div className="templates-content">
                <div className="templates-title">Templates</div>
                <div className="templates-grid">
                    <TemplateGridItem />
                    <TemplateGridItem />
                    <TemplateGridItem />
                    <TemplateGridItem />
                    <TemplateGridItem />
                    <TemplateGridItem />
                    <TemplateGridItem />
                    <TemplateGridItem />
                </div>
            </div>
        </div>
    );
}
