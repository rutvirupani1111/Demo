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
-- Table structure for table `Lang_Known`
--

DROP TABLE IF EXISTS `Lang_Known`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Lang_Known` (
  `Lang_ID` int NOT NULL DEFAULT '0',
  `EID` int DEFAULT NULL,
  `Lang_Name` varchar(20) NOT NULL,
  `LRead` tinyint(1) NOT NULL,
  `LWrite` tinyint(1) NOT NULL,
  `LSpeak` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Lang_Known`
--

LOCK TABLES `Lang_Known` WRITE;
/*!40000 ALTER TABLE `Lang_Known` DISABLE KEYS */;
INSERT INTO `Lang_Known` VALUES (1,1,'English',1,1,1),(2,1,'Hindi',1,1,1),(3,1,'Gujarati',1,1,1),(4,1,'Spanish',1,1,1),(5,2,'English',1,1,1),(6,2,'Hindi',1,1,1),(7,2,'Gujarati',1,1,0),(8,2,'Spanish',1,1,1),(9,3,'English',1,1,1),(10,3,'Hindi',1,1,1),(11,3,'Gujarati',1,1,1),(12,3,'Spanish',1,1,1),(13,4,'English',1,0,1),(14,4,'Hindi',0,1,1),(15,4,'Gujarati',1,1,1),(16,4,'Spanish',1,1,1),(17,5,'English',1,1,1),(18,5,'Hindi',0,1,1),(19,5,'Gujarati',1,0,1),(20,5,'Spanish',1,1,1),(21,6,'English',1,1,1),(22,6,'Hindi',1,1,1),(23,6,'Gujarati',1,1,1),(24,6,'Spanish',1,1,1),(25,7,'English',1,1,0),(26,7,'Hindi',1,1,1),(27,7,'Gujarati',0,1,1),(28,7,'Spanish',1,1,1),(29,8,'English',1,1,1),(30,8,'Hindi',1,0,1),(31,8,'Gujarati',1,1,1),(32,8,'Spanish',1,1,1),(33,9,'English',1,1,1),(34,9,'Hindi',1,1,1),(35,9,'Gujarati',1,1,1),(36,9,'Spanish',1,1,1),(37,10,'English',1,1,1),(38,10,'Hindi',1,1,1),(39,10,'Gujarati',1,1,0),(40,10,'Spanish',1,1,1),(41,11,'English',1,1,1),(42,11,'Hindi',1,1,1),(43,11,'Gujarati',0,1,1),(44,11,'Spanish',1,1,1),(45,12,'English',1,1,1),(46,12,'Hindi',1,1,1),(47,12,'Gujarati',1,1,1),(48,12,'Spanish',1,1,1),(49,13,'English',1,1,1),(50,13,'Hindi',1,1,1),(51,13,'Gujarati',1,1,1),(52,13,'Spanish',1,1,1),(53,14,'English',1,1,1),(54,14,'Hindi',1,1,1),(55,14,'Gujarati',1,1,1),(56,14,'Spanish',1,0,1),(57,15,'English',1,1,1),(58,15,'Hindi',1,1,1),(59,15,'Gujarati',1,1,1),(60,15,'Spanish',1,1,1),(61,16,'English',1,1,1),(62,16,'Hindi',1,1,0),(63,16,'Gujarati',1,1,0),(64,16,'Spanish',1,1,0),(65,17,'English',1,1,1),(66,17,'Hindi',1,1,1),(67,17,'Gujarati',1,1,1),(68,17,'Spanish',1,1,1),(69,18,'English',1,1,0),(70,18,'Hindi',1,1,1),(71,18,'Gujarati',1,1,1),(72,18,'Spanish',1,1,1),(73,19,'English',1,1,1),(74,19,'Hindi',1,1,1),(75,19,'Gujarati',1,1,1),(76,19,'Spanish',1,1,1),(77,20,'English',1,1,0),(78,20,'Hindi',1,1,1),(79,20,'Gujarati',1,1,1),(80,20,'Spanish',1,1,1),(81,21,'English',1,1,1),(82,21,'Hindi',1,1,1),(83,21,'Gujarati',1,1,1),(84,21,'Spanish',1,1,1),(85,22,'English',1,1,1),(86,22,'Hindi',1,1,1),(87,22,'Gujarati',1,1,1),(88,22,'Spanish',0,1,1),(89,23,'English',1,1,1),(90,23,'Hindi',1,1,1),(91,23,'Gujarati',1,1,1),(92,23,'Spanish',1,1,1),(93,24,'English',1,1,1),(94,24,'Hindi',0,1,1),(95,24,'Gujarati',1,1,1),(96,24,'Spanish',1,1,1),(97,25,'English',1,1,1),(98,25,'Hindi',1,1,1),(99,25,'Gujarati',0,1,1),(100,25,'Spanish',0,1,1),(101,26,'English',1,1,1),(102,26,'Hindi',1,1,1),(103,26,'Gujarati',1,1,1),(104,26,'Spanish',1,1,1),(105,27,'English',1,1,1),(106,27,'Hindi',1,1,1),(107,27,'Gujarati',1,1,1),(108,27,'Spanish',1,1,1),(109,28,'English',1,1,1),(110,28,'Hindi',1,1,1),(111,28,'Gujarati',1,0,1),(112,28,'Spanish',1,1,1),(113,29,'English',1,0,0),(114,29,'Hindi',0,1,1),(115,29,'Gujarati',0,1,1),(116,29,'Spanish',1,1,1),(117,30,'English',1,1,1),(118,30,'Hindi',1,1,0),(119,30,'Gujarati',1,1,1),(120,30,'Spanish',1,1,1),(121,54,'Hindi',1,1,1),(122,54,'English',0,0,0),(123,54,'Gujarati',0,0,0),(124,55,'Hindi',1,1,1),(125,55,'English',1,1,1),(126,55,'Gujarati',1,1,1),(127,56,'Hindi',1,1,1),(128,56,'English',1,1,1),(129,56,'Gujarati',1,1,1),(130,79,'Hindi',1,1,1),(131,79,'Gujarati',1,1,1),(132,80,'Hindi',1,1,1),(133,81,'Hindi',1,1,1),(134,82,'Hindi',1,1,1),(135,83,'Hindi',1,1,1),(136,83,'Hindi',1,1,1),(137,84,'Hindi',1,1,1),(138,85,'Hindi',1,1,1),(139,85,'English',1,1,1),(140,86,'Hindi',1,1,1),(141,87,'Hindi',1,1,1),(142,88,'Hindi',1,1,1),(143,88,'English',1,1,1),(144,88,'Gujarati',1,1,1);
/*!40000 ALTER TABLE `Lang_Known` ENABLE KEYS */;
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
