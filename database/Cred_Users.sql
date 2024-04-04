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
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Surname` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `Email_ID` varchar(45) NOT NULL,
  `Salt` varchar(45) DEFAULT NULL,
  `Hlink` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `CreatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Rutvi','Rupani','3292e6995b74d7819d514c5bdfb7d578','rutvirupani111@gmail.com','7RD6','bxKWGEkW746ubSy7L4S6oqNuD5S2Go','Active','2024-03-22 11:52:33'),(2,'Alpa','Rupani','0d5fae8c45d62688ed7795afe58a3a71','alparupani@gmail.com','KMnf','8mV4l2OjhdMfnsa9my1z4rccLfQjN3','Active','2024-03-22 12:00:12'),(3,'Manish','Rupani','61ab9f4262ad79d4ef2979610cd50c0f','rupanimanish196@gmail.com','Kmgq','tz1duEA7vSU8f9INz2QOJPNnLKv4Ls','Active','2024-03-26 04:14:15'),(4,'Vrutant','Rupani','042bad954acaa7e118fb72b371977719','vrutrupani@gmail.com','jw7o','JHGHJjpUIApUdiovI6r79bHEndLCuM','Active','2024-03-26 06:30:14'),(5,'Amrut','Moghariya','ab94e69e754d34d0b560711ad858a33c','amrutptl@gmail.com','GLJL','pUoFAkRVaHU3w9HLyZSYWY4fbaI8PX','Active','2024-03-26 11:29:21'),(6,'Sanmay','Antani','7941764584ab031c52ce941a28b3faa2','sua3@gmail.com','kKgw','SCHqscyR98wsJ6qoVAn7pXuiTp4X5T','Active','2024-03-27 10:00:25');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04 13:42:40
