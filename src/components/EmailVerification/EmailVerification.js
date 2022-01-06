import * as S from "./EmailVerification.style";
import { Button, Text } from "@ds/react";

const EmailVerification = ({}) => {
  return (
    <S.EmailVerification>
      <S.EmailVerificationContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="Headline-04" className="title">
              Verificação de segurança
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <Text variant="body-01-lg">
                Para confirmar o seu cadastro, acesse o link que enviamos pro
                e-mail: pa*****io@b*******br
              </Text>

              <Button variant="secondary-md" className="FormButton">
                Ok, voltar para a tela de login
              </Button>
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.EmailVerificationContent>
    </S.EmailVerification>
  );
};

export default EmailVerification;
