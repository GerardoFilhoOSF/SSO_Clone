import { Button, Text } from "@ds/react";
import * as S from "./EmailVerificadoSucesso.style";
import Check from "assets/icons/success-check.svg";

const EmailVerificadoSucesso = ({}) => {
  return (
    <S.EmailVerificadoSucesso>
      <S.EmailVerificationContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="Headline-04" className="title">
              Estamos quase lá!
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <S.ImagesSection>
                <img src={Check} />

                <Text variant="headline-07" className="TextForm">
                  E-mail verificado com sucesso.
                </Text>
              </S.ImagesSection>
              <Text variant="body-01-lg">
                Para finalizar, precisamos verificar o número do seu celular,
                tudo bem?
              </Text>
              <Text variant="body-02-lg">
                Queremos enviar um código por SMS no número: (61) 9****-**78
              </Text>

              <Button variant="primary-01-md" className="FormButton">
                Enviar código
              </Button>
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.EmailVerificationContent>
    </S.EmailVerificadoSucesso>
  );
};

export default EmailVerificadoSucesso;
