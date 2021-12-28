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
      maxWidth: "100vw",
      maxHeight: "100%",
    },
  })
);

export const LoginContent = styled.div(
  ({ theme: { breakpoint, spacing, color } }) => ({
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    paddingTop: "2px",
    paddingBottom: spacing.stack["2xs"],

    [breakpoint.lg()]: {
      padding: `2px ${spacing.stack.xl} ${spacing.stack["2xs"]} ${spacing.stack.xl}`,
    },
  })
);

export const Grid = styled(DSGrid)(({ theme: { breakpoint, color } }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "25px 10px 0",
  ".title": {
    textTransform: "none",
  },
  "> *": {
    // paddingTop: 0,
    // paddingBottom: 0,
    "&.titleSide": {
      lineHeight: "45px",
      paddingBottom: "18px",
    },
    "&.formSide": {
      span: {
        fontWeight: 500,
        color: "white !important",
      },
      input: {
        border: "1px solid white !important",
        background: "transparent",
        color: "white !important",
      },
      button: {
        // marging: "10px",
      },
    },
    ".forgot": {
      padding: "15px 2px 25px",
    },
  },

  [breakpoint.lg()]: {
    "> *": {
      // paddingTop: 0,
      // paddingBottom: 0,
      "&.titleSide": {
        lineHeight: "45px",
        paddingBottom: "18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      "&.formSide": {
        background: "white",
        flexBasis: "32%",
        borderRadius: "4px",
        span: {
          fontWeight: 500,
          color: "black !important",
        },
        "button span": {
          color: "white !important",
        },
        ".secondary span": {
          color: "black !important",
          ":hover": {
            color: "white !important",
          },
        },

        input: {
          border: "1px solid gray !important",
          color: "black !important",
        },
        button: {
          width: "100%",
        },
      },
      ".forgot": {
        padding: "15px 2px 25px",
      },
    },
  },
}));

export const NewHeader = styled.div(() => ({
  width: "100%",
  display: "flex",
  padding: "16px",
}));
export const Container = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  ".chatIcon": {
    marginRight: "20px",
  },
}));

// export const LoginTextField = styled(TextField)(() => ({
//   background: "transparent",
//   color: "blue",
//   border: "1px solid yellow",
//   span: {
//     color: "yellow",
//   },
// }));

export const Button = styled.div(
  ({ theme: { breakpoint, spacing, color } }) => ({
    display: "flex",
    flexDirection: "column",
    margin: "25px 0",
    ".secondary": {
      border: "1px solid white",
    },

    [breakpoint.lg()]: {
      flexDirection: "row",
      ".secondary": {
        border: `1px solid black`,
        color: "white !important",
      },
    },
  })
);
