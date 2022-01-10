import styled from "styled-components/macro";
import { Grid as DSGrid } from "@ds/react";

export const LinkValidado = styled.div(({ theme: { breakpoint } }) => ({
  maxWidth: "1440px",
  margin: "36px 16px",
  [breakpoint.lg()]: {
    margin: "auto",
    padding: "36px 0",
    ".leftSide": {
      paddingLeft: "120px",
      width: "65%",
      lineHeight: "48px",
    },
    ".subtitle": {
      lineHeight: "32px",
      marginBottom: "20px",
    },
  },
}));
export const Container = styled.div(({ theme: { breakpoint } }) => ({
  justifyContent: "flex-start",
  width: "100%",
  ".text": {
    textTransform: "none",
    lineHeight: "42px",
  },
  [breakpoint.lg()]: {
    width: "50%",
  },
}));

export const Grid = styled(DSGrid)(
  ({ theme: { breakpoint, color, spacing } }) => ({
    display: "flex",
    // margin: `${spacing.inline["xs"]} ${spacing.inline["5xs"]} 0`,
    "> *": {
      ".validadoImg": {
        maxWidth: "250px",
        maxHeight: "220px",
      },
      ".subtitle, .subtitle2": {
        lineHeight: "28px",
      },
      ".subtitle2": {
        width: "90%",
        paddingBottom: "30px",
      },
      "&.leftSide": {
        paddingBottom: spacing.inline["3xs"],
      },
      "&.rightSide": {
        button: {
          width: "100%",
        },
      },
    },

    [breakpoint.lg()]: {
      "> div": {
        ".validadoImg": {
          maxWidth: "384px",
          maxHeight: "336px",
        },
        "&.leftSide": {
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "36px",
        },
        "&.rightSide": {
          marginTop: spacing.inline["lg"],
          padding: spacing.inline["3xs"],
          borderRadius: spacing.inline["6xs"],
          button: {
            width: "auto",
          },
        },
      },
    },
  })
);
