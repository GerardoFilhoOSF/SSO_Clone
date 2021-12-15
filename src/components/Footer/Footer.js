import React from "react";
import * as S from "./Footer.style";
import { Hidden } from "@ds/react";

import CustomAccordion from "./CustomAccordion";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { DESKTOP, MOBILE } from "./../../constants/breakpoints";

const Footer = () => {
  return (
    <>
      <S.Footer data-label="footer section">
        <CustomAccordion />
        <Hidden only={DESKTOP}>
          <Mobile />
        </Hidden>
        <Hidden only={[...MOBILE]}>
          <Desktop />
        </Hidden>
      </S.Footer>
    </>
  );
};

export default Footer;
