import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Register from "./components/Register";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      <Header />
      <Main />
      <Register />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
