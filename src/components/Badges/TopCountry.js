
import React, { Component } from 'react';
import moment from 'moment'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class TopCountry extends Component {

    render() {

        return (
            <span>
                <div className="circle">
                    <i class="fas fa-globe-americas badge"></i>
                </div>
            </span>

        )
    }
}

export default TopCountry;
