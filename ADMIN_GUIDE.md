# Guide d'Administration - Jersey Battle

## Configuration initiale

### 1. Configuration Firebase
Assurez-vous que votre projet Firebase est configuré avec les bonnes clés dans `.env.local` :

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=votre-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=votre-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=votre-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=votre-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=votre-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=votre-app-id
```

### 2. Configuration du compte administrateur
Définissez les identifiants admin dans `.env.local` :

```bash
# Identifiants pour créer le compte admin
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=motdepasse-securise

# Liste des emails autorisés à accéder à l'admin
NEXT_PUBLIC_ADMIN_EMAILS=admin@example.com,admin2@example.com
```

### 3. Création du compte administrateur
Exécutez le script pour créer automatiquement le compte admin dans Firebase :

```bash
npm run setup-admin
```

Ce script va :
- ✅ Vérifier la configuration Firebase
- ✅ Créer le compte utilisateur avec l'email et mot de passe définis
- ✅ Confirmer la création avec l'UID généré

## Accès à l'administration

### URL d'accès
Une fois le compte créé, accédez à l'interface d'administration via :
```
http://localhost:3000/admin
```

### Connexion
1. Utilisez l'email et mot de passe définis dans `.env.local`
2. Le système vérifie automatiquement que votre email est dans `NEXT_PUBLIC_ADMIN_EMAILS`
3. Si autorisé, vous accédez au tableau de bord admin

## Fonctionnalités du tableau de bord

### 📊 Statistiques en temps réel
- Visiteurs totaux
- Ventes et revenus
- Nombre de commandes
- Note moyenne des avis clients

### 📈 Analytics
- Graphiques de trafic hebdomadaire
- Taux de conversion
- Tendances de vente

### ⚡ Actions rapides
- Ajouter un nouveau produit
- Modifier le contenu du site
- Gérer les avis clients
- Générer des rapports
- Configurer les paramètres

### 📋 Activité récente
- Nouvelles commandes
- Avis clients récents
- Inscriptions utilisateurs
- Alertes système

## Sécurité

### Contrôle d'accès
- Authentification Firebase obligatoire
- Vérification de l'email dans la liste autorisée
- Session sécurisée avec déconnexion automatique

### Gestion des permissions
Pour autoriser un nouvel administrateur :
1. Ajoutez son email à `NEXT_PUBLIC_ADMIN_EMAILS` dans `.env.local`
2. Redémarrez l'application
3. L'utilisateur doit créer son compte ou vous pouvez utiliser le script

## Dépannage

### Erreur de connexion
- Vérifiez que l'email/mot de passe sont corrects
- Confirmez que l'email est dans `NEXT_PUBLIC_ADMIN_EMAILS`
- Vérifiez la configuration Firebase

### Recréer le compte admin
Si vous devez changer les identifiants :
1. Modifiez `ADMIN_EMAIL` et `ADMIN_PASSWORD` dans `.env.local`
2. Supprimez l'ancien compte depuis la console Firebase (optionnel)
3. Relancez `npm run setup-admin`

### Script ne fonctionne pas
- Vérifiez que toutes les variables Firebase sont définies
- Assurez-vous que Firebase Auth est activé dans votre projet
- Vérifiez que le mot de passe fait au moins 6 caractères

## Développement

Pour ajouter de nouvelles fonctionnalités admin :
1. Créez les composants dans `src/components/admin/`
2. Ajoutez les routes dans `AdminDashboard.tsx`
3. Implémentez la logique métier
4. Testez avec un compte admin valide

## Support

En cas de problème :
1. Vérifiez les logs de la console navigateur
2. Consultez les logs du serveur de développement
3. Vérifiez la configuration Firebase dans la console
