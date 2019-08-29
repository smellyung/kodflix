
import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default function Details({ match }) {
    const [movie, setMovie] = useState('');
    
    useEffect(() => {
        fetch('/rest/gallery')
            .then(response => response.json())
            .then((gallery) => {
                let movieId = match.params.movieId;
                let matchedMovie = gallery.find(movie => 
                    movie.id === movieId
                );
                setMovie(matchedMovie);
            })
    }, []);

    return movie === undefined ? 
        <Redirect to='/not-found' /> :
        movie.id ? 
            <DetailsContent movie={movie} /> :
            <div />;
}

function DetailsContent({ movie }) {
    return (
        <>
            <div>
                <p className='title'>{movie.title}</p>
            </div>
            <div className='movie-details'>
                <p>{movie.synopsis}</p>
                <img src={require(`./common/images/${movie.id}.jpg`)} alt={`${movie.title} poster`}/>
            </div>
            <div className='homepage-link'>
                <p><Link to='/'>Back to home page</Link></p>
            </div>
        </>
    );
}
