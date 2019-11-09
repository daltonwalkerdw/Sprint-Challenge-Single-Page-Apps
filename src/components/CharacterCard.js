import React, { useState, useEffect} from "react";

import CharacterList from "./CharacterList"
import axios from "axios"


export default function CharacterCard(props) {
  const [character, setCharacter] = useState();

  useEffect(() => {
    const id = props.match.params.id;

       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setCharacter(response.data);
          console.log(response)
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  if (!character) {
    return <div>Loading character information...</div>;
  }

  const { name, gender, species } = character;

  return (
    
      <div>
        <h2>{name}</h2>
        <div>
          gender: <em>{gender}</em>
        </div>
        <div>
          Species: <strong>{species}</strong>
        </div>
      </div>
    
  );

}
