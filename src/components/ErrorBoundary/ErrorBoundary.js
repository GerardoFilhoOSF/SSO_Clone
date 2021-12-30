import React from "react";

import { Link } from "@ds/react";

import * as S from "./ErrorBoundary.style";
import Header from "components/Header";
import Footer from "components/Footer";
import { phoneToHref } from "utils/phoneToHref";

const ErrorBoundary = () => {
  return (
    <>
      <Header />
      <S.ErrorBoundary>
        <S.Main>
          <S.ServiceErrorImage alt="error" />
          <S.Content>
            <S.Title variant="headline-07">Ops, algo deu errado :(</S.Title>
            <S.Subtitle variant="body-01-md">
              <span>
                Se estiver com dificuldade, fale com a gente pelo Chat ou ligue
                para{" "}
                <Link href={phoneToHref("0800 272 2021")}>0800 272 2021</Link>.
              </span>
            </S.Subtitle>
          </S.Content>
        </S.Main>
      </S.ErrorBoundary>
      <Footer />
    </>
  );
};

export default ErrorBoundary;
