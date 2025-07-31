'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3,
    Users,
    ShoppingBag,
    MessageSquare,
    Settings,
    LogOut,
    TrendingUp,
    Eye,
    Star,
    DollarSign
} from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import StatCard from './StatCard';
import QuickActions from './QuickActions';
import RecentActivity from './RecentActivity';
import AnalyticsChart from './AnalyticsChart';

const AdminDashboard = () => {
    const [user] = useAuthState(auth);
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
    };

    const stats: {
        title: string;
        value: string;
        change: string;
        trend: 'up' | 'down';
        icon: React.ComponentType<{ className?: string }>;
        color: 'blue' | 'green' | 'purple' | 'yellow' | 'red';
    }[] = [
            {
                title: 'Visiteurs totaux',
                value: '12,547',
                change: '+23%',
                trend: 'up' as const,
                icon: Users,
                color: 'blue' as const
            },
            {
                title: 'Ventes totales',
                value: '8,234€',
                change: '+18%',
                trend: 'up' as const,
                icon: DollarSign,
                color: 'green' as const
            },
            {
                title: 'Commandes',
                value: '156',
                change: '+12%',
                trend: 'up' as const,
                icon: ShoppingBag,
                color: 'purple' as const
            },
            {
                title: 'Avis clients',
                value: '4.8/5',
                change: '+0.2',
                trend: 'up' as const,
                icon: Star,
                color: 'yellow' as const
            }
        ]; const menuItems = [
            { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3 },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'orders', label: 'Commandes', icon: ShoppingBag },
            { id: 'reviews', label: 'Avis clients', icon: MessageSquare },
            { id: 'content', label: 'Contenu', icon: Eye },
            { id: 'settings', label: 'Paramètres', icon: Settings },
        ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-auto sm:h-16 py-4 sm:py-0">
                        <div className="flex items-center mb-2 sm:mb-0">
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Administration</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <div className="text-xs sm:text-sm text-gray-500">
                                Connecté en tant que <span className="font-medium text-gray-900">{user?.email}</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="flex items-center px-3 py-2 text-xs sm:text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Déconnexion
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row">
                    {/* Sidebar */}
                    <div className="w-full lg:w-64 lg:mr-8 mb-6 lg:mb-0">
                        <nav className="bg-white rounded-lg shadow-sm p-4">
                            <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2 lg:space-y-2 lg:gap-0">
                                {menuItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => setActiveTab(item.id)}
                                            className={`w-full flex flex-col sm:flex-row lg:flex-row items-center justify-center lg:justify-start px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${activeTab === item.id
                                                ? 'bg-blue-50 text-blue-700 border-r-0 lg:border-r-2 border-blue-700'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-0 sm:mr-3 lg:mr-3" />
                                            <span className="text-center lg:text-left">{item.label}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {activeTab === 'dashboard' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    {stats.map((stat, index) => (
                                        <StatCard key={index} {...stat} />
                                    ))}
                                </div>

                                {/* Charts and Analytics */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                                    <AnalyticsChart />
                                    <RecentActivity />
                                </div>

                                {/* Quick Actions */}
                                <QuickActions />
                            </motion.div>
                        )}

                        {activeTab === 'analytics' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-lg shadow-sm p-6"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Analytics détaillées</h2>
                                <p className="text-gray-600">Module d&apos;analytics en cours de développement...</p>
                            </motion.div>
                        )}

                        {activeTab === 'orders' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-lg shadow-sm p-6"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Gestion des commandes</h2>
                                <p className="text-gray-600">Module de gestion des commandes en cours de développement...</p>
                            </motion.div>
                        )}

                        {activeTab === 'reviews' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-lg shadow-sm p-6"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Gestion des avis clients</h2>
                                <p className="text-gray-600">Module de gestion des avis en cours de développement...</p>
                            </motion.div>
                        )}

                        {activeTab === 'content' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-lg shadow-sm p-6"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Gestion du contenu</h2>
                                <p className="text-gray-600">Module de gestion du contenu en cours de développement...</p>
                            </motion.div>
                        )}

                        {activeTab === 'settings' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-lg shadow-sm p-6"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Paramètres</h2>
                                <p className="text-gray-600">Module de paramètres en cours de développement...</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
