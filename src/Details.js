import React, { Component } from 'react';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Hello, this will be the details page for each Movie & TV show :)'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                message: 'Coming soon! :)'
            })
        }, 3000);
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
            </div>
        )
    }

}

// functional component draft
// import React, { useState, useEffect } from 'react';

// export default function Details({ match }) {
//     const [detailsMessage, setDetailsMessage] = useState(
//             'Hello, this will be the details page for each Movie & TV show :)'
//         );
    
//     useEffect(
//         setTimeout(setDetailsMessage('Coming soon! :)'), 3000)
//     );

//     return (
//         <div>
//             <p>{match.params.id}</p>
//             <p>{detailsMessage}</p>
//         </div>
//     );
// }
