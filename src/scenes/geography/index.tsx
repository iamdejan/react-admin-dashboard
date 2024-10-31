import { Box } from "@mui/material";
import { JSX } from "react";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

export default function Geography(): JSX.Element {
  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" subTitle="Simple Geography Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
}
