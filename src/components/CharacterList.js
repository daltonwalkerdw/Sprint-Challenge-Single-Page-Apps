import React, { useEffect, useState } from "react";

import axios from "axios"
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState('');
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character')
    .then (res => {
      console.log('res', res);
      setCharacters(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);
  if ( !characters) {
    return (
      <p>Nada</p>
    )
  } else {
    return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {characters.map(stuff => {
        return (
          <div>
          <Link to={`characters/${stuff.id}`}>{stuff.name}</Link>
        <p>{stuff.gender}</p>
      <p>{stuff.species}</p>
        </div>
        )
      })}
    </section>
  );
}
}
