import styled from "styled-components/macro";

export const DescriptionLogin = styled.div(
  ({ theme: { spacing, breakpoint } }) => ({
    padding: `60px ${spacing.inline["3xs"]}`,

    [breakpoint.lg()]: {
      padding: `0 ${spacing.stack["4xl"]}`,
      display: "flex",
      justifyContent: "center",
    },
  })
);

export const Container = styled.div(({ theme: { breakpoint, spacing } }) => ({
  width: "100%",
  "&.texto": {
    paddingTop: `${spacing.inline["3xs"]}`,
    lineHeight: "160%",
  },
  [breakpoint.lg()]: {
    padding: "16px 0",
    "&.texto": {
      width: "40%",
    },
    "&.logo": {
      display: "flex",
      alignItems: "center",
      width: "25%",
    },
  },
}));
