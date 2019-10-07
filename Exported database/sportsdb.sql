-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2019 at 03:46 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sportsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `matches`
--

CREATE TABLE `matches` (
  `id` int(11) NOT NULL COMMENT 'Match ID',
  `team1_id` int(11) NOT NULL COMMENT 'Team 1 name',
  `team2_id` int(11) NOT NULL COMMENT 'Team 2 name',
  `type_id` int(11) NOT NULL COMMENT 'Type of sport',
  `start_time` datetime NOT NULL COMMENT 'Match start time',
  `end_time` datetime NOT NULL COMMENT 'Match end time',
  `createdAt` datetime NOT NULL COMMENT 'When was it created?',
  `updatedAt` datetime NOT NULL COMMENT 'When was it updated?'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `matches`
--

INSERT INTO `matches` (`id`, `team1_id`, `team2_id`, `type_id`, `start_time`, `end_time`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 1, '2019-09-01 11:20:00', '2019-09-01 12:30:00', '2019-09-06 04:30:00', '2019-09-14 09:19:04'),
(2, 3, 4, 3, '2019-08-19 12:00:00', '2019-08-19 14:00:00', '2019-09-06 08:00:00', '2019-09-06 13:00:00'),
(5, 4, 2, 1, '2019-09-21 14:40:00', '2019-09-21 16:20:00', '2019-09-14 09:16:45', '2019-09-14 09:16:45'),
(6, 5, 1, 4, '2019-09-21 09:00:00', '2019-09-21 11:00:00', '2019-09-15 07:58:59', '2019-09-15 07:58:59'),
(7, 4, 5, 4, '2019-10-22 15:00:00', '2019-10-22 17:00:00', '2019-09-15 08:01:44', '2019-09-15 08:01:44');

-- --------------------------------------------------------

--
-- Table structure for table `scorelines`
--

CREATE TABLE `scorelines` (
  `id` int(11) NOT NULL COMMENT 'ID of score timeline',
  `match_id` int(11) NOT NULL COMMENT 'Id of match',
  `score` varchar(20) NOT NULL COMMENT 'End game score',
  `time` datetime NOT NULL COMMENT 'Time of score change'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scorelines`
--

INSERT INTO `scorelines` (`id`, `match_id`, `score`, `time`) VALUES
(1, 1, '96:92', '2019-08-19 06:05:00'),
(2, 2, '2:3', '2019-08-19 14:00:00'),
(3, 5, '15:17', '2019-09-27 09:15:00'),
(4, 6, '2:0', '2019-08-31 10:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL COMMENT 'Team ID',
  `name` varchar(40) NOT NULL COMMENT 'Name of the team'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`) VALUES
(1, 'Ajax'),
(2, 'Roma'),
(3, 'Manchester'),
(4, 'Liverpool'),
(5, 'Chelsea'),
(6, 'Paok');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL COMMENT 'Id of the type of match',
  `name` char(40) NOT NULL COMMENT 'Name of the type'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `name`) VALUES
(1, 'Basketball'),
(2, 'Volleyball'),
(3, 'Handball'),
(4, 'Football/Soccer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `matches`
--
ALTER TABLE `matches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team1` (`team1_id`) USING BTREE,
  ADD KEY `Sport_type` (`type_id`) USING BTREE,
  ADD KEY `team2` (`team2_id`) USING BTREE;

--
-- Indexes for table `scorelines`
--
ALTER TABLE `scorelines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `match_id` (`match_id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `matches`
--
ALTER TABLE `matches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Match ID', AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `scorelines`
--
ALTER TABLE `scorelines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID of score timeline', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Team ID', AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id of the type of match', AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `matches`
--
ALTER TABLE `matches`
  ADD CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`team1_id`) REFERENCES `teams` (`id`),
  ADD CONSTRAINT `matches_ibfk_2` FOREIGN KEY (`team2_id`) REFERENCES `teams` (`id`),
  ADD CONSTRAINT `matches_ibfk_3` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`);

--
-- Constraints for table `scorelines`
--
ALTER TABLE `scorelines`
  ADD CONSTRAINT `scorelines_ibfk_1` FOREIGN KEY (`match_id`) REFERENCES `matches` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
