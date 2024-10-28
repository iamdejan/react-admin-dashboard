import { Box } from "@mui/material";
import { JSX } from "react";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

export default function Bar(): JSX.Element {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subTitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}
