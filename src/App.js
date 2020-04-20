//Native Component
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
//Component
import Routes from "./components/Router/Router";
import {MovieProvider} from './MovieContext';

export default function App(){
  const selectionsMovies = {movie : [], check : false }
    return (
      <MovieProvider
        value={selectionsMovies}
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MovieProvider>
    );
}

