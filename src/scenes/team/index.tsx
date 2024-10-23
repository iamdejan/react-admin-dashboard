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
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4 px"
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
        );
      }
    }
  ];

  return (
    <Box>
      <Header title="TEAM" subTitle="Managing the Team Members" />
      <Box>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
