-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-05-2023 a las 14:24:30
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `redrocket`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amigos`
--

CREATE TABLE `amigos` (
  `id_amigos` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `ciudad` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `amigos`
--

INSERT INTO `amigos` (`id_amigos`, `id_usuario`, `nombre`, `email`, `ciudad`) VALUES
(1, 2, 'Marcos Casas', 'casasmark@hotmail.com', 'Lugo'),
(2, 1, 'Pedro Perez', 'pedroperez@gmail.com', 'Madrid'),
(3, 3, 'Sergio Fernández', 'sergfer@hotmail.com', 'Valencia'),
(4, 4, 'María Rodríguez', 'mariarod@gmail.com', 'León'),
(5, 5, 'Álvaro Menéndez', 'menendezal@gmail.com', 'Santander'),
(6, 6, 'Jorge Hernández', 'jorgeher@gmail.com', 'Avilés');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `id_post` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `content` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicacion`
--

INSERT INTO `publicacion` (`id_post`, `id_usuario`, `title`, `content`) VALUES
(1, 1, 'zcxzxc', 'dczxcz'),
(2, 1, 'blablabla', 'entorno'),
(3, 1, 'dfdf', 'tacatava'),
(4, 1, 'jjj', 'jhjk'),
(5, 1, 'sdfsd', 'fsdf'),
(6, 1, 'jkdfjkdjf', 'kdjfkldsjfk'),
(7, 1, 'dasdasd', 'adasd'),
(8, 1, 'fdsfds', 'sdfdsfdsf'),
(9, 1, 'sfsdf', 'sdff'),
(10, 1, 'sdf', 'fdf'),
(11, 1, 'df', 'dfsf'),
(12, 1, '', 'sdf'),
(13, 1, 'sdf', 'fsdf'),
(14, 1, 'sf', 'dfsdf'),
(15, 1, '', 'sfdsf'),
(16, 1, 'hola', 'hola'),
(17, 1, '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_usuarios`
--

CREATE TABLE `registro_usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `ciudad` varchar(20) NOT NULL,
  `pais` varchar(20) NOT NULL,
  `edad` int(11) NOT NULL,
  `estudios` varchar(100) NOT NULL,
  `idiomas` varchar(50) NOT NULL,
  `linkedin` varchar(50) NOT NULL,
  `hobbies` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registro_usuarios`
--

INSERT INTO `registro_usuarios` (`id_usuario`, `nombre`, `email`, `password`, `ciudad`, `pais`, `edad`, `estudios`, `idiomas`, `linkedin`, `hobbies`) VALUES
(1, 'Pedro Perez', 'pedroperez@gmail.com', '12345', 'Madrid', 'España', 33, 'Desarrolador web', 'Español', 'www.linkedin.com/pedroperez', 'Viajar y futbol'),
(2, 'Marcos Casas', 'casasmark@gmail.com', '12345', 'Lugo', 'España', 29, 'Grado en Enfermería', 'Español ', 'XXXXXX', 'Fútbol'),
(3, 'Sergio Fernández', 'sergfer@hotmail.com', '12345', 'Valencia', 'España', 45, 'Técnico de Emergencias Sanitarias', 'Francés', 'dfafddfdf', 'Baloncesto'),
(4, 'María Rodríguez', 'mariarod@gmail.com', '12345', 'León', 'España', 34, 'Desarrollo de Aplicaciones Multiplataforma', 'Español ', 'XXXXXX', 'Leer'),
(5, 'Álvaro Menéndez', 'menendezal@gmail.com', '12345', 'Santander', 'España', 27, 'Grado en Historia', 'Francés', 'XXXXXX', 'Pasear'),
(6, 'Jorge Hernández', 'jorgeher@gmail.com', '12345', 'Avilés', 'España', 32, 'Grado en Medicina', 'Inglés', 'XXXXXX', 'Dibujar'),
(98, 'José Hernández', 'andreaberros@gmail.com', '12345', 'Oviedo', 'España', 12, 'nada', 'español', 'blablabla', 'blablabla'),
(103, 'andrea', 'bbbbbbbbb@gmail.com', '123456', 'Oviedo', 'España', 45, 'sda', 'dsad', 'sadas', 'adasda'),
(104, 'Omar', 'omargannem@yahoo.es', '$2b$10$d1o4VgKjbzooN', 'Madrid', 'España', 55, 'Desarrollador Fullstack', 'Español', 'https://www.linkedin.com/in/pedroperz/', 'Senderismo, Vaijar');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `amigos`
--
ALTER TABLE `amigos`
  ADD PRIMARY KEY (`id_amigos`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `registro_usuarios`
--
ALTER TABLE `registro_usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `amigos`
--
ALTER TABLE `amigos`
  MODIFY `id_amigos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `registro_usuarios`
--
ALTER TABLE `registro_usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `amigos`
--
ALTER TABLE `amigos`
  ADD CONSTRAINT `amigos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `registro_usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD CONSTRAINT `publicacion_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `registro_usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
