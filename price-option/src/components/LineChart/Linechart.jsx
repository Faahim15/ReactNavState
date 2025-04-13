import {  LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts'; 
import React from 'react';
const data = [
    { name: 'Jan', sales: 400, profit: 240 },
    { name: 'Feb', sales: 300, profit: 139 },
    { name: 'Mar', sales: 500, profit: 320 },
    { name: 'Apr', sales: 700, profit: 390 },
    { name: 'May', sales: 600, profit: 250 },
    { name: 'Jun', sales: 800, profit: 400 },
  ];
const Linechart = () => {
    return (
        <div>
            <LineChart width={600} height={300} data={data} >
                <Line type='monotone'dataKey="sales" stroke="#8884d8" ></Line><Tooltip />
                <Line type='monotone'dataKey="profit" stroke="white" ></Line>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                
            </LineChart>
        </div>
    );
};

export default Linechart;