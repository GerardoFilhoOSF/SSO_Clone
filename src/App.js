import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";
import RegisteredUserPage from "./pages/RegisterUserPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <RegisteredUserPage />
    </ThemeProvider>
  );
}

export default App;
