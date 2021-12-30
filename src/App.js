import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";
import ErrorBoundary from "components/ErrorBoundary";
// import LoginPage from "./pages/LoginPage";

// import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      <ErrorBoundary />
      {/* <LoginPage /> */}
    </ThemeProvider>
  );
}

export default App;
