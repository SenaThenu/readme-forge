import { useTheme } from "@mui/material/styles";

// styles
import "./FeaturesList.scss";

export default function FeaturesList() {
    const theme = useTheme();

    return (
        <div className="features-list">
            <hr
                style={{
                    border: `2px solid ${
                        theme.palette.mode === "dark"
                            ? theme.palette.primary.main
                            : theme.palette.accent.main
                    }`,
                }}
            />
            <div className="feature-block">
                <div className="feature-info">
                    <div className="feature-title">
                        Component-Based README Generator
                    </div>
                    <div className="feature-description">
                        Build your README.md files effortlessly by piecing
                        together pre-designed components.
                    </div>
                </div>
                <div className="feature-preview"></div>
            </div>

            <div className="feature-block">
                <div className="feature-info">
                    <div className="feature-title">
                        Extensive Block Library & Versatile Templates
                    </div>
                    <div className="feature-description">
                        Access a wide range of block collections tailored for
                        various needs.
                    </div>
                </div>
                <div className="feature-preview"></div>
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
                <div className="feature-preview"></div>
            </div>

            <div className="feature-block">
                <div className="feature-info">
                    <div className="feature-title">
                        Aesthetic and Functional Design
                    </div>
                    <div className="feature-description">
                        Every block is meticulously crafted to ensure both
                        visual appeal and usability.
                    </div>
                </div>
                <div className="feature-preview"></div>
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
                <div className="feature-preview"></div>
            </div>
        </div>
    );
}
