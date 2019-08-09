import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList
} from 'recharts';



export default class HorizontialBarChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    top3Owners = () => {
        let obj = {}
        let clients = this.props.clients
        clients = clients.filter(c => c.sold === true)
        let owners = []                                        //all 
        clients.map(c => owners.push(c.owner))
        for (let owner of owners) {
            if (obj[owner] === undefined) {
                obj[owner] = 1
            }
            else {
                obj[owner]++

            }
        }
        // console.log(obj)
        let maxVal = 0
        let maxKey = ""
        let arr = []
        for (let i = 0; i < 3; i++) {
            for (let key in obj) {
                if (obj[key] > maxVal) {
                    maxVal = obj[key]
                    maxKey = key
                }
            }
            arr.push({ name: maxKey, sales: maxVal })
            delete obj[maxKey]
            maxVal = 0
        }
        // console.log(arr)
        return (arr)
    };
    render() {
        const data = this.top3Owners()
        return (

            <BarChart
                width={600}
                height={300}
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
        );
    }
}
