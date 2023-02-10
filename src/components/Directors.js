import React from "react";
import { directors } from "../data";

function Directors() {
  const directorItems = directors.map((director)=>{
    const directorMovies = director.movies.map((movie)=><li key={movie}>{movie}</li>)
    return (
      <div key={director.name}>
        {director.name}
        <ul>
          {directorMovies}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorItems}
    </div>
  );
}

export default Directors;
