-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10/09/2023 às 06:25
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `node_essentials`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `carro`
--

CREATE TABLE `carro` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) DEFAULT NULL,
  `tipo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `carro`
--

INSERT INTO `carro` (`id`, `nome`, `tipo`) VALUES
(1, 'Chevrolet Bel Air', 'Clássico'),
(2, 'Ford Mustang', 'Clássico'),
(3, 'Volkswagen Beetle', 'Clássico'),
(4, 'Chevrolet Camaro', 'Clássico'),
(5, 'Ford Thunderbird', 'Clássico'),
(6, 'Pontiac GTO', 'Clássico'),
(7, 'Dodge Charger', 'Clássico'),
(8, 'Buick Skylark', 'Clássico'),
(9, 'Oldsmobile 442', 'Clássico'),
(10, 'Plymouth Barracuda', 'Clássico'),
(11, 'Chevrolet Impala', 'Clássico'),
(12, 'Plymouth Road Runner', 'Clássico'),
(13, 'Dodge Dart', 'Clássico'),
(14, 'Ford Fairlane', 'Clássico'),
(15, 'Chevrolet Nova', 'Clássico'),
(16, 'Pontiac Firebird', 'Clássico'),
(17, 'Mercury Cougar', 'Clássico'),
(18, 'AMC Javelin', 'Clássico'),
(19, 'Chevrolet Chevelle', 'Clássico'),
(20, 'Ford Galaxie', 'Clássico'),
(21, 'Porsche 911 GT3', 'Esportivo'),
(22, 'Chevrolet Corvette Stingray', 'Esportivo'),
(23, 'Ferrari 488 GTB', 'Esportivo'),
(24, 'Audi R8', 'Esportivo'),
(25, 'Lamborghini Huracán', 'Esportivo'),
(26, 'McLaren 720S', 'Esportivo'),
(27, 'Nissan GT-R', 'Esportivo'),
(28, 'BMW M4', 'Esportivo'),
(29, 'Mercedes-AMG GT', 'Esportivo'),
(30, 'Jaguar F-Type', 'Esportivo'),
(31, 'Ford GT', 'Esportivo'),
(32, 'Toyota Supra', 'Esportivo'),
(33, 'Subaru BRZ', 'Esportivo'),
(34, 'Porsche Cayman', 'Esportivo'),
(35, 'Aston Martin Vantage', 'Esportivo'),
(36, 'Honda NSX', 'Esportivo'),
(37, 'Alfa Romeo 4C', 'Esportivo'),
(38, 'Maserati GranTurismo', 'Esportivo'),
(39, 'Lotus Evora', 'Esportivo'),
(40, 'Chevrolet Camaro SS', 'Esportivo'),
(41, 'Mercedes-Benz S-Class', 'Luxo'),
(42, 'BMW 7 Series', 'Luxo'),
(43, 'Audi A8', 'Luxo'),
(44, 'Lexus LS', 'Luxo'),
(45, 'Jaguar XJ', 'Luxo'),
(46, 'Rolls-Royce Phantom', 'Luxo'),
(47, 'Bentley Continental GT', 'Luxo'),
(48, 'Maserati Quattroporte', 'Luxo'),
(49, 'Porsche Panamera', 'Luxo'),
(50, 'Maybach S-Class', 'Luxo'),
(51, 'Tesla Model S', 'Luxo'),
(52, 'Lincoln Navigator', 'Luxo'),
(53, 'Land Rover Range Rover', 'Luxo'),
(54, 'Lexus LX', 'Luxo'),
(55, 'Cadillac Escalade', 'Luxo'),
(56, 'Acura RLX', 'Luxo'),
(57, 'Infiniti Q80', 'Luxo'),
(58, 'Genesis G90', 'Luxo'),
(59, 'Volvo S90', 'Luxo'),
(60, 'Kia K900', 'Luxo'),
(61, 'Fusca Turbão', 'Clássico'),
(62, 'Chevete turbo', 'Clássico'),
(67, 'Kombi Turbo', 'Clássico');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `carro`
--
ALTER TABLE `carro`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `carro`
--
ALTER TABLE `carro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
