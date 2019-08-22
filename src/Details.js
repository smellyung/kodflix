
import React, { useState, useEffect } from 'react';
import getGallery from './gallery-get';
import { Redirect } from 'react-router-dom';

export default function Details({ match }) {
    const [detailsMessage, setDetailsMessage] = useState(
            'Hello, this will be the details page for each Movie & TV show :)'
        );
    const [movie, setMovie] = useState ('');
    const movieId = match.params.movieId;
    const matchedMovie = getGallery().find(movie => 
        movie.id === movieId
    );
    
    useEffect(() => {
        setMovie(matchedMovie);
        setTimeout(() => {
            setDetailsMessage('Coming soon! :)')
        }, 3000);
    });

    if (movie === undefined) {
        return (
            <Redirect to='/not-found' />
        );
    } else {
        return (
            <div>
                <p>{movie.title}</p>
                <p>{detailsMessage}</p>
            </div>
        );
    }
}
