import styled from "styled-components/macro";

export const Header = styled.div(({ theme: { breakpoint, spacing } }) => ({
  width: "100%",
  padding: "16px 50px",
  maxWidth: "1440px",
  margin: "auto",

  " .Link span": {
    fontSize: "16px",
    textDecoration: "none",
  },

  [breakpoint.lg()]: {
    padding: "16px 123px",
    " .Link span": {
      display: "none",
    },
  },
}));
export const Container = styled.div(({ theme: { breakpoint } }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",

  [breakpoint.lg()]: {},
}));

export const ContainerImg = styled.div(({ theme: { breakpoint } }) => ({
  marginTop: "16px",
  ".chatIcon": {
    marginRight: "20px",
  },

  [breakpoint.lg()]: {},
}));

export const Gap = styled.div(({ theme: { color } }) => ({
  paddingBottom: "2px",
  background: color.neutral["06"],
}));
