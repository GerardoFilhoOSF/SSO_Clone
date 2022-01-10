import * as S from "./TentativasExcedidas.style";

import { Button, Link, Text } from "@ds/react";
const ExpiredLink = () => {
  return (
    <S.ExpiredLink>
      <S.ExpiredLinkContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="Headline-04" className="title">
              O número de tentativas de login foi atingido
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <Text variant="body-02-lg">
                Por isso, seu acesso foi bloqueado por um tempo, mas você pode
                voltar e tentar de novo às HH:MM:SS.
              </Text>
              <Link
                variant="primary-sm-02-icon"
                onClick={() => {}}
                className="forgot"
              >
                Esqueci minha senha
              </Link>
              <Text variant="body-02-sm">
                Está com dificuldade no acesso? Fale com a gente pelo Chat ou
                ligue para 0800 702 4280.
              </Text>
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.ExpiredLinkContent>
    </S.ExpiredLink>
  );
};

export default ExpiredLink;