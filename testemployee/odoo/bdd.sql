/* Crerate tables */
CREATE TABLE USERS(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    user_address VARCHAR(250) NOT NULL,
    id_city INT UNSIGNED NOT NULL 
);
    /* created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  */

CREATE TABLE CITIES(
    id_city INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(250) NOT NULL
);

/* Create FK */
ALTER TABLE USER
ADD CONSTRAINT FK_CITY
FOREIGN KEY (id_city) REFERENCES CITIES(id_city);


/* UPDATE TABLES */




/* Queries */

SELECT c.id_city,c.city_name, count(*) as population_city from users as U 
INNER JOIN cities AS C 
on C.id_city = U.id_city 
GROUP by C.city_name asc;


SELECT E.name, E.last_name, SUM(E.amount) AS total_amount from Employee as E
INNER JOIN payment as P
ON E.id_employee = P.id_employee AND P.date LIKE '2019-03'
GROUP by E.name, E.last_name;


/* Number of actors in a movie grouped by movie title*/
SELECT F.title, count(FA.id_actor) from film_actor as FA
INNER JOIN film as F 
ON F.id_film = FM.id_film
GROUP BY F.title asc; 

/* Total payment of a customer and lited alpheticaly */
SELECT C.first_name, C.last_name, sum(C.amount) as total_amount FROM customer as C
INNER JOIN payment AS P
ON C.id_customer = P.id_customer
ORDER BY C.last_name;


SELECT c.id_city,c.city_name, count(*) as population_city from users as U 
INNER JOIN cities AS C 
on C.id_city = U.id_city 
GROUP by C.city_name HAVING population_city > 3;


SELECT agent_code, COUNT(agent_code) 
FROM orders  GROUP BY agent_code 
HAVING COUNT (agent_code)=( 
    SELECT MAX(mycount) 
    FROM ( 
    SELECT agent_code, COUNT(agent_code) mycount 
    FROM orders 
    GROUP BY agent_code)
);

DELIMITER $$

CREATE TRIGGER trigger1
BEFORE INSERT
ON table1
FOR EACH ROW
BEGIN
  SELECT COUNT(*) INTO @cnt FROM table1;
  IF @cnt >= 25 THEN
    CALL sth(); -- raise an error
  END IF;
END
$$

DELIMITER ;