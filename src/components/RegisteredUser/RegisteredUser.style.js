import styled from "styled-components/macro";

import { Grid as DSGrid } from "@ds/react";

export const Register = styled.div(({ theme: { color, breakpoint } }) => ({
  color: color.neutral["02"],
  [breakpoint.lg()]: {
    maxWidth: "100vw",
    maxHeight: "100%",
  },
}));
export const RegisterContent = styled.div(
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

export const Grid = styled(DSGrid)(({ theme: { breakpoint, spacing } }) => ({
  display: "flex",
  justifyContent: "space-around",
  margin: `${spacing.inline["xs"]} ${spacing.inline["5xs"]} 0`,

  [breakpoint.xl()]: {
    "> *": {
      "div input.FormInput": {
        width: "50%",
      },
      "button.FormButton": {
        width: "50%",
      },
    },
  },
}));
export const AlignItems = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: spacing.stack.xs,
}));

export const Button = styled.div(({ theme: { breakpoint } }) => ({
  display: "flex",
  justifyContent: "space-around",

  [breakpoint.xl()]: {
    width: "50%",
  },
}));

export const AlignInput = styled.div(({ theme: { breakpoint } }) => ({
  width: "100%",
  [breakpoint.xl()]: {
    width: "50%",
  },
}));
