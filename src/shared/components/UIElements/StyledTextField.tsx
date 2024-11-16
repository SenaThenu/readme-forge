import { ReactNode, ChangeEvent } from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";

interface StyledTextFieldProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    id?: string;
    startIcon?: ReactNode;
}

export default function StyledTextField(props: StyledTextFieldProps) {
    const theme = useTheme(); // Get current theme

    return (
        <div
            className="custom-text-field-container"
            style={{
                borderRadius: "15px",
                backgroundColor: theme.palette.secondary.main,
                padding: "5px 10px",
                width: "100%",
            }}>
            <TextField
                id={props.id}
                placeholder={props.placeholder}
                variant="standard"
                value={props.value}
                onChange={props.onChange}
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
                                {props.startIcon}
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </div>
    );
}
