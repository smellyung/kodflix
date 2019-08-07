import React from 'react';

export default function Movie(props) {
    return (
        <div className="movie">
            <img src={props.logo} alt={`${props.title} logo`} />
            <div className="title-overlay">
                <p>{props.title}</p>
            </div>
        </div>
    );
}