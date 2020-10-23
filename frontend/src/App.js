import React from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";

const App = () => (
  <>
    <Header />
    <Sidebar />
    <Main />
    <Footer />
  </>
);

export default App;
