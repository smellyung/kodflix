import React from 'react';
import Movie from './Movie.js';
import getGallery from './gallery-get'; 

export default function Gallery(props) {
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
