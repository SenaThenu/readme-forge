import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// types
import GlobalDataType from "../../types/GlobalDataType";

// material components
import {
    DataGrid,
    GridColDef,
    GridRowModel,
    GridRowSelectionModel,
} from "@mui/x-data-grid";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

// components
import Block from "./Block";

// styles
import "./GlobalsGrid.scss";

interface GlobalsGrid {
    initialRows: GlobalDataType[];
    onRowsUpdate: (newRows: GlobalDataType[]) => void;
}

export default function GlobalsGrid(props: GlobalsGrid) {
    const [rows, setRows] = useState<GlobalDataType[]>(props.initialRows);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    useEffect(() => {
        setRows(props.initialRows);
    }, [props.initialRows]);

    useEffect(() => {
        props.onRowsUpdate(rows);
    }, [rows, props.onRowsUpdate]);

    const columns: GridColDef[] = [
        { field: "global", headerName: "Globals", editable: true, flex: 1 },
        { field: "value", headerName: "Value", editable: true, flex: 1 },
    ];

    const handleAddRow = () => {
        const newRow: GlobalDataType = {
            id: uuidv4(),
            global: "new_variable",
            value: "new_value",
        };
        setRows([...rows, newRow]); // append the new row
    };

    const removeSelectedRows = () => {
        setRows((prev) => prev.filter((row) => !selectedRows.includes(row.id)));
        setSelectedRows([]);
    };

    const handleProcessRowUpdate = (newRow: GridRowModel) => {
        const updatedRow = newRow as GlobalDataType;
        setRows((prev) =>
            prev.map((row) => (row.id === updatedRow.id ? updatedRow : row))
        );
        return updatedRow;
    };

    const handleRowSelectionChange = (ids: GridRowSelectionModel) => {
        setSelectedRows(ids as string[]);
    };

    return (
        <>
            <DataGrid
                rows={rows}
                columns={columns}
                processRowUpdate={handleProcessRowUpdate}
                onRowSelectionModelChange={handleRowSelectionChange}
                checkboxSelection
                className="globals-grid"
            />
            <Block onClick={removeSelectedRows} className="grid-action-block">
                <DeleteRoundedIcon fontSize="small" />
                Remove Selected
            </Block>
            <Block onClick={handleAddRow} className="grid-action-block">
                <AddCircleOutlineRoundedIcon fontSize="small" />
                Add Row
            </Block>
        </>
    );
}
