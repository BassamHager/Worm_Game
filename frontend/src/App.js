import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => (
  <>
    <Header />
    <Sidebar />
    <Main />
    <Footer />
  </>
);

export default App;
