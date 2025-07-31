import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config({ path: '.env.local' });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function setupAdmin() {
    try {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
            console.error('❌ ADMIN_EMAIL et ADMIN_PASSWORD doivent être définis dans .env.local');
            process.exit(1);
        }

        console.log('🔧 Configuration de l\'administrateur...');
        console.log(`📧 Email: ${adminEmail}`);

        // 1. Créer l'utilisateur dans Firebase Auth
        let userCredential;
        try {
            userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
            console.log('✅ Utilisateur admin créé dans Firebase Auth');
        } catch (authError) {
            if (authError.code === 'auth/email-already-in-use') {
                console.log('ℹ️  L\'utilisateur admin existe déjà dans Firebase Auth');
                // Continuer pour créer/mettre à jour Firestore
            } else {
                console.error('❌ Erreur lors de la création de l\'utilisateur:', authError.message);
                process.exit(1);
            }
        }

        // 2. Créer le profil admin dans Firestore
        const adminData = {
            email: adminEmail,
            role: 'admin',
            permissions: [
                'read_analytics',
                'write_content',
                'manage_users',
                'manage_orders',
                'manage_reviews',
                'manage_products',
                'view_admin_panel'
            ],
            profile: {
                firstName: 'Administrateur',
                lastName: 'Principal',
                displayName: 'Admin',
                isActive: true,
                lastLogin: null
            },
            settings: {
                emailNotifications: true,
                twoFactorEnabled: false,
                language: 'fr'
            },
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        };

        // Créer le document admin dans la collection 'users'
        const userDocRef = doc(db, 'users', adminEmail);
        await setDoc(userDocRef, adminData, { merge: true });
        console.log('✅ Profil admin créé dans Firestore (collection: users)');

        // 3. Créer la collection admins pour un accès rapide
        const adminDocRef = doc(db, 'admins', adminEmail);
        await setDoc(adminDocRef, {
            email: adminEmail,
            isActive: true,
            createdAt: serverTimestamp(),
            lastUpdate: serverTimestamp()
        }, { merge: true });
        console.log('✅ Référence admin créée dans Firestore (collection: admins)');

        // 4. Initialiser les collections de base si elles n'existent pas
        console.log('🔧 Initialisation des collections de base...');

        // Collection orders (commandes)
        const ordersRef = doc(collection(db, 'orders'), 'sample');
        await setDoc(ordersRef, {
            id: 'sample',
            customerEmail: 'customer@example.com',
            items: [
                {
                    productId: 'maillot-mbappe-real',
                    name: 'Maillot Mbappé Real Madrid',
                    size: 'L',
                    price: 89.99,
                    quantity: 1
                }
            ],
            total: 89.99,
            status: 'completed',
            createdAt: serverTimestamp(),
            isSample: true
        });

        // Collection reviews (avis)
        const reviewsRef = doc(collection(db, 'reviews'), 'sample');
        await setDoc(reviewsRef, {
            id: 'sample',
            customerName: 'Jean Dupont',
            customerEmail: 'jean@example.com',
            productId: 'maillot-mbappe-real',
            rating: 5,
            comment: 'Excellent maillot, qualité au top !',
            createdAt: serverTimestamp(),
            approved: true,
            isSample: true
        });

        // Collection analytics (statistiques)
        const analyticsRef = doc(collection(db, 'analytics'), 'daily-stats');
        await setDoc(analyticsRef, {
            date: new Date().toISOString().split('T')[0],
            visitors: 1250,
            pageViews: 3400,
            orders: 12,
            revenue: 1089.88,
            conversionRate: 0.96,
            topPages: [
                { path: '/', views: 1200 },
                { path: '/comparison', views: 800 },
                { path: '/stats', views: 600 }
            ],
            isSample: true,
            createdAt: serverTimestamp()
        });

        // Collection products (produits)
        const productsRef = doc(collection(db, 'products'), 'maillot-mbappe-real');
        await setDoc(productsRef, {
            id: 'maillot-mbappe-real',
            name: 'Maillot Mbappé Real Madrid 2025',
            category: 'maillot',
            team: 'Real Madrid',
            player: 'Kylian Mbappé',
            number: 10,
            price: 89.99,
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            inStock: true,
            stock: 50,
            description: 'Maillot officiel Kylian Mbappé Real Madrid saison 2025',
            images: [
                '/images/mbappe-real-front.jpg',
                '/images/mbappe-real-back.jpg'
            ],
            features: [
                'Technologie Dri-FIT',
                'Coupe authentique',
                'Flocage officiel'
            ],
            createdAt: serverTimestamp(),
            isSample: true
        });

        console.log('✅ Collections de base initialisées avec des données d\'exemple');

        console.log('\n🎉 Configuration terminée avec succès !');
        console.log('\n📋 Résumé:');
        console.log(`   • Utilisateur admin: ${adminEmail}`);
        console.log('   • Rôle: admin avec toutes les permissions');
        console.log('   • Collections Firestore initialisées');
        console.log('   • Données d\'exemple créées');
        console.log('\n🔐 Vous pouvez maintenant vous connecter à l\'interface admin avec:');
        console.log(`   • Email: ${adminEmail}`);
        console.log(`   • Mot de passe: ${adminPassword}`);
        console.log('\n🌐 URL d\'administration: http://localhost:3000/admin');

    } catch (error) {
        console.error('❌ Erreur lors de la configuration:', error);
        process.exit(1);
    }
}

// Exécuter le script
setupAdmin();
