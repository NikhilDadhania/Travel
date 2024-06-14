import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer/footer";
import Main from "./Components/Main/main";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer /> 
    </>
  );
};

export default App;
