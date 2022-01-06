import React from "react";
import * as S from "./Footer.style";
import { Divider } from "@ds/react";

import CustomAccordion from "./CustomAccordion";
import LinksSection from "./LinksSection";
import DetailsSection from "./DetailsSection";

const Footer = () => {
  return (
    <>
      <S.Footer data-label="footer section">
        <S.FooterContentWrapper>
          <CustomAccordion />
          <S.FooterContent>
            <LinksSection />
            <Divider />
            <DetailsSection />
          </S.FooterContent>
        </S.FooterContentWrapper>
      </S.Footer>
    </>
  );
};

export default Footer;
