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
-- Table structure for table `Work_Exp`
--

DROP TABLE IF EXISTS `Work_Exp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Work_Exp` (
  `ExpID` int NOT NULL DEFAULT '0',
  `EID` int DEFAULT NULL,
  `Company_Name` varchar(30) NOT NULL,
  `Dsg` varchar(30) NOT NULL,
  `Exp_From` date DEFAULT NULL,
  `Exp_To` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Work_Exp`
--

LOCK TABLES `Work_Exp` WRITE;
/*!40000 ALTER TABLE `Work_Exp` DISABLE KEYS */;
INSERT INTO `Work_Exp` VALUES (1,40,'xxcz','fhh','1995-01-01','2002-01-01'),(2,42,'Espark','Dev','2001-05-20','2003-10-05'),(3,43,'Espark','Dev','2000-09-12','2003-02-06'),(4,44,'Espark','Dev','2003-10-12','2002-12-22'),(5,47,'Microsoft','Developer','2000-01-20','2003-03-20'),(6,48,'Microsoft','Developer','2002-05-12','2003-12-04'),(7,49,'EsparkBiz','SDL','2002-05-01','2003-09-04'),(8,52,'EsparkBiz','Developer','2000-01-12','2003-12-13'),(9,53,'Silver Touch','HR','2001-09-12','2003-12-03'),(10,54,'Silver Touch','Designer','2001-06-12','2003-06-03'),(11,55,'bghyubgyuvg','vbuvukv','2002-12-01','2001-11-04'),(12,56,'PUNJABI DHABA','SAFAAI ','2002-01-01','2002-01-01'),(13,79,'Silent ','HR','2001-05-06','2003-10-08'),(14,80,'EsparkBiz','Developer','2003-01-20','2002-01-20'),(15,81,'EsparkBiz','Dev','2003-02-12','2002-02-12'),(16,82,'EsparkBiz','Developer','2003-02-12','2002-02-15'),(17,84,'EsparkBiz','Developer','2003-01-01','2002-01-01'),(18,85,'EsparkBiz','Designer','2000-12-05','1999-11-06'),(19,86,'EsparkBiz','Designer','2000-02-01','1995-03-02'),(20,87,'EsparkBiz','Dev','1995-02-01','2000-12-02'),(21,88,'Silent Infotech,,','Frontend Developer,,','2024-01-01','2024-03-20'),(0,0,'EsparkBiz','w34e3','2002-09-01','2009-10-08');
/*!40000 ALTER TABLE `Work_Exp` ENABLE KEYS */;
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
