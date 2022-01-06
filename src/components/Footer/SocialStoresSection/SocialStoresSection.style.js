import styled from "styled-components/macro";

export const Container = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  padding: 0,
  margin: "0 0",
  marginTop: spacing.stack.xs,
}));

export const SocialSection = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  marginRight: spacing.inline["6xl"],
}));

export const StoresSection = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const IconsSection = styled.ul(({ theme: { spacing } }) => ({
  display: "inline-flex",
  padding: 0,
  listStyle: "none",
  flexWrap: "nowrap",

  "> *": {
    marginRight: spacing.inline.xs,

    ":last-child": {
      marginRight: 0,
    },
  },
}));

export const LinkIcon = styled.a(({ theme: { icon } }) => ({
  width: icon.size.sm,
  height: icon.size.sm,
  cursor: "pointer",
}));
