import * as S from "./LinkExpirouPerdeuValidade.style";

import { Button, Text } from "@ds/react";

const LinkExpirouPerdeuValidade = () => {
  return (
    <S.ExpiredLink>
      <S.ExpiredLinkContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="Headline-04" className="title">
              Ops, este link expirou e perdeu a validade
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <Text variant="body-02-lg">
                Por segurança, refaça o seu cadastro.
              </Text>
              <Button variant="button-01-md" className="FormButton">
                Refazer cadastro
              </Button>
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.ExpiredLinkContent>
    </S.ExpiredLink>
  );
};

export default LinkExpirouPerdeuValidade;
