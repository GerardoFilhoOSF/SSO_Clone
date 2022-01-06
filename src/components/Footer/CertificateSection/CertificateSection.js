import React from "react";
import { Text } from "@ds/react";
import GeoTrustImage from "shared/react/assets/images/geotrust.png";
import NortonImage from "shared/react/assets/images/norton.png";
import * as S from "./CertificateSection.style";

const CertificateSection = () => {
  return (
    <S.Container>
      <Text variant="caption-01">Certificados</Text>
      <S.ImagesSection>
        <img src={GeoTrustImage} alt="imagem geotrust secured" />
        <img src={NortonImage} alt="imagem norton secured" />
      </S.ImagesSection>
    </S.Container>
  );
};

export default CertificateSection;
