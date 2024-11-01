import { JSX } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function ProgressCircle({progress = 0.75, size = 40}: {progress?: number, size?: number}): JSX.Element {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360.0;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
          conic-gradient(transparent 0deg ${angle.toString()}deg, ${colors.blueAccent[500]} ${angle.toString()}deg 360deg)},
          ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size.toString()}px`,
        height: `${size.toString()}px`,
      }}
    />
  );
}
