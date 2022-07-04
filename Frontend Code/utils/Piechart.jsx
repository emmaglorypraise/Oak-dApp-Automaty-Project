import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 700 },
];

const COLORS = ['#1BA27A','#2263BF', '#FFB700',];

export default class Piechart extends PureComponent {

  render() {
    return (
      <PieChart width={200} height={200} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={80}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={10}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
