import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';



export default class SortByCountryChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
    countries = () =>{
        let obj = {}
        let clients = this.props.clients
        let countries = []                                        //all 
        clients.map(c => countries.push(c.country))
        for(let country of countries ){
          if(obj[country] === undefined){
            obj[country] = 1
          }
          else{
            obj[country]++
    
          }
        }
        
        console.log(obj)
        let arrOfObjCountries =[]
        for(let key in obj){
            arrOfObjCountries.push({country: key, sales: obj[key]})
        }
        return arrOfObjCountries
      }
    render() {
        const data = this.countries()
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
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#00CED1" />
            </BarChart>

    
    );
    }
}
