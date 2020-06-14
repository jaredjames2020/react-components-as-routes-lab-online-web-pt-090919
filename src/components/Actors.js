import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page {actors.map((actor, index) => (
        <div key={index}>
          {actor.name}
            {actor.movies.map((movie, index) => (
              <li>{movie}</li>
            ))}
        </div>
      ))}</h1>
      </div>
  );
};

export default Actors;
