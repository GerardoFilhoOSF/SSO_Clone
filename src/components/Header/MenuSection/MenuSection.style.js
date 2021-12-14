import styled from "styled-components/macro";

export const Items = styled.ul(({ theme: { breakpoint } }) => ({
  display: "none",

  [breakpoint.lg()]: {
    display: "flex",
    margin: 0,
    listStyle: "none",
    alignItems: "center",
  },
}));

export const Item = styled.li(({ theme: { color, spacing } }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  padding: `${spacing.stack.sm} 0`,
  width: "170px",
  height: "inherit",

  "> * ": {
    color: color.neutral["08"],
  },
}));

export const HeaderLink = styled.a(() => ({
  display: "flex",
  cursor: "pointer",
  textAlign: "center",
  alignItems: "center",
  textDecoration: "none",
}));

export const Icon = styled.svg(({ theme: { spacing, icon } }) => ({
  display: "block",
  width: icon.size.sm,
  height: icon.size.sm,
  marginLeft: spacing.inline["5xs"],
}));
