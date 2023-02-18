-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2023 at 09:06 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shoes_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`brand_id`, `brand_name`) VALUES
(1, 'adidas'),
(2, 'nike'),
(3, 'puma');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(50) NOT NULL,
  `item_barcode` int(11) NOT NULL,
  `item_imge_url` text NOT NULL,
  `brand_id` int(11) NOT NULL,
  `item_available_qyt` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `item_name`, `item_barcode`, `item_imge_url`, `brand_id`, `item_available_qyt`) VALUES
(1, 'kala', 1002222, 'image2.png', 1, 981),
(2, 'lapchin', 1002222, 'image2.png', 2, 993);

-- --------------------------------------------------------

--
-- Stand-in structure for view `items_view`
-- (See below for the actual view)
--
CREATE TABLE `items_view` (
`item_id` int(11)
,`item_name` varchar(50)
,`item_barcode` int(11)
,`item_imge_url` text
,`brand_id` int(11)
,`brand_name` varchar(50)
,`item_available_qyt` float
);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `item_id` int(11) NOT NULL,
  `order_qyt` float NOT NULL,
  `order_price` float NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_date`, `item_id`, `order_qyt`, `order_price`, `user_id`) VALUES
(1, '2023-02-10', 1, 10, 10000, 2);

--
-- Triggers `orders`
--
DELIMITER $$
CREATE TRIGGER `add_qyt_count` AFTER DELETE ON `orders` FOR EACH ROW UPDATE items,orders SET items.item_available_qyt = items.item_available_qyt - orders.order_qyt WHERE orders.order_id = old.order_id AND orders.item_id = items.item_id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `remove_qyt_count` AFTER INSERT ON `orders` FOR EACH ROW UPDATE items,orders SET items.item_available_qyt = items.item_available_qyt - orders.order_qyt WHERE orders.order_id = new.order_id AND orders.item_id = items.item_id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Stand-in structure for view `orders_view`
-- (See below for the actual view)
--
CREATE TABLE `orders_view` (
`order_id` int(11)
,`order_date` date
,`item_id` int(11)
,`item_name` varchar(50)
,`item_imge_url` text
,`brand_id` int(11)
,`brand_name` varchar(50)
,`order_qyt` float
,`order_price` float
,`total_price` varchar(27)
,`user_id` int(11)
,`user_name` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`) VALUES
(1, 'ali'),
(2, 'ahmad'),
(3, 'adam');

-- --------------------------------------------------------

--
-- Structure for view `items_view`
--
DROP TABLE IF EXISTS `items_view`;

CREATE VIEW `items_view`  AS SELECT `items`.`item_id` AS `item_id`, `items`.`item_name` AS `item_name`, `items`.`item_barcode` AS `item_barcode`, `items`.`item_imge_url` AS `item_imge_url`, `items`.`brand_id` AS `brand_id`, `brand`.`brand_name` AS `brand_name`, `items`.`item_available_qyt` AS `item_available_qyt` FROM (`items` join `brand`) WHERE `brand`.`brand_id` = `items`.`brand_id`  ;

-- --------------------------------------------------------

--
-- Structure for view `orders_view`
--
DROP TABLE IF EXISTS `orders_view`;

CREATE VIEW `orders_view`  AS SELECT `orders`.`order_id` AS `order_id`, `orders`.`order_date` AS `order_date`, `items_view`.`item_id` AS `item_id`, `items_view`.`item_name` AS `item_name`, `items_view`.`item_imge_url` AS `item_imge_url`, `items_view`.`brand_id` AS `brand_id`, `items_view`.`brand_name` AS `brand_name`, `orders`.`order_qyt` AS `order_qyt`, `orders`.`order_price` AS `order_price`, concat(`orders`.`order_qyt` * `orders`.`order_price`,' ','IQD') AS `total_price`, `users`.`user_id` AS `user_id`, `users`.`user_name` AS `user_name` FROM ((`orders` join `users`) join `items_view`) WHERE `orders`.`item_id` = `items_view`.`item_id` AND `orders`.`user_id` = `users`.`user_id` AND `items_view`.`brand_id` = `items_view`.`brand_id`  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`),
  ADD UNIQUE KEY `brand_name` (`brand_name`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `item_id` (`item_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`item_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
