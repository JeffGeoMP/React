SELECT * FROM Libro;
SELECT * FROM Vendedor;
SELECT * FROM Venta;

INSERT INTO Libro (Nombre, Cantidad, Precio, Autor, Fecha, Genero)
VALUES  ('Los Juegos del Hambre', 10, 199.99, 'Suzanne Collins', STR_TO_DATE('14/09/2008', '%d/%m/%Y'), 'Ciencia Ficcion'),
        ('Divergente', 25, 99.99, 'Suzanne Collins', STR_TO_DATE('19/08/2010', '%d/%m/%Y'), 'Ciencia Ficcion'),
        ('El Huesped', 25, 260.45, 'Kendy Madness', STR_TO_DATE('13/02/2021', '%d/%m/%Y'), 'Juvenil'),
        ('Trono Destrozado', 60, 215, 'Victoria Aveyard', STR_TO_DATE('11/06/2017', '%d/%m/%Y'), 'Juvenil');

INSERT INTO Vendedor (DPI, Nombre, Apellido, Direccion, Telefono)
VALUES 	(2990209830101, 'Jefferson Geovanny', 'Moreno Perez', 'Ciudad Guatemala', '45217382'),
		(2548384810101, 'William Enrique', 'Can Poron', 'Chimaltenango', '59589992'),
        (2899135410301, 'Sergio Ribelino', 'Perez Rivera', 'Ciudad', '36962305'),
        (5468431840101, 'Jonatan Daniel', 'Chavarria Gonzales', 'Antigua', '54164100');

INSERT INTO Venta (Fecha, Cantidad, Total, ID_LIBRO, ID_VENDEDOR)
VALUES 	(STR_TO_DATE('06/05/2021', '%d/%m/%Y'), 1, 25.99, 1, 1),
		(STR_TO_DATE('06/05/2021', '%d/%m/%Y'), 1, 25.99, 2, 2),
        (STR_TO_DATE('06/05/2021', '%d/%m/%Y'), 1, 25.99, 3, 3),
        (STR_TO_DATE('06/05/2021', '%d/%m/%Y'), 1, 25.99, 4, 4),
        (STR_TO_DATE('06/05/2021', '%d/%m/%Y'), 1, 25.99, 3, 2),
        (STR_TO_DATE('06/05/2021', '%d/%m/%Y'), 1, 25.99, 2, 1),
        (STR_TO_DATE('06/05/2021', '%d/%m/%Y'), 1, 25.99, 1, 1),
        (STR_TO_DATE('06/05/2021', '%d/%m/%Y'), 1, 25.99, 4, 3),
        (STR_TO_DATE('06/05/2021', '%d/%m/%Y'), 1, 25.99, 3, 2),
        (STR_TO_DATE('06/05/2021', '%d/%m/%Y'), 1, 25.99, 4, 4);