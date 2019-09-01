
import React, { Component } from 'react';
import moment from 'moment'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

class PopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: this.props.popUpObj.name,
            name: this.props.popUpObj.name.split(" ")[0],
            surName: this.props.popUpObj.name.split(" ")[1],
            country: this.props.popUpObj.country
        }
    }
    handleInput = (e) => {
        const value = e.target.value
        const input = e.target.name
        this.setState({ [input]: value })
    }
    close = () => {
        this.props.close()
    }

    updateClient = async () => {
        const fullName = this.state.fullName
        const newName = this.state.name + " " + this.state.surName
        console.log(fullName)
        console.log(newName)
        const objClient = {
            newName,
            country: this.state.country
        }
        console.log(objClient)
        await axios.put(`http://localhost:3030/updateClient/${fullName}`, objClient)
        this.props.getFromDataBase()
        this.close()
    }
    render() {
        return (
            <div className="update-box">
                <div className="X" onClick={this.close}> X</div>
                <div className="wrapper-detail-popUp">
                    <div className="popUp-Wrapper-row">
                        <div className="subHeader-popUp-box" >Name:</div>
                        <div className="input-field col s6 inpPopUp">
                            <input id="first_name2" type="text" name="name" className="validate inpPopUp" value={this.state.name} onChange={this.handleInput}></input>
                        </div>
                    </div>

                    <div className="popUp-Wrapper-row">
                        <div className="subHeader-popUp-box" >Surame:</div>
                        <div className="input-field col s6 ">
                            <input id="first_name2" type="text" name="surName" className="validate inpPopUp" value={this.state.surName} onChange={this.handleInput}></input>
                        </div>
                    </div>

                    <div className="popUp-Wrapper-row">
                        <div className="subHeader-popUp-box" >Country:</div>
                        <div className="input-field col s6">
                            <input id="first_name2" type="text" name="country" className="validate inpPopUp" value={this.state.country} onChange={this.handleInput}></input>
                        </div>
                        <button className="btn-popUp" onClick={this.updateClient}> Update </button>
                    </div>
                </div>
            </div>

        )
    }
}

export default PopUp;
