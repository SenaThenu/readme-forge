import NavLayout from "../../shared/components/Navigation/NavLayout";

export default function Home() {
    return (
        <div className="home-root">
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
