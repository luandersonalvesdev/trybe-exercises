-- ------------------ PRA FIXAR
-- ------------------ 1
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT 
	f.actor_id, a.first_name, a.last_name, f.film_id
FROM 
	sakila.actor AS a
JOIN
	sakila.film_actor AS f
ON
	a.actor_id = f.actor_id;
-- ------------------ 2
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT 
	s.first_name, s.last_name, a.address_id, a.address
FROM 
	sakila.staff AS s
JOIN
	sakila.address AS a
ON
	s.address_id = a.address_id;
-- ------------------ 3
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM sakila.customer AS c
JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;
-- ------------------ 4
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.first_name, c.email, a.address_id, a.address, a.district
FROM sakila.customer AS c
JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.first_name LIKE '%rene%'
AND a.district = 'california';
-- ------------------ 5
SELECT * FROM sakila.customer;
SELECT * FROM sakila.rental;

SELECT c.customer_id, c.first_name, c.last_name, COUNT(r.rental_id) AS vezes
FROM sakila.customer AS c
JOIN sakila.rental AS r
ON c.customer_id = r.customer_id
WHERE c.active = 1
GROUP BY c.first_name, c.last_name
ORDER BY c.first_name DESC, c.last_name DESC
;
-- ------------------ 6
SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT s.first_name, s.last_name, ROUND(AVG(p.amount), 2) AS media
FROM sakila.staff AS s
JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = '2006'
GROUP BY s.first_name, s.last_name;
-- ------------------ 7
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film;

SELECT act.actor_id, act.first_name, f.film_id, f.title
FROM sakila.actor AS act
JOIN sakila.film_actor AS fact ON act.actor_id = fact.actor_id
JOIN sakila.film AS f ON f.film_id = fact.film_id;