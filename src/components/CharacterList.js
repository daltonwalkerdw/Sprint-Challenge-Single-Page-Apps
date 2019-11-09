import React, { useEffect, useState } from "react";

import axios from "axios"
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard"

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charactersData, setCharacters] = useState()
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
        console.log(response)

      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, [charactersData]);
  console.log("character = ", charactersData)

  if (charactersData == []) {
    return "";
  } else {
    return (
      <section className="character-list">
        {charactersData.map(cv => {
          return <CharacterCard datapassed={cv} />;
        })}
      </section>
      // <p>somthing</p>
    );
  }
  //   return (
  //     // <section className="character-list">
  //     //   {characters.map( character => {

  //     //       <h1>{character.name}</h1>

  //     //   })}
  //     // </section>
  //     <p>renders</p>
  //   );
}

export default CharacterList