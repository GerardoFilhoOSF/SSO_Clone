import styled from "styled-components/macro";
import { Accordion, Divider } from "@ds/react";

export const Container = styled.div(({ theme: { spacing, breakpoint } }) => ({
  padding: `0 ${spacing.inline["3xs"]}`,

  [breakpoint.lg()]: {
    padding: `0 ${spacing.stack["4xl"]}`,
  },
}));

export const CustomAccordion = styled(Accordion)(({ theme: { color } }) => ({
  "> *": {
    marginBottom: 0,
    svg: {
      maxHeight: "28px",
      maxWidth: "28px",
      position: "relative",
      top: "-4px",
      left: "-4px",
    },
    "*": {
      fill: color.neutral["08"],
      color: color.neutral["08"],
    },

    "* > :last-child > span": {
      display: "block",
    },

    ":hover *": {
      fill: color.neutral["08"],
      color: color.neutral["08"],
    },
  },

  "> hr": {
    display: "none",
  },
}));

export const FullDivider = styled(Divider)({
  width: "100%",

  "@media screen and (min-width: 1440px)": {
    width: "100vw",
    transform: "translateX(calc((1440px - 100vw) / 2))",
  },
});
