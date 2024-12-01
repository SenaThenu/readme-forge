import { Link } from "react-router-dom";

// material ui components
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";

// components
import Block from "./Block";

export default function BrowseTemplates() {
    return (
        <Link to="/templates">
            <Block translucentBg>
                Browse Templates
                <ExploreRoundedIcon />
            </Block>
        </Link>
    );
}
