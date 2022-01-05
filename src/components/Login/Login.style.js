import styled from "styled-components/macro";
import { Grid as DSGrid } from "@ds/react";
import BannerDesktop from "assets/images/Banner-Desktop.png";
import BannerMobile from "assets/images/Banner-Mobile.png";

export const Login = styled.main(
  ({ theme: { breakpoint, spacing, color } }) => ({
    color: color.line.light,
    flexGrow: 1,
    backgroundImage: `url(${BannerMobile})`,
    backgroundSize: "cover",

    [breakpoint.lg()]: {
      backgroundImage: `url(${BannerDesktop})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      maxWidth: "100%",
      maxHeight: "100%",
      paddingBottom: spacing.inline["xl"],
    },
  })
);

export const LoginContent = styled.div(
  ({ theme: { breakpoint, spacing, color } }) => ({
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    paddingBottom: spacing.stack["2xs"],

    [breakpoint.lg()]: {
      padding: `2px ${spacing.inline["7xl"]} ${spacing.stack["2xs"]} ${spacing.stack.xl}`,
    },
  })
);

export const Grid = styled(DSGrid)(
  ({ theme: { breakpoint, color, spacing } }) => ({
    display: "flex",
    justifyContent: "space-between",
    margin: `${spacing.inline["xs"]} ${spacing.inline["5xs"]} 0`,
    ".title": {
      textTransform: "none",
    },
    "> *": {
      "&.titleSide": {
        lineHeight: spacing.inline["2xl"],
        paddingBottom: spacing.inline["3xs"],
      },
      "&.formSide": {
        span: {
          fontWeight: 500,
        },
        input: {
          border: `1px solid ${color.line.light} !important`,
          background: "transparent",
        },
        "span, input": {
          color: `${color.line.light} !important`,
        },
      },
      ".forgot": {
        marginBottom: spacing.inset["xs"],
      },
    },

    [breakpoint.lg()]: {
      "> div": {
        "a span": {
          color: color.line.light,
        },
        "&.titleSide": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
        "&.formSide": {
          background: color.line.light,
          flexBasis: 1,
          marginTop: spacing.inline["lg"],
          padding: spacing.inline["3xs"],
          borderRadius: spacing.inline["6xs"],
          "button.primary span, button.secondary:hover span": {
            color: `${color.line.light} !important`,
          },

          span: {
            fontWeight: 500,
          },
          input: {
            border: `1px solid ${color.neutral["03"]} !important`,
          },
          "span, input": {
            color: `${color.brandPrimary.dark} !important`,
          },
          "a span": {
            color: `${color.brandSecondary.light} !important`,
            fontSize: "14px",
          },

          button: {
            width: "100%",
          },
        },
      },
    },
  })
);

export const NewHeader = styled.div(({ theme: { spacing } }) => ({
  width: "100%",
  display: "flex",
  padding: spacing.inline["3xs"],
}));
export const Container = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  ".chatIcon": {
    marginRight: spacing.inline["2xs"],
  },
}));
export const Recaptcha = styled.div(({ theme: { spacing } }) => ({
  display: "flex",
  justifyContent: "center",
  // width: "100%",
}));

export const Button = styled.div(
  ({ theme: { breakpoint, spacing, color } }) => ({
    display: "flex",
    flexDirection: "column",
    margin: `${spacing.inline["3xs"]} 0`,
    ".secondary": {
      border: `1px solid ${color.line.light}`,
    },

    [breakpoint.lg()]: {
      flexDirection: "row",
      ".secondary": {
        border: `1px solid ${color.brandPrimary.dark}`,
      },
    },
  })
);
