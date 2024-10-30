import { Box } from "@mui/material";
import { JSX } from "react";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

export default function Pie(): JSX.Element {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subTitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
