import React from 'react';

import { Link } from "react-router-dom";


export default function Movie(props) {
    return (
        <div className="movie">
            <Link to={`/${props.id}`}>
                <img src={props.poster} alt={`${props.title} logo`} />
            </Link>
            <div className="title-overlay">
                <p>{props.title}</p>
            </div>
        </div>
    );
}