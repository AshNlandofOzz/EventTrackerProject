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
-- Table `person`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `person` ;

CREATE TABLE IF NOT EXISTS `person` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_of_birth` VARCHAR(500) NULL,
  `sex` VARCHAR(500) NULL,
  `allergies` VARCHAR(500) NULL,
  `med_history` VARCHAR(500) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bowel_movement`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bowel_movement` ;

CREATE TABLE IF NOT EXISTS `bowel_movement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(500) NULL,
  `consistency` VARCHAR(500) NULL,
  `person_id` INT NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bowel_movement_person_idx` (`person_id` ASC),
  CONSTRAINT `fk_bowel_movement_person`
    FOREIGN KEY (`person_id`)
    REFERENCES `person` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `health_resources`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `health_resources` ;

CREATE TABLE IF NOT EXISTS `health_resources` (
  `id` INT NOT NULL,
  `webpage_url` VARCHAR(500) NULL,
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
-- Data for table `person`
-- -----------------------------------------------------
START TRANSACTION;
USE `BMtrackerdb`;
INSERT INTO `person` (`id`, `date_of_birth`, `sex`, `allergies`, `med_history`) VALUES (1, '03-05-2018', 'female', 'none', 'none');
INSERT INTO `person` (`id`, `date_of_birth`, `sex`, `allergies`, `med_history`) VALUES (2, '10-10-2017', 'male', 'peanuts', 'none');
INSERT INTO `person` (`id`, `date_of_birth`, `sex`, `allergies`, `med_history`) VALUES (3, '05-05-1945', 'female', 'none', 'see medical record. important- siliac disease.');
INSERT INTO `person` (`id`, `date_of_birth`, `sex`, `allergies`, `med_history`) VALUES (4, '08-22-2020', 'male', 'nuts', 'lactose intolerance');

COMMIT;


-- -----------------------------------------------------
-- Data for table `bowel_movement`
-- -----------------------------------------------------
START TRANSACTION;
USE `BMtrackerdb`;
INSERT INTO `bowel_movement` (`id`, `color`, `consistency`, `person_id`, `date`) VALUES (1, 'dark brown', 'firm', 1, '10-21-2022');
INSERT INTO `bowel_movement` (`id`, `color`, `consistency`, `person_id`, `date`) VALUES (2, 'healthy', NULL, 1, '10-23-2022');
INSERT INTO `bowel_movement` (`id`, `color`, `consistency`, `person_id`, `date`) VALUES (3, 'healthy', NULL, 1, '10-24-2022');
INSERT INTO `bowel_movement` (`id`, `color`, `consistency`, `person_id`, `date`) VALUES (4, 'light brown', 'runny', 1, '10-24-2022');
INSERT INTO `bowel_movement` (`id`, `color`, `consistency`, `person_id`, `date`) VALUES (5, NULL, NULL, 2, '11/01/2022');
INSERT INTO `bowel_movement` (`id`, `color`, `consistency`, `person_id`, `date`) VALUES (6, NULL, NULL, 2, '11/05/2022');
INSERT INTO `bowel_movement` (`id`, `color`, `consistency`, `person_id`, `date`) VALUES (7, NULL, NULL, 3, '11/07/2022');
INSERT INTO `bowel_movement` (`id`, `color`, `consistency`, `person_id`, `date`) VALUES (8, NULL, NULL, 3, '11/09/2022');

COMMIT;


-- -----------------------------------------------------
-- Data for table `health_resources`
-- -----------------------------------------------------
START TRANSACTION;
USE `BMtrackerdb`;
INSERT INTO `health_resources` (`id`, `webpage_url`) VALUES (1, 'https://www.mayoclinic.org/diseases-conditions/constipation-in-children/symptoms-causes/syc-20354242');
INSERT INTO `health_resources` (`id`, `webpage_url`) VALUES (2, 'https://www.webmd.com/digestive-disorders/celiac-disease/celiac-disease-symptoms');

COMMIT;

