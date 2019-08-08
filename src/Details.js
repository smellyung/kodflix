import React from 'react';

export default function Details({ match }) {
    return (
        <div>
            <p>{match.params.id}</p>
            <p>Hello, this will be the details page for each Movie & TV show :)</p>
        </div>
    );
}
