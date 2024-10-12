-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Guests'
--
-- ---

DROP TABLE IF EXISTS `Guests`;

CREATE TABLE `Guests` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `registered` TINYINT NULL DEFAULT 0,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `plusOne` INT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Guests` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Guests` (`id`,`name`,`registered`,`email`) VALUES
-- ('','','','');