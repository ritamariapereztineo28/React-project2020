//Native Component
import React from "react";
import { BrowserRouter } from "react-router-dom";
//Component
import Routes from "./components/Router/Route";
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
export default App;
