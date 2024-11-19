import React from "react";
import { ScrollToTop } from "./Functions";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Main, Footer } from "./Page";
import "./Style/style.css";
import "./Style/body.css";
import "./Style/header.css";
import "./Style/footer.css";
import "./Style/portfolio.css";
import { LanguageProvider } from "./Contexts";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LanguageProvider>
        <Header />
        <Main />
        <Footer />
      </LanguageProvider>
    </Router>
  );
}

export default App;
