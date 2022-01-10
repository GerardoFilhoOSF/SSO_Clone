import styled from "styled-components/macro";
import { Grid as DSGrid } from "@ds/react";

export const TentativasExcedidas = styled.div(
  ({ theme: { color, breakpoint } }) => ({
    color: color.neutral["02"],
    [breakpoint.lg()]: {
      maxWidth: "100vw",
      maxHeight: "100%",
    },
  })
);
export const TentativasExcedidasContent = styled.div(
  ({ theme: { breakpoint, spacing } }) => ({
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",

    paddingBottom: spacing.stack["2xs"],
    [breakpoint.lg()]: {
      padding: `2px ${spacing.stack.xl} ${spacing.stack["2xs"]} ${spacing.stack.xl}`,
    },
  })
);
export const Grid = styled(DSGrid)(({ theme: { breakpoint, color } }) => ({
  display: "flex",
  justifyContent: "space-around",
  margin: "25px 10px 0",
  "a.forgot": {
    color: `${color.brandSecondary.light} !important`,
    fontSize: "14px",
  },
  ".title": {
    fontSize: "28px",
    textTransform: "none",
    marginBottom: "24px",
  },
  ".Link span": {
    display: "none",
  },

  [breakpoint.lg()]: {
    marginLeft: 0,
    ".Link span": {
      display: "flex",
      textDecorationLine: "none",
    },
    ".title": {
      fontSize: "32px",
      marginBottom: "48px",
      width: "90%",
    },
    ".FormButton": {
      width: "50%",
    },
  },
}));

export const AlignItems = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: spacing.stack.xs,
}));
