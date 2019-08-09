
import React, { Component } from 'react';

class Search extends Component {

    render() {
        return (
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
        )
    }
}

export default Search;
