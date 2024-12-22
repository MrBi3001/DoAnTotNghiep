-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: databaseshoppc
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `BrandID` int NOT NULL AUTO_INCREMENT,
  `BrandName` varchar(255) NOT NULL,
  `BrandStatus` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`BrandID`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Dell','Active'),(2,'HP','Active'),(3,'Asus','Active'),(4,'Lenovo','Active'),(5,'Acer','Active'),(100,'Mac','Active'),(101,'Lenovo','Active'),(102,'Dell','Active'),(103,'HP','Active'),(104,'Acer','Active'),(105,'LG','Active'),(106,'MSI','Active'),(107,'Gigabyte','Active'),(108,'Vaio','Active'),(109,'ASUS','Active');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `CartID` int NOT NULL AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `CartStatus` varchar(20) DEFAULT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`CartID`),
  KEY `idx_user_cart` (`UserID`,`CartStatus`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (2,2,'Active','2024-01-11 00:00:00'),(3,3,'Active','2024-01-12 00:00:00'),(4,4,'Completed','2024-01-13 00:00:00'),(5,5,'Active','2024-01-14 00:00:00'),(6,1,'Completed','2024-01-10 00:00:00'),(9,1,'Completed','2024-12-15 23:08:03'),(10,1,'Completed','2024-12-15 23:14:07'),(11,1,'Completed','2024-12-15 23:24:17'),(12,1,'Completed','2024-12-15 23:39:41'),(13,1,'Completed','2024-12-15 23:48:18'),(14,1,'Completed','2024-12-15 23:51:28'),(15,1,'Completed','2024-12-15 23:52:53'),(16,1,'Completed','2024-12-15 23:53:11'),(17,1,'Completed','2024-12-21 22:19:08'),(18,1,'Active','2024-12-21 22:42:37');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartdetail`
--

DROP TABLE IF EXISTS `cartdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cartdetail` (
  `CartDetailID` int NOT NULL AUTO_INCREMENT,
  `CartID` int NOT NULL,
  `ProductID` int NOT NULL,
  `Quantity` int NOT NULL,
  `CartDetailStatus` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`CartDetailID`),
  KEY `CartID` (`CartID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `cartdetail_ibfk_1` FOREIGN KEY (`CartID`) REFERENCES `cart` (`CartID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cartdetail_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartdetail`
--

LOCK TABLES `cartdetail` WRITE;
/*!40000 ALTER TABLE `cartdetail` DISABLE KEYS */;
INSERT INTO `cartdetail` VALUES (1,6,1,5,'Completed'),(2,6,3,1,'Completed'),(3,2,2,28,'Deleted'),(4,3,4,1,'Active'),(5,3,5,1,'Active'),(6,4,1,1,'Completed'),(7,5,3,1,'Active'),(8,6,4,3,'Completed'),(9,2,2,2,'Deleted'),(10,2,1,3,'Deleted'),(11,2,1,4,'Deleted'),(12,2,2,1,'Deleted'),(13,2,3,1,'Deleted'),(14,2,1,2,'Deleted'),(15,2,5,1,'Active'),(16,9,1,1,'Completed'),(17,10,1,3,'Completed'),(18,11,1,2,'Completed'),(19,12,1,1,'Completed'),(20,13,4,2,'Completed'),(21,14,4,3,'Completed'),(22,17,1,1,'Completed'),(23,17,2,2,'Completed'),(24,18,1,2,'Active'),(25,18,2,1,'Active');
/*!40000 ALTER TABLE `cartdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `CategoryID` int NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(255) NOT NULL,
  `CategoryStatus` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`CategoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Laptop Gaming','Active'),(2,'Laptop Văn Phòng','Active'),(3,'PC Gaming','Active'),(4,'PC Văn Phòng','Active'),(5,'Linh kiện PC','Active'),(100,'Main','Active'),(101,'Laptop','Active'),(102,'PC','Active'),(103,'CPU','Active'),(104,'RAM','Active'),(105,'Tản nhiệt','Active'),(106,'Pin','Active'),(107,'Nguồn','Active'),(108,'Phụ kiện','Active'),(109,'VGA','Active'),(110,'ổ cứng','Active');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon`
--

DROP TABLE IF EXISTS `coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon` (
  `CouponID` int NOT NULL AUTO_INCREMENT,
  `Code` varchar(50) NOT NULL,
  `Description` text,
  `DiscountType` enum('Percentage','Fixed') NOT NULL,
  `DiscountValue` decimal(10,2) NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `UsageLimit` int NOT NULL,
  `MinimumOrderAmount` decimal(10,2) DEFAULT NULL,
  `CouponStatus` int DEFAULT NULL,
  `Status` enum('Hoạt động','Hết hạn') NOT NULL,
  PRIMARY KEY (`CouponID`),
  UNIQUE KEY `Code` (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon`
--

LOCK TABLES `coupon` WRITE;
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `ImageID` int NOT NULL AUTO_INCREMENT,
  `ProductID` varchar(100) DEFAULT NULL,
  `ImageFileName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ImageID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'100','Nam.txt');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `InventoryID` int NOT NULL AUTO_INCREMENT,
  `ProductID` int NOT NULL,
  `Quantity` int NOT NULL,
  `InventoryStatus` int DEFAULT NULL,
  `LastUpdated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`InventoryID`),
  UNIQUE KEY `ProductID` (`ProductID`),
  CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventorymovement`
--

DROP TABLE IF EXISTS `inventorymovement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventorymovement` (
  `InventoryMovementID` int NOT NULL AUTO_INCREMENT,
  `InventoryID` int NOT NULL,
  `MovementType` enum('Nhập','Xuất','Điều chỉnh') NOT NULL,
  `Quantity` int NOT NULL,
  `MovementDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Description` text,
  `UserID` int DEFAULT NULL,
  `OrderID` int DEFAULT NULL,
  `InventoryMovementStatus` int DEFAULT NULL,
  PRIMARY KEY (`InventoryMovementID`),
  KEY `InventoryID` (`InventoryID`),
  KEY `UserID` (`UserID`),
  KEY `OrderID` (`OrderID`),
  CONSTRAINT `inventorymovement_ibfk_1` FOREIGN KEY (`InventoryID`) REFERENCES `inventory` (`InventoryID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `inventorymovement_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `inventorymovement_ibfk_3` FOREIGN KEY (`OrderID`) REFERENCES `order` (`OrderID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventorymovement`
--

LOCK TABLES `inventorymovement` WRITE;
/*!40000 ALTER TABLE `inventorymovement` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventorymovement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `OrderID` int NOT NULL AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `OrderDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TotalAmount` decimal(10,2) NOT NULL,
  `OrderStatus` varchar(20) DEFAULT NULL,
  `PaymentMethodID` int DEFAULT NULL,
  `OrderKBN` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`OrderID`),
  KEY `UserID` (`UserID`),
  KEY `PaymentMethodID` (`PaymentMethodID`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`PaymentMethodID`) REFERENCES `paymentmethod` (`PaymentMethodID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (6,1,'2024-01-20 10:00:00',45980000.00,'Pending',1,'Normal'),(7,1,'2024-01-19 15:30:00',32990000.00,'Processing',2,'Normal'),(8,2,'2024-01-18 09:15:00',22990000.00,'Completed',1,'VIP'),(9,3,'2024-01-17 14:20:00',19990000.00,'Shipping',1,'Normal'),(10,2,'2024-01-16 11:45:00',20990000.00,'Delivered',2,'Special'),(11,1,'2024-12-15 22:38:01',92960000.00,'Pending',2,'Normal'),(12,1,'2024-12-15 23:09:43',22990000.00,'Pending',1,'Normal'),(13,1,'2024-12-15 23:15:47',68970000.00,'Pending',2,'Normal'),(14,1,'2024-12-15 23:33:52',45980000.00,'Pending',2,'Normal'),(15,1,'2024-12-15 23:44:54',22990000.00,'Pending',2,'Normal'),(16,1,'2024-12-15 23:49:34',39980000.00,'Pending',1,'Normal'),(17,1,'2024-12-15 23:51:49',59970000.00,'Pending',1,'Normal'),(18,1,'2024-12-15 23:52:53',0.00,'Pending',1,'Normal'),(19,1,'2024-12-16 20:38:15',0.00,'Pending',1,'Normal'),(20,1,'2024-12-21 22:20:05',56970000.00,'Pending',2,'Normal');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetail`
--

DROP TABLE IF EXISTS `orderdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetail` (
  `OrderDetailID` int NOT NULL AUTO_INCREMENT,
  `OrderID` int NOT NULL,
  `ProductID` int NOT NULL,
  `Quantity` int NOT NULL,
  `SalePrice` decimal(10,2) NOT NULL,
  `OrderDetailStatus` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`OrderDetailID`),
  KEY `OrderID` (`OrderID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `orderdetail_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `order` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orderdetail_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
INSERT INTO `orderdetail` VALUES (20,6,1,2,22990000.00,'1'),(21,7,3,1,32990000.00,'1'),(22,8,2,1,16990000.00,'1'),(23,9,4,1,19990000.00,'1'),(24,6,5,1,20990000.00,'1'),(25,10,1,1,22990000.00,'1'),(26,11,3,1,32990000.00,'Active'),(27,11,4,3,19990000.00,'Active'),(28,12,1,1,22990000.00,'Active'),(29,13,1,3,22990000.00,'Active'),(30,14,1,2,22990000.00,'Active'),(31,15,1,1,22990000.00,'Active'),(32,16,4,2,19990000.00,'Active'),(33,17,4,3,19990000.00,'Active'),(34,20,1,1,22990000.00,'Active'),(35,20,2,2,16990000.00,'Active');
/*!40000 ALTER TABLE `orderdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentmethod`
--

DROP TABLE IF EXISTS `paymentmethod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentmethod` (
  `PaymentMethodID` int NOT NULL AUTO_INCREMENT,
  `MethodName` varchar(255) NOT NULL,
  `PaymentMethodStatus` int DEFAULT NULL,
  PRIMARY KEY (`PaymentMethodID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentmethod`
--

LOCK TABLES `paymentmethod` WRITE;
/*!40000 ALTER TABLE `paymentmethod` DISABLE KEYS */;
INSERT INTO `paymentmethod` VALUES (1,'Cash',1),(2,'VNPay',1),(3,'Bank Transfer',1);
/*!40000 ALTER TABLE `paymentmethod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission` (
  `PermissionID` int NOT NULL AUTO_INCREMENT,
  `PermissionName` varchar(255) NOT NULL,
  `PermissionStatus` int DEFAULT NULL,
  `Description` text,
  PRIMARY KEY (`PermissionID`),
  UNIQUE KEY `PermissionName` (`PermissionName`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
INSERT INTO `permission` VALUES (100,'Admin',1,'Quyền của admin'),(101,'Employee',1,'Quyền của nhân viên'),(102,'Custumer',1,'Quyền của khách hàng');
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `ProductID` int NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(255) NOT NULL,
  `Description` text,
  `Price` decimal(10,2) NOT NULL,
  `StockQuantity` int NOT NULL,
  `CategoryID` int DEFAULT NULL,
  `BrandID` int DEFAULT NULL,
  `ProductStatus` varchar(20) DEFAULT NULL,
  `Specifications` json DEFAULT NULL,
  `Image` text,
  PRIMARY KEY (`ProductID`),
  KEY `CategoryID` (`CategoryID`),
  KEY `BrandID` (`BrandID`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `category` (`CategoryID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`BrandID`) REFERENCES `brand` (`BrandID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Dell G15 5515','Laptop Gaming Dell G15 5515',22990000.00,50,1,1,'Active','{\"os\": \"Windows 11\", \"cpu\": \"AMD Ryzen 7 5800H\", \"gpu\": \"NVIDIA RTX 3050Ti 4GB\", \"ram\": \"16GB DDR4 3200MHz\", \"screen\": \"15.6 inch FHD 120Hz\", \"weight\": \"2.4 kg\", \"battery\": \"56Wh\", \"storage\": \"512GB SSD NVMe\"}','dell-g15.jpg'),(2,'HP Pavilion 15','Laptop Văn Phòng HP',16990000.00,30,2,2,'Active','{\"os\": \"Windows 11\", \"cpu\": \"Intel Core i5 1135G7\", \"gpu\": \"Intel Iris Xe Graphics\", \"ram\": \"8GB DDR4 3200MHz\", \"screen\": \"15.6 inch FHD IPS\", \"weight\": \"1.75 kg\", \"battery\": \"41Wh\", \"storage\": \"512GB SSD NVMe\"}','hp-pavilion.jpg'),(3,'Asus ROG Strix G15','Laptop Gaming Asus',32990000.00,20,1,3,'Active','{\"os\": \"Windows 11\", \"cpu\": \"AMD Ryzen 9 5900HX\", \"gpu\": \"NVIDIA RTX 3070 8GB\", \"ram\": \"32GB DDR4 3200MHz\", \"screen\": \"15.6 inch QHD 165Hz\", \"weight\": \"2.3 kg\", \"battery\": \"90Wh\", \"storage\": \"1TB SSD NVMe\"}','asus-rog.jpg'),(4,'Lenovo ThinkPad E15','Laptop Văn Phòng Lenovo',19990000.00,40,2,4,'Active','{\"os\": \"Windows 11\", \"cpu\": \"Intel Core i7 1165G7\", \"gpu\": \"Intel Iris Xe Graphics\", \"ram\": \"16GB DDR4 3200MHz\", \"screen\": \"15.6 inch FHD IPS\", \"weight\": \"1.7 kg\", \"battery\": \"45Wh\", \"storage\": \"512GB SSD NVMe\"}','lenovo-thinkpad.jpg'),(5,'Acer Nitro 5','Laptop Gaming Acer',20990000.00,35,1,5,'Active','{\"os\": \"Windows 11\", \"cpu\": \"Intel Core i5 11400H\", \"gpu\": \"NVIDIA RTX 3050 4GB\", \"ram\": \"16GB DDR4 3200MHz\", \"screen\": \"15.6 inch FHD 144Hz\", \"weight\": \"2.2 kg\", \"battery\": \"57Wh\", \"storage\": \"512GB SSD NVMe\"}','acer-nitro.jpg'),(100,'Máy Tính Để Bàn Gaming Intel i5','Máy tính để bàn chơi game với CPU Intel i5, RAM 16GB, SSD 512GB',15000000.00,10,101,100,'Active','{\"CPU\": \"Intel i5\", \"RAM\": \"16GB\", \"Storage\": \"512GB SSD\"}',NULL),(101,'VGA NVIDIA RTX 3060','Card đồ họa NVIDIA RTX 3060, hỗ trợ Ray Tracing, VRAM 12GB',9500000.00,15,108,101,'Active','{\"VRAM\": \"12GB\", \"Technology\": \"Ray Tracing\"}',NULL),(102,'RAM Kingston 8GB DDR4','RAM DDR4 Kingston dung lượng 8GB, tốc độ 3200MHz',1200000.00,50,104,103,'Active','{\"Type\": \"DDR4\", \"Speed\": \"3200MHz\", \"Capacity\": \"8GB\"}',NULL),(103,'Bàn Phím Cơ Logitech G Pro','Bàn phím cơ chuyên nghiệp của Logitech, switch GX Blue',2500000.00,30,108,103,'Active','{\"Type\": \"Mechanical\", \"Switch\": \"GX Blue\"}',NULL),(104,'Chuột Gaming Logitech G102','Chuột chơi game với độ nhạy 8000 DPI',400000.00,100,108,105,'Active','{\"DPI\": \"8000\"}',NULL),(105,'SSD Samsung 970 EVO 1TB','SSD NVMe tốc độ cao, dung lượng 1TB',3000000.00,40,110,102,'Active','{\"Type\": \"NVMe\", \"Capacity\": \"1TB\"}',NULL),(106,'Nguồn Corsair RM750 750W','Nguồn Corsair công suất 750W, chuẩn 80 Plus Gold',1800000.00,25,108,109,'Active','{\"Wattage\": \"750W\", \"Certification\": \"80 Plus Gold\"}',NULL),(107,'abc','test',150.00,54,108,109,'Active','{\"Wattage\": \"750W\", \"Certification\": \"80 Plus Gold\"}',NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productreview`
--

DROP TABLE IF EXISTS `productreview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productreview` (
  `ReviewID` int NOT NULL AUTO_INCREMENT,
  `ProductID` int NOT NULL,
  `UserID` int NOT NULL,
  `Rating` int DEFAULT NULL,
  `Comment` text,
  `ProductReviewStatus` int DEFAULT NULL,
  `ReviewDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ReviewID`),
  KEY `ProductID` (`ProductID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `productreview_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `productreview_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `productreview_chk_1` CHECK ((`Rating` between 1 and 5))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productreview`
--

LOCK TABLES `productreview` WRITE;
/*!40000 ALTER TABLE `productreview` DISABLE KEYS */;
/*!40000 ALTER TABLE `productreview` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `returnrefund`
--

DROP TABLE IF EXISTS `returnrefund`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `returnrefund` (
  `ReturnID` int NOT NULL AUTO_INCREMENT,
  `OrderID` int NOT NULL,
  `UserID` int NOT NULL,
  `Reason` text NOT NULL,
  `Status` enum('Đang xử lý','Đã hoàn tiền','Từ chối') NOT NULL,
  `RequestedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ProcessedDate` datetime DEFAULT NULL,
  `ReturnRefundStatus` int DEFAULT NULL,
  PRIMARY KEY (`ReturnID`),
  KEY `OrderID` (`OrderID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `returnrefund_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `order` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `returnrefund_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `returnrefund`
--

LOCK TABLES `returnrefund` WRITE;
/*!40000 ALTER TABLE `returnrefund` DISABLE KEYS */;
/*!40000 ALTER TABLE `returnrefund` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `RoleID` int NOT NULL AUTO_INCREMENT,
  `RoleName` varchar(255) NOT NULL,
  `RoleStatus` int DEFAULT NULL,
  `Description` text,
  PRIMARY KEY (`RoleID`),
  UNIQUE KEY `RoleName` (`RoleName`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (100,'Admin',1,'Quản trị viên có quyền quản lý toàn bộ hệ thống'),(101,'Sales',1,'Nhân viên bán hàng có quyền quản lý đơn hàng và khách hàng'),(102,'Customer',1,'Khách hàng có quyền mua hàng và theo dõi đơn hàng'),(103,'InventoryManager',1,'Nhân viên quản lý kho có quyền cập nhật số lượng hàng hóa'),(104,'Guest',1,'Người dùng khách có thể duyệt sản phẩm mà không cần đăng nhập');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolepermission`
--

DROP TABLE IF EXISTS `rolepermission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rolepermission` (
  `RolePermissionID` int NOT NULL AUTO_INCREMENT,
  `RoleID` int NOT NULL,
  `PermissionID` int NOT NULL,
  `RolePermissionStatus` int DEFAULT NULL,
  PRIMARY KEY (`RolePermissionID`),
  KEY `RoleID` (`RoleID`),
  KEY `PermissionID` (`PermissionID`),
  CONSTRAINT `rolepermission_ibfk_1` FOREIGN KEY (`RoleID`) REFERENCES `role` (`RoleID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rolepermission_ibfk_2` FOREIGN KEY (`PermissionID`) REFERENCES `permission` (`PermissionID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolepermission`
--

LOCK TABLES `rolepermission` WRITE;
/*!40000 ALTER TABLE `rolepermission` DISABLE KEYS */;
INSERT INTO `rolepermission` VALUES (100,100,100,1),(101,102,102,1),(102,101,101,1),(103,103,101,1);
/*!40000 ALTER TABLE `rolepermission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping`
--

DROP TABLE IF EXISTS `shipping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipping` (
  `ShippingID` int NOT NULL AUTO_INCREMENT,
  `OrderID` int NOT NULL,
  `ShippingMethod` varchar(255) NOT NULL,
  `ShippingDate` datetime NOT NULL,
  `EstimatedDeliveryDate` datetime NOT NULL,
  `ShippingStatus` int DEFAULT NULL,
  PRIMARY KEY (`ShippingID`),
  UNIQUE KEY `OrderID` (`OrderID`),
  CONSTRAINT `shipping_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `order` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping`
--

LOCK TABLES `shipping` WRITE;
/*!40000 ALTER TABLE `shipping` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `SupplierID` int NOT NULL AUTO_INCREMENT,
  `SupplierName` varchar(255) NOT NULL,
  `ContactInfo` varchar(500) DEFAULT NULL,
  `SupplierStatus` int DEFAULT NULL,
  PRIMARY KEY (`SupplierID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supportticket`
--

DROP TABLE IF EXISTS `supportticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supportticket` (
  `SupportTicketID` int NOT NULL AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `Subject` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Status` enum('Mới','Đang xử lý','Đã giải quyết') NOT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ResolvedDate` datetime DEFAULT NULL,
  `SupportTicketStatus` int DEFAULT NULL,
  PRIMARY KEY (`SupportTicketID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `supportticket_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supportticket`
--

LOCK TABLES `supportticket` WRITE;
/*!40000 ALTER TABLE `supportticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `supportticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Address` varchar(500) DEFAULT NULL,
  `PhoneNumber` varchar(20) DEFAULT NULL,
  `UserStatus` varchar(20) DEFAULT NULL,
  `RegistrationDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Nguyễn Văn B','nguyenvana@gmail.com','password123','Hà Nội','0123456789','','2024-01-01 00:00:00'),(2,'Trần Thị B','tranthib@gmail.com','password456','Hồ Chí Minh','0987654321','Active','2024-01-02 00:00:00'),(3,'Lê Văn C','levanc@gmail.com','password789','Đà Nẵng','0369852147','Active','2024-01-03 00:00:00'),(4,'Phạm Thị D','phamthid@gmail.com','passwordabc','Hải Phòng','0741852963','Active','2024-01-04 00:00:00'),(5,'Hoàng Văn E','hoangvane@gmail.com','passworddef','Cần Thơ','0159753468','Active','2024-01-05 00:00:00'),(100,'admin4','admin@gmail.com','123456','220 Trần Điền ','08003552258','','2022-04-26 07:43:40'),(101,'Obryan1976','Arden.Mcmillen@nowhere.com','123456','145 Trần Điền ','08088982270','2','2022-01-01 00:01:04'),(102,'Bellamy1971','etadog2515@gmail.com','123456','104 Hoàng Mai ','08004885691','3','2022-11-11 14:12:58'),(103,'Danner8','Anders@gmail.com','123456','294 Ngã Tư Sở ','08089835421','Inactive','2022-04-15 16:29:02'),(104,'Dennis1954','Stefan.G_Chamberlin@gmail.com','123456','17 Võ Chí Công ','08081973584','Active','2023-11-02 15:57:08'),(105,'jjjj','jjjjj','123456','hhhh','jjjj','Inactive','2024-04-01 19:51:03'),(106,'Randy2001','Allan288@gmail.com','123456','144 Cầu Giấy ','08007095091','2','2022-01-01 00:37:23'),(107,'Veda226','Alicia.Cloutier@gmail.com','123456','18 Láng ','08087324310','Inactive','2023-05-09 20:31:33'),(108,'Alexander2026','Keys@gmail.com','123456','131 Hoàng Mai ','08006757266','Active','2022-01-01 00:09:06'),(109,'Adolfo1994','MargareteAlford@gmail.com','123456','179 Định Công ','08002465133','Inactive','2022-05-13 19:56:12'),(110,'Leon825','Darcey_Bates@gmail.com','123456','151 Khất Duy Tiến ','08008084210','Inactive','2023-02-20 06:52:32'),(111,'Clare533','Rafferty897@gmail.com','123456','24 Võ Chí Công ','08089617628','2','2022-09-12 02:45:51'),(112,'Ollie141','Riggs15@gmail.com','123456','144 Võ Chí Công ','08002638408','3','2022-01-01 00:01:03'),(113,'Wheat585','ErickBlanton5@gmail.com','123456','27 Cầu Giấy ','08085850103','Active','2023-02-07 05:30:15'),(114,'Paris1967','AdolfoParrott@nowhere.com','123456','248 Ngã Tư Sở ','08084306498','2','2022-01-13 09:39:50'),(115,'Cheung1950','Earleen_Cota34@nowhere.com','123456','252 Hoàng Mai ','08003885110','Inactive','2022-01-01 00:00:02'),(116,'Kelvin1951','Adena.Carroll@nowhere.com','123456','181 Ngã Tư Sở ','08082200254','2','2022-06-11 15:13:33'),(117,'Daren1996','Evelynn.NAlston723@gmail.com','123456','112 Ngã Tư Sở ','08081211484','2','2024-03-16 07:15:11'),(118,'Alvarado1950','DirkWillson77@gmail.com','123456','12 Trần Điền ','08083870036','Active','2022-01-01 01:21:22'),(119,'Mackay31','Nicholas76@nowhere.com','123456','137 Võ Chí Công ','08089627893','Inactive','2022-01-01 01:53:56'),(120,'Deangelo511','VictoriaAbernathy286@nowhere.com','123456',NULL,NULL,NULL,'2022-01-01 00:00:10'),(121,'Emeline1958','Antonio@gmail.com','123456','250 Ngã Tư Sở ','08007664202','3','2022-01-01 00:00:06'),(122,'Catron338','Manual.Pantoja93@nowhere.com','123456','20 Ngã Tư Sở ','08009603049','Active','2024-06-01 02:51:23'),(123,'Johnna2017','Julianne_Stallworth@gmail.com','123456','188 Cầu Giấy ','08080838665','2','2022-06-30 04:21:24'),(124,'Pickett2027','Joaquin_Barham2@gmail.com','123456','100 Cầu Giấy ','08080353382','3','2023-08-22 19:02:16'),(125,'Dion2020','Briscoe375@nowhere.com','123456','140 Cầu Giấy ','08089775945','3','2023-01-02 20:07:32'),(126,'Kasey1987','Estes@nowhere.com','123456','109 Định Công ','08086720106','2','2022-04-22 04:36:55'),(127,'Renato2024','vdtr7@gmail.com','123456','106 Khất Duy Tiến ','08088279258','Active','2022-01-01 00:01:05'),(128,'Genesis163','EstebanHaight@gmail.com','123456','247 Khất Duy Tiến ','08007921529','2','2023-10-27 02:45:50'),(129,'Spearman2016','MinSoares8@gmail.com','123456','242 Hoàng Mai ','08003482986','Active','2022-02-25 17:12:15'),(130,'Helene142','Dowd@gmail.com','123456','202 Khất Duy Tiến ','08085010642','Active','2024-03-05 09:58:23'),(131,'Violeta2015','Mcdermott344@gmail.com','123456','259 Trần Điền ','08009116594','2','2023-02-17 21:36:04'),(132,'Abbie2028','crvo71@nowhere.com','123456','115 Láng ','08089306201','Inactive','2022-07-05 13:50:25'),(133,'Noel2000','LeonardMercado@nowhere.com','123456','272 Hoàng Mai ','08009929179','Inactive','2023-08-30 16:06:43'),(134,'Anaya4','JewellFranco@nowhere.com','123456','21 Khất Duy Tiến ','08007898189','Inactive','2023-12-27 23:22:40'),(135,'Conception2023','AlanaRHilliard@gmail.com','123456','241 Hoàng Mai ','08001587158','Inactive','2023-07-23 10:43:31'),(136,'Elroy1993','AlexiaCathey@nowhere.com','123456','127 Định Công ','08082931391','Active','2024-10-04 15:19:19'),(137,'Michael1965','Calhoun@nowhere.com','123456','262 Trần Điền ','08000684207','Active','2023-04-26 07:26:31'),(138,'Regina2022','Nelson@nowhere.com','123456','16 Trần Điền ','08001520312','Active','2023-06-09 03:05:48'),(139,'Dayna2','MarkCJacobs867@gmail.com','123456','112 Khất Duy Tiến ','08089417245','Active','2022-11-19 07:21:25'),(140,'Refugio168','Clint.Clark@nowhere.com','123456','247 Ngã Tư Sở ','08003803025','2','2022-01-01 00:01:27'),(141,'Alda386','Adaline.B.Parent6@gmail.com','123456','101 Định Công ','08082466334','3','2022-01-01 00:08:19'),(142,'Zachariah261','Valle@gmail.com','123456','226 Khất Duy Tiến ','08001920668','Inactive','2022-01-01 00:06:20'),(143,'Fitch79','Hipolito.Cade529@gmail.com','123456','28 Cầu Giấy ','08002391387','Inactive','2024-10-05 13:37:31'),(144,'Greiner1973','Coffin576@gmail.com','123456','229 Khất Duy Tiến ','08083263633','2','2023-07-09 09:19:47'),(145,'Nicolas1957','ArturoAbney428@gmail.com','123456','112 Láng ','08086001480','2','2023-09-15 23:29:18'),(146,'Tomiko1994','Normand.Chisolm@nowhere.com','123456','140 Định Công ','08081006830','2','2022-01-01 00:01:01'),(147,'Sinclair2017','Dirk_UDalton462@gmail.com','123456','15 Trần Điền ','08089405748','3','2022-01-01 00:16:35'),(148,'Ethan971','MerleneHauser287@gmail.com','123456','274 Ngã Tư Sở ','08006631623','3','2024-03-12 12:20:06'),(149,'Ali2027','Luckett@nowhere.com','123456','164 Trần Điền ','08009195280','2','2022-09-20 18:00:44');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trgAfterInsertUser` AFTER INSERT ON `user` FOR EACH ROW BEGIN 
	INSERT INTO cart (UserID, CartStatus, CreatedDate) 
	VALUES (NEW.UserID, 1, NOW()); 
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `usercoupon`
--

DROP TABLE IF EXISTS `usercoupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usercoupon` (
  `UserCouponID` int NOT NULL AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `CouponID` int NOT NULL,
  `UsedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UserCouponStatus` int DEFAULT NULL,
  PRIMARY KEY (`UserCouponID`),
  KEY `UserID` (`UserID`),
  KEY `CouponID` (`CouponID`),
  CONSTRAINT `usercoupon_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usercoupon_ibfk_2` FOREIGN KEY (`CouponID`) REFERENCES `coupon` (`CouponID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usercoupon`
--

LOCK TABLES `usercoupon` WRITE;
/*!40000 ALTER TABLE `usercoupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `usercoupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userrole`
--

DROP TABLE IF EXISTS `userrole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userrole` (
  `UserRoleID` int NOT NULL AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `RoleID` int NOT NULL,
  `UserRoleStatus` int DEFAULT NULL,
  PRIMARY KEY (`UserRoleID`),
  KEY `UserID` (`UserID`),
  KEY `RoleID` (`RoleID`),
  CONSTRAINT `userrole_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userrole_ibfk_2` FOREIGN KEY (`RoleID`) REFERENCES `role` (`RoleID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userrole`
--

LOCK TABLES `userrole` WRITE;
/*!40000 ALTER TABLE `userrole` DISABLE KEYS */;
INSERT INTO `userrole` VALUES (1,100,100,1);
/*!40000 ALTER TABLE `userrole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `WishlistID` int NOT NULL AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `WishlistStatus` int DEFAULT NULL,
  PRIMARY KEY (`WishlistID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlistdetail`
--

DROP TABLE IF EXISTS `wishlistdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlistdetail` (
  `WishlistDetailID` int NOT NULL AUTO_INCREMENT,
  `WishlistID` int NOT NULL,
  `ProductID` int NOT NULL,
  `AddedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `WishlistDetailStatus` int DEFAULT NULL,
  PRIMARY KEY (`WishlistDetailID`),
  KEY `WishlistID` (`WishlistID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `wishlistdetail_ibfk_1` FOREIGN KEY (`WishlistID`) REFERENCES `wishlist` (`WishlistID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wishlistdetail_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlistdetail`
--

LOCK TABLES `wishlistdetail` WRITE;
/*!40000 ALTER TABLE `wishlistdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlistdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'databaseshoppc'
--

--
-- Dumping routines for database 'databaseshoppc'
--
/*!50003 DROP PROCEDURE IF EXISTS `Proc_AddToCart` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_AddToCart`(
    IN in_CartID INT,
    IN in_ProductID INT,
    IN in_Quantity INT
)
BEGIN
    DECLARE existing_detail_id INT;
    
    -- Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
    SELECT CartDetailID INTO existing_detail_id
    FROM cartdetail 
    WHERE CartID = in_CartID 
    AND ProductID = in_ProductID
    AND CartDetailStatus = 'Active';
    
    IF existing_detail_id IS NULL THEN
        -- Thêm mới sản phẩm vào giỏ hàng
        INSERT INTO cartdetail (CartID, ProductID, Quantity, CartDetailStatus)
        VALUES (in_CartID, in_ProductID, in_Quantity, 'Active');
    ELSE
        -- Cập nhật số lượng nếu sản phẩm đã tồn tại
        UPDATE cartdetail 
        SET Quantity = Quantity + in_Quantity
        WHERE CartDetailID = existing_detail_id;
    END IF;
    
    -- Trả về CartID
    SELECT in_CartID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_ClearCart` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_ClearCart`(
    IN in_CartID INT
)
BEGIN
    -- Update cart status
    UPDATE cart 
    SET CartStatus = 'Completed'
    WHERE CartID = in_CartID;
    
    -- Update cart detail status
    UPDATE cartdetail 
    SET CartDetailStatus = 'Completed'
    WHERE CartID = in_CartID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_CreateNewCart` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_CreateNewCart`(IN in_UserID INT)
BEGIN
    -- Update any existing active carts to 'Completed'
    UPDATE cart 
    SET CartStatus = 'Completed' 
    WHERE UserID = in_UserID 
    AND CartStatus = 'Active';
    
    -- Create new cart
    INSERT INTO cart (UserID, CartStatus, CreatedDate)
    VALUES (in_UserID, 'Active', NOW());
    
    -- Return new cart id
    SELECT LAST_INSERT_ID() AS CartID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_CreateOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_CreateOrder`(
    IN in_UserID INT,
    IN in_TotalAmount DECIMAL,
    IN in_PaymentMethodID INT,
    IN in_OrderKBN VARCHAR(20)
)
BEGIN
    INSERT INTO `order` (
        UserID, 
        OrderDate,
        TotalAmount,
        OrderStatus,
        PaymentMethodID,
        OrderKBN
    )
    VALUES (
        in_UserID,
        NOW(),
        in_TotalAmount,
        'Pending',
        in_PaymentMethodID,
        in_OrderKBN
    );
    SELECT LAST_INSERT_ID();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_CreateOrderDetail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_CreateOrderDetail`(
    IN in_OrderID INT,
    IN in_ProductID INT,
    IN in_Quantity INT,
    IN in_SalePrice DECIMAL
)
BEGIN
    INSERT INTO orderdetail (
        OrderID,
        ProductID,
        Quantity,
        SalePrice,
        OrderDetailStatus
    )
    VALUES (
        in_OrderID,
        in_ProductID,
        in_Quantity,
        in_SalePrice,
        'Active'
    );
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetAllBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetAllBrand`()
BEGIN
	SELECT * FROM brand;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetAllCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetAllCategory`()
BEGIN
	SELECT * FROM category;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetAllProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetAllProduct`()
BEGIN 
	SELECT * FROM Product;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetAllUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetAllUser`()
BEGIN
	SELECT UserID, Name, Email, Address, PhoneNumber, UserStatus FROM user;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetBrandByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetBrandByID`(IN in_BrandID int)
BEGIN
	SELECT * FROM brand WHERE BrandID = in_BrandID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetCartByUserID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetCartByUserID`(IN in_UserID INT)
BEGIN
    SELECT * FROM cart 
    WHERE UserID = in_UserID 
    AND CartStatus = 'Active'
    ORDER BY CreatedDate DESC
    LIMIT 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetCartDetailByCartID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetCartDetailByCartID`(IN in_CartID INT)
BEGIN
	SELECT * FROM CartDetial 
    WHERE CartID = in_CartID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetCartDetailByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetCartDetailByID`(IN in_CartDetailID INT)
BEGIN
	SELECT * FROM CartDetial 
    WHERE CartDetailID = in_CartDetailID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetCartDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetCartDetails`(IN in_CartID INT)
BEGIN
    SELECT 
        cd.CartDetailID,
        cd.CartID,
        cd.ProductID,
        cd.Quantity,
        p.ProductName,
        p.StockQuantity,
        p.Price,
        p.Image,
        (p.Price * cd.Quantity) as SubTotal
    FROM cartdetail cd
    JOIN product p ON cd.ProductID = p.ProductID
    WHERE cd.CartID = in_CartID 
    AND cd.CartDetailStatus = 'Active';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetCartTotal` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetCartTotal`(IN in_CartID INT)
BEGIN
    SELECT COALESCE(SUM(p.Price * cd.Quantity), 0) as TotalAmount
    FROM cartdetail cd
    JOIN product p ON cd.ProductID = p.ProductID
    WHERE cd.CartID = in_CartID 
    AND cd.CartDetailStatus = 'Active';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetCategoryByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetCategoryByID`(IN in_CategoryID INT)
BEGIN
	SELECT * FROM Category WHERE CategoryID = in_CategoryID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetOrderById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetOrderById`(
    IN in_OrderID INT
)
BEGIN
    SELECT 
        OrderID,
        UserID,
        OrderDate,
        TotalAmount,
        OrderStatus,
        PaymentMethodID,
        OrderKBN
    FROM `order`
    WHERE OrderID = in_OrderID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetOrderDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetOrderDetails`(
    IN in_OrderID INT
)
BEGIN
    SELECT 
        o.OrderID,
        o.UserID,
        o.OrderDate,
        o.TotalAmount,
        o.OrderStatus,
        o.PaymentMethodID,
        o.OrderKBN,
        p.ProductID,
        p.ProductName,
        p.Price,
        p.Image,
        od.Quantity,
        od.SalePrice
    FROM `order` o
    JOIN orderdetail od ON o.OrderID = od.OrderID
    JOIN product p ON od.ProductID = p.ProductID
    WHERE o.OrderID = in_OrderID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetOrdersByUserId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetOrdersByUserId`(
    IN in_UserID INT
)
BEGIN
    SELECT 
        o.*,
        u.Name as UserName
    FROM `order` o
    JOIN user u ON o.UserID = u.UserID
    WHERE o.UserID = in_UserID
    ORDER BY o.OrderDate DESC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetProductByBrandID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetProductByBrandID`(IN in_BrandID INT)
BEGIN
	SELECT * FROM product WHERE BrandID = in_BrandID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetProductByCategoryID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetProductByCategoryID`(IN in_CategoryID INT)
BEGIN
	SELECT * FROM product WHERE CategoryID = in_CategoryID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetProductByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetProductByID`(IN in_ProductID INT)
BEGIN
	SELECT * FROM product WHERE ProductID = in_ProductID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_GetUserByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_GetUserByID`(IN in_UserID int)
BEGIN
	SELECT UserID, Name, Email, Address, PhoneNumber, UserStatus FROM user WHERE UserID = in_UserID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_InsertBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_InsertBrand`(
	IN in_BrandID INT,
    IN in_BrandName varchar(255),
    IN in_BrandStatus INT
)
BEGIN
	INSERT INTO brand (BrandID, BrandName, BrandStatus)
    VALUES (in_BrandID, in_BrandName, in_BrandStatus);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_InsertCartDetail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_InsertCartDetail`(IN in_CartID INT, IN in_ProductID INT, IN in_Quantity INT, IN in_CartDetailStatus INT)
BEGIN
	INSERT INTO CartDetail (CartID, ProductID, Quantity, CartDetailStatus)
    VALUES (in_CartID, in_ProductID, in_Quantity, in_CartDetailStatus);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_InsertCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_InsertCategory`(
	IN in_CategoryID INT,
    IN in_CategoryName varchar(255),
    IN in_CategoryStatus INT
)
BEGIN
	INSERT INTO category (ategoryID, CategoryName, CategoryStatus)
    VALUES (in_CategoryID, in_CategoryName, in_CategoryStatus);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_InsertProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_InsertProduct`(IN in_ProductID INT, IN in_ProductName varchar(255), IN in_Description text, IN in_Price decimal(10,2),
 IN in_StockQuantity INT, IN in_CategoryID INT, IN in_BrandID INT, IN in_ProductStatus INT, IN in_Image text, IN in_Specifications json)
BEGIN
	INSERT INTO PRODUCT (ProductID, ProductName, Description, Price, StockQuantity, CategoryID, BrandID, ProductStatus, Image, Specifications) 
    VALUES (in_ProductID, in_ProductName, in_Description, in_Price, in_StockQuantity, in_CategoryID, in_BrandID, in_ProductStatus, in_Image, in_Specifications);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_InsertUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_InsertUser`(
IN in_UserID INT,
IN in_UserName varchar(255),
IN in_Email varchar(255),
IN in_Password varchar(255),
IN in_Address varchar(255),
IN in_PhoneNumber varchar(20),
IN in_UserStatus INT,
IN in_RegistrationDate Datetime)
BEGIN
	INSERT INTO user (UserID, UserName, Email, Password, Address, PhoneNumber, UserStatus, RegistrationDate)
    VALUES (in_UserID, in_UserName, in_Email, in_Password, in_Address, in_PhoneNumber, in_UserStatus, in_RegistrationDate);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_Login` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_Login`(IN in_Email TEXT, IN in_Password TEXT)
BEGIN
	SELECT UserID, Name, Email FROM User WHERE Email = in_Email AND Password = in_Password;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_RemoveFromCart` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_RemoveFromCart`(
    IN in_CartDetailID INT
)
BEGIN
    UPDATE cartdetail 
    SET CartDetailStatus = 'Deleted'
    WHERE CartDetailID = in_CartDetailID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_UpdateBrand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_UpdateBrand`(
	IN in_BrandID INT,
    IN in_BrandName varchar(255),
    IN in_BrandStatus INT
)
BEGIN
	UPDATE brand
    SET
		BrandName = in_BrandName,
        BrandStatus = in_BrandStatus
	WHERE BrandID = in_BrandID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_UpdateCartDetail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_UpdateCartDetail`(
IN in_ProductID INT, 
IN in_Quantity INT, 
IN in_CartDetailStatus INT
)
BEGIN
	UPDATE CartDetail
    SET Quantity = in_Quantity,
		ProductID = in_in_ProductID,
		CartDetailStatus = in_CartDetailStatus
    WHERE CartDetailID = in_CartDetailID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_UpdateCartQuantity` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_UpdateCartQuantity`(
    IN in_CartDetailID INT,
    IN in_Quantity INT
)
BEGIN
    UPDATE cartdetail 
    SET Quantity = in_Quantity
    WHERE CartDetailID = in_CartDetailID
    AND CartDetailStatus = 'Active';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_UpdateCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_UpdateCategory`(
	IN in_CategoryID INT,
    IN in_CategoryName varchar(255),
    IN in_CategoryStatus INT
)
BEGIN
	UPDATE category
    SET
		CategoryName = in_CategoryName,
        CategoryStatus = in_CategoryStatus
	WHERE CategoryID = in_CategoryID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_UpdateProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_UpdateProduct`(IN in_ProductID INT, IN in_ProductName varchar(255), IN in_Description text, IN in_Price decimal(10,2),
 IN in_StockQuantity INT, IN in_CategoryID INT, IN in_BrandID INT, IN in_ProductStatus INT, IN in_Image text, IN in_Specifications json)
BEGIN
	UPDATE PRODUCT
    SET 
		ProductName = in_ProductName, 
        Description = in_Description, 
        Price = in_Price, 
        StockQuantity = in_StockQuantity, 
        CategoryID = in_CategoryID, 
        BrandID = in_BrandID, 
        ProductStatus = in_ProductStatus,
        Image = in_Image,
        Specifications = in_Specifications
        
	WHERE ProductID = in_ProductID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Proc_UpdateUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Proc_UpdateUser`(
IN in_UserID INT,
IN in_Name varchar(255),
IN in_Email varchar(255),
IN in_Address varchar(255),
IN in_PhoneNumber varchar(20),
IN in_UserStatus varchar(20))
BEGIN
	UPDATE user
    SET
		
        
        Name= in_Name,
        Email = in_Email,
		Address = in_Address,
		PhoneNumber = in_PhoneNumber,
		UserStatus = in_UserStatus
	WHERE UserID = in_UserID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-22 22:17:41
