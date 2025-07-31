#!/usr/bin/env node

/**
 * Script d'initialisation pour créer le compte administrateur
 * Usage: npm run setup-admin
 */

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Charger les variables d'environnement
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '..', '.env.local') });

// Configuration Firebase depuis les variables d'environnement
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Vérification de la configuration
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain) {
    console.error('❌ Configuration Firebase manquante dans .env.local');
    console.log('Assurez-vous que les variables NEXT_PUBLIC_FIREBASE_* sont définies');
    process.exit(1);
}

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function createAdminUser() {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
        console.error('❌ ADMIN_EMAIL et ADMIN_PASSWORD doivent être définis dans .env.local');
        process.exit(1);
    }

    try {
        console.log('🔄 Création du compte administrateur...');
        console.log(`📧 Email: ${adminEmail}`);

        // Créer l'utilisateur
        const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
        const user = userCredential.user;

        console.log('✅ Compte administrateur créé avec succès !');
        console.log(`🆔 UID: ${user.uid}`);
        console.log(`📧 Email: ${user.email}`);
        console.log('');
        console.log('🎉 Vous pouvez maintenant vous connecter à /admin avec ces identifiants');

    } catch (error) {
        console.error('❌ Erreur lors de la création du compte:', error.message);

        if (error.code === 'auth/email-already-in-use') {
            console.log('ℹ️  Le compte existe déjà. Vous pouvez vous connecter directement.');
        } else if (error.code === 'auth/weak-password') {
            console.log('⚠️  Le mot de passe doit contenir au moins 6 caractères.');
        } else if (error.code === 'auth/invalid-email') {
            console.log('⚠️  L\'adresse email n\'est pas valide.');
        }
    }

    process.exit(0);
}

// Exécuter le script
createAdminUser();
