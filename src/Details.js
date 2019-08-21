
import React, { useState, useEffect } from 'react';
import getGallery from './gallery-get';

export default function Details({ match }) {
    const [detailsMessage, setDetailsMessage] = useState(
            'Hello, this will be the details page for each Movie & TV show :)'
        );
    const [title, setTitle] = useState ('');
    const movieId = match.params.id;
    const movieTitle = getGallery().find(movie => 
        movie.id === movieId
    ).title;

    useEffect(() => {
        setTitle(movieTitle);
        setTimeout(() => {
            setDetailsMessage('Coming soon! :)')
        }, 3000);
    });

    return (
        <div>
            <p>{title}</p>
            <p>{detailsMessage}</p>
        </div>
    );
}
