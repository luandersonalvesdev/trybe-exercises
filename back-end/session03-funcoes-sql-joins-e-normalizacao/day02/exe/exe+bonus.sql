SELECT * FROM pixar.box_office;
SELECT * FROM pixar.movies;
SELECT * FROM pixar.theater;
-- ------------------------------- 1
SELECT m.id, m.title, b.movie_id, b.domestic_sales, b.international_sales
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
ON m.id = b.movie_id;
-- ------------------------------- 2
SELECT m.id, m.title, b.movie_id, b.domestic_sales, b.international_sales
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;
-- ------------------------------- 3
SELECT m.title, b.rating
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
ON m.id = b.movie_id
ORDER BY b.rating DESC;
-- ------------------------------- 4
SELECT t.name, t.location, m.title
FROM pixar.theater AS t
LEFT JOIN pixar.movies AS m
ON t.id = m.theater_id
ORDER BY t.name;
-- ------------------------------- 5
SELECT t.name, t.location, m.title
FROM pixar.theater AS t
RIGHT JOIN pixar.movies AS m
ON t.id = m.theater_id
ORDER BY t.name;
-- ------------------------------- 6: BONUS
SELECT m.*, b.rating
FROM pixar.movies AS m
INNER JOIN pixar.theater AS t ON m.theater_id = t.id
INNER JOIN pixar.box_office AS b ON m.id = b.movie_id
WHERE b.rating > 8;