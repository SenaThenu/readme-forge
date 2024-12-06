import { motion } from "motion/react";

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
                <motion.div layout className="templates-grid">
                    <TemplateGridItem
                        templateDescription="This is a test template asdfjasdklfjaskldjfklasdjfkl asdjfkljasdklfj kladsjfkasdjfkl asdjf klasjdkfj aksdjfklads jkfsdjkfj asdlk"
                        templateName="🧪 Test fjslgkjsdflgjksjflasdjkf jlsdfjkasdjflksddjflajsdkf a"
                    />
                    <TemplateGridItem
                        templateDescription="This is a test template"
                        templateName="🧪 Test"
                    />
                    <TemplateGridItem
                        templateDescription="This is a test template"
                        templateName="🧪 Test"
                    />
                    <TemplateGridItem
                        templateDescription="This is a test template"
                        templateName="🧪 Test"
                    />{" "}
                    <TemplateGridItem
                        templateDescription="This is a test template"
                        templateName="🧪 Test"
                    />
                </motion.div>
            </div>
        </div>
    );
}
