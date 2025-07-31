'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Calendar } from 'lucide-react';

const AnalyticsChart = () => {
    // Données simulées pour le graphique
    const chartData = [
        { day: 'Lun', visits: 1200, sales: 45 },
        { day: 'Mar', visits: 1890, sales: 67 },
        { day: 'Mer', visits: 1550, sales: 52 },
        { day: 'Jeu', visits: 2100, sales: 78 },
        { day: 'Ven', visits: 2400, sales: 89 },
        { day: 'Sam', visits: 1800, sales: 63 },
        { day: 'Dim', visits: 1600, sales: 58 },
    ];

    const maxVisits = Math.max(...chartData.map(d => d.visits));

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2" />
                        Analytics de la semaine
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Visiteurs et ventes des 7 derniers jours</p>
                </div>

                <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Dernière semaine</span>
                </div>
            </div>

            {/* Chart Container */}
            <div className="relative h-64">
                <div className="flex items-end justify-between h-full space-x-2">
                    {chartData.map((data, index) => (
                        <motion.div
                            key={data.day}
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.visits / maxVisits) * 100}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg relative group cursor-pointer hover:from-blue-600 hover:to-blue-500 transition-colors"
                        >
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                                    <div className="font-medium">{data.day}</div>
                                    <div>{data.visits} visiteurs</div>
                                    <div>{data.sales} ventes</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 -ml-8">
                    <span>{Math.round(maxVisits)}</span>
                    <span>{Math.round(maxVisits * 0.75)}</span>
                    <span>{Math.round(maxVisits * 0.5)}</span>
                    <span>{Math.round(maxVisits * 0.25)}</span>
                    <span>0</span>
                </div>
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between mt-4 text-sm text-gray-500">
                {chartData.map((data) => (
                    <span key={data.day} className="flex-1 text-center">
                        {data.day}
                    </span>
                ))}
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                <div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">Visiteurs totaux</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-900 mt-1">
                        {chartData.reduce((sum, d) => sum + d.visits, 0).toLocaleString()}
                    </p>
                </div>

                <div>
                    <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">Conversion</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-900 mt-1">
                        {((chartData.reduce((sum, d) => sum + d.sales, 0) / chartData.reduce((sum, d) => sum + d.visits, 0)) * 100).toFixed(1)}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsChart;
