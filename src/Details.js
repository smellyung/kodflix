
import React, { useState, useEffect } from 'react';
import getGallery from './gallery-get';
import { Redirect } from 'react-router-dom';

export default function Details({ match }) {
    const [movie, setMovie] = useState ('');
    const movieId = match.params.movieId;
    const matchedMovie = getGallery().find(movie => 
        movie.id === movieId
    );
    
    useEffect(() => {
        setMovie(matchedMovie);
    });

    if (movie === undefined) {
        return (
            <Redirect to='/not-found' />
        );
    } else {
        return (
            <>
                <div>
                    <p className='title'>{movie.title}</p>
                </div>
                <div>
                    <p>movie description coming soon</p>
                    <img src={movie.poster} alt={`${movie.title} poster`}/>
                </div>
            </>
        );
    }
}
