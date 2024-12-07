import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

// components
import RainbowButton from "../components/RainbowButton";
import StyledButton from "../../shared/components/UIElements/StyledButton";
import FeaturesList from "../components/FeaturesList";
import NavBar from "../../shared/components/Navigation/NavBar";

// styles
import "./Home.scss";

// images
import lightPreview from "../../assets/images/forge-preview/light.jpg";
import darkPreview from "../../assets/images/forge-preview/dark.jpg";

export default function Home() {
    const theme = useTheme();

    useEffect(() => {
        document.title = "Home - Readme Forge";
    }, []);

    return (
        <div className="home-root">
            <NavBar />
            <div className="home-content">
                <div className="hero">
                    <div className="hero-title">
                        Stunning READMEs, Lightning Fast!
                    </div>
                    <div className="hero-description">
                        Build README.md files effortlessly by piecing together
                        pre-designed components
                        <br />
                        <strong>
                            The ultimate tool to conquer any README!
                        </strong>
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
                <div className="forge-preview">
                    {theme.palette.mode === "dark" ? (
                        <img
                            src={darkPreview}
                            alt="Readme Forge preview image"
                            draggable={false}
                            style={{
                                boxShadow:
                                    "0 4px 8px rgba(255, 255, 255, 0.1), 0 1px 5px rgba(255, 255, 255, 0.08)",
                            }}
                        />
                    ) : (
                        <img
                            src={lightPreview}
                            alt="Readme Forge preview image"
                            draggable={false}
                            style={{
                                boxShadow:
                                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                            }}
                        />
                    )}
                </div>
                <FeaturesList />
                <div className="footer">
                    <div className="copyright">
                        &copy; Senash Thenuja {new Date().getFullYear()}
                    </div>
                    <div className="socials">
                        <a
                            href="https://github.com/SenaThenu"
                            target="_blank"
                            rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24">
                                <title>GitHub</title>
                                <g id="github_fill" fill="none">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                                    <path
                                        fill={theme.palette.text.primary}
                                        d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032.4.444.5 1.188.571 1.756.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276-.712-.302-1.208-.77-1.581-1.218-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088.48.62.87 1.43 1.63 1.753.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581 9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719.59-.653 1.584-.268 2.28-.031Z"
                                    />
                                </g>
                            </svg>
                        </a>
                        <a
                            href="https://x.com/SenaThenu"
                            target="_blank"
                            rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24">
                                <title>X</title>
                                <g
                                    id="social_x_line"
                                    fill="none"
                                    fill-rule="evenodd">
                                    <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
                                    <path
                                        fill={theme.palette.text.primary}
                                        d="M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582 5.39-6.16ZM16.5 19 6 5h1.5L18 19z"
                                    />
                                </g>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/senathenu/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24">
                                <title>Linkedin</title>
                                <g
                                    id="linkedin_fill"
                                    fill="none"
                                    fill-rule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                                    <path
                                        fill={theme.palette.text.primary}
                                        d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM8 10a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m3-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.66c.305-.344.82-.748 1.393-.993.333-.142.834-.2 1.182-.09a.55.55 0 0 1 .293.188c.052.07.132.226.132.555v4a1 1 0 0 0 2 0v-4c0-.67-.17-1.266-.524-1.744a2.54 2.54 0 0 0-1.301-.907c-.902-.283-1.901-.126-2.568.16a5.82 5.82 0 0 0-.623.312A1 1 0 0 0 11 9M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
                                    />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
