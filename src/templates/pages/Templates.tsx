import NavLayout from "../../shared/components/Navigation/NavLayout";

export default function Templates() {
    return (
        <div className="templates-root">
            <NavLayout
                navBarMode="default"
                navLinks={[
                    { text: "Home", link: "/" },
                    { text: "Templates", link: "/templates" },
                    { text: "Forge", link: "/forge" },
                ]}
            />
        </div>
    );
}
