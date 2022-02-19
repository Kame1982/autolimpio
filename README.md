SOLUCION

Se crea pagina de servicio autolimpio que incluye:

pagina principal
pagina presentacion compañia
pagina de servicios "normales"
Pagina de login Premiun
Pagina escoge a tu chica
pagina de login admin
pagina de resumen de datos admin

PROBLEMA

autolimpio

Una empresa de lavado de autos llamada AutoLimpio, requiere un sistema que permita la creación de Órdenes de Trabajo de los servicios que presta la empresa. Este documento considera:

    El registro de cliente.
    Datos del vehículo.
    Totalizar los valores de los servicios que se entregan en el local y
    Quien estuvo a cargo de realizar dichos servicios.

Posterior a la toma de requerimientos, se requiere los siguientes ítems a desarrollar:

I. Estructura HTML

    Los datos que se requieren registrar de los clientes son:

a) Rut. b) Digito verificador. c) Nombre. d) Apellido. e) Dirección. f) Comuna. (mostrar 5 comunas solamente).

    Los datos del vehículo son:

a) Tipo de Vehículo (furgón, automóvil, camión, camioneta y moto). b) Marca c) Modelo d) Año e) Revisión técnica al día.

    En la actualidad se consideran 2 tipos de servicios:

a) Lavado exterior con un valor de $7000. y b) Lavado de motor con un valor de $5000.

Se pide que se pueda seleccionar, uno o ambos.

    El encargado de prestar los servicios, estarán en una lista desplegable, donde el usuario lo seleccionará para luego registrar la fecha y hora de terminado de los servicios.

II. Diseño.

    El diseño debe ser original y atractivo, dado que la página representará a la empresa frente a sus clientes. Puede ocupar todos los recursos que considere pertinente para la creación de esta.

    La página a construir, deberá adaptarse tanto a PC de escritorio como para Tablet y Celular, debido a que los encargados utilizan estos dispositivos dentro de la empresa.

III. Validaciones de caracteres y longitud.

    Validar los datos requeridos para registrar los clientes:

    Rut : Solo números 8 dígitos.
    Digito verificador : Números, k y K. 1 dígito.
    Nombre : Solo letras. 30 dígitos.
    Apellido : Solo letras. 30 dígitos.
    Dirección : Letras, números y espacios. 80 dígitos.
    Comuna : OMITIR.

    Para los vehículos son:

a) Tipo de Vehículo (furgón, automóvil, camión, camioneta y moto) : OMITIR. b) Marca : Solo letras 20 dígitos. c) Modelo : Solo letras. 20 dígitos. d) Año : Solo números. 4 dígitos. e) Revisión técnica al día : OMITIR.

    Para los servicios, considerar que los datos son en neto.

IV. Calculo total de servicios.

    Calcular el total a pagar CON impuesto (19%), de los servicios realizados al automóvil del cliente y enviar un mensaje señalando el nombre del cliente junto con el total a pagar. Utilizar un botón para realizar el cálculo.
