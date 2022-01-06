import styled from "styled-components/macro";

export const ChatButton = styled.div(
  ({ theme: { color, border, spacing, breakpoint } }) => ({
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    flexDirection: "row",
    boxSizing: "border-box",
    cursor: "pointer",
    height: "75px",
    width: "100%",
    borderRadius: border.radius["2xs"],
    color: color.brandPrimary.light,
    border: `${border.width.sm} solid ${color.brandPrimary.light}`,
    padding: `${spacing.inset["3xs"]}`,
    [breakpoint.xl()]: {
      width: "50%",
    },
  })
);

export const LeadingIcon = styled.div(({ theme: { icon, spacing } }) => ({
  display: "block",
  width: icon.size.md,
  height: icon.size.md,
  marginRight: spacing.inline["4xs"],
}));
