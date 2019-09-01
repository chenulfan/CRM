
import React, { Component } from 'react';
import moment from 'moment'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class EmailSent extends Component {

    render() {

        return (
            <span>
                <div className="circle spring green ">
                    <i class="fas fa-envelope badge"></i>
                </div>
                
            </span>

        )
    }
}

export default EmailSent;
