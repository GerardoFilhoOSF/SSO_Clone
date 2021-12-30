import styled from "styled-components/macro";
import { Text } from "@ds/react";
import { ReactComponent as ServiceErrorImg } from "assets/icons/ErroTomada.svg";

const FOOTER_HEIGHT = "355px";

export const ErrorBoundary = styled.div(({ theme: { color } }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: color.neutral["08"],
}));

export const Main = styled.div(({ theme: { breakpoint, spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  alignItems: "center",
  width: "100%",
  maxWidth: "1440px",
  minHeight: `calc(100vh - ${FOOTER_HEIGHT})`,
  paddingTop: "2px",
  paddingBottom: spacing.stack["2xs"],
  gap: spacing.stack["2xs"],

  [breakpoint.lg()]: {
    flexDirection: "row",
    padding: `2px ${spacing.stack.xl} ${spacing.stack["2xs"]} ${spacing.stack.xl}`,
  },
}));

export const Wrapper = styled.div(({ theme: { breakpoint } }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "70px",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",

  [breakpoint.lg()]: {
    flexDirection: "row",
  },
}));

export const Content = styled.div(({ theme: { breakpoint, spacing } }) => ({
  textAlign: "center",
  maxWidth: "unset",

  "> *": {
    marginBottom: spacing.stack["2xs"],

    ":last-child()": {
      marginBottom: 0,
    },
  },

  [breakpoint.lg()]: {
    textAlign: "left",
    maxWidth: "480px",
  },
}));

export const Title = styled(Text)(({ theme: { color } }) => ({
  color: color.brandPrimary.light,
}));

export const Subtitle = styled(Text)(({ theme: { color } }) => ({
  color: color.brandPrimary.light,
}));

export const ServiceErrorImage = styled(ServiceErrorImg)(
  ({ theme: { breakpoint } }) => ({
    width: "100vw",

    [breakpoint.lg()]: {
      width: "50%",
    },
  })
);
