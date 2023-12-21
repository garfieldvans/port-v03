import React from "react";
import Header from "./components/Header";
import css from "./styles/app.module.scss";
import Home from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Abouts from "./components/about/About";
import Work from "./components/work/Works";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/porfolio/Portfolios";
import Dummy from "./components/dummy/dummy";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Home />
      <Abouts />
      <Skills />
      <Work/>
      <Portfolio/>
      {/* <Dummy/> */}
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;