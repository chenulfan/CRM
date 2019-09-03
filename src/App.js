
import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
// import fontawesome from '@fortawesome/fontawesome'
import data from "../src/data.json"
import Actions from './components/Actions';
import Landing from './components/Landing';
import Links from './components/Links';
import Analytics from './components/Analytics';

class App extends Component {
  constructor() {
    super()
    this.state = {
      clients: [],
      sortBy: "all"
    }
  }

  async componentDidMount() {
    await this.getFromDataBase()
  }

  getFromDataBase = async () => {
    let clients = await axios.get('/clients')
    this.setState({
      clients: clients.data
    })
  }
  some =  () => {
    data.map(d =>  axios.post('/client', d) )
  }

  render() {
    return (

      <Router>
        <Route path="/" render={() => <Links />} />
        <Route exact path="/" render={() => <Landing  getFromDataBase={this.getFromDataBase} clients={this.state.clients} />} />
        <Route exact path="/actions" render={() => <Actions getFromDataBase={this.getFromDataBase} clients={this.state.clients} />} />
        <Route exact path="/analytics" render={() => <Analytics clients={this.state.clients} /> } />
        {/* <button onClick={this.some}> asassadsadsadasdasdasdasdasdasdasd</button> */}
      </Router>
    )
  }
}

export default App;
