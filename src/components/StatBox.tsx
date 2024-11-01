import { JSX } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

type StatBoxProps = {
  title: string,
  subTitle: string,
  icon: string,
  progress: number,
  increase: string
};

export default function StatBox({title, subTitle, icon, progress, increase}: StatBoxProps): JSX.Element {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{color: colors.grey[100]}}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h5"
            sx={{color: colors.greenAccent[500]}}
          >
            {subTitle}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{color: colors.greenAccent[600]}}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
