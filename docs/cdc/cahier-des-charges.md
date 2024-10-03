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
  - Utiliser l'app comme un Ethylotest
  - Gestion des utilisateurs : authentification, création de compte, mot de passe oublié, etc.
  - Gestion de profil : Indiquer son poids, son genre afin de le prendre en compte dans les calculs
  - Avoir un dashboard de sa consommation d'alcool
  - Suivi et statistiques (Google Analytics, rapport d’activités)
  - Notification (email, push, SMS, etc.)

- **Fonctionnalités secondaires** :
  - Avoir la possibilité de rechercher un alcool et obtenir une fiche complète à son sujet
  - Enregistrer ses alcools favoris

- **User stories** :

| Version                | En tant que | Je veux | Afin de | 
|------------------------| ----------- | ------- | ------- |
| MVP | Visiteur / Utilisateur | Indiquer l'alcool que j'ai consommé | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer le degrè d'alcool consommé | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer mon genre | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer mon poids | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer la quantitée d'alcool consommée | Calculer mon taux d'alcolémie |
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
- **Technologies utilisées** : 
  - Front-end : HTML5, CSS3, JavaScript, TypeScript, ReactJS
  - Back-end : NodeJS, NPM, Express
  - Backend : PSQL, MongoDB

- **Hébergement et nom de domaine** : 
  - Hébergement à choisir, de préférence avec possibilité de créer un pipeline CI/CD. Voir avec heroku ou Digital Ocean
  - nom de domaine : *******

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

## 6. Planning et délais
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

## 7. Budget
- **Coût estimé** : 29 jours.

## 8. Maintenance et évolutions
- **Maintenance technique** : Un suivi et une maintenance sont prévues après la mise en production.
- **Évolutivité** : Les versions V1 et V2 suivront après la mise en production du MVP
- **SLA (Service Level Agreement)** : 
  - Disponibilité : 99.9%.
  - Performance : Moins de 200ms.
  - Support et maintenance : N/A.
  - Pénalités : 20 coups de fouet.
  - Surveillance et reporting : Datadog.

## 9. Tests et validation
- **Tests à effectuer** : 
  - **Tests unitaires** : Vérifier les fonctions de manipulation des données et les requêtes.
  - **Tests d'intégration** : Vérifier les interactions entre l'application et la base de données.
  - **Tests fonctionnels** : Tester les fonctionnalités principales (Ethylotest, inscription, connexion).
  - **Tests de performance** : Évaluer le temps de réponse des requêtes et la capacité de la base de données.
  - **Tests de charge** : Simuler un grand nombre d'utilisateurs simultanés.
  - **Tests de sécurité** : Identifier les vulnérabilités (injections SQL, XSS).
  - **Tests de compatibilité** : Vérifier le fonctionnement sur différents navigateurs et appareils.
  - **Tests de régression** : S'assurer que les nouvelles modifications n'introduisent pas de bugs.

## 10. Équipe projet et communication
- **Rôles et responsabilités** : 
  - Yann Bénet (Product Owner, Développeur).
- **Méthodologie de travail** : 
  - Kanban.
- **Outils de suivi** : 
  - Trello.