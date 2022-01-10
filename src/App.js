import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";

import Header from "components/Header";

import EmailVerificadoSucesso from "components/EmailVerificadoSucesso";

import ExpiredLink from "components/ExpiredLink";
import TentativasExcedidas from "components/TentativasExcedidas";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <RegisteredUserPage /> */}
      <Header />
      <TentativasExcedidas />
      <Header />
      <ExpiredLink />
      <Header />
      <EmailVerificadoSucesso />
    </ThemeProvider>
  );
}

export default App;
