import styled from "styled-components/macro";

export const Container = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  margin: `${spacing.stack.xs} 0`,
}));

export const ImagesSection = styled.ul(({ theme: { spacing } }) => ({
  display: "inline-flex",
  padding: 0,
  marginBottom: 0,
  listStyle: "none",
  flexWrap: "nowrap",

  "> *": {
    marginRight: spacing.inline.sm,

    ":last-child": {
      marginRight: 0,
    },
  },
}));
