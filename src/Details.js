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
