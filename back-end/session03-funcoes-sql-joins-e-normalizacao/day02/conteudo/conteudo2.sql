SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.manager_id = Manager.employee_id;
-- ----------------------------- 1
SELECT * FROM hr.employees;

SELECT 
	CONCAT(e.first_name, ' ', e.last_name) AS 'empregado',
	CONCAT(m.first_name, ' ', m.last_name) AS 'gerente'
FROM 
	hr.employees AS e
INNER JOIN
	hr.employees AS m
ON
	e.manager_id = m.employee_id
WHERE
	e.department_id <> m.department_id;
-- ---------------------- 2
SELECT
	CONCAT(m.first_name, ' ', m.last_name) AS 'gerente',
	COUNT(*) AS 'qtd empregado'
FROM 
	hr.employees AS e
INNER JOIN
	hr.employees AS m
ON
	e.manager_id = m.employee_id
GROUP BY
	gerente;