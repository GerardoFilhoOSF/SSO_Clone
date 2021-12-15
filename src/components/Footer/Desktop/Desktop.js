import React from "react";
import { Divider } from "@ds/react";

import Logo from "./../../Logo";
import LinksSection from "./../LinksSection";
import SocialStoresSection from "./../SocialStoresSection";
import CertificateSection from "./../CertificateSection";
import DetailsSection from "./../DetailsSection";
import * as S from "./Desktop.style";

const Desktop = () => {
  return (
    <S.DesktopContainer>
      <Logo data-label="footer logo" />
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
