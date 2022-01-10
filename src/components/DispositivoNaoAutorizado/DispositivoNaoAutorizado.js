import Header from "components/Header";
import Footer from "components/Footer";

import * as S from "./DispositivoNaoAutorizado.style";

import { Button, Text } from "@ds/react";

const DispositivoNaoAutorizado = () => {
  return (
    <S.DispositivoNaoAutorizado>
      <Header />
      <S.DispositivoNaoAutorizadoContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="headline-04" className="title">
              Ops, dispositivo não autorizado
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <Text variant="body-01-lg">
                O link de autorização foi solicitado por outro dispositivo e por
                isso, perdeu a validade.
              </Text>
              <Text variant="body-02-lg">
                Para autorizar esse dispositivo, faça seu login.
              </Text>
              <Button variant="button-01-md" className="FormButton">
                Fazer o login
              </Button>
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.DispositivoNaoAutorizadoContent>
      <Footer />
    </S.DispositivoNaoAutorizado>
  );
};

export default DispositivoNaoAutorizado;
