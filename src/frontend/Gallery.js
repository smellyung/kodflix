import React, { useEffect } from 'react';
import Movie from './Movie.js';
import getGallery from './gallery-get'; 

export default function Gallery(props) {
  useEffect(() => {
    fetch('/rest/gallery')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
          console.log(myJson);
      })
  });
  return (
    <> 
      <div className="container">
        {
          getGallery().map(movie => (
              <Movie 
                key={movie.id}
                title={movie.title} 
                poster={movie.poster}
                id={movie.id} />
          ))
        }
      </div>
    </>
  );
}
