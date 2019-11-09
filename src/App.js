import React from "react";
import { Route, Link } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage"
import CharacterCard from "./components/CharacterCard"
import SearchForm from "./components/SearchForm"


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Route exact path="/" 
      component={WelcomePage}
       />
       "
       <Route exact path="/characters"
        component={CharacterList}
        
        />
       <Route path="/characters/:id"
       component={CharacterCard}
       />
      
    </main>
  );
}
