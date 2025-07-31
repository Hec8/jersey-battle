'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    icon: React.ComponentType<{ className?: string }>;
    color: 'blue' | 'green' | 'purple' | 'yellow' | 'red';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon: Icon, color }) => {
    const iconBgClasses = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        purple: 'bg-purple-50 text-purple-600',
        yellow: 'bg-yellow-50 text-yellow-600',
        red: 'bg-red-50 text-red-600',
    }; return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
                    <p className="text-2xl font-bold text-gray-900">{value}</p>

                    <div className="flex items-center mt-2">
                        {trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        ) : (
                            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                        )}
                        <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {change}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">vs mois dernier</span>
                    </div>
                </div>

                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconBgClasses[color]}`}>
                    <Icon className="w-6 h-6" />
                </div>
            </div>
        </motion.div>
    );
};

export default StatCard;
