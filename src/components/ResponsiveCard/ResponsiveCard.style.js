import styled from "styled-components/macro";
import { Text } from "@ds/react";

export const ResponsiveCard = styled.div(({ theme, reverse }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.color.neutral["08"],
  margin: `${theme.spacing.inline["2xs"]} 0`,
  padding: `${theme.spacing.stack.xs} ${theme.spacing.stack.sm}`,
  gap: theme.spacing.stack.xs,

  "&:last-child": {
    marginBottom: 0,
  },

  [theme.breakpoint.md()]: {
    flexDirection: reverse ? "row-reverse" : "row",
  },
}));

export const Item = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  flexBasis: "50%",
  alignItems: "center",
  gap: "16px",
  order: 2,

  "&.content": {
    alignItems: "flex-start", // NOSONAR propriedade CSS.
    order: 1,
  },

  [theme.breakpoint.md()]: {
    padding: `${theme.spacing.inline.md} 0`,
  },
}));

export const Actions = styled.div(
  ({ theme: { breakpoint, color, spacing } }) => ({
    display: "flex",
    alignSelf: "flex-start", // NOSONAR propriedade CSS.
    justifyContent: "center",
    width: "100%",

    ".action-buttons": {
      width: "100vw",
      marginLeft: `-${spacing.stack.sm}`,
      marginRight: `-${spacing.stack.sm}`,
      transform: `translateY(${spacing.stack.xs})`,
      color: color.brandSecondary.light,

      "&.main-button": {
        margin: 0,
        transform: "none",
        color: color.neutral["08"],
      },

      button: {
        color: color.brandSecondary.light,

        svg: {
          marginRight: "8px",
        },
      },
    },

    [breakpoint.md()]: {
      display: "flex",
      justifyContent: "flex-start", // NOSONAR propriedade CSS.
      gap: "16px",

      "button:hover:nth-child(2)": {
        border: `1px solid ${color.brandPrimary.light}`,
      },
    },
  })
);

export const Lead = styled(Text)(({ theme }) => ({
  color: theme.color.neutral["03"],
}));

export const Title = styled(Text)(({ theme }) => ({
  color: theme.color.neutral["02"],
  textTransform: "none",
}));

export const Description = styled.div(({ theme }) => ({
  color: theme.color.neutral["02"],
  fontSize: "20px",
}));

export const Caption = styled.div(({ theme }) => ({
  color: theme.color.neutral["02"],
  fontWeight: "bold",
  fontSize: "20px",
}));
