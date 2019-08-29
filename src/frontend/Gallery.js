import React, { useEffect, useState } from 'react';
import Movie from './Movie.js';

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    //fetch data in gallery backend
    fetch('/rest/gallery')
      .then(response => response.json())
      .then(backendGallery => setGallery(backendGallery))
  }, []);
  return (
    <> 
      <div className="container">
        {
          //render each movie using Movie Component
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
