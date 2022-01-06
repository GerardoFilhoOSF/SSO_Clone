import styled from "styled-components/macro";
import { Text } from "@ds/react";
import CustomDivider from "components/CustomDivider";

export const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  margin: 0,

  "> *": {
    marginBottom: "60px",
  },
}));

export const Message = styled(Text)(() => ({
  marginBottom: "40px",
  textTransform: "none",
}));

export const Section = styled.div(({ theme: { spacing, breakpoint } }) => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  width: "100%",
  minHeight: "min-content",

  [breakpoint.lg()]: {
    flexDirection: "row",

    "> *": {
      marginRight: spacing.inline.md,

      ":last-child": {
        marginRight: 0,
      },
    },
  },
}));

export const Item = styled.div(({ theme: { spacing, breakpoint } }) => ({
  display: "inline-flex",
  flex: 1,
  width: "100%",
  boxSizing: "content-box",
  marginBottom: "60px",
  lineHeight: spacing.inline["xs"],

  ":last-child": {
    marginBottom: 0,
  },

  [breakpoint.lg()]: {
    marginBottom: 0,
  },
}));

export const Divider = styled(CustomDivider)(({ theme: { color } }) => ({
  width: "2px",
  height: "auto",
  backgroundColor: color.brandTertiary.light,
}));

export const Content = styled.div(() => ({
  width: "100%",
  marginLeft: "16px",

  "> *": {
    marginBottom: "12px",

    ":last-child": {
      marginBottom: 0,
    },
  },
}));

export const Block = styled.div(() => ({
  "> *": {
    marginBottom: "4px",

    ":last-child": {
      marginBottom: 0,
    },
  },
}));

export const Title = styled(Text)(() => ({
  textTransform: "none",
}));
