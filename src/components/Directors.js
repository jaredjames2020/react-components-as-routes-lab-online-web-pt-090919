import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page {directors.map((director, index) => (
        <div key={index}>
          {director.name}
            {director.movies.map((title, index) => (
              <li>{title}</li>
            ))}
        </div>
      ))}</h1>
      </div>
    )
  };

export default Directors
