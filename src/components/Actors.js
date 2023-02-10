import React from "react";
import { actors } from "../data";

function Actors() {
  const actorItems = actors.map((actor)=>{
    const actorMovies = actor.movies.map((movie)=><li key={movie}>{movie}</li>)
    return (
      <div key={actor.name}>
        {actor.name}
        <ul>
          {actorMovies}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorItems}
    </div>
  );
}

export default Actors;
