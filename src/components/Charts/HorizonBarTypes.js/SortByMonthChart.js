import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';
import moment from 'moment'


export default class SortByMonthChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
    Months = () =>{
        let obj = {}
        let clients = this.props.clients
        let months = []                                        //all 
        clients.map(c => months.push(moment(c.firstContact).format("MM") ))
        for(let month of months ){
          if(obj[month] === undefined){
            obj[month] = 1
          }
          else{
            obj[month]++
    
          }
        }
        
        console.log(obj)
        let arrOfObjMonths =[]
        for(let key in obj){
            arrOfObjMonths.push({month: key, sales: obj[key]})
        }
        return arrOfObjMonths.sort((a, b) => (a.month) - (b.month));
      }
    render() {
        const data = this.Months()
        console.log(data)
        return (
            <BarChart
                width={900}
                height={300}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>

    
    );
    }
}
