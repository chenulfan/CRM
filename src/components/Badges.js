import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios'
import EmailSent from "./Badges/EmailSent"
import NewClient from "./Badges/NewClient"
import OutstandingClients from "./Badges/OutstandingClients"
import TopCountry from "./Badges/TopCountry"
class Badges extends Component {
    numOfNewClietns = () => {
        let sum = 0
        let d = new Date()
        let currentMonth = d.getMonth() + 1
        let currentYear = d.getFullYear()
        let clients = this.props.clients
        clients.map(c => {
            let dateArr = moment(c.firstContact).format('l').split("/")
            const month = dateArr[0]
            const year = dateArr[2]
            if (month == currentMonth && year == currentYear) {
                sum++
            }
        })
        return sum
    }
    numOfUnsold = () => {
        let clients = this.props.clients
        clients = clients.filter(c => c.sold === false)
        // console.log(clients)
        return clients.length
    }

    numOfEmails = () => {
        let clients = this.props.clients
        clients = clients.filter(c => c.email !== "")
        // console.log(clients)
        return clients.length
    }
    topCountry = () => {
        let clients = this.props.clients
        let country = []
        clients.map(c => country.push(c.country))
        return country.sort((a, b) =>
            country.filter(v => v === a).length
            - country.filter(v => v === b).length
        ).pop();
    }
    render() {

        return (
            <div className="wrapperBadges">
                <div class="wrapperBadgeGrid">
                    <EmailSent />
                    <div className="detailGrid">
                        <div className="badge-detail-number"> {this.numOfEmails()} </div>
                        <div className="badge-detail">Emails</div>
                    </div>
                </div>
                <div class="wrapperBadgeGrid">
                    <NewClient />
                    <div className="detailGrid">
                        <div className="badge-detail-number"> {this.numOfNewClietns()} </div>
                        <div className="badge-detail"> New Clients</div>
                    </div>
                </div>
                <div class="wrapperBadgeGrid">
                    <OutstandingClients />
                    <div className="detailGrid">
                        <div className="badge-detail-number">  {this.numOfUnsold()} </div>
                        <div className="badge-detail"> Outstanding Clients </div>
                    </div>
                </div>
                <div class="wrapperBadgeGrid">
                    <TopCountry />
                    <div className="detailGrid">
                        <div className="badge-detail-number"> {this.topCountry()} </div>
                        <div className="badge-detail"> Hottest Country </div>
                    </div>
                </div>



            </div>


        )
    }
}

export default Badges;
