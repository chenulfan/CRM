
import React, { Component } from 'react';
import moment from 'moment'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class OutstandingClients extends Component {

    render() {

        return (
            <span>
                <div className="circle">
                    <i class="fas fa-users specialBadge"></i>
                </div>
            </span>
        )
    }
}

export default OutstandingClients;
