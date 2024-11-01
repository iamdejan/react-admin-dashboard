import { Box, useTheme } from "@mui/material";
import { JSX } from "react";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

export default function Geography(): JSX.Element {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" subTitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}
