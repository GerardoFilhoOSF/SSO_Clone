import React from "react";
import { Text } from "@ds/react";
import * as S from "./DetailsSection.style";

const DetailsSection = () => {
  return (
    <S.Container>
      <Text variant="caption-02">
        CNP Seguros Holding Brasil - CNPJ 34.020.354/0001-10
      </Text>
      <Text variant="caption-02">
        Edifício Sede: SHN Quadra 01, Conjunto A, Bloco E, Brasília/DF - CEP:
        70.701-050
      </Text>
      <Text variant="caption-02">
        © Copyright 2017 CNP Seguros Holding Brasil
      </Text>
    </S.Container>
  );
};

export default DetailsSection;
