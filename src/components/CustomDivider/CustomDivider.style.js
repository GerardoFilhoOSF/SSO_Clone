import styled from "styled-components/macro";
import { Divider } from "@ds/react";

const getOrientationStyle = (orientation, size, width, height) => {
  let style = {
    width: width || "100%",
    height: height || size.horizontal.sm,
  };

  if (orientation === "vertical") {
    style = {
      width: width || size.vertical.sm,
      height: height || "1rem",
    };
  }

  return style;
};

export const Separator = styled(Divider)(
  ({
    theme: { color: themeColor, divider },
    orientation,
    width,
    height,
    color,
  }) => ({
    backgroundColor: color || themeColor.neutral["05"],
    ...getOrientationStyle(orientation, divider, width, height),
  })
);
