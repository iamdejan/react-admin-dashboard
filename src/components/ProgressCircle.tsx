import { JSX } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

/**
 * ProgressCircle is a component to display progress in a circular form.
 * Reference: https://www.joshmorony.com/create-a-circle-progress-web-component-with-conic-gradients-in-stencil-js/
 */
export default function ProgressCircle({progress = 0.75, size = 40}: {progress?: number, size?: number}): JSX.Element {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const percentage = progress * 100;

  return (
    <Box
      sx={{
        margin: "1rem",
        width: `${size.toString()}px`,
        height: `${size.toString()}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `conic-gradient(${colors.blueAccent[500]} ${(percentage).toString()}%, 0, ${colors.greenAccent[500]} ${(100 - percentage).toString()}%)`,
        borderRadius: "50%"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.primary[400],
          height: "80%",
          width: "80%",
          borderRadius: "50%",
          boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.1)"
        }}
      />
    </Box>
  );
}
