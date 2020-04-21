//Native Component
import React from "react";
import { BrowserRouter } from "react-router-dom";
//Component
import Routes from "./components/Router/Router";
import {MoviesProvider} from "../src/components/Context";

function App() {
  return (
    <MoviesProvider >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MoviesProvider>
  );
}
export default App;
