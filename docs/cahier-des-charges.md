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
| MVP | Visiteur / Utilisateur | Indiquer ce que j'ai consommé | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer mon genre | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Indiquer mon poids | Calculer mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Valider mes informations | Afficher de résultat de mon taux d'alcolémie |
| MVP | Visiteur / Utilisateur | Pouvoir gérer les cookies | Faire respecter mes droits liés au RGPD |
| V1 | Utilisateur             | Créer un compte | Utiliser toutes les fonctionnalités de l'app |
| V1 | Utilisateur             | Modifier mon compte | Changer les paramètres de mon compte |
| V1 | Utilisateur             | Supprimer mon compte | Supprimer toutes les informations et accès au compte |
| V1 | Utilisateur             | Créer un profil | Pré-remplir l'éthylotest avec les données de profil enregistrées |
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
| MVP | Contact | Page de contact |
| MVP | Mentions légales | Toutes les mentions légales |
| V1 | Dashboard | graphique de la consommation (Annuelle, mensuelle, hebdomadaire ou journalière) |
| V1 | Edition de compte | Formulaire d'édition du compte principal |
| V1 | Edition de profil | Formulaire d'édition du profil |
| V1 | Edition de profil | Formulaire d'édition du profil |
| V2 | Choix du profil à éditer | Formulaire d'édition du profil selectionné |

- **Interactions utilisateurs** : Décrivez les actions que l'utilisateur pourra effectuer (s’inscrire, poster un commentaire, acheter un produit, etc.).

## 4. Cahier des charges technique
- **Technologies utilisées** : Front-end (HTML5, CSS3, JavaScript, frameworks comme React, Vue.js), Back-end (Node.js, PHP, Python, etc.), base de données (MySQL, MongoDB, etc.).
- **Hébergement et nom de domaine** : Indiquez si le client a déjà un hébergeur ou un domaine, ou s’il en faut un.
- **Sécurité** : Protocole HTTPS, gestion des données utilisateurs (RGPD), authentification sécurisée.
- **Compatibilité et responsive design** : Le site doit-il être compatible avec tous les navigateurs et appareils (mobile, tablette, desktop) ?
- **Performance** : Temps de chargement des pages, optimisation SEO, gestion des caches.
- **API et intégrations** : Si le site doit être connecté à des services tiers (API de paiement, API de CRM, réseaux sociaux, etc.).

## 5. Maquettes et design
- **Charte graphique** : Indiquez les couleurs, typographies et éléments graphiques à respecter. Mentionnez l'existence ou non d'un logo et d'une identité visuelle déjà définie.
- **Wireframes et maquettes** : Ajoutez ou précisez si des maquettes graphiques sont déjà disponibles ou s'il faut en créer.
- **Expérience utilisateur (UX)** : Exposez les principes que doit suivre l'UX (simplicité, fluidité, parcours utilisateur clair).

## 6. Planning et délais
- **Phases du projet** : Détaillez les différentes étapes (conception, développement, tests, mise en production).
- **Deadlines** : Précisez les échéances pour chaque étape, avec une date de livraison finale.
- **Priorités** : Si certaines fonctionnalités sont prioritaires, mentionnez-les.

## 7. Budget
- **Coût estimé** : Si possible, donnez un budget global ou une fourchette de prix attendue.
- **Paiements** : Précisez le mode de facturation (au forfait, par étape, à l'heure, etc.).
- **Extras éventuels** : Incluez des options supplémentaires qui pourraient être proposées en fonction du budget.

## 8. Maintenance et évolutions
- **Maintenance technique** : Précisez si une maintenance est incluse après la mise en ligne (correction de bugs, mises à jour).
- **Évolutivité** : Le site doit-il être facilement modifiable ou évolutif pour intégrer de nouvelles fonctionnalités à l'avenir ?
- **SLA (Service Level Agreement)** : Indiquez les conditions de disponibilité et de réactivité en cas de problème technique.

## 9. Tests et validation
- **Tests à effectuer** : Tests de compatibilité sur différents navigateurs et appareils, tests de charge, tests de sécurité.
- **Validation** : Définissez les critères de validation pour chaque étape (ex. : validation des maquettes, validation des tests utilisateurs).

## 10. Équipe projet et communication
- **Rôles et responsabilités** : Détaillez les rôles des personnes impliquées (chef de projet, développeurs, designer, client).
- **Méthodologie de travail** : Précisez la méthodologie à utiliser (méthode agile, Scrum, waterfall).
- **Outils de suivi** : Utilisation de logiciels de gestion de projet (Trello, Jira, Slack, etc.) pour faciliter la communication.