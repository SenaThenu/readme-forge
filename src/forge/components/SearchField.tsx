import { useState, useEffect, ChangeEvent } from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useTheme } from "@mui/material/styles";

export default function SearchField() {
    const [searchQuery, setSearchQuery] = useState("");
    const theme = useTheme(); // Get current theme

    useEffect(() => {
        console.log(searchQuery);
    }, [searchQuery]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div
            className="search-field-container"
            style={{
                borderRadius: "25px",
                backgroundColor: theme.palette.secondary.main,
                padding: "5px 10px",
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
                        fontSize: "1.1rem",
                        fontWeight: "500",
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
