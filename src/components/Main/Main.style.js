import styled from "styled-components/macro";

export const Main = styled.main(({ theme: { color } }) => ({
  flexGrow: 1,
  backgroundColor: color.neutral["06"],
}));

export const MainContent = styled.div(({ theme: { breakpoint, spacing } }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  paddingTop: "2px",
  paddingBottom: spacing.stack["2xs"],

  [breakpoint.lg()]: {
    padding: `2px ${spacing.stack.xl} ${spacing.stack["2xs"]} ${spacing.stack.xl}`,
  },
}));

export const Content = styled.div(() => ({
  width: "100%",
}));
