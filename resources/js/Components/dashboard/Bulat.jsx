import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export const Bulat = () => {
  const data = [
    { name: 'Laki-laki', value: 70 },
    { name: 'Perempuan', value: 30 },
  ];
  
  const COLORS = ['#8884d8', '#82ca9d'];
  return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius="80%"
                label
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
    );
}
