-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 05, 2016 at 03:38 PM
-- Server version: 5.6.31-0ubuntu0.14.04.2
-- PHP Version: 5.6.23-1+deprecated+dontuse+deb.sury.org~trusty+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `shopify`

-- --------------------------------------------------------

--
-- Table structure for table `shoplogin`
--

CREATE TABLE IF NOT EXISTS `shoplogin` (
  `shop` varchar(100) NOT NULL,
  `token` varchar(100) NOT NULL,
  UNIQUE KEY `shop` (`shop`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shoplogin`
--

INSERT INTO `shoplogin` (`shop`, `token`) VALUES
('esferasoft-4.myshopify.com', '35ecc5f81156a6a6a7be11a49a502c5c');
--
