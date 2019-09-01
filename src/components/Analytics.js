
import React, { Component } from 'react';
import moment from 'moment'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Badges from "./Badges"
import PieChart from "./Charts/PieChartTemp"
import VerticalBarChart from "./Charts/VerticalBarChart"
import HorizontialBarChart from "./Charts/HorizontialBarChart"
import LineChartTemp from "./Charts/LineChartTemp"

class Analytics extends Component {

    render() {

        return (
            <div>
                <Badges clients={this.props.clients} />
                {/* <LineChartTemp clients={this.props.clients}/> */}
                <div className="wrapper-charts">
                    <HorizontialBarChart clients={this.props.clients} />
                    <VerticalBarChart clients={this.props.clients} />
                </div>
                <PieChart clients={this.props.clients} />
            </div>
                // <button onClick={this.countries}>aaaaaaaaaaaaaaaaaaaaaaaa</button>

        )
    }
}

export default Analytics;
