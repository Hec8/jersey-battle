'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background avec gradient animé */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900">
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Particules animées */}
            <div className="absolute inset-0">
                {[
                    { left: 10, top: 20, duration: 3, delay: 0 },
                    { left: 25, top: 60, duration: 4, delay: 0.5 },
                    { left: 70, top: 15, duration: 3.5, delay: 1 },
                    { left: 85, top: 75, duration: 4.5, delay: 1.5 },
                    { left: 40, top: 35, duration: 3.2, delay: 0.8 },
                    { left: 60, top: 85, duration: 4.2, delay: 0.3 },
                    { left: 15, top: 70, duration: 3.8, delay: 1.2 },
                    { left: 90, top: 25, duration: 3.3, delay: 0.7 },
                    { left: 50, top: 10, duration: 4.1, delay: 1.8 },
                    { left: 75, top: 50, duration: 3.7, delay: 0.2 },
                    { left: 5, top: 45, duration: 4.3, delay: 1.3 },
                    { left: 95, top: 65, duration: 3.4, delay: 0.9 },
                    { left: 35, top: 80, duration: 4.4, delay: 0.6 },
                    { left: 65, top: 30, duration: 3.1, delay: 1.6 },
                    { left: 80, top: 5, duration: 3.9, delay: 0.4 },
                    { left: 20, top: 90, duration: 4.6, delay: 1.1 },
                    { left: 55, top: 55, duration: 3.6, delay: 1.4 },
                    { left: 8, top: 8, duration: 4.7, delay: 0.1 },
                    { left: 92, top: 42, duration: 3.5, delay: 1.7 },
                    { left: 45, top: 22, duration: 4.0, delay: 1.9 }
                ].map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
                {/* Titre principal */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                        MBAPPÉ
                    </span>
                    <br />
                    <span className="text-white">VS</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
                        YAMAL
                    </span>
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-3xl mx-auto px-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Le duel ultime des numéros 10 :
                    <span className="text-blue-400 font-bold"> Real Madrid</span> vs
                    <span className="text-red-400 font-bold"> FC Barcelone</span>
                </motion.p>

                {/* Images des maillots */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16 mb-8 sm:mb-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    {/* Maillot Mbappé */}
                    <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-40 h-48 sm:w-48 sm:h-60 md:w-64 md:h-72 lg:w-80 lg:h-96 bg-white rounded-2xl shadow-2xl relative overflow-hidden">
                            {/* Image du maillot Mbappé */}
                            <div className="relative w-full h-full">
                                <Image
                                    src="/mbappe.jpg"
                                    alt="Maillot Kylian Mbappé Real Madrid numéro 10"
                                    fill
                                    className="object-contain p-4"
                                    priority
                                />
                            </div>

                            {/* Overlay avec informations */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                                    <div className="text-2xl md:text-3xl font-black mb-1">10</div>
                                    <div className="text-xs md:text-sm font-bold">MBAPPÉ</div>
                                    <div className="text-xs text-gray-300">REAL MADRID</div>
                                </div>
                            </div>

                            {/* Badge de club */}
                            <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-purple-600 to-white rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* VS */}
                    <motion.div
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-yellow-400 order-first sm:order-none mb-4 sm:mb-0"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        VS
                    </motion.div>

                    {/* Maillot Yamal */}
                    <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.1, rotateY: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-40 h-48 sm:w-48 sm:h-60 md:w-64 md:h-72 lg:w-80 lg:h-96 bg-gradient-to-b from-blue-600 to-red-600 rounded-2xl shadow-2xl relative overflow-hidden">
                            {/* Image du maillot Yamal */}
                            <div className="relative w-full h-full">
                                <Image
                                    src="/lamine.jpg"
                                    alt="Maillot Lamine Yamal FC Barcelona numéro 10"
                                    fill
                                    className="object-contain p-4"
                                    priority
                                />
                            </div>

                            {/* Overlay avec informations */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                                    <div className="text-2xl md:text-3xl font-black mb-1">10</div>
                                    <div className="text-xs md:text-sm font-bold">YAMAL</div>
                                    <div className="text-xs text-yellow-300">FC BARCELONA</div>
                                </div>
                            </div>

                            {/* Badge de club */}
                            <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-blue-600 to-red-600 rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="flex flex-col gap-3 sm:gap-4 md:flex-row justify-center items-center mb-8 sm:mb-12 px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <motion.button
                        className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🛒 Acheter Maillot Mbappé
                    </motion.button>

                    <motion.button
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:opacity-90 transition-opacity shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🛒 Acheter Maillot Yamal
                    </motion.button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-8 h-8 text-white/60" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
