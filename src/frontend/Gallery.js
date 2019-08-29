import React, { useEffect, useState } from 'react';
import Movie from './Movie.js';

export default function Gallery(props) {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch('/rest/gallery')
      .then(response => response.json())
      .then(movies => setGallery(movies))
  });
  return (
    <> 
      <div className="container">
        {
          gallery.map(movie => (
              <Movie 
                key={movie.id}
                title={movie.title} 
                id={movie.id} />
          ))
        }
      </div>
    </>
  );
}
