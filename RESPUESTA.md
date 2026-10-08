1. ¿Por qué Encabezado se actualiza cuando agregas un producto, si no recibe ninguna prop?
2. ¿Qué tendrías que hacer para lograr lo mismo usando solo useState en App?
3. ¿Para qué sirve el selector (state) => state.items al usar el hook?
4. ¿Por qué en el store se crean arreglos nuevos con map y filter en lugar de modificar items
directamente?
5. ¿Zustand es parte de React? Explica la diferencia entre una librería propia de React y una del
ecosistema.

SOLUCION

1. Por que automaticamente react renderiza los productos que deriban de su componente padre y de ese estado en especifico de ese encabezado 
2. tendria que reemplazar cualquier otro sistema de manejo de estado declarando las variables de estado directamente en el componente principal
3. Sirve para selecionar los diferentes objetos de javascript que tienes en arreglos, extraer y obtener una porción específica del estado global de estos mismos, dejando una suscripcion precisa, un filtrado de datos eficiente y optimizacion buena
4. Porque detecta de mejor manera los cambis exixtentes en el map y filter para saber que hay un nuevo espacio en memoria, actualizando la patalla y dejando un estado inmutable que cambia mediante acciones claras para que sea mas sencillo identificar el bug
5. Zustand es una creacion de codigo abierto, lo que significa que diferentes desarolladores independientes colaboran para desarrollar esta libreria, necesitando descargas dependencias mediante npm y por lo tanto, utilizando el ecosistema de react sin ser un paquete oficial
Mientras de react si es una libreria oficial de meta que utiliza en entorno por defecto de descarga y no necesita comandos para instalarse, siendo el mismo ecosistema react del que dependen alguna librerias