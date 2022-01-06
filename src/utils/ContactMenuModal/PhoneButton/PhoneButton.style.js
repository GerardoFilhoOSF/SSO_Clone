import styled from "styled-components/macro";

export const LinkCallPhone = styled.a({
  textDecoration: "none",
});

export const PhoneButton = styled.div(
  ({ theme: { spacing, border, color, breakpoint } }) => ({
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    alignItems: "center",
    cursor: "pointer",
    padding: `${spacing.inset["3xs"]}`,
    borderRadius: border.radius["2xs"],
    boxSizing: "border-box",
    height: "75px",
    width: "100%",
    color: color.brandPrimary.light,
    border: `${border.width.sm} solid ${color.brandPrimary.light}`,
    [breakpoint.xl()]: {
      width: "50%",
    },
  })
);

export const SectionTitle = styled.div({
  width: "100%",
});

export const LeadingIcon = styled.div(({ theme: { icon, spacing } }) => ({
  display: "block",
  width: icon.size.md,
  height: icon.size.md,
  marginRight: spacing.inline["4xs"],
}));
