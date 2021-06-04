# Documentación de los servicios para el registro de formulario
# Indice
## 1 Datos del Servidor
## 2 Registro Formulario
-----
## Servicios 

### 1- Datos del Servidor
    Servidor: https://backend-registro-formulario.herokuapp.com/
    PREFIJO: api-backend-prueba

### 2- Registro formulario

### Ruta: /registroForm
>#### Registrar Datos del formulario
    Methodo POST - Ruta: /crear-registro 
>#### Datos recibidos
    (200)
    {
        "registro": {
            "_id": "60b704cb915bc54cf0378df2",
            "campo1": "datopostman",
            "campo2": "datodospostman",
            "__v": 0
        }
    }
>#### Obtener Registros
    Metodo GET - Ruta: /obtener-registros
>#### Datos Obtenidos
    (200)
    {
        "registros": [
            {
                "_id": "60ad3bdd68532f235cbcf275",
                "campo1": "hola1",
                "campo2": "hola2",
                "__v": 0
            },
            {
                "_id": "60ad3c122f059c1cb8848344",
                "campo1": "chao1",
                "campo2": "chao2",
                "__v": 0
            },
        ]
    }