-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2021 at 11:51 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `all_activity_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `start_date`, `end_date`, `description`) VALUES
(6, '2021-12-06 23:22:17', '2021-12-06 23:22:17', 'My name is Mahmoud Mamdouh and I\'m a full stack web developer'),
(14, '2021-12-06 23:22:17', '2021-12-06 23:22:17', 'Graduated from Faculty of Computer and Information Sciences Ain Shams University'),
(16, '2021-12-06 23:22:17', '2021-12-06 23:22:17', 'All activities task from freelancer.com'),
(19, '2021-11-29 22:00:00', '2021-12-04 22:00:00', 'The Cairo International Festival'),
(20, '2021-12-24 22:00:00', '2021-12-25 22:00:00', 'Jobzella Career Fair'),
(22, '2021-11-09 22:00:00', '2021-11-10 22:00:00', 'It Was My Birthday 10/11/1997'),
(23, '2021-12-29 22:00:00', '2021-12-30 22:00:00', 'Testing Sorting Functionality'),
(24, '2022-02-06 22:00:00', '2022-02-07 22:00:00', 'A Big Important Event For me.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
