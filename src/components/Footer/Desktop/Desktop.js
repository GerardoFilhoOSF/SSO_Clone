import React from "react";
import { Divider } from "@ds/react";

import Logo from "components/Logo";
import { ReactComponent as CapLogoFooter } from "assets/images/Logo-Footer.svg";

import SocialStoresSection from "../SocialStoresSection";
import LinksSection from "../LinksSection";
import CertificateSection from "../CertificateSection";
import DetailsSection from "../DetailsSection";
import * as S from "./Desktop.style";

const Desktop = () => {
  return (
    <S.DesktopContainer>
      <Logo data-label="footer logo">
        <CapLogoFooter />
      </Logo>
      <LinksSection direction="row" />
      <Divider />
      <S.SocialAndCertificatesSection>
        <SocialStoresSection />
        <CertificateSection />
      </S.SocialAndCertificatesSection>
      <Divider />
      <DetailsSection direction="row" />
    </S.DesktopContainer>
  );
};

export default Desktop;
