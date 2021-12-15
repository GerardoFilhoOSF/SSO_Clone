import styled from "styled-components";

export const Items = styled.ul(() => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  margin: 0,
  listStyle: "none",
}));

export const Item = styled.li(() => ({
  ":last-child > :last-child": {
    display: "none",
  },
}));

export const Section = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  margin: `${spacing.stack.sm} 0`,
  justifyContent: "center",

  "> *": {
    marginBottom: spacing.stack["5xs"],

    ":last-child": {
      marginBottom: 0,
    },
  },
}));
