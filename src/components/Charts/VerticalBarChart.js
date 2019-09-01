import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';
import SortByOwnerChart from './HorizonBarTypes.js/SortByOwnerChart';
import SortByCountryChart from './HorizonBarTypes.js/SortByCountryChart';
import SortByMonthChart from './HorizonBarTypes.js/SortByMonthChart';



export default class VerticalBarChart extends PureComponent {
  constructor() {
    super()
    this.state = {
      showCountry: true,
      showOwner: false,
      showMonth: false
    }
  }
  handleCheck = async (e) => {
    let sortBy = e.target.value
    this.setState({ showCountry: false, showOwner: false, showMonth: false })
    this.setState({ [sortBy]: true })

    // this.sortBy()
  }
  render() {

    return (
      <div>
        <div className="header-chart">
          <h5> Sales By:</h5>
          <select onChange={this.handleCheck} className="check-Box-Chart">
            <option value="showCountry"> Contry </option>
            <option value="showOwner"> Owner </option>
            <option value="showMonth"> Month </option>
          </select>
        </div>
        <div className={!this.state.showCountry ? "Show-Chart" : "abcd"} >
          <SortByCountryChart clients={this.props.clients} />
        </div>
        <div className={!this.state.showOwner ? "Show-Chart" : "abcd"} >
          <SortByOwnerChart clients={this.props.clients} />
        </div>
        <div className={!this.state.showMonth ? "Show-Chart" : ""} >
          <SortByMonthChart clients={this.props.clients} />
        </div>

      </div>
    );
  }
}
