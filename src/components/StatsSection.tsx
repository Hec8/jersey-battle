'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Award, Users } from 'lucide-react';

const StatsSection = () => {
    const comparisonData = [
        {
            category: 'Style de Jeu',
            icon: <BarChart3 className="w-8 h-8" />,
            mbappe: {
                score: 95,
                description: 'Vitesse et finition',
                color: 'bg-blue-500'
            },
            yamal: {
                score: 88,
                description: 'Créativité et technique',
                color: 'bg-red-500'
            }
        },
        {
            category: 'Impact Marketing',
            icon: <TrendingUp className="w-8 h-8" />,
            mbappe: {
                score: 98,
                description: 'Star mondiale',
                color: 'bg-blue-500'
            },
            yamal: {
                score: 85,
                description: 'Phénomène émergent',
                color: 'bg-red-500'
            }
        },
        {
            category: 'Valeur Collector',
            icon: <Award className="w-8 h-8" />,
            mbappe: {
                score: 92,
                description: 'Légende établie',
                color: 'bg-blue-500'
            },
            yamal: {
                score: 96,
                description: 'Potentiel historique',
                color: 'bg-red-500'
            }
        },
        {
            category: 'Popularité Club',
            icon: <Users className="w-8 h-8" />,
            mbappe: {
                score: 94,
                description: 'Madridista',
                color: 'bg-blue-500'
            },
            yamal: {
                score: 91,
                description: 'Culé de cœur',
                color: 'bg-red-500'
            }
        }
    ];

    const globalStats = [
        {
            number: '2.4M',
            label: 'Maillots vendus',
            description: 'Mbappé + Yamal 2024'
        },
        {
            number: '127',
            label: 'Pays de vente',
            description: 'Distribution mondiale'
        },
        {
            number: '98%',
            label: 'Satisfaction client',
            description: 'Note moyenne'
        },
        {
            number: '€180M',
            label: 'Chiffre d\'affaires',
            description: 'Ventes maillots 2024'
        }
    ];

    return (
        <section id="stats" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                {/* Titre */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            BATTLE STATS
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Analyse comparative détaillée des deux phénomènes du football
                    </p>
                </motion.div>

                {/* Comparaisons animées */}
                <div className="space-y-12 mb-20">
                    {comparisonData.map((item, index) => (
                        <motion.div
                            key={item.category}
                            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="text-white mr-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-white">{item.category}</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Mbappé */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-bold">Mbappé</span>
                                        <span className="text-blue-400 font-bold">{item.mbappe.score}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-3">
                                        <motion.div
                                            className={`${item.mbappe.color} h-3 rounded-full`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.mbappe.score}%` }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.mbappe.description}</p>
                                </div>

                                {/* Yamal */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-bold">Yamal</span>
                                        <span className="text-red-400 font-bold">{item.yamal.score}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-3">
                                        <motion.div
                                            className={`${item.yamal.color} h-3 rounded-full`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.yamal.score}%` }}
                                            transition={{ duration: 1.5, delay: 0.7 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.yamal.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Statistiques globales */}
                <motion.div
                    className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-8 shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Statistiques Mondiales 2024
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {globalStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="text-4xl md:text-5xl font-black text-yellow-400 mb-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-white font-bold mb-1">{stat.label}</div>
                                <div className="text-gray-400 text-sm">{stat.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-white mb-6">
                        Lequel choisirez-vous ?
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <motion.button
                            className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🛒 Maillot Mbappé - €89.95
                        </motion.button>

                        <motion.button
                            className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🛒 Maillot Yamal - €84.95
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;
