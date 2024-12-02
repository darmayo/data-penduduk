import React from 'react'
import { Bulat } from './Bulat';
import WilayahChart from './WilayahChart';
import UsiaChart from './UsiaChart';

const Chart = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
      {/* Row 1: Bar Chart & Pie Chart */}
      <div className="bg-gray-50 dark:bg-gray-700 shadow rounded-lg p-6 col-span-2 lg:col-span-1">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Perbandingan Rentang Usia</h2>
        <div className="h-64">
          <UsiaChart />
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 shadow rounded-lg p-6 col-span-2 lg:col-span-1">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Perbandingan Laki-Laki & Perempuan</h2>
        <div className="h-64">
          <Bulat />
        </div>
      </div>

      {/* Row 2: Bar Chart */}
      <div className="bg-gray-50 dark:bg-gray-700 shadow rounded-lg p-6 col-span-2">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Jumlah Warga Berdasarkan Wilayah</h2>
        <div className="h-64">
          <WilayahChart />
        </div>
      </div>
    </div>
  )
}

export default Chart
