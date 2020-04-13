//Native Component
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
//Component
import Routes from "./components/Router/Router";
import {UserProvider} from './UserContext';

export default function App(){
  const selectionsMovies = {movie : [], check : false }
    return (
      <UserProvider
        value={selectionsMovies}
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserProvider>
    );
}

