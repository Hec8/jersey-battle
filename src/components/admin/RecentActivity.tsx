'use client';

import { motion } from 'framer-motion';
import {
    ShoppingBag,
    MessageSquare,
    User,
    TrendingUp,
    Clock
} from 'lucide-react';

const RecentActivity = () => {
    const activities = [
        {
            id: 1,
            type: 'order',
            title: 'Nouvelle commande',
            description: 'Maillot Mbappé Real Madrid - Taille L',
            user: 'Jean Dupont',
            time: 'Il y a 5 minutes',
            icon: ShoppingBag,
            color: 'bg-green-100 text-green-600'
        },
        {
            id: 2,
            type: 'review',
            title: 'Nouvel avis client',
            description: '⭐⭐⭐⭐⭐ "Excellent maillot, livraison rapide"',
            user: 'Marie Martin',
            time: 'Il y a 12 minutes',
            icon: MessageSquare,
            color: 'bg-blue-100 text-blue-600'
        },
        {
            id: 3,
            type: 'user',
            title: 'Nouvel utilisateur',
            description: 'Inscription newsletter',
            user: 'Pierre Durand',
            time: 'Il y a 23 minutes',
            icon: User,
            color: 'bg-purple-100 text-purple-600'
        },
        {
            id: 4,
            type: 'analytics',
            title: 'Pic de trafic',
            description: '+156% de visiteurs par rapport à hier',
            user: 'Système',
            time: 'Il y a 1 heure',
            icon: TrendingUp,
            color: 'bg-orange-100 text-orange-600'
        },
        {
            id: 5,
            type: 'order',
            title: 'Commande expédiée',
            description: 'Maillot Yamal Barcelone - Commande #12345',
            user: 'Sophie Leblanc',
            time: 'Il y a 2 heures',
            icon: ShoppingBag,
            color: 'bg-green-100 text-green-600'
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Activité récente</h3>
                <Clock className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <div className={`w-10 h-10 rounded-lg ${activity.color} flex items-center justify-center flex-shrink-0`}>
                            <activity.icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {activity.title}
                                </p>
                                <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                                    {activity.time}
                                </span>
                            </div>

                            <p className="text-sm text-gray-600 mt-1">
                                {activity.description}
                            </p>

                            <p className="text-xs text-gray-500 mt-1">
                                Par {activity.user}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Voir toute l&apos;activité
                </button>
            </div>
        </div>
    );
};

export default RecentActivity;
