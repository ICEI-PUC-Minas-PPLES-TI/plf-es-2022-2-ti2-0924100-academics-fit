-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: enzo-sistema-academia
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administradores` (
  `id_administrador` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(99) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id_administrador`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `alunos`
--

DROP TABLE IF EXISTS `alunos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alunos` (
  `matricula_aluno` varchar(28) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(99) NOT NULL,
  `idade` tinyint(3) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  `altura` float NOT NULL,
  `peso` float NOT NULL,
  `imc` float NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`matricula_aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `fichas`
--

DROP TABLE IF EXISTS `fichas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fichas` (
  `id_ficha` int(11) NOT NULL AUTO_INCREMENT,
  `id_solicitacao` int(11) NOT NULL,
  `matricula_aluno` varchar(28) NOT NULL,
  `matricula_instrutor` varchar(28) NOT NULL,
  `status_ficha` tinyint(3) DEFAULT NULL,
  `exercicio_1` varchar(50) DEFAULT NULL,
  `exercicio_1_series` tinyint(3) DEFAULT NULL,
  `exercicio_1_repeticoes` tinyint(3) DEFAULT NULL,
  `exercicio_2` varchar(50) DEFAULT NULL,
  `exercicio_2_series` tinyint(3) DEFAULT NULL,
  `exercicio_2_repeticoes` tinyint(3) DEFAULT NULL,
  `exercicio_3` varchar(50) DEFAULT NULL,
  `exercicio_3_series` tinyint(3) DEFAULT NULL,
  `exercicio_3_repeticoes` tinyint(3) DEFAULT NULL,
  `exercicio_4` varchar(50) DEFAULT NULL,
  `exercicio_4_series` tinyint(3) DEFAULT NULL,
  `exercicio_4_repeticoes` tinyint(3) DEFAULT NULL,
  `exercicio_5` varchar(50) DEFAULT NULL,
  `exercicio_5_series` tinyint(3) DEFAULT NULL,
  `exercicio_5_repeticoes` tinyint(3) DEFAULT NULL,
  `exercicio_6` varchar(50) DEFAULT NULL,
  `exercicio_6_series` tinyint(3) DEFAULT NULL,
  `exercicio_6_repeticoes` tinyint(3) DEFAULT NULL,
  `exercicio_7` varchar(50) DEFAULT NULL,
  `exercicio_7_series` tinyint(3) DEFAULT NULL,
  `exercicio_7_repeticoes` tinyint(3) DEFAULT NULL,
  `exercicio_8` varchar(50) DEFAULT NULL,
  `exercicio_8_series` tinyint(3) DEFAULT NULL,
  `exercicio_8_repeticoes` tinyint(3) DEFAULT NULL,
  `exercicio_9` varchar(50) DEFAULT NULL,
  `exercicio_9_series` tinyint(3) DEFAULT NULL,
  `exercicio_9_repeticoes` tinyint(3) DEFAULT NULL,
  `exercicio_10` varchar(50) DEFAULT NULL,
  `exercicio_10_series` tinyint(3) DEFAULT NULL,
  `exercicio_10_repeticoes` tinyint(3) DEFAULT NULL,
  PRIMARY KEY (`id_ficha`),
  KEY `matricula_aluno_idx_fichas_idx` (`matricula_aluno`),
  KEY `matricula_instrutor_idx_fichas_idx` (`matricula_instrutor`),
  CONSTRAINT `matricula_aluno_idx_fichas` FOREIGN KEY (`matricula_aluno`) REFERENCES `alunos` (`matricula_aluno`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `matricula_instrutor_idx_fichas` FOREIGN KEY (`matricula_instrutor`) REFERENCES `instrutores` (`matricula_instrutor`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `instrutores`
--

DROP TABLE IF EXISTS `instrutores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `instrutores` (
  `matricula_instrutor` varchar(28) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(99) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`matricula_instrutor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `solicitacao_fichas`
--

DROP TABLE IF EXISTS `solicitacao_fichas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solicitacao_fichas` (
  `id_solicitacao` int(11) NOT NULL AUTO_INCREMENT,
  `matricula_aluno` varchar(28) NOT NULL,
  `matricula_instrutor` varchar(28) NOT NULL,
  `status_solicitacao_ficha` tinyint(3) NOT NULL,
  `data_solicitacao` varchar(16) NOT NULL,
  PRIMARY KEY (`id_solicitacao`),
  KEY `matricula_instrutor_idx_idx` (`matricula_instrutor`),
  KEY `matricula_aluno_idx_idx` (`matricula_aluno`),
  CONSTRAINT `matricula_aluno_idx` FOREIGN KEY (`matricula_aluno`) REFERENCES `alunos` (`matricula_aluno`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `matricula_instrutor_idx` FOREIGN KEY (`matricula_instrutor`) REFERENCES `instrutores` (`matricula_instrutor`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-13 16:11:11
