import { Button, Text } from "@ds/react";

import Header from "components/Header";
import Footer from "components/Footer";

import * as S from "./ExpiredLink.style";

const ExpiredLink = () => {
  return (
    <S.ExpiredLink>
      <Header />
      <S.ExpiredLinkContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="headline-04" className="title">
              Ops, este link expirou
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <Text variant="body-02-lg">
                Mas sem problemas, você pode fazer o login e realizar uma nova
                autorização agora mesmo.
              </Text>
              <Button variant="button-01-md" className="FormButton">
                Fazer o login
              </Button>
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.ExpiredLinkContent>
      <Footer />
    </S.ExpiredLink>
  );
};

export default ExpiredLink;
