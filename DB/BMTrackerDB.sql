-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema BMtrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `BMtrackerdb` ;

-- -----------------------------------------------------
-- Schema BMtrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `BMtrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `BMtrackerdb` ;

-- -----------------------------------------------------
-- Table `bowel_movement`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bowel_movement` ;

CREATE TABLE IF NOT EXISTS `bowel_movement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(500) NULL,
  `consistency` VARCHAR(500) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS mother@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'mother'@'localhost' IDENTIFIED BY 'mother';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'mother'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `bowel_movement`
-- -----------------------------------------------------
START TRANSACTION;
USE `BMtrackerdb`;
INSERT INTO `bowel_movement` (`id`, `color`, `consistency`) VALUES (1, 'dark brown', 'firm');

COMMIT;

