// material ui components
import { useTheme, alpha } from "@mui/material/styles";

// styles
import "./NavLinks.scss";

interface NavLinksProps {
    linksLayout: "horizontal" | "vertical";
    currentLinkText?: string;
    navLinksList?: { text: string; link: string }[];
}

export default function NavLinks(props: NavLinksProps) {
    const theme = useTheme();
    return (
        <div className={`nav-links-container ${props.linksLayout}`}>
            <ul
                className={`nav-links ${props.linksLayout}`}
                style={{
                    backgroundColor:
                        theme.palette.mode === "dark"
                            ? alpha(theme.palette.primary.main, 0.8)
                            : alpha(theme.palette.accent.main, 0.7),
                }}>
                {props.navLinksList !== null &&
                    props.navLinksList!.map((navLink, index) => (
                        <li className="nav-link-li-element" key={index}>
                            <a href={navLink.link} className="nav-link">
                                <div
                                    style={{
                                        backgroundColor:
                                            props.currentLinkText ===
                                            navLink.text
                                                ? theme.palette.mode == "dark"
                                                    ? alpha(
                                                          theme.palette.accent
                                                              .dark,
                                                          0.3
                                                      )
                                                    : alpha(
                                                          theme.palette.primary
                                                              .contrastText,
                                                          0.3
                                                      )
                                                : undefined,
                                    }}>
                                    {navLink.text}
                                </div>
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
