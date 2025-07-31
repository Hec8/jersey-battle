'use client';

import { motion } from 'framer-motion';
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Mail,
    Phone,
    Shield,
    CreditCard,
    Truck
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, url: '#', name: 'Facebook' },
        { icon: <Twitter className="w-5 h-5" />, url: '#', name: 'Twitter' },
        { icon: <Instagram className="w-5 h-5" />, url: '#', name: 'Instagram' },
        { icon: <Youtube className="w-5 h-5" />, url: '#', name: 'YouTube' }
    ];

    const footerLinks = {
        shop: [
            'Maillots Mbappé',
            'Maillots Yamal',
            'Nouveautés',
            'Promotions',
            'Guide des tailles'
        ],
        support: [
            'Contact',
            'FAQ',
            'Livraison',
            'Retours',
            'Garantie'
        ],
        legal: [
            'Mentions légales',
            'Politique d\'affiliation',
            'Confidentialité',
            'CGV',
            'Cookies'
        ]
    };

    return (
        <footer className="bg-black border-t border-gray-800">
            {/* Section principale */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
                    {/* Logo et description */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                            Jersey Battle ⚽
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Votre destination #1 pour les maillots de football authentiques.
                            Comparez, choisissez et portez les couleurs de vos idoles.
                        </p>

                        {/* Badges de confiance */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 bg-green-600/20 px-3 py-2 rounded-lg">
                                <Shield className="w-4 h-4 text-green-400" />
                                <span className="text-xs text-green-400 font-medium">100% Authentique</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-blue-600/20 px-3 py-2 rounded-lg">
                                <Truck className="w-4 h-4 text-blue-400" />
                                <span className="text-xs text-blue-400 font-medium">Livraison 24h</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Boutique */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold text-white">Boutique</h4>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold text-white">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Contact info */}
                        <div className="space-y-3 pt-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm">contact@jerseybattle.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm">+33 1 23 45 67 89</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Légal et Newsletter */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold text-white">Newsletter</h4>
                        <p className="text-gray-400 text-sm">
                            Recevez les dernières offres et actualités maillots !
                        </p>

                        {/* Newsletter form */}
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <button className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                                S&apos;abonner
                            </button>
                        </div>

                        {/* Liens légaux */}
                        <div className="pt-4">
                            <h5 className="text-sm font-medium text-white mb-3">Informations légales</h5>
                            <ul className="space-y-2">
                                {footerLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors text-xs"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Section du bas */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                        {/* Copyright */}
                        <div className="text-center lg:text-left">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} Jersey Battle. Tous droits réservés.
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Site créé avec passion pour les fans de football ⚽
                            </p>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="flex items-center space-x-6">
                            <span className="text-gray-400 text-sm">Suivez-nous :</span>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors group"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="text-gray-400 group-hover:text-white transition-colors">
                                            {social.icon}
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Moyens de paiement */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-400 text-sm">Paiement sécurisé :</span>
                            <div className="flex space-x-2">
                                <div className="bg-gray-800 p-2 rounded">
                                    <CreditCard className="w-5 h-5 text-gray-400" />
                                </div>
                                <div className="bg-gray-800 p-2 rounded text-xs text-gray-400 font-bold">
                                    PayPal
                                </div>
                                <div className="bg-gray-800 p-2 rounded text-xs text-gray-400 font-bold">
                                    Stripe
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Avertissement affilié */}
            <div className="bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-4 py-4">
                    <p className="text-center text-gray-500 text-xs">
                        ⚠️ <strong>Avertissement :</strong> Ce site contient des liens d&apos;affiliation.
                        Nous pouvons recevoir une commission si vous effectuez un achat via nos liens,
                        sans frais supplémentaires pour vous. Cela nous aide à maintenir ce site gratuit.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
