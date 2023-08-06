import React from "react";
import "./App.css";

import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <Weather defaultCity="Seattle" />
        <Footer />
      </div>
    </div>
  );
}
