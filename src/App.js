import { ThemeProvider } from "@ds/react";
import { cnpSeguradora } from "@ds/tema-cnp";
import DescriptionLogin from "components/DescriptionLogin";
import Footer from "components/Footer";
import Header from "components/Header";
import Login from "components/Login";
import Main from "components/Main";
import Register from "components/Register";

// import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider theme={cnpSeguradora}>
      <Header />
      <Main />
      {/* <Login />
      <DescriptionLogin /> */}
      <Register />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
