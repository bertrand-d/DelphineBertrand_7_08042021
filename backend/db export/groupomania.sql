-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 07 mai 2021 à 08:24
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
CREATE TABLE IF NOT EXISTS `commentaire` (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `auteur` smallint(5) UNSIGNED NOT NULL,
  `post` smallint(5) UNSIGNED NOT NULL,
  `contenu` longtext NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_auteur_id` (`auteur`),
  KEY `fk_post_id` (`post`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `commentaire`
--

INSERT INTO `commentaire` (`id`, `auteur`, `post`, `contenu`, `date`) VALUES
(25, 41, 85, 'Yo !', '2021-05-07'),
(26, 42, 88, 'coucou...', '2021-05-07');

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `contenu` longtext NOT NULL,
  `media_url` longtext,
  `auteur` smallint(5) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_id` (`auteur`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`id`, `date`, `contenu`, `media_url`, `auteur`) VALUES
(84, '2021-05-07', 'bonjour ! je suis le content manager ! merci de ne pas publier des contenus incitants à la haine et de faire preuve de respect les uns envers les autres !', NULL, 43),
(85, '2021-05-07', 'Now, say my name !', '254810d.jpg1620375295601.jpeg', 42),
(88, '2021-05-07', 'Mr White, c’est le diable. Tu sais, il est plus intelligent que toi, il est plus chanceux que toi. Peu importe ce que tu penses qu’il est supposé arriver, je te le dis, l’exact opposé de ça va se produire, ok ?', NULL, 41);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom` varchar(80) NOT NULL,
  `prenom` varchar(80) NOT NULL,
  `ville` varchar(150) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` longtext NOT NULL,
  `date_naissance` date NOT NULL,
  `avatar_url` varchar(20) NOT NULL,
  `role` decimal(1,0) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `nom`, `prenom`, `ville`, `email`, `password`, `date_naissance`, `avatar_url`, `role`) VALUES
(41, 'Pinkman', 'jesse', 'albuquerque', 'jesse@mail.com', '$2b$10$1dJqFsaVQAQG6jn1mY645O21agqhqQeZV/cbCkgfUj.2V3G.SHbAS', '1985-09-09', 'default-avatar.png', '0'),
(42, 'white', 'walter', 'albuquerque', 'walter@mail.com', '$2b$10$bUxkHrUSlew44lPU/r6X6u7tKMwi52TDcQ6jBZoDcmifBft.fGZn6', '1970-09-07', 'default-avatar.png', '0'),
(43, 'content', 'manager', 'metz', 'manager@mail.com', '$2b$10$H0tc0HYEdLMC4ggxgtH1G.SbbtdnGs17my3p3oA04pcVUfB1Yl53.', '1990-10-18', 'default-avatar.png', '1');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `fk_auteur_id` FOREIGN KEY (`auteur`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_post_id` FOREIGN KEY (`post`) REFERENCES `post` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK_user_id` FOREIGN KEY (`auteur`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
