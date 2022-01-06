import styled from "styled-components/macro";

export const Header = styled.div(({ theme: { breakpoint, spacing } }) => ({
  width: "100%",
  display: "flex",
  padding: "16px 50px",
  maxWidth: "1440px",
  margin: "auto",

  [breakpoint.lg()]: {
    padding: "16px 123px",
  },
}));
export const Container = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  marginTop: "16px",
  ".chatIcon": {
    marginRight: "20px",
  },
}));

export const Gap = styled.div(({ theme: { color } }) => ({
  paddingBottom: "2px",
  background: color.neutral["06"],
}));
