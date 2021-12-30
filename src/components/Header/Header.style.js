import styled from "styled-components/macro";

export const Header = styled.div(({ theme: { breakpoint, spacing } }) => ({
  width: "100%",
  display: "flex",
  padding: "16px",
  maxWidth: "1440px",
  margin: "0 auto",
  paddingTop: "30px",
  [breakpoint.lg()]: {
    padding: `2px ${spacing.stack.xl} ${spacing.stack["2xs"]} ${spacing.stack.xl}`,
    paddingTop: "30px",
  },
}));
export const Container = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  ".chatIcon": {
    marginRight: "20px",
  },
}));
