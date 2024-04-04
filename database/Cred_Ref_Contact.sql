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
-- Table structure for table `Ref_Contact`
--

DROP TABLE IF EXISTS `Ref_Contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ref_Contact` (
  `RFID` int NOT NULL DEFAULT '0',
  `EID` int DEFAULT NULL,
  `RFName` varchar(30) NOT NULL,
  `Contact_No` bigint unsigned NOT NULL,
  `Relation` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ref_Contact`
--

LOCK TABLES `Ref_Contact` WRITE;
/*!40000 ALTER TABLE `Ref_Contact` DISABLE KEYS */;
INSERT INTO `Ref_Contact` VALUES (1,47,'Alpa Rupani',9825999849,'Mother'),(2,47,'Manish Rupani',9638383343,'Father'),(3,48,'Rutvi Rupani',7698800789,'Sister'),(4,49,'Manish Rupani',1234567890,'Father'),(5,52,'Rutvi Rupani',1234567890,'Sister'),(6,53,'Drumil Upadhyay',987654321,'Son'),(7,54,'Rutvi Rupani',1234567890,'Ni'),(8,55,'Kusum Rupani',8520251470,'Mom'),(9,56,'Sanmay',9156234123,'Dushman'),(10,87,'Rutvi Rupani',9106639799,'Father'),(11,87,'Rutvi Rupani',9106639799,'Father'),(12,88,'Kajal Patel',9876543210,'Sister');
/*!40000 ALTER TABLE `Ref_Contact` ENABLE KEYS */;
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
