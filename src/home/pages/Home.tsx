import { Link } from "react-router-dom";

// components
import NavLayout from "../../shared/components/Navigation/NavLayout";
import RainbowButton from "../components/RainbowButton";
import StyledButton from "../../shared/components/UIElements/StyledButton";

// styles
import "./Home.scss";

export default function Home() {
    return (
        <div className="home-root">
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
            <div className="home-content">
                <div className="hero">
                    <div className="hero-title">
                        Stunning READMEs, Lightning Fast!
                    </div>
                    <div className="hero-description">
                        Generate stunning READMEs with ease! <br />
                        Customize or use our beautiful templates in just a few
                        clicks
                    </div>
                </div>
                <div className="hero-btns">
                    <Link to="/forge">
                        <RainbowButton text="Get Started" />
                    </Link>
                    <Link to="/templates">
                        <StyledButton blurBg>Browse Templates</StyledButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}
