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
        <Text variant="body-02-lg">
          O jeito inteligente e digital de acompanhar sua capitalização: 2ª via
          de boleto, consulta de saldo, histórico de pagamento, resultado dos
          sorteios. Você no controle!
        </Text>
      </S.Container>
    </S.DescriptionLogin>
  );
};

export default DescriptionLogin;
