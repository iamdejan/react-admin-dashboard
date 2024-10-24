import { JSX } from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

export default function Dashboard(): JSX.Element {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard!" />
      </Box>
    </Box>
  );
}
