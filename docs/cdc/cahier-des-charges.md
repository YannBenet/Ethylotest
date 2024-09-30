# Cahier des charges pour le projet ETHYLOTEST

## 1. Introduction
- **Contexte** : Ce projet existe car mon meilleur amis vient d'avoir son permis, il est donc considéré comme jeune conducteur et se trouve dans une posture stressante lorsqu'il doit rentrer de soirée après avoir bu un verre. En effet, en étant jeune conducteur les règles sont différentes pour les taux d'alcolémie à ne pas dépasser.

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

| Version | Page | Contenu |
|---|---|---|
| MVP | Accueil | Accès à l'éthylotest |
| MVP | Mentions légales | Toutes les mentions légales |
| MVP | A propos | Plus d'informations sur l'app et pourquoi s'inscrire |
| V1 | Contact | Page de contact |
| V1 | Dashboard | graphique de la consommation (Annuelle, mensuelle, hebdomadaire ou journalière) |
| V1 | Edition de compte | Formulaire d'édition du compte principal |
| V1 | Edition de profil | Formulaire d'édition du profil |
| V1 | Edition de profil | Formulaire d'édition du profil |
| V2 | Choix du profil à éditer | Formulaire d'édition du profil selectionné |


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
  -  Validation de données avec des schémas pour assurer l'intégrité et la sécurité des données (Joi, mongoose.schema)