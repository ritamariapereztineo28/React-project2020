//Native Component
import React from "react";
import { BrowserRouter } from "react-router-dom";
//Component
import Router from "./components/Router/Router";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  );
}
export default App;
