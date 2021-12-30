import styled from "styled-components";

export const MobileContainer = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  padding: spacing.squeeze.xl,
  background: "transparent",
}));
