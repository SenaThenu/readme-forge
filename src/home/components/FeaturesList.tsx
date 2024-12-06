import { useTheme } from "@mui/material/styles";

// styles
import "./FeaturesList.scss";

// assets
import componentsPreviewDark from "../../assets/images/features-preview/components-dark.webp";
import componentsPreviewLight from "../../assets/images/features-preview/components-light.webp";

import exportTemplatePreviewDark from "../../assets/images/features-preview/export-dark.webp";
import exportTemplatePreviewLight from "../../assets/images/features-preview/export-light.webp";

import globalsPreviewDark from "../../assets/images/features-preview/globals-dark.webp";
import globalsPreviewLight from "../../assets/images/features-preview/globals-light.webp";

import sparklesEmoji from "../../assets/images/features-preview/sparkles-emoji.webp";
import wideRangeEmoji from "../../assets/images/features-preview/wide-range-emoji.webp";

export default function FeaturesList() {
    const theme = useTheme();

    const divider = (
        <hr
            style={{
                border: `2px solid ${
                    theme.palette.mode === "dark"
                        ? theme.palette.primary.main
                        : theme.palette.accent.main
                }`,
            }}
        />
    );

    return (
        <div className="features-list">
            {divider}
            <div className="feature-block">
                <div className="feature-info">
                    <div className="feature-title">
                        Component-Based README Generator
                    </div>
                    <div className="feature-description">
                        Easily drag and drop blocks to customize different
                        sections that build up the README
                    </div>
                </div>
                <div className="feature-preview">
                    {theme.palette.mode === "dark" ? (
                        <img
                            src={componentsPreviewDark}
                            alt="A preview of the component based generation structure of Readme Forge"
                            draggable={false}
                            style={{
                                boxShadow:
                                    "0 4px 8px rgba(255, 255, 255, 0.1), 0 1px 5px rgba(255, 255, 255, 0.08)",
                            }}
                        />
                    ) : (
                        <img
                            src={componentsPreviewLight}
                            alt="A preview of the component based generation structure of Readme Forge"
                            draggable={false}
                            style={{
                                boxShadow:
                                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                            }}
                        />
                    )}
                </div>
            </div>

            <div className="feature-block reversed">
                <div className="feature-info">
                    <div className="feature-title">
                        Extensive Block Library & Versatile Templates
                    </div>
                    <div className="feature-description">
                        Access a wide range of block collections tailored for
                        various needs.
                    </div>
                </div>
                <div className="feature-preview">
                    <img
                        src={wideRangeEmoji}
                        alt="An emoji representing the wide range of templates and blocks available"
                        draggable={false}
                    />
                </div>
            </div>

            <div className="feature-block">
                <div className="feature-info">
                    <div className="feature-title">
                        Global Variables for Easy Customization
                    </div>
                    <div className="feature-description">
                        Manage repetitive content with centralized
                        controls—update once, and it reflects everywhere!
                    </div>
                </div>
                <div className="feature-preview">
                    <img
                        src={
                            theme.palette.mode === "dark"
                                ? globalsPreviewDark
                                : globalsPreviewLight
                        }
                        alt="A preview of the global variables functionality"
                        draggable={false}
                    />
                </div>
            </div>

            <div className="feature-block reversed">
                <div className="feature-info">
                    <div className="feature-title">
                        Aesthetic and Functional Design
                    </div>
                    <div className="feature-description">
                        Every block is meticulously crafted to ensure both
                        visual appeal and usability.
                    </div>
                </div>
                <div className="feature-preview">
                    <img
                        src={sparklesEmoji}
                        alt="An emoji representing the beauty of the block design"
                        draggable={false}
                    />
                </div>
            </div>

            <div className="feature-block">
                <div className="feature-info">
                    <div className="feature-title">
                        Exportable Custom Templates
                    </div>
                    <div className="feature-description">
                        Create, save, and reuse your personalized templates with
                        ease.
                    </div>
                </div>
                <div className="feature-preview">
                    {theme.palette.mode === "dark" ? (
                        <img
                            src={exportTemplatePreviewDark}
                            alt="A preview of the custom template export functionality"
                            draggable={false}
                            style={{
                                boxShadow:
                                    "0 4px 8px rgba(255, 255, 255, 0.1), 0 1px 5px rgba(255, 255, 255, 0.08)",
                            }}
                        />
                    ) : (
                        <img
                            src={exportTemplatePreviewLight}
                            alt="A preview of the custom template export functionality"
                            draggable={false}
                            style={{
                                boxShadow:
                                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                            }}
                        />
                    )}
                </div>
            </div>
            {divider}
        </div>
    );
}
