import styled from "styled-components/macro";

export const Footer = styled.footer(({ theme: { color } }) => ({
  backgroundColor: color.brandPrimary.medium,
}));

export const FooterContentWrapper = styled.div(({ theme: { color } }) => ({
  maxWidth: "1440px",
  display: "block",
  flexDirection: "column",
  margin: "auto",
  padding: 0,
  left: 0,
  bottom: 0,
  width: "100%",
  color: color.neutral["08"],
}));

export const FooterContent = styled.div(
  ({ theme: { spacing, breakpoint } }) => ({
    display: "flex",
    flexDirection: "column",
    padding: `0 ${spacing.stack["3xs"]} ${spacing.stack.xl}`,
    background: "transparent",

    [breakpoint.lg()]: {
      margin: 0,
      padding: `0 ${spacing.stack.xl} ${spacing.stack.md}`,
    },
  })
);
