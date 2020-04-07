//Native Component
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
//Component
import Routes from "./components/Router/Router";

export const MyContext = React.createContext({
  checkboxValue: false,
  selectionMovie:[],
});

export default class App extends Component{
  render(){
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
}
export const AppContext = MyContext.Consumer;
