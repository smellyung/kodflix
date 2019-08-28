
import React, { useState, useEffect } from 'react';
import getGallery from './gallery-get';
import { Redirect, Link } from 'react-router-dom';

export default function Details({ match }) {
    const [movie, setMovie] = useState ('');
    const movieId = match.params.movieId;
    const matchedMovie = getGallery().find(movie => 
        movie.id === movieId
    );
    
    useEffect(() => {
        setMovie(matchedMovie);
    }, [matchedMovie]);

    return movie === undefined ? 
        <Redirect to='/not-found' /> : 
        <>
            <div>
                <p className='title'>{movie.title}</p>
            </div>
            <div className='movie-details'>
                <p>{movie.synopsis}</p>
                <img src={movie.poster} alt={`${movie.title} poster`}/>
            </div>
            <div className='homepage-link'>
                <p><Link to='/'>Back to home page</Link></p>
            </div>
        </>
}
