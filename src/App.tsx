import React from "react";
import "./App.css";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";


const App: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
