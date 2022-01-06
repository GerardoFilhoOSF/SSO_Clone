import React from "react";
import { Text } from "@ds/react";
import * as S from "./DetailsSection.style";

const DetailsSection = () => {
  return (
    <>
      <S.Container>
        <Text variant="caption-02">
          Caixa Consórcios S/A Administradora de Consórcios - CNPJ
          05.349.595/0004-51
        </Text>
      </S.Container>
      <S.Container className="copyright">
        <Text variant="caption-02">
          Edifício Sede: SHN Quadra 01, Conjunto A, Bloco E - Brasília/DF - CEP:
          70701-050
        </Text>
        <Text variant="caption-02">© Copyright 2021 CNP Consórcio</Text>
      </S.Container>
    </>
  );
};

export default DetailsSection;
