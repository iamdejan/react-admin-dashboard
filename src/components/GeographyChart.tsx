import { JSX } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData as data } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function GeographyChart({isDashboard=false}: {isDashboard?: boolean}): JSX.Element {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[300]
            }
          },
          legend: {
            text: {
              fill: colors.grey[100]
            }
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1
            },
            text: {
              fill: colors.grey[100]
            }
          }
        },
        legends: {
          text: {
            fill: colors.grey[300],
          },
        },
        tooltip: {
          container: {
            background: colors.grey[900],
          },
        }
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[ 0, 1000000 ]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard? 40: 150}
      projectionTranslation={isDashboard? [0.49, 0.6]: [ 0.5, 0.5 ]}
      projectionRotation={[ 0, 0, 0 ]}
      borderWidth={0.5}
      borderColor="#000000"
      legends={
        !isDashboard? [{
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: colors.grey[400],
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors.grey[100],
                itemOpacity: 1
              }
            }
          ]
        }]: undefined
      }
    />
  );
}