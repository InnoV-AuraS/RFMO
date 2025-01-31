-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: rfmo_database
-- ------------------------------------------------------
-- Server version	8.4.3

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` varchar(30) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `college` varchar(255) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('1','password123','Rahul Sharma','JIS College of Engineering','Python'),('2','admin123','Priya Das','Narula Institute of Technology','Java'),('3','rahul123','Rajesh Singh','Dr. Sudhir Chandra Sur Degree Engineering College','C++'),('4','priya123','Sneha Ghosh','Guru Nanak Institute of Technology','Python'),('5','sneha123','Amit Kumar','JIS College of Engineering','Java');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculty` (
  `id` varchar(30) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `college` varchar(255) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty`
--

LOCK TABLES `faculty` WRITE;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` VALUES ('1','faculty123','Prof. Abhijit Das','JIS College of Engineering','Computer Networks'),('2','ad123','Dr. Smita Ghosh','Narula Institute of Technology','Database Management'),('3','sg123','Prof. Soumya Sen','Dr. Sudhir Chandra Sur Degree Engineering College','Operating Systems'),('4','ss123','Dr. Arindam Mondal','Guru Nanak Institute of Technology','Data Structures'),('5','am123','Prof. Ipsita Saha','JIS College of Engineering','Algorithms'),('6','is123','Dr. Subhasis Dasgupta','Narula Institute of Technology','Computer Vision'),('7','sd123','Prof. Rupam Kundu','Dr. Sudhir Chandra Sur Degree Engineering College','Machine Learning'),('8','rk123','Dr. Anindita Sarkar','Guru Nanak Institute of Technology','Web Development'),('9','as123','Prof. Sayan Chakraborty','JIS College of Engineering','Cyber Security'),('10','sc123','Dr. Sudipta Roy','Narula Institute of Technology','Data Mining');
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `new_faq`
--

DROP TABLE IF EXISTS `new_faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_faq` (
  `question` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_faq`
--

LOCK TABLES `new_faq` WRITE;
/*!40000 ALTER TABLE `new_faq` DISABLE KEYS */;
INSERT INTO `new_faq` VALUES ('How do I submit a research proposal?'),('What are the eligibility criteria for funding?'),('Hw can I access research data and publications?'),('What is the process for collaboration with other researchers?'),('How do I report a technical issue on the website?'),('Are there any upcoming events or webinars related to R&D?'),('How can I get updates on the latest R&D projects and findings?'),('What resources are available for new researchers?'),('How do I navigate the R&D portal?'),('Who can I contact for further assistance or inquiries?');
/*!40000 ALTER TABLE `new_faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `principal`
--

DROP TABLE IF EXISTS `principal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `principal` (
  `id` varchar(30) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `college` varchar(255) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `principal`
--

LOCK TABLES `principal` WRITE;
/*!40000 ALTER TABLE `principal` DISABLE KEYS */;
INSERT INTO `principal` VALUES ('1','principal123','Dr. Suman Kumar','JIS College of Engineering','Data Science'),('2','sk123','Prof. Indrani Sen','Narula Institute of Technology','Artificial Intelligence'),('3','principal456','Dr. Debasish Jana','Dr. Sudhir Chandra Sur Degree Engineering College','Machine Learning'),('4','dj123','Prof. Sarmistha Neogy','Guru Nanak Institute of Technology','Cyber Security'),('5','sn123','Dr. Subrata Saha','JIS College of Engineering','Internet of Things');
/*!40000 ALTER TABLE `principal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `name` varchar(255) DEFAULT NULL,
  `ID` varchar(30) DEFAULT NULL,
  `description` text,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `support_faq`
--

DROP TABLE IF EXISTS `support_faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `support_faq` (
  `question` varchar(255) DEFAULT NULL,
  `answer` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `support_faq`
--

LOCK TABLES `support_faq` WRITE;
/*!40000 ALTER TABLE `support_faq` DISABLE KEYS */;
INSERT INTO `support_faq` VALUES ('How can I reset my password?','You can reset your password by clicking on the \"Forgot Password\" link on the login page.'),('Where can I find my order history?','Your order history is available in the \"My Account\" section after logging in.'),('How can I contact customer support?','You can fill out the contact form below, email us at support@example.com, or call us at 1-800-123-4567.'),('How do I submit a research proposal?','Provide a step-by-step guide on the submission process, including required documents and deadlines. Ensure the submission portal is user-friendly and has clear instructions.'),('What are the eligibility criteria for funding?','Outline the eligibility criteria in detail, possibly with examples. A link to the official funding guidelines and criteria document can be helpful.'),('How can I access research data and publications?','Offer a searchable database or repository of research data and publications. Provide clear instructions on how to navigate and use the database.'),('What is the process for collaboration with other researchers?','Describe the collaboration process, including any required forms, procedures, and points of contact. Highlight any existing collaboration platforms.'),('How do I report a technical issue on the website?','Provide a dedicated contact form or email address for reporting technical issues. Ensure that the support team responds promptly.'),('Are there any upcoming events or webinars related to R&D?','Maintain an updated calendar of events and webinars on the website. Send out regular newsletters or notifications to subscribers.'),('How can I get updates on the latest R&D projects and findings?','Encourage users to subscribe to newsletters or follow social media channels for updates. Provide an RSS feed for those who prefer to use feed readers.'),('What resources are available for new researchers?','Create a dedicated section for new researchers, including guides, tutorials, and links to relevant resources. Offer mentorship programs or forums for peer support.'),('How do I navigate the R&D portal?','Provide a detailed site map and navigation guide. Consider creating video tutorials or interactive walkthroughs to help users get acquainted with the portal.'),('Who can I contact for further assistance or inquiries?','List contact information for various departments or support teams. Ensure that there are multiple channels for communication, such as phone, email, and live chat.');
/*!40000 ALTER TABLE `support_faq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-31 16:00:55
