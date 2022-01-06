import styled from "styled-components/macro";

export const Container = styled.div(
  ({ theme: { color, spacing, breakpoint } }) => ({
    display: "inline-flex",
    marginTop: spacing.stack.xs,
    padding: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    color: color.neutral["06"],

    "> *": {
      justifyContent: "space-between",
      marginBottom: spacing.stack["2xs"],

      ":last-child": {
        marginBottom: 0,
      },
    },

    [breakpoint.xl()]: {
      "&.copyright": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
    },
  })
);
