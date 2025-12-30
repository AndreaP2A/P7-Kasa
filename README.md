# 🏠 Kasa — Application de Location Immobilière entre Particuliers
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

Kasa est une plateforme moderne de location de logements entre particuliers. Ce projet marque une étape clé dans l'apprentissage de React, en mettant l'accent sur le développement d'une interface dynamique, modulaire et parfaitement responsive, tout en respectant une charte graphique rigoureuse fournie sur Figma.

## 📌 Présentation du Projet
Dans le cadre de cette refonte totale, l'enjeu principal était de migrer l'ancienne plateforme ASP.NET vers une infrastructure JavaScript moderne basée sur React. La mission consistait à développer l'intégralité de l'application (front-end) en s'appuyant sur des composants réutilisables et une navigation fluide gérée côté client.

## 🎯 Objectifs techniques
- **Architecture React** : Conception d'une application modulaire décomposée en composants atomiques et layouts réutilisables.
- **Routage Dynamique** : Mise en œuvre de `react-router-dom` (version 6) pour orchestrer la navigation entre la page d'accueil, les fiches logements, la page "À propos" et la gestion des erreurs 404.
- **Hooks & State Management** : Utilisation des React Hooks (`useState`, `useEffect`, `useParams`) pour piloter la logique d'affichage et la récupération des données.
- **SASS (Syntactically Awesome Style Sheets)** : Implémentation d'une structure CSS robuste utilisant des variables, des mixins et une organisation modulaire pour garantir la maintenabilité du design.
- **Fidélité au Design (Pixel Perfect)** : Intégration rigoureuse des maquettes Figma, incluant les animations et les comportements interactifs (slideshow, collapse).

## ✨ Fonctionnalités
Le projet propose une expérience utilisateur complète et interactive :

### 🖼️ Galerie / Slideshow Dynamique
Un composant de navigation d'images intuitif permettant de faire défiler les photos d'un logement. Il gère intelligemment l'affichage des flèches et du compteur selon le nombre total d'images.

### 🔽 Menus Accordéons (Collapse)
Des composants interactifs et accessibles permettant d'axer l'affichage du contenu (descriptions et équipements), utilisés sur les fiches logements et la page "À propos".

### ⭐️ Système de Notation
Affichage dynamique d'une note sur 5 étoiles pour chaque logement, reflétant précisément les données issues du catalogue.

### 📱 Design 100% Responsive
L'interface a été entièrement optimisée pour offrir une navigation confortable sur mobile, tablette et desktop.

## 🚀 Installation et Utilisation
### Prérequis
- [Node.js](https://nodejs.org/) (version 14 ou supérieure recommandée)
- Un gestionnaire de paquets (NPM ou Yarn)

### Installation locale
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/AndreaP2A/P7-Kasa.git
   ```
2. Accédez au dossier :
   ```bash
   cd P7-Kasa/my-app
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Lancez l'application en mode développement :
   ```bash
   npm start
   ```

## 🛠️ Structure du projet
L'architecture suit une logique modulaire orientée composants :

```text
.
├── public/                 # Assets publics (index.html, favicon)
├── src/
│   ├── assets/             # Images et logos du projet
│   ├── components/         # Composants UI (Card, Rating, Slideshow, Collapse...)
│   ├── data/               # Données JSON des logements
│   ├── layouts/            # Composants de structure (Header, Footer)
│   ├── pages/              # Vue des pages (Home, House, About, Error404)
│   ├── routes/             # Configuration de React Router
│   ├── sass/               # Fichiers sources SASS (Base, Utils, Components...)
│   ├── services/           # Logique de récupération de données
│   ├── App.jsx             # Composant racine
│   └── index.jsx           # Point d'entrée de l'application
└── package.json            # Dépendances et scripts
```

## 🌐 Aperçu en ligne
Le projet est accessible en ligne via GitHub Pages : 👉 [Consulter la démo Kasa](https://andreap2a.github.io/P7-Kasa/)

## 🎓 Contexte Pédagogique
Ce projet constitue le 7ème projet pratique du parcours Développeur d'application (CDA) JavaScript / React (Bac+3/+4) chez OpenClassrooms. Il valide la maîtrise des concepts fondamentaux de React et la capacité à construire une application web moderne de A à Z.

## 👨‍💻 Auteur
Andréa PORCHE

GitHub : [@AndreaP2A](https://github.com/AndreaP2A)
LinkedIn : [Andrea Porche](https://www.linkedin.com/in/andrea-porche-2a/)
Email : [andrea.porche2a@gmail.com](mailto:andrea.porche2a@gmail.com)
