import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <h1>Hello and Welcome to Glen Pagett's Rolebook!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Content;