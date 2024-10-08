# Cahier des charges pour le projet ETHYLOTEST
Ce cahier des charges va évoluer avec le temps. Il doit être une référence pour tous et toujours à jour.

## 1. Introduction
- **Contexte** : Ce projet existe car un ami vient d'avoir son permis, il est donc considéré comme jeune conducteur et se trouve dans une posture stressante lorsqu'il doit rentrer de soirée après avoir bu un verre. En effet, en étant jeune conducteur les règles sont différentes pour les taux d'alcolémie à ne pas dépasser.

- **Objectifs** : L'objectif est de pouvoir controler sa consommation d'alcool, si le conducteur n'à plus d'ethylotest, afin de savoir si il peut prendre la route. Le but n'est pas de remplacer l'ethylotest mais d'avoir un solution alternative à caractère préventif. L'objectif secondaire est de pouvoir suivre sa consommation d'alcool au quotidien.

## 2. Description du projet
- **Type de site** : Application web
- **Public cible** : Destiné à un public de 18+ et de tout type de profession ou situation.
- **Objectifs à atteindre** : Informer les utilisateurs sur leur taux d'alcolémie et leur offrir un suivi de consommation.

## 3. Cahier des charges fonctionnel
- **Fonctionnalités principales** :
  - Utiliser l'app comme un Ethylotest. Pour fonctionner l'Ethylotest à besoin des informations suivantes :
    - le poid
    - le degrè d'alcool
    - le genre
    - le temps passé depuis la dernière consommation
    - A jeun ou non
  
  - Authentification grace à un compte, qui à besoin des informations suivantes :
    - un email
    - un mot de passe
  
  - Mot de passe oublié :
    - Réinitialisation du mot de passe
    - Notification email pour les mots de passe oublié

  - Gestion de plusieurs profils par compte pour pré-remplir les champs de l'ethylotest avec ces informations : 
    - son poids
    - son genre
  - Déconnexion
  - Avoir un dashboard de sa consommation d'alcool : 
    - suivi journalié, hebdomadaire, mensuel ou annuel
  - Suivi  avec Google Analytics


- **User stories** :

| Version                | En tant que | Je veux | Afin de | 
|------------------------| ----------- | ------- | ------- |
| MVP | Visiteur / Utilisateur | Indiquer l'alcool que j'ai consommé | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer le degrè d'alcool consommé | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer la quantitée d'alcool consommée | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer mon genre | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer mon poids | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer le temps passé depuis la dernière consommation | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer si l'utilisateur est a jeun ou non | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Valider mes informations | Afficher le résultat de mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Pouvoir gérer les cookies | Faire respecter mes droits liés au RGPD |
| V1 | Utilisateur             | Créer un compte | Utiliser toutes les fonctionnalités de l'app |
| V1 | Utilisateur             | Modifier mon compte | Changer les paramètres de mon compte |
| V1 | Utilisateur             | Supprimer mon compte | Supprimer toutes les informations et accès au compte |
| V1 | Visiteur                | Créer un profil | Pré-remplir l'éthylotest avec les données de profil enregistrées |
| V1 | Utilisateur             | Modifier un profil | Modifier les données d'un profil |
| V1 | Utilisateur             | Supprimer un profil | Supprimer mon profil utilisateur et toutes les données liées à ce profil |
| V1 | Utilisateur             | Enregistrer le résultat de l'étylotest | Alimenter Les données de mon dashboard |
| V1 | Utilisateur             | Accéder à mon dashboard | Suivre ma consommation |
| V2 | Utilisateur             | Créer plusieurs profil | Suivre la consommation d'autres personnes |
| V2 | Utilisateur             | Modifier chaque profil | Modifier les données d'un profil et le profil |
| V2 | Utilisateur             | Supprimer chaque profil | Supprimer les données d'un profil et le profil |


- **Pages du site** : 

| Version | Page | Contenu | wireframe |
|---|---|---|---|
| MVP | Accueil | Accès à l'éthylotest sans être connecté | [Accueil déconnecté](./wireframes/home-logout.png) |
| MVP | Accueil | Accès à l'éthylotest connecté | [Accueil connecté](./wireframes/home-logged.png) |
| MVP | Résultat | Accès à l'éthylotest | [Résultat](./wireframes/result.png) |
| MVP | Mentions légales | Toutes les mentions légales | [Mentions légales](./wireframes/legal-notices.png) |
| MVP | A propos | Plus d'informations sur l'app et pourquoi s'inscrire | [A propos](./wireframes/about.png) |
| V1 | Contact | Page de contact | [A FAIRE](#) |
| V1 | Dashboard | graphique de la consommation (Annuelle, mensuelle, hebdomadaire ou journalière) | [Dashboard](./wireframes/dashboard.png) |
| V1 | Edition de compte | Formulaire d'édition du compte principal | [Edition du compte](./wireframes/edit-account.png) |
| V1 | Edition de profil | Formulaire d'édition du profil | [Edition de profil](./wireframes/edit-profile.png) |
| V2 | Choix du profil à éditer | Formulaire d'édition du profil selectionné | [Choix de profil (dans le header)](./wireframes/home-logged.png) |


## 4. Cahier des charges technique
### **Technologies Front-end**  
    
  - **HTML5** :
      - **Structure de contenu** : Langage standard utilisé pour créer la structure d'une page web. Il permet de définir les différents éléments de la page comme les titres, les paragraphes, les images, les liens, etc.
      - **Sémantique** HTML5 introduit des balises sémantiques (comme```header```, ```footer```, ```article```, ```section```) qui améliorent la lisibilité du code et l'accessibilité.
      - **Compatibilité** : HTML est supporté par tous les navigateurs web, ce qui garantit que le contenu sera affiché correctement sur n'importe quel appareil.
   
  - **CSS3** : 
      - **Présentation et mise en forme** : CSS est utilisé pour contrôler l'apparence visuelle des éléments HTML. Il permet de définir des styles comme les couleurs, les polices, les marges, les espacements, etc.
      - **Séparation du contenu et de la présentation** : En utilisant CSS, vous pouvez séparer la structure du contenu (HTML) de sa présentation, ce qui rend le code plus propre et plus facile à maintenir.
      - **Responsive design** : CSS permet de créer des mises en page adaptatives qui s'ajustent automatiquement en fonction de la taille de l'écran, assurant ainsi une bonne expérience utilisateur sur tous les appareils (ordinateurs, tablettes, smartphones).
      - **Réutilisabilité et modularité**: Les styles CSS peuvent être réutilisés sur plusieurs pages, ce qui réduit la duplication de code et facilite les modifications globales.
    
  - ### **Utilisation de CSS modules** : 
      - C'est une solution pour gérer les styles de manière modulaire et éviter les conflits de noms. 
      - CSS modules est particulièrement utile dans les projets React et permet d'avoir un code CSS propre et organisé.
    
**Exemple d'utilisation de CSS modules :**
1. Fichier CSS (Button.module.css)

```css
.button {
  background: blue;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
}

.primary {
  background: darkblue;
}
```

2. Fichier JavaScript (Button.js)

```javascript
import React from 'react';
import styles from './Button.module.css';

const Button = ({ primary, children }) => (
  <button className={`${styles.button} ${primary ? styles.primary : ''}`}>
    {children}
  </button>
);

export default Button;
```

  - ### **JavaScript** : 
      Javascript est un langage de programmation essentiel pour le développement web côté client (front-end).
      - **Interactivité** : JavaScript permet de rendre les pages web interactives. Par exemple, il peut être utilisé pour créer des animations, des menus déroulants, des carrousels d'images, etc. Il permet de réagir aux actions de l'utilisateur, comme les clics de souris, les mouvements de souris, les frappes au clavier, etc.
      - **Dynamisme** : JavaScript permet de modifier le contenu et le style des pages web de manière dynamique sans avoir à recharger la page. Par exemple, il peut être utilisé pour mettre à jour une liste de produits en fonction des filtres sélectionnés par l'utilisateur. Il permet de manipuler le DOM (Document Object Model) pour ajouter, supprimer ou modifier des éléments HTML.
      - **Communication Asynchrone** : JavaScript permet de faire des requêtes HTTP asynchrones (AJAX) pour communiquer avec le serveur sans recharger la page. Cela permet de récupérer ou d'envoyer des données en arrière-plan, améliorant ainsi l'expérience utilisateur. Par exemple, il peut être utilisé pour valider un formulaire en temps réel ou pour charger des données supplémentaires lorsque l'utilisateur fait défiler la page.
      - **Frameworks et Bibliothèques** : JavaScript dispose de nombreux frameworks et bibliothèques populaires comme React, Angular, Vue.js, qui facilitent le développement d'applications web complexes et performantes. Ces outils offrent des fonctionnalités avancées pour la gestion de l'état, le routage, les animations, etc.
      - **Compatibilité et Standardisation** : JavaScript est supporté par tous les navigateurs modernes, ce qui garantit que les fonctionnalités développées seront accessibles à la majorité des utilisateurs. Il est standardisé par l'ECMA (European Computer Manufacturers Association), ce qui assure une certaine cohérence et stabilité dans son utilisation.
      - **Écosystème Riche** : JavaScript bénéficie d'un écosystème riche avec une multitude de bibliothèques, d'outils et de ressources disponibles pour les développeurs. Il dispose également d'une grande communauté de développeurs, ce qui facilite l'apprentissage et le partage de connaissances.

  - ### **ReactJS** :
      React est une bibliothèque JavaScript populaire pour la construction d'interfaces utilisateur. Voici quelques raisons pour lesquelles il est avantageux d'utiliser React dans un projet web :

      - **Composants Réutilisables**: React permet de créer des composants réutilisables, ce qui facilite la gestion et la maintenance du code. Les composants peuvent être combinés pour construire des interfaces utilisateur complexes de manière modulaire.
      - **Virtual DOM**: React utilise un Virtual DOM pour optimiser les mises à jour de l'interface utilisateur. Cela améliore les performances en minimisant les manipulations directes du DOM réel. Les changements dans l'interface utilisateur sont d'abord appliqués au Virtual DOM, puis synchronisés de manière efficace avec le DOM réel.

      - **Unidirectional Data Flow** : React suit un flux de données unidirectionnel, ce qui rend le code plus prévisible et plus facile à déboguer. Les données sont passées des composants parents aux composants enfants via des props, ce qui simplifie la gestion de l'état de l'application.
      - **Écosystème Riche** : React dispose d'un écosystème riche avec de nombreuses bibliothèques et outils complémentaires, comme Redux pour la gestion de l'état, React Router pour le routage, et bien d'autres. La communauté active de React fournit de nombreuses ressources, tutoriels et bibliothèques tierces.
      - **JSX** : React utilise JSX, une syntaxe qui permet de mélanger JavaScript et HTML. Cela rend le code plus lisible et plus facile à écrire. JSX permet de définir la structure de l'interface utilisateur de manière déclarative, ce qui améliore la clarté du code.
      - **Performance** : Grâce au Virtual DOM et à d'autres optimisations internes, React offre de bonnes performances, même pour des applications complexes. Les techniques comme le "code splitting" et le "lazy loading" peuvent être facilement intégrées pour améliorer encore les performances.
      - **Support pour les Applications Mobiles** : React Native, une extension de React, permet de développer des applications mobiles natives pour iOS et Android en utilisant la même base de code que pour les applications web. Cela permet de partager une grande partie du code entre les applications web et mobiles, réduisant ainsi le temps et les coûts de développement.
      - **Facilité d'Apprentissage et Adoption** : React a une courbe d'apprentissage relativement douce comparée à d'autres frameworks front-end. Sa popularité et son adoption par de grandes entreprises comme Facebook, Instagram, et Airbnb en font un choix sûr pour les projets web.

**Exemple de code REACT :**

```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

  - ### **NextJS** :
      NextJS présente plusieurs avantages, notamment en termes de performance, de SEO, et de facilité de développement. Voici quelques raisons clés :
      - **Rendu Côté Serveur (SSR)** : Next.js permet le rendu côté serveur, ce qui signifie que les pages peuvent être pré-rendues sur le serveur avant d'être envoyées au client. Cela améliore le SEO et les performances initiales de chargement de la page.
      - **Génération de Sites Statiques (SSG)** : Next.js supporte la génération de sites statiques, ce qui permet de pré-rendre des pages au moment de la construction. Cela combine les avantages du SSR avec les performances des sites statiques.
      - **SEO Amélioré** : Grâce au SSR et au SSG, les moteurs de recherche peuvent indexer le contenu de votre site plus efficacement, ce qui améliore le référencement naturel (SEO).
      - **Optimisation Automatique des Performances** : Next.js inclut des optimisations automatiques comme le "code splitting" et le "lazy loading", ce qui améliore les performances de votre application sans configuration supplémentaire.
      - **Système de Routage Intégré** : Next.js offre un système de routage basé sur le système de fichiers, ce qui simplifie la création de routes et la navigation dans l'application.
      - **Support des API Routes** : Next.js permet de créer des API routes directement dans l'application, ce qui facilite la gestion des requêtes API sans avoir besoin d'un serveur backend séparé.
      - **Facilité de Configuration** : Next.js offre une configuration simple et intuitive, tout en étant extensible via des plugins et des fichiers de configuration.
      - **Expérience de Développement Améliorée** : Next.js améliore l'expérience de développement avec des fonctionnalités comme le rechargement à chaud (Hot Module Replacement) et une intégration facile avec TypeScript.

  **Exemple de code avec NextJS** : Configuration simple d'une page :

```javascript
  // pages/index.js
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue sur mon site web</h1>
      <p>Ceci est une page rendue côté serveur avec Next.js</p>
    </div>
  );
};

export default HomePage;

// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js API route!' });
}
```

  - ### **TypeScript** : 
      TypeScript est un sur-ensemble typé de JavaScript qui apporte plusieurs avantages, surtout lorsqu'il est utilisé avec React. Voici quelques raisons pour lesquelles il est bénéfique d'utiliser TypeScript dans un projet web avec React :
      - **Typage Statique** : TypeScript permet de définir des types pour les variables, les fonctions, les composants, etc. Cela aide à attraper les erreurs au moment de la compilation plutôt qu'à l'exécution. Le typage statique améliore la lisibilité et la maintenabilité du code en rendant les intentions du développeur plus explicites.
      - **Meilleure Intégration avec les IDE** : Les IDE comme Visual Studio Code offrent une meilleure autocomplétion, navigation de code, et refactoring lorsque vous utilisez TypeScript. Les développeurs bénéficient d'une expérience de développement plus fluide avec des suggestions de code et des vérifications d'erreurs en temps réel.
      - **Documentation Automatique** : Les types servent de documentation vivante pour le code. Ils aident les développeurs à comprendre rapidement ce que fait une fonction ou un composant sans avoir à lire toute l'implémentation. Cela est particulièrement utile dans les équipes où plusieurs développeurs travaillent sur le même codebase.
      - **Interopérabilité avec JavaScript**: TypeScript est un sur-ensemble de JavaScript, ce qui signifie que tout code JavaScript valide est également du code TypeScript valide. Vous pouvez progressivement adopter TypeScript dans un projet existant sans avoir à tout réécrire.
      - **Sécurité et Robustesse**: Le typage statique et les fonctionnalités avancées de TypeScript comme les interfaces, les types génériques, et les unions de types aident à écrire un code plus sûr et plus robuste. Cela réduit les bugs liés aux types et améliore la qualité globale du code.
      - **Support pour les Fonctionnalités Modernes de JavaScript** : TypeScript supporte les dernières fonctionnalités de JavaScript et les transpile pour être compatible avec les environnements plus anciens. Cela permet d'utiliser des fonctionnalités modernes tout en assurant une compatibilité avec les navigateurs plus anciens.
      - **Meilleure Gestion des Propriétés et des États dans React** : Avec React, TypeScript permet de définir clairement les types des props et de l'état des composants, ce qui réduit les erreurs et facilite le développement. Les hooks de React, comme useState et useEffect, bénéficient également du typage, ce qui rend leur utilisation plus sûre et plus prévisible.

**Exemple de code TypeScript avec REACT :**

```javascript
import React, { FC, useState } from 'react';

// Définition des types pour les props
interface MyComponentProps {
  title: string;
  initialCount: number;
}

const MyComponent: FC<MyComponentProps> = ({ title, initialCount }) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;
```

  - ### **VITE**
      Vite est un outil de build moderne qui offre plusieurs avantages pour le développement de sites web :
      - **Temps de Démarrage Ultra-Rapide** : Vite utilise un serveur de développement basé sur ES modules natifs, ce qui permet un démarrage quasi-instantané, même pour des projets de grande taille. Contrairement aux outils traditionnels qui doivent tout compiler avant de démarrer, Vite ne compile que ce qui est nécessaire.
      - **Hot Module Replacement (HMR) Rapide** : Vite offre un HMR extrêmement rapide, ce qui permet de voir les changements en temps réel sans recharger toute la page. Cela améliore considérablement l'expérience de développement en réduisant le temps d'attente pour voir les modifications.
      - **Build Optimisé** : Vite utilise Rollup pour la production, ce qui permet de générer des bundles optimisés et performants. Les fonctionnalités comme le "tree-shaking" et le "code splitting" sont intégrées par défaut, ce qui réduit la taille des bundles et améliore les performances.
      - **Support des Fonctionnalités Modernes** : Vite supporte les dernières fonctionnalités de JavaScript et TypeScript, ainsi que les frameworks modernes comme React, Vue, et Svelte  Il est conçu pour tirer parti des fonctionnalités modernes des navigateurs, ce qui permet d'écrire du code plus propre et plus efficace.
      - **Configuration Simple et Extensible** : Vite offre une configuration simple et intuitive, tout en étant extensible via des plugins. Vous pouvez facilement ajouter des plugins pour des fonctionnalités supplémentaires ou personnaliser la configuration selon vos besoins.
      - **Support pour les CSS et les Préprocesseurs** : Vite supporte nativement les CSS et les préprocesseurs comme Sass, Less, et Stylus. Il offre également des fonctionnalités avancées comme le CSS modules et le post-processing.
      - **Compatibilité avec les Modules ES** : Vite utilise les modules ES natifs pour le développement, ce qui permet une meilleure compatibilité avec les navigateurs modernes. Cela simplifie également la gestion des dépendances et améliore les performances de chargement.

  **Exemple de structure et de configuration de VITE** : 

  **Structure du projet** : 

```
  my-react-app/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
└── vite.config.js
```
  
**Configuration Vite (vite.config.js) :**

  ```javascript
  import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
  ```
  ### **Technologies Back-end** : 
  
  - ### **NodeJS** : 
    Utiliser Node.js dans un projet de site web présente plusieurs avantages, notamment en termes de performance, de scalabilité, et de facilité de développement. Voici quelques raisons clés :

      - **Architecture Non Bloquante et Événementielle** : Node.js utilise une architecture non bloquante et basée sur des événements, ce qui permet de gérer un grand nombre de connexions simultanées avec une faible latence.
      - **JavaScript sur le Serveur et le Client** : Avec Node.js, vous pouvez utiliser JavaScript à la fois sur le serveur et le client, ce qui simplifie le développement en permettant aux développeurs de travailler avec un seul langage de programmation. Cela facilite également le partage de code entre le client et le serveur.
      - **Écosystème Riche avec npm** : Node.js dispose d'un écosystème riche de modules et de packages disponibles via npm (Node Package Manager). Cela permet de réutiliser des composants existants et de gagner du temps sur le développement de fonctionnalités courantes.
      - **Performance et Scalabilité** : Node.js est conçu pour être performant et scalable. Grâce à son modèle non bloquant, il peut gérer un grand nombre de requêtes simultanées sans consommer beaucoup de ressources. De plus, il est facile de mettre en place des architectures de microservices avec Node.js, ce qui permet de scaler horizontalement.
      - **Support des API RESTful** : Node.js est particulièrement bien adapté pour créer des API RESTful. Avec des frameworks comme Express.js, il est facile de définir des routes, de gérer les requêtes HTTP, et de structurer votre application de manière modulaire.
      - **Communauté Active et Support** : Node.js bénéficie d'une communauté active et d'un support étendu. Il existe de nombreuses ressources, tutoriels, et bibliothèques disponibles pour aider les développeurs à résoudre des problèmes et à améliorer leurs applications.
      - **Intégration Facile avec les Bases de Données** : Node.js offre une intégration facile avec diverses bases de données, qu'elles soient relationnelles (comme PostgreSQL) ou non relationnelles (comme MongoDB). Des bibliothèques comme pg pour PostgreSQL et mongoose pour MongoDB simplifient les interactions avec les bases de données.
  
  **Exemple de code avec NodeJS** : Configuration simple d'un serveur

```javascript
  // server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon site web avec Node.js et Express!');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
```

  - ### **Express**
    Utiliser Express dans un projet de site web présente plusieurs avantages, notamment en termes de simplicité, de flexibilité, et de performance. Voici quelques raisons clés :

      - **Simplicité et Minimalisme** : Express est un framework minimaliste pour Node.js, ce qui signifie qu'il fournit juste ce dont vous avez besoin pour démarrer sans imposer de structure rigide. Cela permet aux développeurs de créer des applications web rapidement et facilement.
      - **Flexibilité** : Express offre une grande flexibilité en permettant aux développeurs de choisir les composants et les middlewares qu'ils souhaitent utiliser. Vous pouvez facilement ajouter des fonctionnalités comme l'authentification, la gestion des sessions, et la validation des données en utilisant des middlewares.
      - **Système de Routage Puissant** : Express dispose d'un système de routage puissant et intuitif qui permet de définir des routes pour gérer différentes requêtes HTTP. Cela facilite la création d'API RESTful et la gestion des routes de votre application.
      - **Middleware** : Express utilise des middlewares pour gérer les requêtes et les réponses. Les middlewares sont des fonctions qui ont accès à l'objet de requête (req), l'objet de réponse (res), et à la fonction next() dans le cycle de requête-réponse de l'application. Cela permet de modulariser et de réutiliser le code.
      - **Écosystème Riche** : Express bénéficie d'un écosystème riche avec de nombreux modules et extensions disponibles via npm. Cela permet de réutiliser des composants existants et de gagner du temps sur le développement de fonctionnalités courantes.
      - **Performance** : Express est léger et performant, ce qui en fait un excellent choix pour les applications web qui nécessitent une réponse rapide et efficace.
      - **Communauté Active et Support** : Express a une grande communauté de développeurs et un support étendu. Il existe de nombreuses ressources, tutoriels, et bibliothèques disponibles pour aider les développeurs à résoudre des problèmes et à améliorer leurs applications.
  
**Exemple de code avec Express** : Simple configuration de serveur

```javascript
    // server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon site web avec Node.js et Express!');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
```

  - ### **Architecture MVC**
    Utiliser une architecture MVC (Modèle-Vue-Contrôleur) dans un projet de site web présente plusieurs avantages, notamment en termes de séparation des préoccupations, de maintenabilité, et de testabilité. Voici quelques raisons clés :
    - **Séparation des Préoccupations** L'architecture MVC divise l'application en trois composants principaux : le Modèle, la Vue, et le Contrôleur. Cette séparation permet de gérer les différentes responsabilités de manière isolée, ce qui facilite la gestion et la compréhension du code.
      - **Modèle (Model)** : Gère les données et la logique métier de l'application. Il interagit avec la base de données et contient les règles de validation.
      - **Vue (View)** : Gère la présentation des données. Elle est responsable de l'affichage des informations à l'utilisateur.
      - **Contrôleur (Controller)** : Gère les interactions de l'utilisateur. Il reçoit les entrées de l'utilisateur, les traite (en utilisant le modèle), et met à jour la vue en conséquence.
    - **Maintenabilité** : Grâce à la séparation des préoccupations, il est plus facile de maintenir et de mettre à jour le code. Les développeurs peuvent travailler sur différentes parties de l'application sans interférer les uns avec les autres. Par exemple, les modifications apportées à la logique métier n'affecteront pas directement la couche de présentation.
    - **Réutilisabilité** : Les composants de l'architecture MVC sont souvent réutilisables. Par exemple, les vues peuvent être réutilisées pour afficher les mêmes données dans différents contextes, et les modèles peuvent être utilisés par différents contrôleurs.
    - **Testabilité** : L'architecture MVC facilite les tests unitaires et les tests d'intégration. Les composants étant bien séparés, il est plus facile de tester chaque partie de l'application de manière isolée. Par exemple, les tests peuvent se concentrer sur la logique métier du modèle sans se soucier de la présentation.
    - **Organisation du Code** : L'architecture MVC impose une structure claire et organisée au projet. Cela aide les développeurs à naviguer dans le code et à comprendre rapidement la structure de l'application.
    - **Scalabilité** : L'architecture MVC est bien adaptée aux applications de grande envergure. Elle permet de diviser l'application en modules plus petits et plus gérables, ce qui facilite l'ajout de nouvelles fonctionnalités et l'évolution de l'application.

  **Exemple de code** :

  ```javascript
  // models/user.js
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static findById(id) {
    // Logique pour trouver un utilisateur par ID
  }
}

module.exports = User;

// controllers/userController.js
const User = require('../models/user');

exports.getUser = (req, res) => {
  const user = User.findById(req.params.id);
  res.render('user', { user });
};

// views/user.ejs
<!DOCTYPE html>
<html>
<head>
  <title>User</title>
</head>
<body>
  <h1><%= user.name %></h1>
</body>
</html>

// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user/:id', userController.getUser);

module.exports = router;

// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.use('/', userRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
  ```
  - ### **Pattern Datamapper**
    Utiliser le pattern Data Mapper dans un projet de site web présente plusieurs avantages, notamment en termes de séparation des préoccupations, de flexibilité, et de testabilité. Voici quelques raisons clés :
    
    - **Séparation des Préoccupations** : Le pattern Data Mapper sépare la logique de persistance des objets métier. Cela signifie que les objets métier ne contiennent pas de code spécifique à la base de données, ce qui permet de maintenir une séparation claire entre la logique métier et la logique de persistance.

    - **Flexibilité** : Le Data Mapper offre une grande flexibilité en permettant de mapper des objets à différentes structures de base de données sans modifier les objets eux-mêmes. Cela facilite les changements de schéma de base de données et permet de travailler avec plusieurs bases de données.

    - **Testabilité** : En isolant la logique de persistance, le pattern Data Mapper facilite les tests unitaires des objets métier. Les tests peuvent se concentrer sur la logique métier sans se soucier des interactions avec la base de données.
    - **Réutilisabilité** : Le code de persistance peut être réutilisé pour différents objets métier. Cela permet de centraliser la logique de persistance et de la rendre plus modulaire et maintenable.
    - **Encapsulation** : Le Data Mapper encapsule les détails de la persistance, ce qui permet de masquer la complexité des opérations de base de données. Les objets métier peuvent se concentrer sur la logique métier sans se soucier de la manière dont les données sont stockées ou récupérées.

  **Exemple de code** : Voici un exemple simple de mise en œuvre du pattern Data Mapper en utilisant Node.js et une base de données SQL 

```javascript
    // models/User.js
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

module.exports = User;

// mappers/UserMapper.js
const db = require('../db');
const User = require('../models/User');

class UserMapper {
  static async findById(id) {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    const row = result.rows[0];
    return new User(row.id, row.name, row.email);
  }

  static async save(user) {
    if (user.id) {
      await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [user.name, user.email, user.id]);
    } else {
      const result = await db.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [user.name, user.email]);
      user.id = result.rows[0].id;
    }
  }
}

module.exports = UserMapper;

// db/index.js
const { Pool } = require('pg');
const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdatabase',
  password: 'yourpassword',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
```

   ### **Technologies en base de données :** 

  - **PSQL** :
    
    Les avantages d'utiliser PostgreSQL (PSQL) dans un projet comme celui de l'ethylotest sont nombreux. Voici quelques points clés :

    - **Robustesse et Fiabilité** : PostgreSQL est connu pour sa robustesse et sa fiabilité. Il est capable de gérer de grandes quantités de données et des charges de travail élevées, ce qui est essentiel pour une application qui pourrait avoir de nombreux utilisateurs simultanés.

    - **Support des Transactions ACID** : PostgreSQL supporte les transactions ACID (Atomicité, Cohérence, Isolation, Durabilité), garantissant ainsi l'intégrité des données même en cas de pannes ou d'erreurs.

    - **Fonctionnalités Avancées** : PostgreSQL offre des fonctionnalités avancées comme les vues matérialisées, les transactions imbriquées, les déclencheurs, et les procédures stockées, qui peuvent être très utiles pour des opérations complexes de gestion des données.

    - **Extensibilité** : PostgreSQL est hautement extensible. Vous pouvez ajouter de nouvelles fonctionnalités en utilisant des extensions comme PostGIS pour les données géospatiales, ou pgcrypto pour le chiffrement.

    - **Sécurité** : PostgreSQL offre des mécanismes de sécurité robustes, y compris l'authentification basée sur les rôles, le chiffrement SSL, et le contrôle d'accès granulaire.

    - **Communauté Active** : PostgreSQL bénéficie d'une communauté active et d'un support commercial, ce qui signifie que vous pouvez facilement trouver de l'aide et des ressources pour résoudre les problèmes.

    - **Intégration Facile avec Node.js** : Comme déjà mentionné, PostgreSQL s'intègre facilement avec Node.js en utilisant des bibliothèques comme pg, simplifiant ainsi les interactions avec la base de données.

  - **MongoDB** :

    Dans une projet comme l'Ethylotest, MongoDB peut avoir un rôle complémentaire à celui de PSQL. Notamment pour l'écriture et l'affichage des données de consommation d'alcool des utilisateurs : 

    - **Flexibilité du schéma** : MongoDB est utile pour les données semi-structurées ou non structurées, comme les logs, les données de capteurs, ou les documents JSON qui peuvent évoluer rapidement.

    - **Scalabilité horizontale** : MongoDB est conçu pour une scalabilité horizontale facile, ce qui est avantageux pour les applications nécessitant un stockage de données massif et une haute disponibilité.

    - **Performance en lecture/écriture** : MongoDB offre des performances élevées pour les opérations de lecture et d'écriture, ce qui est utile pour les fonctionnalités nécessitant un accès rapide aux données.

- **Hébergement et nom de domaine** : 
  - Hébergement à choisir, de préférence avec possibilité de créer un pipeline CI/CD. Voir avec heroku ou Digital Ocean
  - nom de domaine : A voir

- **Sécurité** Se référer à [l'OWASP](https://owasp.org/www-project-top-ten/) : 

  - Protocole HTTPS
  - Authentification sécurisé :
    - Gestion des sessions utilisateur avec cookie (Secure, HttpOnly, SameSite)
    - Expiration de sessions
    - JWT
    - Hash des mots de passe (bcrypt)
    - Jetons CSRF
  - Echappement de données front (React) et back (Paramètrage positionnel)
  - Utiliser les CSP (Content Security Policy) pour limiter les sources de contenu autorisées
  - Utiliser CORS (Cross-Origin Resource Sharing) pour contrôler les requêtes HTTP cross-origin
  - Journalisation et surveillance
  - Validation de données avec des schémas pour assurer l'intégrité et la sécurité des données (Joi, mongoose.schema)

- **Compatibilité et responsive design** : Le site doit être compatible avec la majorité des navigateurs et device.
- **Performance** : Temps de chargement des pages rapide.
- **API et intégrations** : Une API doit être créée afin de référencer les boissons / types de boissons / degrè d'alcool...

## 5. Maquettes

- **Wireframes et maquettes** : Les wireframes sont disponible dans le dossier [wireframes](./wireframes) : 

| Page | wireframe |
|---|---|
|Accueil | [Accueil déconnecté](./wireframes/home-logout.png) |
|Accueil | [Accueil connecté](./wireframes/home-logged.png) |
|Résultat | [Résultat](./wireframes/result.png) |
| Mentions légales | [Mentions légales](./wireframes/legal-notices.png) |
|A propos | [A propos](./wireframes/about.png) |
| Contact | [A FAIRE](#) |
| Dashboard | [Dashboard](./wireframes/dashboard.png) |
| Edition de compte | [Edition du compte](./wireframes/edit-account.png) |
| Edition de profil | [Edition de profil](./wireframes/edit-profile.png) |
| Choix du profil à éditer | [Choix de profil (dans le header)](./wireframes/home-logged.png) |

- **Expérience utilisateur (UX)** : 

1. L'utilisateur doit avoir accès à la fonctionnalité principale de l'Ethylotest dès sa connexion.
2. L'utilisateur doit avoir un résultat après utilisation de la fonctinonalité, qu'il soit connecté ou non.
3. L'utilisateur doit pouvoir s'inscrire, se connecter ou se déconnecter depuis n'importe quelle page

## 6. Déploiement et CI/CD
- **Chaîne CI/CD** : Implémenter une chaîne CI/CD pour automatiser les tests, les builds et les déploiements.
- **Outil CI/CD** : Utiliser Jenkins pour gérer la chaîne CI/CD.
  - **Pipeline Jenkins** : Définir les étapes du pipeline (build, test, déploiement).
  - **Automatisation des tests** : Intégrer les tests unitaires, d'intégration et de performance dans le pipeline.
  - **Déploiement automatisé** : Configurer le déploiement automatique sur les environnements de staging et de production.

## 7. Planning et délais
- **Phases du projet** : 
  - Conception
  - Développement du MVP
  - tests
  - Mise en production du MVP

- **Deadlines** (à titre indicatif, projet perso développé sur mon temps libre): 
  - Conception : 09/10/2024
  - Développement : 31/10/2024
  - tests : 31/10/2024
  - Mise en production : 08/11/2024

- **Priorités** :
  1. Fonctionnalité d'Ethylotest
  2. MVP

## 8. Budget
- **Coût estimé** : 29 jours.

## 9. Maintenance et évolutions
- **Maintenance technique** : Un suivi et une maintenance sont prévues après la mise en production.
- **Évolutivité** : Les versions V1 et V2 suivront après la mise en production du MVP
- **SLA (Service Level Agreement)** : 
  - Disponibilité : 99.9%.
  - Performance : Moins de 200ms.
  - Support et maintenance : N/A.
  - Pénalités : 20 coups de fouet.
  - Surveillance et reporting : Datadog.

## 10. Tests et validation
- **Tests à effectuer** : 
  - **Tests unitaires** : Vérifier les fonctions de manipulation des données et les requêtes.
  - **Tests d'intégration** : Vérifier les interactions entre l'application et la base de données.
  - **Tests fonctionnels** : Tester les fonctionnalités principales (Ethylotest, inscription, connexion).
  - **Tests de performance** : Évaluer le temps de réponse des requêtes et la capacité de la base de données.
  - **Tests de charge** : Simuler un grand nombre d'utilisateurs simultanés.
  - **Tests de sécurité** : Identifier les vulnérabilités (injections SQL, XSS).
  - **Tests de compatibilité** : Vérifier le fonctionnement sur différents navigateurs et appareils.
  - **Tests de régression** : S'assurer que les nouvelles modifications n'introduisent pas de bugs.

## 11. Équipe projet et communication
- **Rôles et responsabilités** : 
  - Yann Bénet (Product Owner, Développeur).
- **Méthodologie de travail** : 
  - Kanban.
- **Outils de suivi** : 
  - Trello.