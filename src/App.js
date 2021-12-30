import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";
import LoginPage from "./pages/LoginPage";

// import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
