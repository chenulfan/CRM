import React, { Component } from 'react';

import Client from './Client';
import PopUp from './PopUp';

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            input: "",
            sortBy: "all",
            page: 0,
            showPopUp: false,
            popUpObj: {}
        }
    }
    handleCheck = async (e) => {
        let sortBy = e.target.value
        await this.setState({ sortBy })
        // this.sortBy()
    }
    handleInput = (e) => {
        const value = e.target.value
        this.setState({ input: value })
    }
    filterClients = () => {
        const clients = this.props.clients
        const sortBy = this.state.sortBy
        const input = this.state.input
        if (this.state.input !== "" && this.state.sortBy !== "all") {
            return clients.filter(c => c[sortBy].includes(input))
        }
        else {
            return clients
        }
    }
    loadMore = ()=> {
        console.log("hey")
        let page=this.state.page
        this.setState({page: page +1})
    }
    loadLess = ()=> {
        let page=this.state.page
        if(this.state.page>0)
            this.setState({page: page -1})
    }
    showPopUp = (popUpObj) =>{
        this.setState({showPopUp: true, popUpObj})
    }
    close = () => this.setState({showPopUp: false})    

    render() {
        let page = this.state.page
        console.log(this.props.clients)
        return (
            <div>
                <div className="wrapperInput">
                    
                    <div className="input-field col s6">
                        <label className="active" for="first_name2">Search</label>
                        <input id="first_name2" type="text" className="validate" value={this.state.input} onChange={this.handleInput}></input>
                    </div>

                    <div>
                        <select onChange={this.handleCheck} className="checkBox">
                            <option value="all"> All </option>
                            <option value="name"> Name </option>
                            <option value="email"> Email </option>
                            <option value="sold"> Sold </option>
                            <option value="owner"> Owner </option>
                            <option value="country"> Country </option>
                        </select>
                    </div>
                </div>

                < table id="table">
                    <tr id="table-header">
                        <th className="header-item"> Name </th>
                        <th className="header-item"> Surname </th>
                        <th className="header-item"> Country </th>
                        <th className="header-item"> First Contact </th>
                        <th className="header-item"> Email </th>
                        <th className="header-item"> Sold </th>
                        <th className="header-item"> Owner </th>
                    </tr>
                    {page===0? [...this.filterClients()].splice(0,20).map(c => <Client showPopUp={this.showPopUp} client={c} />) : [...this.filterClients()].splice(page*1, 20).map(c => <Client showPopUp={this.showPopUp} client={c} />)}
                </table>

                    <div className="wrapper-Arrows">
                        <div> <i  onClick={this.loadLess} className="fas fa-chevron-left arrowLeft "></i></div>
                        <div className="range-Pages">{page*20+1} - {(page+1)*20}</div>
                        <div> <i  onClick={this.loadMore} className="fas fa-chevron-right"></i></div>
                    </div>

                    {this.state.showPopUp? <PopUp getFromDataBase={this.props.getFromDataBase} close={this.close} popUpObj={this.state.popUpObj}/> : null }
            </div>
        )
    }
}

export default Landing;
