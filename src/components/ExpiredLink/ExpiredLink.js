import * as S from "./ExpiredLink.style";

import { Button, Text } from "@ds/react";
const ExpiredLink = () => {
  return (
    <S.ExpiredLink>
      <S.ExpiredLinkContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="Headline-04" className="title">
              Ops, este link expirou
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <Text variant="body-02-lg">
                Solicite o reenvio do e-mail de verificação.
              </Text>
              <Button variant="button-01-md" className="FormButton">
                Reenviar e-mail
              </Button>
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.ExpiredLinkContent>
    </S.ExpiredLink>
  );
};

export default ExpiredLink;
