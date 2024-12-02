import React from 'react'
import { ResponsiveContainer,BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Bulat } from './Bulat';

const Chart = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
    {/* Chart 1: Bar Chart */}
    <div className="bg-gray-50 dark:bg-gray-700 shadow rounded-lg p-6 col-span-2">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Jumlah Warga Berdasarkan Wilayah</h2>
      <div className="h-64">
      <ResponsiveContainer width="100%" height="100%"> {/* Membuat chart responsif */}
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
      </div>
    </div>

    {/* Chart 2: Pie Chart */}
    <div className="bg-gray-50 dark:bg-gray-700 shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Perbandingan Laki-Laki & Perempuan</h2>
      <div className="h-64">
        <Bulat />
      </div>
    </div>
  </div>
  )
}

export default Chart