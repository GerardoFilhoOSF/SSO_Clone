import { Button, Text } from "@ds/react";
import Header from "components/Header";
import Footer from "components/Footer";

import * as S from "./AutorizarDispositivo.style";

const ExpiredLink = () => {
  return (
    <S.AutorizarDispositivo>
      <Header />
      <S.AutorizarDispositivoContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="headline-04" className="title">
              Precisamos autorizar esse dispositivo.
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <Text variant="body-02-lg">
                Por motivos de segurança, apenas dispositivos autorizados têm
                acesso a todas as funcionalidades dos produtos.
              </Text>

              <Text variant="body-02-lg">O que você prefere?</Text>
            </S.AlignItems>
            <S.Button>
              <Button variant="primary-01-md" className="primary">
                Autorizar agora
              </Button>
              <Button variant="secondary-md" className="secondary">
                Autorizar depois
              </Button>
            </S.Button>
          </S.Grid.Item>
        </S.Grid>
      </S.AutorizarDispositivoContent>
      <Footer />
    </S.AutorizarDispositivo>
  );
};

export default ExpiredLink;
