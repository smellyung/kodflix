import React from 'react';
import { Link } from "react-router-dom";


export default function Movie({ id, title }) {
    return (
        <div className="movie">
            <Link to={`/${id}`}>
                <img src={require(`./common/images/${id}.jpg`)} alt={`${title} logo`} />
            </Link>
            <div className="title-overlay">
                <p>{title}</p>
            </div>
        </div>
    );
}