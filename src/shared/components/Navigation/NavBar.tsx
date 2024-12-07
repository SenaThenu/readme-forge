// components
import NavLayout from "./NavLayout";

export default function NavBar() {
    return (
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
    );
}
