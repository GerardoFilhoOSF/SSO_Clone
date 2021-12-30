import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";
import LoginErro from "components/LoginErro/LoginErro";
// import LoginPage from "./pages/LoginPage";

// import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      <LoginErro />
      {/* <LoginPage /> */}
    </ThemeProvider>
  );
}

export default App;
