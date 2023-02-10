import React from "react";
import { movies } from "../data";

function Movies() {

  const movieItems = movies.map((movie)=>{
    const movieGenres = movie.genres.map((genre)=>{
      return <li key={genre}>{genre}</li>
    })
    
    return(
      <div key={movie.title}>
        <p>{movie.title} - {movie.time} minutes</p>
        <ul>
          {movieGenres}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieItems}
    </div>
    );
}

export default Movies;
