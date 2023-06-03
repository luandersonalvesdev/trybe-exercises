-- ------------------------------ 1
SELECT active, COUNT(*) AS qtd FROM sakila.customer
GROUP BY active;
-- ------------------------------ 2
SELECT store_id, active, COUNT(active) FROM sakila.customer
GROUP BY store_id, active
ORDER BY store_id;
-- ------------------------------ 3
SELECT rating, AVG(rental_duration) AS media FROM sakila.film
GROUP BY rating
ORDER BY media DESC;
-- ------------------------------ 4
SELECT district, COUNT(*) AS qtd FROM sakila.address
GROUP BY district
ORDER BY qtd DESC;
-- ------------------------------ PRA FIXAR
-- ------------------------------ 1
SELECT rating, AVG(length) media
FROM sakila.film
GROUP BY rating
HAVING media >= 115.0 AND media <= 121.50
ORDER BY media DESC;
-- ------------------------------ 2
SELECT rating, SUM(replacement_cost) total_coast
FROM sakila.film
GROUP by rating
HAVING total_coast > 3950.50
ORDER BY total_coast ASC;