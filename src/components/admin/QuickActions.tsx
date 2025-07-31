'use client';

import { motion } from 'framer-motion';
import {
    Plus,
    Edit,
    Eye,
    BarChart3,
    MessageSquare,
    Settings,
    Upload,
    Download
} from 'lucide-react';

const QuickActions = () => {
    const actions = [
        {
            title: 'Ajouter un produit',
            description: 'Créer un nouveau maillot',
            icon: Plus,
            color: 'bg-green-500 hover:bg-green-600',
            onClick: () => console.log('Ajouter produit')
        },
        {
            title: 'Modifier le contenu',
            description: 'Éditer les comparaisons',
            icon: Edit,
            color: 'bg-blue-500 hover:bg-blue-600',
            onClick: () => console.log('Modifier contenu')
        },
        {
            title: 'Voir le site',
            description: 'Aperçu du site public',
            icon: Eye,
            color: 'bg-purple-500 hover:bg-purple-600',
            onClick: () => window.open('/', '_blank')
        },
        {
            title: 'Rapports',
            description: 'Générer des rapports',
            icon: BarChart3,
            color: 'bg-orange-500 hover:bg-orange-600',
            onClick: () => console.log('Rapports')
        },
        {
            title: 'Gérer les avis',
            description: 'Modérer les commentaires',
            icon: MessageSquare,
            color: 'bg-teal-500 hover:bg-teal-600',
            onClick: () => console.log('Gérer avis')
        },
        {
            title: 'Paramètres',
            description: 'Configuration du site',
            icon: Settings,
            color: 'bg-gray-500 hover:bg-gray-600',
            onClick: () => console.log('Paramètres')
        },
        {
            title: 'Importer données',
            description: 'Upload fichiers CSV',
            icon: Upload,
            color: 'bg-indigo-500 hover:bg-indigo-600',
            onClick: () => console.log('Import')
        },
        {
            title: 'Exporter données',
            description: 'Télécharger rapports',
            icon: Download,
            color: 'bg-pink-500 hover:bg-pink-600',
            onClick: () => console.log('Export')
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map((action, index) => (
                    <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={action.onClick}
                        className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
                    >
                        <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-3 transition-colors`}>
                            <action.icon className="w-6 h-6 text-white" />
                        </div>

                        <h4 className="text-sm font-medium text-gray-900 mb-1 text-center group-hover:text-gray-700">
                            {action.title}
                        </h4>

                        <p className="text-xs text-gray-500 text-center">
                            {action.description}
                        </p>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
