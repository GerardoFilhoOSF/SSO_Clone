import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";

import Header from "components/Header";

import EmailVerificadoSucesso from "components/EmailVerificadoSucesso";

import ExpiredLink from "components/ExpiredLink";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <RegisteredUserPage /> */}
      <Header />
      <EmailVerificadoSucesso />
      <Header />
      <ExpiredLink /> {/* esse */}
    </ThemeProvider>
  );
}

export default App;
