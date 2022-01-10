import React from "react";
import { Button, Text } from "@ds/react";
import Header from "components/Header";
import Footer from "components/Footer";

import { ReactComponent as Validado } from "assets/images/linkValidado.svg";
import * as S from "./LinkValidado.style";

const LinkValidado = () => {
  return (
    <>
      <Header />
      <S.LinkValidado>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 2}>
            <S.Container className="leftSide">
              <Text variant="headline-04" className="text">
                Tudo certo com a autorização do seu dispositivo
              </Text>
              <Text variant="body-02-lg" className="subtitle">
                Dica: no seu perfil você tem acesso aos dispositivos autorizados
                e pode excluir aqueles que não usa mais.
              </Text>
            </S.Container>
          </S.Grid.Item>
          <S.Grid.Item xs={1} lg={1 / 2} className="rightSide">
            <Validado className="validadoImg" />
            <Text variant="body-02-lg" className="subtitle2">
              A partir de agora você pode acessar todas as funcionalidades do
              seu produto.
            </Text>
            <Button variant="primary-01-md">Quero acessar</Button>
          </S.Grid.Item>
        </S.Grid>
      </S.LinkValidado>
      <Footer />
    </>
  );
};

export default LinkValidado;
