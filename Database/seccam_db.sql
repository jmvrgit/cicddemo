-- phpMyAdmin SQL Dump
-- version 5.1.4-dev+20220423.4c738ad5e4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2022 at 05:53 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seccam_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_allowed_uid`
--

CREATE TABLE `t_allowed_uid` (
  `UID` varchar(12) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `DEPT` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `t_seccam_entries`
--

CREATE TABLE `t_seccam_entries` (
  `pkey` int(10) NOT NULL,
  `datetime` datetime NOT NULL,
  `picture` varchar(32) NOT NULL,
  `rfuid` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_seccam_entries`
--
ALTER TABLE `t_seccam_entries`
  ADD PRIMARY KEY (`pkey`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_seccam_entries`
--
ALTER TABLE `t_seccam_entries`
  MODIFY `pkey` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
