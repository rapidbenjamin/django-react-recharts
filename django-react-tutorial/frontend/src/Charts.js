import React from "react";

import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

function colors () {
    const hex = "789ABCDEF";
    let color = "";
    for (color; color.length < 6; )
    color = color + hex[Math.floor(Math.random() * hex.length)];
    return '#' + color;
}

export default function Chart() {
    const data = JSON.parse(document.getElementById('country_count_data').textContent);

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontWeight="800">
        {`${data[index].name}\t${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

    return (
        <ResponsiveContainer height={300}>
            <PieChart width={400} height={250}>
                <Pie data={data} dataKey="count" cx="50%" cy="50%" outerRadius={100}label={renderCustomizedLabel} labelLine={false}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors()} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
