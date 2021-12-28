import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";
import DescriptionLogin from "components/DescriptionLogin";
import Footer from "components/Footer";
import Login from "components/Login";

// import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      <Login />
      <DescriptionLogin />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
