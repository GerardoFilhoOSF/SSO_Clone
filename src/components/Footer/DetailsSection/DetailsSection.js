import React from "react";
import { Text } from "@ds/react";
import * as S from "./DetailsSection.style";

const DetailsSection = () => {
  return (
    <S.Container>
      <Text variant="caption-02">
        Caixa Capitalização S.A. – CNPJ: 01.599.296/0001-71. É proibida a venda
        de título de capitalização a menores de 16 anos. – Art. 3º, I, do Código
        Civil. Antes de contratar, consulte previamente as Condições Gerais.
        PROC. SUSEP nº 15414.619616/2020-16 e PROC.SUSEP nº 15414.900328/2019-51
        – Modalidade Tradicional. Cobertura de Risco garantida pela Caixa
        Seguradora S.A. – CNPJ: 34.020.354/0001-10 – Proc. SUSEP
        15414.001062/2003-03. A aprovação deste plano pela SUSEP não implica,
        por parte da Autarquia, em incentivo ou recomendação à sua aquisição,
        representando, exclusivamente, sua adequação às normas em vigor. As
        condições contratuais deste produto encontram-se protocolizadas pela
        sociedade/entidade junto à SUSEP e poderão ser consultadas no endereço
        eletrônico www.susep.gov.br, de acordo com o número de processo
        constante da proposta.
      </Text>
      <Text variant="caption-02">© Copyright 2021 Cap Vencedor</Text>
    </S.Container>
  );
};

export default DetailsSection;
