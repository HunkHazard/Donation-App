-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: Donations
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admin`
--

DROP TABLE IF EXISTS `Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admin` (
  `AdminID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`AdminID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admin`
--

LOCK TABLES `Admin` WRITE;
/*!40000 ALTER TABLE `Admin` DISABLE KEYS */;
INSERT INTO `Admin` VALUES (1,'Jawad','Kabir','jkabir.bscs21seecs@seecs.edu.pk','$2a$10$x1wWExD.JLhNmyQCWPTJ9e7XtuxoqIiMbh4L/pqA.S2P3i6ot5aMq'),(2,'Uneeb','Aftab','muneeb.bscs21seecs@seecs.edu.pk','uneeb'),(3,'Ahad','Sajjad','asajjad.bscs21seecs@seecs.edu.pk','ahad');
/*!40000 ALTER TABLE `Admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Donation`
--

DROP TABLE IF EXISTS `Donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Donation` (
  `DonationID` int NOT NULL AUTO_INCREMENT,
  `DonorID` int NOT NULL,
  `ProjectID` int NOT NULL,
  `Amount` int NOT NULL,
  `DonationDate` datetime NOT NULL,
  PRIMARY KEY (`DonationID`),
  KEY `DonorID` (`DonorID`),
  KEY `ProjectID` (`ProjectID`),
  CONSTRAINT `Donation_ibfk_1` FOREIGN KEY (`DonorID`) REFERENCES `Donor` (`DonorID`),
  CONSTRAINT `Donation_ibfk_2` FOREIGN KEY (`ProjectID`) REFERENCES `Project` (`ProjectID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Donation`
--

LOCK TABLES `Donation` WRITE;
/*!40000 ALTER TABLE `Donation` DISABLE KEYS */;
INSERT INTO `Donation` VALUES (1,1,1,100,'2022-05-09 10:30:00'),(2,2,2,50,'2022-05-09 11:15:00'),(3,3,1,200,'2022-05-09 12:00:00'),(4,1,3,75,'2022-05-09 13:30:00'),(5,4,2,25,'2022-05-09 14:45:00'),(6,6,3,150,'2022-05-10 09:00:00'),(7,9,2,100,'2022-05-10 10:30:00'),(8,6,2,500,'2023-05-10 10:00:00'),(9,6,3,1000,'2023-05-10 11:00:00'),(10,6,5,3000,'2023-05-15 18:30:00'),(11,6,4,12000,'2023-05-15 23:30:00'),(12,8,1,150,'2023-05-16 00:39:00'),(13,8,1,100,'2023-05-16 00:40:00');
/*!40000 ALTER TABLE `Donation` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `update_project_collected` AFTER INSERT ON `Donation` FOR EACH ROW BEGIN 
  UPDATE Project 
  SET Collected = Collected + NEW.Amount 
  WHERE ProjectID = NEW.ProjectID; 
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Donor`
--

DROP TABLE IF EXISTS `Donor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Donor` (
  `DonorID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` varchar(50) NOT NULL,
  `City` varchar(50) NOT NULL,
  `Province` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`DonorID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Donor`
--

LOCK TABLES `Donor` WRITE;
/*!40000 ALTER TABLE `Donor` DISABLE KEYS */;
INSERT INTO `Donor` VALUES (1,'Ali','Ahmed','ali.ahmed@example.com','0321-1234567','Karachi','Sindh',''),(2,'Fatima','Khan','fatima.khan@example.com','0311-9876543','Lahore','Punjab',''),(3,'Asad','Hussain','asad.hussain@example.com','0333-2468101','Islamabad','Islamabad Capital Territory',''),(4,'Saba','Malik','saba.malik@example.com','0322-4567890','Rawalpindi','Punjab',''),(5,'Bilal','Iqbal','bilal.iqbal@example.com','0300-1357902','Multan','Punjab',''),(6,'Jawad','Kabir','jkabir.bscs21seecs@seecs.edu.pk','0333-2720921','Rawalpindi','Punjab','$2a$10$dP1Tk4bqdkMKIfVnqVw98OzGUAwO20wuxZKGfpBojqcvj5UaUpRRm'),(7,'ahad','sajjad','asajjad.bscs21seecs@seecs.edu.pk','1234-545454','Rawalpindi','Punjab','$2a$10$AjMix3Dn8mT7waGF3YGLF.ZPFiK4./AtdL2gYjNUX4xf4lixzuKqe'),(8,'Uneeb','Aftab','muneeb21seecs@seecs.edu.pk','1234-545454','Islamabad','Punjab','$2a$10$RiAxmoRYvKF.IcJBJhmcnO0nnuyBgty/0k/Garby4NmElNYMZAqNW'),(9,'arslan','tariq','atariq.bscs21seecs@seecs.edu.pk','1234-56789-0','Rawalpindi','P','$2a$10$jJxNrKN9rC74iWfys1I0H./zLFfrpnqDbh3/xz5n0qVcMeUlG1UYm'),(10,'admin','web','admin@admin.com','1234-56789-0','Rawalpindi','Punjab','$2a$10$IPYq0FBJtuUqIx00OTz8s.OzjzBY7erbqIzLFeC8s.IWpEzm6.YWS'),(11,'Ligma','Balls','ligma@ball.com','123456789','Deez','Candice','$2a$10$XTQvqIeshRv8xEZhhi6iYeDl8sK/kX9FfL9eRxxjOuldZ.8EbvCFW'),(12,'','','','','','','$2a$10$bhskgydRRr6YHquEnrROges3i4c4m7RswAbAURYqYNOuWFUPhxkwa');
/*!40000 ALTER TABLE `Donor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Institution`
--

DROP TABLE IF EXISTS `Institution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Institution` (
  `InstitutionID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Address` varchar(70) NOT NULL,
  `Province` varchar(50) NOT NULL,
  PRIMARY KEY (`InstitutionID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Institution`
--

LOCK TABLES `Institution` WRITE;
/*!40000 ALTER TABLE `Institution` DISABLE KEYS */;
INSERT INTO `Institution` VALUES (1,'Edhi Foundation','Clifton, Karachi','Sindh'),(2,'SOS Village','Gulberg, Lahore','Punjab'),(3,'Shaukat Khanum Memorial Cancer Hospital','Johar Town, Lahore','Punjab'),(4,'Humanity Hospital','F-8, Islamabad','Islamabad Capital Territory'),(5,'LRBT Eye Hospital','Multan Road, Lahore','Punjab'),(6,'NUST','H12, Islamabad','Federal');
/*!40000 ALTER TABLE `Institution` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Project`
--

DROP TABLE IF EXISTS `Project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Project` (
  `ProjectID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `InstitutionID` int NOT NULL,
  `Required` int NOT NULL,
  `Collected` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`ProjectID`),
  KEY `InstitutionID` (`InstitutionID`),
  CONSTRAINT `Project_ibfk_1` FOREIGN KEY (`InstitutionID`) REFERENCES `Institution` (`InstitutionID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Project`
--

LOCK TABLES `Project` WRITE;
/*!40000 ALTER TABLE `Project` DISABLE KEYS */;
INSERT INTO `Project` VALUES (1,'Food Distribution','Providing food to needy families during the pandemic',1,10000,550),(2,'Education for Orphans','Providing education to orphans in the village',2,5000,675),(3,'Cancer Treatment','Providing cancer treatment to patients who cannot afford it',3,7500,1225),(4,'Medical Camp','Providing medical treatment to people in remote areas',4,12000,12000),(5,'Eye Surgery','Performing eye surgeries for patients with cataracts',5,9000,3000);
/*!40000 ALTER TABLE `Project` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-17  0:02:28
