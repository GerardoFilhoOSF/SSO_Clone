import { Button, Text } from "@ds/react";
import Header from "components/Header";
import Footer from "components/Footer";

import * as S from "./EmailEnviado.style";
import Check from "assets/icons/success-check.svg";

const EmailEnviado = () => {
  return (
    <S.EmailEnviado>
      <Header />
      <S.EmailEnviadoContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="headline-04" className="title">
              Precisamos autorizar esse dispositivo
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <S.ImagesSection>
                <img src={Check} alt="checked" />

                <Text variant="headline-07" className="TextForm">
                  E-mail enviado
                </Text>
              </S.ImagesSection>
              <Text variant="body-02-lg">
                Em alguns instantes, você vai receber as instruções no e-mail:
                pa*****io@b*******br
              </Text>

              <Button variant="primary-01-md" className="FormButton">
                Ok, voltar para a tela de login
              </Button>
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.EmailEnviadoContent>
      <Footer />
    </S.EmailEnviado>
  );
};

export default EmailEnviado;
