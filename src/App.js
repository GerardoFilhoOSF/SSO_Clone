import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";

import Header from "components/Header";

import EmailEnviado from "components/EmailEnviado";

import ExpiredLink from "components/ExpiredLink";
import TentativasExcedidas from "components/TentativasExcedidas";
import AutorizarDispositivo from "components/AutorizarDispositivo";
import LinkValidado from "components/LinkValidado";
import DispositivoNaoAutorizado from "components/DispositivoNaoAutorizado";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
