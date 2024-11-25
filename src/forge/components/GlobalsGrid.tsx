import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// material components
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

// components
import Block from "./Block";

// styles
import "./GlobalsGrid.scss";

interface GlobalGridRow {
    id: string;
    global: string;
    value: string;
}

interface GlobalsGrid {
    initialRows: GlobalGridRow[];
    onRowsUpdate: (newRows: GlobalGridRow[]) => void;
}

export default function GlobalsGrid(props: GlobalsGrid) {
    const [rows, setRows] = useState<GlobalGridRow[]>(props.initialRows);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    useEffect(() => {
        props.onRowsUpdate(rows);
    }, [rows]);

    const columns: GridColDef[] = [
        { field: "global", headerName: "Globals", editable: true, flex: 1 },
        { field: "value", headerName: "Value", editable: true, flex: 1 },
    ];

    const handleAddRow = () => {
        const newRow: GlobalGridRow = {
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
        const updatedRow = newRow as GlobalGridRow;
        setRows((prev) =>
            prev.map((row) => (row.id === updatedRow.id ? updatedRow : row))
        );
        return updatedRow;
    };

    return (
        <>
            <DataGrid
                rows={rows}
                columns={columns}
                processRowUpdate={handleProcessRowUpdate}
                onRowSelectionModelChange={(ids) =>
                    setSelectedRows(ids as string[])
                }
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
