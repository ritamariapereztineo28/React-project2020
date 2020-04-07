//Native Component
import React from "react";
import { BrowserRouter } from "react-router-dom";
//Component
import Routes from "./components/Router/Router";

export const MyContext = React.createContext({
  checkboxValue: false,
  selectionMovie:[],
});

export default function App() {
  return (
    <MyContext.Provider
      value={{
        checkboxValue: false,
        selectionMovie: [],
      }}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MyContext.Provider>
  );
}
export const AppContext = MyContext.Consumer;
