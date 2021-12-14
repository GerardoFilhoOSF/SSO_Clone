import styled from "styled-components/macro";
import { ReactComponent as CapLogo } from "./../../assets/images/Logo-CNP.svg";

export const Logo = styled(CapLogo)(({ theme: { breakpoint } }) => ({
  display: "block",
  margin: 0,
  width: "128px",
  height: "36px",

  [breakpoint.lg()]: {
    width: "170px",
    height: "48px",
  },
}));
