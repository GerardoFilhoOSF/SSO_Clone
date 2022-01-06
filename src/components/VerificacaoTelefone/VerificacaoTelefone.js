import { FullDoubleButton, Text, TextField } from "@ds/react";

import * as S from "./VerificacaoTelefone.style";

import Check from "assets/icons/success-check.svg";

const VerificacaoTelefone = () => {
  return (
    <S.VerificacaoTelefone>
      <S.VerificacaoTelefoneContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="Headline-04" className="title">
              Verificação de telefone
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <S.ImagesSection>
                <img src={Check} />

                <Text variant="headline-07" className="TextForm">
                  Código enviado
                </Text>
              </S.ImagesSection>

              <Text variant="body-02-lg">
                Em alguns instantes, você vai receber um SMS no número: (61)
                9****-**78
              </Text>
              <TextField
                className="FormInput"
                label="Informe o código recebido:"
                description="Esse código expira em MM:SS."
                placeholder="Apenas números"
              />

              <FullDoubleButton
                variant="primary-01"
                primaryProps={{
                  children: "Verificar código",
                  onClick: () => {
                    console.log("Action");
                  },
                }}
                secondaryProps={{
                  children: "Enviar novo código (4 tentativas)",
                  onClick: () => {
                    console.log("Action");
                  },
                }}
              />
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.VerificacaoTelefoneContent>
    </S.VerificacaoTelefone>
  );
};

export default VerificacaoTelefone;
