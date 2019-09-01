import React, { Component } from 'react';
import moment from 'moment'

class Client extends Component {
    
    showPopUp = () =>{
        const popUpObj ={
            name: this.props.client.name,
            country: this.props.client.country,
        }
        console.log(this.props.client.name)
        this.props.showPopUp(popUpObj)
    }
    
    render() {
        const client = this.props.client
        let fullName = this.props.client.name
        console.log(fullName)
        fullName = fullName.split(" ", 2);

        return (
            <tr className="client-row" onDoubleClick={this.showPopUp}>
                <td className="row-item"> {fullName[0]} </td>
                <td className="row-item"> {fullName[1]} </td>
                <td className="row-item"> {client.country} </td>
                <td className="row-item"> {moment(client.firstContact).format("l")} </td>
                <td className="row-item"> {client.email} </td>
                <div className="row-item"> {client.sold ? <div><i class="fas fa-check"></i> </div> : <div> <i class="fas fa-times"></i> </div>} </div>
                <td className="row-item"> {client.owner} </td>
            </tr>
            
        )
    }
}

export default Client;
