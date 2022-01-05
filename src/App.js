import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";
import DispositivoNaoAutorizado from "components/DispositivoNaoAutorizado";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      <DispositivoNaoAutorizado />
    </ThemeProvider>
  );
}

export default App;
