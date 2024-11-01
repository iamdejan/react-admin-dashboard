import { Box } from "@mui/material";
import { JSX } from "react";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

export default function Line(): JSX.Element {
  return (
    <Box m="20px">
      <Header title="LINE CHART" subTitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
