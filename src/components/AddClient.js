import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios'

class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            country: "",
            firstContact: "",
            email: "",
            sold: "",
            owner: ""
        }
    }
    handleInput = (e) => {
        const input = e.target.name
        console.log(input)
        const value = e.target.value
        console.log(value)
        this.setState({ [input]: value })
    }
    handleClick = async () => {
        const obj = {
            "name": this.state.name,
            "country": this.state.country,
            "firstContact": moment().format('l'),
            "email": this.state.email,
            "sold": false,
            "owner":this.state.owner
        }
        console.log(obj)
        await axios.post('http://localhost:3030/client', obj)
        this.props.getFromDataBase()
      }
    render() {

        return (
            <div>
                <h1> Add Client</h1>
                <div className="input-field col s6">
                    <label className="active" for="first_name2">Full Name</label>
                    <input type="text" className="validate" name="name" value={this.state.name} onChange={this.handleInput}></input>
                </div>
                <div className="input-field col s6">
                    <label className="active" for="first_name2">Country</label>
                    <input type="text" className="validate" name="country" value={this.state.country} onChange={this.handleInput}></input>
                </div>
                <div className="input-field col s6">
                    <label className="active" for="first_name2">Email</label>
                    <input type="text" className="validate" name="email" value={this.state.email} onChange={this.handleInput}></input>
                </div>
                <div className="input-field col s6">
                    <label className="active" for="first_name2">Owner</label>
                    <input type="text" className="validate" name="owner" value={this.state.owner} onChange={this.handleInput}></input>
                </div>
                <button onClick={this.handleClick}> add</button>
            </div>

        )
    }
}

export default AddClient;
