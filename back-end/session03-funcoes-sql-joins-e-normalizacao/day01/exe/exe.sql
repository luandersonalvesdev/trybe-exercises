SELECT * FROM hr.employees;
SET SQL_SAFE_UPDATES = 0;
-- ------------------------------ 1
SELECT first_name, last_name, MAX(employees.salary) FROM hr.employees;
-- ------------------------------ 2
SELECT MAX(employees.salary) - MIN(employees.salary) AS diferenca
FROM hr.employees;
-- ------------------------------ 3
SELECT job_id, AVG(salary) AS media
FROM hr.employees
GROUP BY job_id
ORDER BY media DESC;
-- ------------------------------ 4
SELECT SUM(salary)
FROM hr.employees;
-- ------------------------------ 5
SELECT
	ROUND(MAX(salary), 2) AS maior,
	ROUND(MIN(salary), 2) AS menor,
	ROUND(SUM(salary), 2) AS soma,
	ROUND(AVG(salary), 2) AS media
FROM
	hr.employees;
-- ------------------------------ 6
SELECT job_id, COUNT(*) 
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';
-- ------------------------------ 7
SELECT job_id, SUM(salary) AS total
FROM hr.employees
GROUP BY job_id;
-- ------------------------------ 8
SELECT job_id, SUM(salary) AS total
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';
-- ------------------------------ 9
SELECT job_id, ROUND(AVG(salary), 2) AS media
FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY media DESC;
-- ------------------------------ 10
SELECT department_id, AVG(salary) AS media, COUNT(*) AS total_employees
FROM hr.employees
GROUP BY department_id
HAVING total_employees > 10;
-- ------------------------------ 11
UPDATE hr.employees
SET phone_number= REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
-- ------------------------------ 12
SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8;
-- ------------------------------ 13
SELECT employee_id, CONCAT(first_name, ' ', last_name) AS full_name, YEAR(hire_date)
FROM hr.employees;
-- ------------------------------ 14
SELECT employee_id, CONCAT(first_name, ' ', last_name) AS full_name, DAY(hire_date)
FROM hr.employees;
-- ------------------------------ 15
SELECT employee_id, CONCAT(first_name, ' ', last_name) AS full_name, MONTH(hire_date)
FROM hr.employees;
-- ------------------------------ 16
SELECT UCASE(CONCAT(first_name, ' ', last_name)) AS full_name FROM hr.employees;
-- ------------------------------ 17
SELECT last_name, hire_date
FROM hr.employees
WHERE hire_date LIKE '1987-07%';
-- ------------------------------ 18
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) 
FROM hr.employees;