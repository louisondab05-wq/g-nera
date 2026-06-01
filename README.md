# G-Nera - Plateforme Gratuite de Création Vidéo IA

🎬 **G-Nera** est une plateforme gratuite qui utilise l'IA pour transformer vos idées en vidéos virales optimisées pour TikTok, YouTube Shorts et autres réseaux sociaux.

## 🌟 Fonctionnalités

- ✨ **Générateur de scripts IA** - Créez des scripts engageants en secondes
- 🎥 **Transformation de vidéos** - Convertissez vos clips en contenu viral
- 💡 **Générateur d'idées** - Inspirations basées sur les tendances
- ✂️ **Éditeur vidéo** - Montage, texte, musique, effets
- 🚀 **Export optimisé** - Formats prêts pour les réseaux
- 💰 **100% Gratuit** - Aucune limite, aucun paiement

## 🛠️ Stack Technologique

### Frontend
- React 18+ / Next.js 14+
- TypeScript
- Tailwind CSS
- Framer Motion (animations)

### Backend
- Node.js / Express
- Python (traitement vidéo)
- PostgreSQL
- Redis (cache)

### Services IA & Vidéo
- OpenAI API (génération de texte)
- FFmpeg (traitement vidéo)
- Hugging Face (NLP local)

## 📁 Structure du Projet

```
g-nera/
├── frontend/          # Application React/Next.js
├── backend/           # API Node.js
├── services/          # Services Python
├── docs/              # Documentation
└── docker-compose.yml # Orchestration
```

## 🚀 Quick Start

```bash
# Cloner le projet
git clone https://github.com/louisondab05-wq/g-nera.git
cd g-nera

# Démarrer avec Docker
docker-compose up

# Frontend: http://localhost:3000
# Backend: http://localhost:5000
```

## 📦 Installation Manuelle

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

### Services Python
```bash
cd services
pip install -r requirements.txt
python app.py
```

## 🔑 Configuration

Créez un fichier `.env` à la racine :

```env
# API Keys
OPENAI_API_KEY=your_key_here
HUGGINGFACE_API_KEY=your_key_here

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/g_nera

# Backend
BACKEND_PORT=5000
FRONTEND_URL=http://localhost:3000

# Video Processing
MAX_VIDEO_SIZE=500  # MB
MAX_DURATION=600    # seconds (10 min)
```

## 📋 Roadmap

### Phase 1 (MVP)
- [x] Architecture de base
- [ ] Générateur de scripts
- [ ] Upload de vidéos
- [ ] Éditeur basique
- [ ] Export vidéo

### Phase 2
- [ ] Galerie de templates
- [ ] Musique/Son
- [ ] Effets spéciaux
- [ ] Prévisualisations en temps réel

### Phase 3
- [ ] Analytics & statistiques
- [ ] Calendrier de publication
- [ ] Intégration réseaux sociaux
- [ ] Collaboration multi-utilisateurs

## 📚 Documentation

Voir le dossier `/docs` pour :
- [API Documentation](./docs/API.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Guide Développeur](./docs/DEVELOPER_GUIDE.md)

## 🤝 Contribution

Les contributions sont bienvenues ! Consultez [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📄 License

MIT License - Voir [LICENSE](./LICENSE)

## 🆘 Support

- 📧 Email: support@g-nera.io
- 🐛 Issues: [GitHub Issues](https://github.com/louisondab05-wq/g-nera/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/louisondab05-wq/g-nera/discussions)

---

**Made with ❤️ for content creators**
