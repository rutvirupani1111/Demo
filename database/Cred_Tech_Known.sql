-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: Cred
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Tech_Known`
--

DROP TABLE IF EXISTS `Tech_Known`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tech_Known` (
  `Tech_ID` int NOT NULL DEFAULT '0',
  `EID` int DEFAULT NULL,
  `Tech_Name` varchar(30) NOT NULL,
  `Tech_Exp` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tech_Known`
--

LOCK TABLES `Tech_Known` WRITE;
/*!40000 ALTER TABLE `Tech_Known` DISABLE KEYS */;
INSERT INTO `Tech_Known` VALUES (1,47,'on','Expert'),(2,47,'on','Beginner'),(3,47,'on','Expert'),(4,48,'PHP','Expert'),(5,48,'MySQL','Beginner'),(6,48,'Laravel','Mediator'),(7,48,'Oracle','Expert'),(8,49,'PHP','Expert'),(9,49,'MySQL','Expert'),(10,49,'Laravel','Mediator'),(11,49,'Oracle','Expert'),(12,52,'PHP','Mediator'),(13,52,'MySQL','Expert'),(14,52,'Laravel','Beginner'),(15,52,'Oracle','Expert'),(16,53,'PHP','Mediator'),(17,53,'MySQL','Expert'),(18,53,'Laravel','Beginner'),(19,53,'Oracle','Mediator'),(20,54,'PHP','Expert'),(21,54,'MySQL','Beginner'),(22,54,'Laravel','Mediator'),(23,54,'Oracle','Expert'),(24,55,'PHP','Expert'),(25,55,'MySQL','Mediator'),(26,56,'PHP','Expert'),(27,56,'MySQL','Mediator'),(28,79,'PHP','Beginner'),(29,79,'MySQL','Expert'),(30,79,'Laravel','Mediator'),(31,79,'Oracle','Beginner'),(32,80,'PHP','Beginner'),(33,81,'PHP','Mediator'),(34,82,'PHP','Beginner'),(35,83,'PHP','Beginner'),(36,83,'PHP','Beginner'),(37,84,'PHP','Beginner'),(38,85,'PHP','Beginner'),(39,85,'MySQL','Mediator'),(40,86,'PHP','Beginner'),(41,86,'PHP','Beginner'),(42,86,'PHP','Beginner'),(43,87,'PHP','Beginner'),(44,87,'MySQL','Mediator'),(45,88,'PHP','Mediator'),(46,88,'MySQL','Expert'),(47,88,'Laravel','Beginner'),(48,88,'Oracle','Mediator');
/*!40000 ALTER TABLE `Tech_Known` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04 13:42:39
