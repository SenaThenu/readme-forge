// material ui components
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";

// components
import Block from "./Block";

export default function BrowseTemplates() {
    const handleClick = () => {
        console.log("Redirecting to Browse Templates page");
    };
    return (
        <Block onClick={handleClick} translucentBg>
            Browse Templates
            <ExploreRoundedIcon />
        </Block>
    );
}
