-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-04-2023 a las 04:36:14
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0


-- -----------------------------------------------------
-- Schema digital_cake_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `digital_cake_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `digital_cake_db` ;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `digital_cake_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `price` decimal(5,2) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `id_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(500) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `is_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--

/*ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD CONSTRAINT `shopping_cart_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `shopping_cart_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);
COMMIT;
*/
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


INSERT INTO products(id, name, description, price, image, id_category) VALUES (1,'Limonada de menta','Deliciosa y refrescante',50.0,'product_1.jpg',1);
INSERT INTO products(id, name, description, price, image, id_category) VALUES (2,'Pastel de cumpleaños','La más dulce celebración',200.0,'product_2.jpg',4);
INSERT INTO products(id, name, description, price, image, id_category) VALUES (3,'Cheesecake de mora','Elegancia y delicado sabor',300.0,'product_3.jpg',3);
INSERT INTO products(id, name, description, price, image, id_category) VALUES (4,'Torta de nuez','El mejor acompañante para el café',500.0,'product_4.jpg',4);
INSERT INTO products(id, name, description, price, image, id_category) VALUES (5,'Maccaroons','Pequeños bocados dedulzura',800.0,'product_5.jpg',2);

INSERT INTO users(id, name, last_name, email, password, image, is_admin) VALUES (1,'Guillermo','Moreno','g.moreno@test.com','g123','user_image.jpg',1);
INSERT INTO users(id, name, last_name, email, password, image, is_admin) VALUES (2,'María','Ruiz','m.ruiz@test.com','m123','user_image.jpg',1);
INSERT INTO users(id, name, last_name, email, password, image, is_admin) VALUES (3,'Gloria','Perez','g.perez@test.com','gp123','user_image.jpg',0);
INSERT INTO users(id, name, last_name, email, password, image, is_admin) VALUES (4,'Juan','Castillo','j.castillo@test.com','j123','user_image.jpg',0);
INSERT INTO users(id, name, last_name, email, password, image, is_admin) VALUES (5,'Enrique','Rosales','e.rosales@test.com','e123','user_image.jpg',0);

INSERT INTO categories(id, name) VALUES (1,'Bebidas');
INSERT INTO categories(id, name) VALUES (2,'Galletas');
INSERT INTO categories(id, name) VALUES (3,'Budines');
INSERT INTO categories(id, name) VALUES (4,'Postres');

INSERT INTO shopping_cart(id, id_user, id_product) VALUES (1, 1, 5);
INSERT INTO shopping_cart(id, id_user, id_product) VALUES (2, 2, 3);
INSERT INTO shopping_cart(id, id_user, id_product) VALUES (3, 4, 4);




