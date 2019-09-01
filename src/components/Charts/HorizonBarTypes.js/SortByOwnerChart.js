import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';



export default class SortByOwnerChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
    owners = () =>{
        let obj = {}
        let clients = this.props.clients
        let owners = []                                        //all 
        clients.map(c => owners.push(c.owner))
        for(let owner of owners ){
          if(obj[owner] === undefined){
            obj[owner] = 1
          }
          else{
            obj[owner]++
    
          }
        }
        
        console.log(obj)
        let arrOfObjOwners =[]
        for(let key in obj){
            arrOfObjOwners.push({owner: key, sales: obj[key]})
        }
        return arrOfObjOwners
      }
    render() {
        const data = this.owners()
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
                <XAxis dataKey="owner" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#00CED1" />
            </BarChart>

    
    );
    }
}
