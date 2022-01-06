import React from "react";

import Header from "components/Header";
import Main from "components/Main";
import Register from "components/Register";
import RegisteredUser from "components/RegisteredUser";
import EmailVerification from "components/EmailVerification";
import ExpiredLink from "components/ExpiredLink";
import LinkExpirouPerdeuValidade from "components/LinkExpirouPerdeuValidade";
import InscricaoBloqueada from "components/InscricaoBloqueada";
import Footer from "components/Footer";
import EmailVerificadoSucesso from "components/EmailVerificadoSucesso";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <Main />
      {/* <Register />
      <RegisteredUser />
      <EmailVerification />
      <ExpiredLink />
      <LinkExpirouPerdeuValidade />
      <InscricaoBloqueada /> */}
      <EmailVerificadoSucesso />
      <Footer />
    </>
  );
}
