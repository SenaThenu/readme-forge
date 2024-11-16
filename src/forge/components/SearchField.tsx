import { useState, useEffect, ChangeEvent } from "react";

// material ui components
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

// components
import StyledTextField from "../../shared/components/UIElements/StyledTextField";

interface SearchFieldProps {
    onSearchQueryChange: (newSearchQuery: string) => void;
}

export default function SearchField(props: SearchFieldProps) {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        props.onSearchQueryChange(searchQuery);
    }, [searchQuery]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <StyledTextField
            id="search-field"
            placeholder="Search..."
            value={searchQuery}
            onChange={changeHandler}
            startIcon={<SearchRoundedIcon />}
        />
    );
}
