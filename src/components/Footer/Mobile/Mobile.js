import React from "react";
import { Divider } from "@ds/react";

import Logo from "./../../Logo";
import { ReactComponent as CapLogoFooter } from "assets/images/Logo-Footer.svg";
import LinksSection from "./../LinksSection";
import SocialStoresSection from "./../SocialStoresSection";
import CertificateSection from "./../CertificateSection";
import DetailsSection from "./../DetailsSection";

import * as S from "./Mobile.style";

const Mobile = () => {
  return (
    <S.MobileContainer>
      <Logo data-label="footer logo">
        <CapLogoFooter />
      </Logo>
      <LinksSection />
      <Divider />
      <SocialStoresSection />
      <CertificateSection />
      <Divider />
      <DetailsSection />
    </S.MobileContainer>
  );
};

export default Mobile;
