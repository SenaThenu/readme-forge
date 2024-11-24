// material ui components
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme } from "@mui/material/styles";

const CustomSelect = styled(Select)(({ theme }) => ({
    borderRadius: "15px",
    "& .MuiSelect-icon": {
        color: theme.palette.primary.dark,
    },
    "&.Mui-focused": {},
}));

const CustomMenuProps = {
    PaperProps: {
        sx: (theme: Theme) => ({
            borderRadius: "16px",
            backgroundColor:
                theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
        }),
    },
};

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    "&.MuiMenuItem-root": {
        color: theme.palette.text.primary,
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.common.white,
        },
    },
}));

const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
    color: theme.palette.text.primary,
    "&.Mui-focused": {
        color: theme.palette.text.primary,
    },
    "&.MuiInputLabel-shrink": {
        color: theme.palette.text.primary,
    },
}));

interface StyledSelectProps {
    label: string;
    menuItems: string[];
    selectedValue: string;
    onSelectChange: (selectedValue: string) => void;
}

export default function StyledSelect(props: StyledSelectProps) {
    const handleChange = (e: SelectChangeEvent<unknown>) => {
        props.onSelectChange(e.target.value as string);
    };

    return (
        <FormControl sx={{ minWidth: "250px" }}>
            <CustomInputLabel id="select-label">{props.label}</CustomInputLabel>
            <CustomSelect
                labelId="select-label"
                label={props.label}
                value={props.selectedValue}
                onChange={handleChange}
                MenuProps={CustomMenuProps}>
                {props.menuItems.map((item, index) => {
                    return (
                        <CustomMenuItem value={item} key={index}>
                            {item}
                        </CustomMenuItem>
                    );
                })}
            </CustomSelect>
        </FormControl>
    );
}
