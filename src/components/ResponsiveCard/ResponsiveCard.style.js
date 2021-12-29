import styled from "styled-components/macro";
import { Text } from "@ds/react";

export const ResponsiveCard = styled.div(
  ({ theme: { reverse, spacing, color, breakpoint } }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: color.neutral["08"],
    margin: `${spacing.inline["2xs"]} 0`,
    padding: `2px ${spacing.stack.xl} ${spacing.stack["2xs"]} ${spacing.stack.xl}`,
    gap: spacing.stack.xs,

    [breakpoint.md()]: {
      flexDirection: reverse ? "row-reverse" : "row",
    },
  })
);

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
