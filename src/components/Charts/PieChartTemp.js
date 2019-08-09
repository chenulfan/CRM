import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data = [
  { name: '1-6 Months', value: 400 }, { name: 'Last Month', value: 30 },
  { name: '6-12 Months', value: 300 },
];

class PieChartTemp extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label >
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}</Pie>
        <Tooltip />
      </PieChart>
    );
  }
}
export default PieChartTemp