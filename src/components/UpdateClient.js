import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios'

const bodyParser = require("body-parser")


const Clients = require('../models/clientSchema')

class UpdateClient extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            owner: "",
            id: ""
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
        let id = this.state.id
        let clients = await axios.get('/clients')
        console.log(clients.data)
        clients.data.find(c => c.name === this.state.name ? id = c._id : null)
        console.log(id)
        this.setState({ id })

    }
    UpdateClientToSold = async () => {
        await this.handleClick()
        console.log(this.state.id)
        await axios.put(`/sold/${this.state.id}`)
        this.props.getFromDataBase()
    }
    ChangeOwnerToTheClient = async () => {
        await this.handleClick()

        await axios.put(`/changeOwner/${this.state.id}`, { owner: this.state.owner })
        this.props.getFromDataBase()
    }

    clientsToNames = () => {
        let clients = this.props.clients
        let names = []
        clients.map(c => names.push(c.name))
        return names.sort()
    }
    clientsToOwners = () => {
        let clients = this.props.clients
        let owners = []
        clients.map(c => owners.push(c.owner))
        return [...new Set(owners)].sort()
    }
    clientsToEmails = () => {
        let clients = this.props.clients
        let emails = []
        clients.map(c => emails.push(c.email))
        return emails.sort()
    }
    render() {
        return (
            <div className="wrapper-update-client">
                <h1> Update Client</h1>
                <div className="input-field col s6 actions-inp">
                    <label className="active" for="first_name2">Full Name</label>
                    <input type="text" className="validate actions-inp" name="name" value={this.state.name} onChange={this.handleInput} list="clients"></input>
                    <datalist id="clients">
                        {this.clientsToNames().map(c => <option> {c} </option>)}
                    </datalist>
                </div>
                {/* <div className="input-field col s6">
                    <label className="active" for="first_name2">Email</label>
                    <input type="text" className="validate" name="email" value={this.state.email} onChange={this.handleInput} list="emails"></input>
                    <datalist id="emails">
                        {this.clientsToEmails().map(c => <option> {c} </option>)}
                    </datalist>
                </div> */}
                <div className="input-field col s6 actions-inp">
                    <label className="active" for="first_name2">Owner</label>
                    <input type="text" className="validate" name="owner" value={this.state.owner} onChange={this.handleInput} list="owners"></input>
                    <datalist id="owners">
                        {this.clientsToOwners().map(c => <option> {c} </option>)}
                    </datalist>
                </div>
                <div className="wrapper-btn-actions">
                    <button className="btn-actions" onClick={this.UpdateClientToSold}> Sold </button>
                    <button className="btn-actions" onClick={this.ChangeOwnerToTheClient}> Change Owner</button>
                </div>
            </div>

        )
    }
}

export default UpdateClient;
