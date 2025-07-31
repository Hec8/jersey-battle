'use client';

import { motion } from 'framer-motion';
import { Trophy, Zap } from 'lucide-react';

const PlayerComparison = () => {
    const playerData = {
        mbappe: {
            name: "Kylian Mbappé",
            nickname: "Le Roi des Bleus",
            age: 26,
            position: "Ailier/Attaquant",
            club: "Real Madrid",
            nationality: "France 🇫🇷",
            stats: {
                goals: "279",
                assists: "127",
                speed: "97km/h",
                rating: "9.2/10"
            },
            achievements: [
                "Coupe du Monde 2018 🏆",
                "Ligue 1 x6 🏆",
            ],
            playStyle: "Vitesse foudroyante, finition clinique, polyvalence offensive",
            marketValue: "€160M",
            color: "from-blue-600 to-white"
        },
        yamal: {
            name: "Lamine Yamal",
            nickname: "Le Joyau du Barça",
            age: 18,
            position: "Ailier Droit",
            club: "FC Barcelone",
            nationality: "Espagne 🇪🇸",
            stats: {
                goals: "16",
                assists: "18",
                speed: "35km/h",
                rating: "8.7/10"
            },
            achievements: [
                "Euro 2024 🏆",
                "La Liga 2023-24 🏆",
                "La Liga 2024-25 🏆",
                "Plus jeune buteur Euro 🥇",
                "Golden Boy 2024 🏆"
            ],
            playStyle: "Créativité exceptionnelle, vision de jeu, dribbles magiques",
            marketValue: "€195M",
            color: "from-red-600 to-blue-600"
        }
    };

    return (
        <section id="comparison" className="py-12 sm:py-16 md:py-20 bg-black/50">
            <div className="container mx-auto px-4">
                {/* Titre de section */}
                <motion.div
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                            DUEL DE LÉGENDES
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                        Découvrez tout ce qui oppose ces deux phénomènes du football mondial
                    </p>
                </motion.div>

                {/* Comparaison des joueurs */}
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-16">
                    {/* Mbappé */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className={`bg-gradient-to-br ${playerData.mbappe.color} p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden`}>
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="w-full h-full bg-white/20 transform rotate-45 scale-150" />
                            </div>

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="text-center mb-6 sm:mb-8">
                                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                                        {playerData.mbappe.name}
                                    </h3>
                                    <p className="text-lg sm:text-xl font-bold text-yellow-300">
                                        {playerData.mbappe.nickname}
                                    </p>
                                    <div className="flex justify-center items-center mt-3 sm:mt-4 space-x-4">
                                        <span className="bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-white font-bold text-sm sm:text-base">
                                            {playerData.mbappe.age} ans
                                        </span>
                                        <span className="text-xl sm:text-2xl">👑</span>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="bg-white/10 p-3 sm:p-4 rounded-xl text-center">
                                        <div className="text-xl sm:text-2xl font-black text-white">{playerData.mbappe.stats.goals}</div>
                                        <div className="text-xs sm:text-sm text-gray-300">Buts</div>
                                    </div>
                                    <div className="bg-white/10 p-3 sm:p-4 rounded-xl text-center">
                                        <div className="text-xl sm:text-2xl font-black text-white">{playerData.mbappe.stats.assists}</div>
                                        <div className="text-xs sm:text-sm text-gray-300">Passes D.</div>
                                    </div>
                                    <div className="bg-white/10 p-3 sm:p-4 rounded-xl text-center">
                                        <div className="text-xl sm:text-2xl font-black text-white">{playerData.mbappe.stats.speed}</div>
                                        <div className="text-xs sm:text-sm text-gray-300">Vitesse Max</div>
                                    </div>
                                    <div className="bg-white/10 p-3 sm:p-4 rounded-xl text-center">
                                        <div className="text-xl sm:text-2xl font-black text-white">{playerData.mbappe.stats.rating}</div>
                                        <div className="text-xs sm:text-sm text-gray-300">Note</div>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                                        <Trophy className="w-5 h-5 mr-2" />
                                        Palmarès
                                    </h4>
                                    <div className="space-y-2">
                                        {playerData.mbappe.achievements.map((achievement, index) => (
                                            <div key={index} className="text-white bg-white/10 px-3 py-2 rounded-lg text-sm">
                                                {achievement}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Play Style */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                                        <Zap className="w-5 h-5 mr-2" />
                                        Style de Jeu
                                    </h4>
                                    <p className="text-white bg-white/10 px-4 py-3 rounded-lg text-sm">
                                        {playerData.mbappe.playStyle}
                                    </p>
                                </div>

                                {/* Market Value */}
                                <div className="text-center">
                                    <div className="text-3xl font-black text-yellow-300">{playerData.mbappe.marketValue}</div>
                                    <div className="text-sm text-gray-300">Valeur Marchande</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Yamal */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className={`bg-gradient-to-br ${playerData.yamal.color} p-8 rounded-3xl shadow-2xl relative overflow-hidden`}>
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="w-full h-full bg-white/20 transform -rotate-45 scale-150" />
                            </div>

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-black text-white mb-2">
                                        {playerData.yamal.name}
                                    </h3>
                                    <p className="text-xl font-bold text-yellow-300">
                                        {playerData.yamal.nickname}
                                    </p>
                                    <div className="flex justify-center items-center mt-4 space-x-4">
                                        <span className="bg-white/20 px-4 py-2 rounded-full text-white font-bold">
                                            {playerData.yamal.age} ans
                                        </span>
                                        <span className="text-2xl">💎</span>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-white/10 p-4 rounded-xl text-center">
                                        <div className="text-2xl font-black text-white">{playerData.yamal.stats.goals}</div>
                                        <div className="text-sm text-gray-300">Buts</div>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl text-center">
                                        <div className="text-2xl font-black text-white">{playerData.yamal.stats.assists}</div>
                                        <div className="text-sm text-gray-300">Passes D.</div>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl text-center">
                                        <div className="text-2xl font-black text-white">{playerData.yamal.stats.speed}</div>
                                        <div className="text-sm text-gray-300">Vitesse Max</div>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl text-center">
                                        <div className="text-2xl font-black text-white">{playerData.yamal.stats.rating}</div>
                                        <div className="text-sm text-gray-300">Note</div>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                                        <Trophy className="w-5 h-5 mr-2" />
                                        Palmarès
                                    </h4>
                                    <div className="space-y-2">
                                        {playerData.yamal.achievements.map((achievement, index) => (
                                            <div key={index} className="text-white bg-white/10 px-3 py-2 rounded-lg text-sm">
                                                {achievement}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Play Style */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                                        <Zap className="w-5 h-5 mr-2" />
                                        Style de Jeu
                                    </h4>
                                    <p className="text-white bg-white/10 px-4 py-3 rounded-lg text-sm">
                                        {playerData.yamal.playStyle}
                                    </p>
                                </div>

                                {/* Market Value */}
                                <div className="text-center">
                                    <div className="text-3xl font-black text-yellow-300">{playerData.yamal.marketValue}</div>
                                    <div className="text-sm text-gray-300">Valeur Marchande</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PlayerComparison;
