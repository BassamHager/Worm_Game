import React from "react";
import "./App.css";
// components
import Header from "./components/layout/Header";
// import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

const App = () => (
  <>
    <Header />
    {/* <Sidebar /> */}
    <Main />
    <Footer />
  </>
);

export default App;
