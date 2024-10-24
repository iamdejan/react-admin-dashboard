import { JSX } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

export default function Team(): JSX.Element {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID"
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left"
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
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({row: {access}}: {row: {access: string}}): JSX.Element => {
        return (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Box
              width="60%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              borderRadius="4px"
              sx={{
                backgroundColor: access === "admin"? colors.greenAccent[600] : colors.greenAccent[700]
              }}
            >
              {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
              {access === "manager" && <SecurityOutlinedIcon />}
              {access === "user" && <LockOpenOutlinedIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>
          </Box>
        );
      }
    }
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subTitle="Managing the Team Members" />
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
        }
      }}>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
