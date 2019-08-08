import React from 'react';
import Details from './Details';
import { Link } from "react-router-dom";


export default function Movie(props) {
    return (
        <div className="movie">
            <Link to="/details">
                <img src={props.logo} alt={`${props.title} logo`} />
            </Link>
            <div className="title-overlay">
                <p>{props.title}</p>
            </div>
        </div>
    );
}