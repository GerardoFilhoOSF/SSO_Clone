import styled from "styled-components/macro";

export const Register = styled.div(({ theme: { spacing, color } }) => ({
  width: "100%",
  margin: `${spacing.inline["2xs"]} 0`,
  color: color.neutral["02"],
  padding: `2px ${spacing.stack.xl} ${spacing.stack["2xs"]} ${spacing.stack.xl}`,
}));

export const AlignItems = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: spacing.stack.xs,
}));

export const AlignButton = styled.div(({ theme: { breakpoint, spacing } }) => ({
  [breakpoint.md()]: {},
}));

export const Teste = styled.div(({ theme: { color } }) => ({
  div: {
    color: color.neutral["03"],
  },
}));
