import React, { useState } from "react";


import CharacterList from "./CharacterList"

export default function SearchForm(props) {
   const [search, setSearch ] = useState('')
  
   const handleChanges = event => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    
    };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
     <input type="text" onChange={handleChanges} placeholder="search" name="search"></input>
     <button>Submit</button>
     </form>
    </section>
  );
}
