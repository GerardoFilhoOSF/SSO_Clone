import styled from "styled-components/macro";

export const Items = styled.ul(({ theme: { breakpoint, spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  margin: `${spacing.stack.xs} 0`,
  listStyle: "none",
  flexWrap: "nowrap",
  gap: spacing.stack["3xs"],

  [breakpoint.lg()]: {
    flexDirection: "row",
    gap: spacing.stack["2xl"],
    alignItems: "center",
  },
}));

export const Item = styled.li({
  padding: 0,
});
