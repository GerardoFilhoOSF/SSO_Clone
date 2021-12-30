import React from "react";
import { Hidden } from "@ds/react";

import CustomAccordion from "./CustomAccordion";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { DESKTOP, MOBILE } from "constants/breakpoints";
import * as S from "./Footer.style";

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
