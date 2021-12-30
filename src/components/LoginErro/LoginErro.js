import React from "react";

import Footer from "components/Footer";
import Header from "components/Header";

import * as S from "./LoginErro.style";
import { Grid } from "@ds/react";
import Text from "@ds/react/components/Text";

const LoginErro = () => {
  return (
    <>
      <Header />
      <S.LoginErro>
        <Grid>
          <Grid.Item xs={1} lg={1 / 2}>
            <Text variant="headline-01"> olar</Text>
          </Grid.Item>
          <Grid.Item xs={1} lg={1 / 2}>
            <Text variant="headline-01"> olar</Text>
          </Grid.Item>
        </Grid>
      </S.LoginErro>
      <Footer />
    </>
  );
};

export default LoginErro;
