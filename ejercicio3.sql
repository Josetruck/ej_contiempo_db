#DROP DATABASE ej_contiempo;
CREATE DATABASE ej_contiempo;
USE ej_contiempo;

create table clientes (
	id int auto_increment, 
    email varchar(200), 
    privilegios varchar(20),
    primary key(id)
);

DELIMITER //
CREATE PROCEDURE registro (IN email varchar(200), IN privilegios varchar (20))
BEGIN
INSERT INTO clientes VALUES (null, email, privilegios);
END //
DELIMITER ;
CALL registro('davinia@thebridgeschool.es', 'root')