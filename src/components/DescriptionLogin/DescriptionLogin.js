import React from "react";
import { ReactComponent as Logo } from "assets/images/Logo-CNP.svg";
import * as S from "./DescriptionLogin.style";
import { Text } from "@ds/react";

const DescriptionLogin = () => {
  return (
    <S.DescriptionLogin>
      <S.Container className="logo">
        <Logo />
      </S.Container>
      <S.Container className="texto">
        <Text variant="body-02-md">
          O jeito inteligente e digital de acompanhar seu consórcio: 2ª via de
          boleto, consulta de saldo, histórico de pagamento, consulta de cotas,
          lances, assembléias. Você no controle!
        </Text>
      </S.Container>
    </S.DescriptionLogin>
  );
};

export default DescriptionLogin;
