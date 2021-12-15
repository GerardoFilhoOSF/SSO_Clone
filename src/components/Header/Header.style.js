import styled from "styled-components/macro";

export const Header = styled.header(({ theme: { color } }) => ({
  backgroundColor: color.line.light,
}));

export const HeaderContent = styled.div(({ theme: { color, breakpoint } }) => ({
  maxWidth: "1440px",
  width: "100%",
  margin: "auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "64px",

  backgroundColor: color.line.light,

  [breakpoint.lg()]: {
    height: "100px",
  },
}));

export const SectionMenu = styled.div(({ theme: { breakpoint, spacing } }) => ({
  display: "flex",
  alignItems: "center",
  padding: 0,
  marginLeft: spacing.stack["3xs"],

  [breakpoint.lg()]: {
    marginLeft: spacing.stack.xl,
  },
}));
