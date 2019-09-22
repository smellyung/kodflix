import React, { useEffect, useState } from 'react';
import Movie from './Movie.js';
import Loading from './common/Loading.js';

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    //fetch data in gallery backend
    fetch('/rest/gallery')
      .then(response => response.json())
      .then(backendGallery => {
        console.log(backendGallery);
        setGallery(backendGallery);
      })
      .catch((err) => console.log(err))
  }, []);

  // return <Loading />;
  return gallery && gallery.length ? 
    <GalleryContent gallery={gallery}/> :
    <Loading />;
}

function GalleryContent({ gallery }) {
  return (
    <div> 
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
    </div>
  );
}
