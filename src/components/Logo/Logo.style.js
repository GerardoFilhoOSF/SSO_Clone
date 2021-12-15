import styled from "styled-components/macro";

export const Logo = styled.div(({ theme: { breakpoint } }) => ({
  display: "block",
  margin: 0,
  width: "128px",
  height: "36px",

  [breakpoint.lg()]: {
    width: "170px",
    height: "48px",
  },
}));
