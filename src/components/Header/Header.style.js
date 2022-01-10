import styled from "styled-components/macro";

export const Header = styled.div(({ theme: { breakpoint, spacing } }) => ({
  width: "100%",
  padding: "16px",
  maxWidth: "1440px",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",

  " .Link span": {
    fontSize: "16px",
    textDecoration: "none",
    width: "60px",
  },

  [breakpoint.lg()]: {
    padding: "16px 123px",
    " .Link span": {
      display: "none",
      justifyItems: "inherit",
    },
  },
}));
export const Container = styled.div(({ theme: { breakpoint } }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "20%",

  ".logo": {
    width: "33%",
    minWidth: "49%",
  },

  [breakpoint.lg()]: {
    marginLeft: 0,

    ".logo": {
      width: "10%",
      minWidth: "100px",
    },
    justifyContent: "space-between",
  },
}));
export const Container2 = styled.div(({ theme: { breakpoint } }) => ({
  display: "flex",
  alignItems: "center",
  paddingRight: "8",
  [breakpoint.lg()]: {
    paddingRight: 0,
  },
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
