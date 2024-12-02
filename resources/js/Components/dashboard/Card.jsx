import React from 'react'

const Card = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Jumlah Penduduk</h2>
            <p className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-100">1,234</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Terbaru</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 dark:bg-gray-700 shadow rounded-lg p-3">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Laki-laki</h2>
            <p className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-100">12,345</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Terbaru</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 dark:bg-gray-700 shadow rounded-lg p-3">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Perempuan</h2>
            <p className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-100">56</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Terbaru</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-50 dark:bg-gray-700 shadow rounded-lg p-3">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Memiliki Pekerjaan</h2>
            <p className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-100">56</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Terbaru</p>
        </div>
    </div>
    )
}

export default Card