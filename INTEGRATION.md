# 🚀 Integration KalyceAgent (growth-os)

## 📋 Architecture

```
KalyceConsulting (port 3000)
├── src/app/
│   ├── page.tsx (accueil)
│   ├── services/
│   └── growth-os/[[...slug]]/page.tsx (redirection proxy)
│
growth-os (port 3001) - Git Submodule
├── app/
│   ├── (auth)/login
│   ├── (admin)/admin
│   ├── (client)/dashboard
│   └── api/
└── Supabase + Checklist system
```

---

## 🏃 Développement Local

### Option 1: Deux terminaux (Recommandé)

**Terminal 1 - KalyceConsulting (port 3000):**
```bash
npm run dev
```

**Terminal 2 - Growth OS (port 3001):**
```bash
cd growth-os
npm run dev
```

Puis accédez à:
- `http://localhost:3000` - Site KalyceConsulting
- `http://localhost:3001` - Growth OS
- `http://localhost:3000/growth-os` - Redirection vers Growth OS

### Option 2: Un seul terminal (Concurrent)

```bash
npm run dev:all
```

Cela lance les deux apps en parallèle. Pour arrêter: `Ctrl+C`

---

## 🔌 Accès et Authentification

### Consultant (Admin)
- Email: consultant@kalyce.com
- Rôle: consultant
- Accès: `/admin/organizations`

### Client
- Email: test@gmail.com (si créé via formulaire)
- Rôle: client
- Accès: `/dashboard` (après association à une org)

**Créer un nouveau client:**
1. Se connecter en tant que consultant
2. Aller à `/admin/organizations/new`
3. Remplir le formulaire (crée l'org + le compte client + mot de passe)

---

## 🔐 Configuration Supabase

Les deux apps partagent la même instance Supabase:
- **NEXT_PUBLIC_SUPABASE_URL** - URL du projet
- **NEXT_PUBLIC_SUPABASE_ANON_KEY** - Clé publique (utilisateurs)
- **SUPABASE_SERVICE_ROLE_KEY** - Clé privée serveur (opérations d'admin)

Voir `.env.local` pour les valeurs actuelles.

---

## 🌍 Routes Disponibles

### KalyceConsulting (Public)
- `/` - Accueil
- `/services` - Services
- `/contact` - Contact
- `/growth-os` - Redirige vers Growth OS

### Growth OS - Consultant Only
- `/admin/organizations` - Liste des clients
- `/admin/organizations/new` - Créer un client
- `/admin/organizations/[id]` - Détail client (Vue d'ensemble)
- `/admin/organizations/[id]/metrics` - Métriques
- `/admin/organizations/[id]/roadmap` - Roadmap de croissance
- `/admin/organizations/[id]/documents` - Documents

### Growth OS - Client Only
- `/dashboard` - Vue d'ensemble (reedir vers `/admin` si consultant)
- `/dashboard/roadmap` - Roadmap de croissance
- `/dashboard/documents` - Bibliothèque

### Growth OS - Public
- `/login` - Connexion

---

## 🚨 Problèmes Courants

### ❌ Growth OS ne démarre pas sur le port 3001
```bash
lsof -i :3001
kill -9 <PID>
npm run dev
```

### ❌ "Votre consultant n'a pas encore associé votre compte"
**Cause:** Le compte client n'a pas d'`organization_id`

**Solution:** Créer le client via `/admin/organizations/new` (évite ce problème)

### ❌ Erreur Supabase credentials
Vérifier que `.env.local` contient les clés Supabase correctes

### ❌ Erreur CORS/Server Actions
Le `next.config.mjs` de growth-os doit accepter les ports 3001

---

## 📦 Cloner avec le Submodule

```bash
git clone --recurse-submodules https://github.com/Oxxvard/KalyceConsulting.git
cd KalyceConsulting
npm install
npm run dev:all
```

---

## 🚀 Déploiement Vercel

### Option 1: Deux apps (Recommandé)
- Déployer `KalyceConsulting` sur Vercel (root)
- Déployer `growth-os` sur Vercel comme app séparate
- Configurer rewrites dans `vercel.json` pour `/growth-os`

### Option 2: Une seule app
- À documenter selon vos préférences

---

## 📚 Documentation Complète

- [KalyceConsulting README](./README.md)
- [Growth OS README](./growth-os/README.md)
- [Supabase Schema](./growth-os/supabase/migrations/)

