import React, { useState, useEffect } from 'react';

export default function Details() {
    const [detailsMessage, setDetailsMessage] = useState(
            'Hello, this will be the details page for each Movie & TV show :)'
        );
    
    useEffect(() => {
        setTimeout(() => {
            setDetailsMessage('Coming soon! :)')
        }, 3000);
    });

    return (
        <div>
            <p>{detailsMessage}</p>
        </div>
    );
}
