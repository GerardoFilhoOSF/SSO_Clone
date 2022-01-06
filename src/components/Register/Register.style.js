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

export const Grid = styled(DSGrid)(({ theme: { breakpoint, color } }) => ({
  display: "flex",
  justifyContent: "space-around",
  margin: "25px 10px 0",

  [breakpoint.lg()]: {
    margin: "25px 0px 0",
    "> *": {
      "div input.FormInput": {
        width: "50%",
      },
      "button.FormButton": {
        width: "50%",
      },
      " a .Link": {
        fontSize: "30px",
        textDecoration: "none",
      },
    },
  },
}));
export const AlignItems = styled.div(({ theme: { spacing, color } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: spacing.stack.xs,
  ".title": {
    fontSize: "32px",
  },
  ".FormText": {
    fontSize: "24px",
  },
  ".FormLink": {
    color: color.brandSecondary.light,
    fontSize: "14px",
  },
  "a span": {
    fontSize: "14px",
    textDecoration: "none",
  },
}));
export const Button = styled.div(({ theme: { breakpoint } }) => ({
  display: "flex",
  justifyContent: "space-around",
  [breakpoint.xl()]: {
    width: "50%",
    justifyContent: "space-between",
  },
}));
export const Recaptcha = styled.div(({ theme: { breakpoint } }) => ({
  display: "flex",
  justifyContent: "center",
  [breakpoint.lg()]: {
    justifyContent: "flex-start",
  },
}));
export const AlignInput = styled.div(({ theme: { breakpoint } }) => ({
  width: "100%",
  [breakpoint.xl()]: {
    width: "50%",
  },
}));
