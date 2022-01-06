import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      {/* <LoginPage /> */}
      <RegisterPage />
    </ThemeProvider>
  );
}

export default App;
