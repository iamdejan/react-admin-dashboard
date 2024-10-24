import { JSX } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

export default function Invoices(): JSX.Element {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params: {row: {cost: number}}): JSX.Element => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%"
            }}
          >
            <Typography color={colors.greenAccent[500]}>
              ${params.row.cost}
            </Typography>
          </Box>
        );
      }
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1
    }
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
      <Box m="40px 0 0 0" height="75vh" sx={{
        "& .MuiDataGrid-root": {
          border: "none"
        },
        "& .MuiDataGrid-cell": {
          border: "none"
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none"
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400]
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700]
        },
        "& .MuiCheckbox-root": {
          color: colors.greenAccent[200] + " !important"
        }
      }}>
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          slots={{
            toolbar: GridToolbar
          }}
        />
      </Box>
    </Box>
  );
}
