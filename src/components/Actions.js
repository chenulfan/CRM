import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios'
import AddClient from './AddClient';
import UpdateClient from './UpdateClient';

class Actions extends Component {
    render() {

        return (
            <div className="wrapper-actions">
                <UpdateClient  getFromDataBase={this.props.getFromDataBase} clients={this.props.clients} />
                <AddClient getFromDataBase={this.props.getFromDataBase} />
            </div>
    
    
            )
        }
    }
    
    export default Actions;
