import React, {setState, useEffect} from "react";

import { Route, Link } from "react-router-dom";
import axios from "axios"
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage"
import CharacterCard from "./components/CharacterCard"
import SearchForm from "./components/SearchForm"


export default function App() {

  const [names, setNames] = setState('');



  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log('res', res);
        setNames(res.data.results)
 {names.map(stuff => {
    let characterNameList = stuff.name
    console.log("character list:", characterNameList)})}

      })
      .catch(err => {
        console.log(err)
      })
  }, []);

 

  return (

    
    <main>

      
      <Header />
      <SearchForm />
      <Route exact path="/" 
      component={WelcomePage}
       />
       <Route exact path="/characters"
        
        render={(props) => <CharacterList {...props} characterNameList={characterNameList} />}
        />
       <Route path="/characters/:id"
       component={CharacterCard}
       />
      
    </main>
  );
}
console.log(this.props)