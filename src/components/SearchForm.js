import React, { useState, useEffect } from "react";

import axios from "axios"
import CharacterList from "./CharacterList"

export default function SearchForm(props) {
  const [search, setSearch] = useState('')
  const [names, setNames] = useState("name");
  const [fname, setFname] = useState([]);
  const [nameDisplay, setNameDisplay] = useState();
  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setNames(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  console.log('names:', names);

  const handleChanges = event => {
    setSearch({ search, [event.target.name]: event.target.value });
    console.log(event.target.value)
  };

  const submitHandler = event => {
    event.preventDefault();
    // console.log(search.search);
    // console.log('filter names', fname)
    setFname(names.map(x => x.name));
   const results = fname.filter(n => n === search.search)
    console.log(results);
    return setNameDisplay(results);



  }


  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input type="text" onChange={handleChanges} placeholder="search" name="search"></input>

      
        <button>Submit</button>
      </form>
  <div>{fname.map(fn => {
      
                return(
                  <div key={fn}>
          <p>{fn === search.search ? fn : "No results"}</p>
                  </div>
                )
              })}</div>
    </section>
  );
}
 