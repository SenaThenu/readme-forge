import { useState, useEffect, ChangeEvent } from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useTheme } from "@mui/material/styles";

interface SearchFieldProps {
    onSearchQueryChange: (newSearchQuery: string) => void;
}

export default function SearchField(props: SearchFieldProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const theme = useTheme(); // Get current theme

    useEffect(() => {
        props.onSearchQueryChange(searchQuery);
    }, [searchQuery]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div
            className="search-field-container"
            style={{
                borderRadius: "15px",
                backgroundColor: theme.palette.secondary.main,
                padding: "5px 10px",
                width: "100%",
            }}>
            <TextField
                id="standard-basic"
                placeholder="Search..."
                variant="standard"
                value={searchQuery}
                onChange={changeHandler}
                fullWidth
                sx={{
                    "& .MuiInputBase-input": {
                        fontSize: "1rem",
                        fontWeight: "400",
                    },
                }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRoundedIcon
                                    sx={{
                                        color: theme.palette.text.primary,
                                    }}
                                />
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </div>
    );
}
