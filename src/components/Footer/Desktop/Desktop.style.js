import styled from "styled-components";

export const DesktopContainer = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  margin: 0,
  padding: `${spacing.stack.md} ${spacing.stack["4xl"]}`,
  paddingBottom: 0,
  background: "transparent",
}));

export const SocialAndCertificatesSection = styled.div(
  ({ theme: { spacing } }) => ({
    display: "flex",
    justifyContent: "space-between",

    "> *": {
      marginRight: spacing.stack["3xl"],

      ":last-child": {
        marginRight: 0,
      },
    },
  })
);
