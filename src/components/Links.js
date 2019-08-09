
import React, { Component } from 'react';
import moment from 'moment'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Actions extends Component {

    render() {

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link className="ref" to="/">Home</Link>
                    <Link className="ref" to="/actions">Actions</Link>
                    <Link className="ref" to="/analytics">Analyics</Link>
                </div>
            </nav>

        )
    }
}

export default Actions;
