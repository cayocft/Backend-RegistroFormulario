# Documentación de los servicios para el registro de formulario
# Indice
## 1 Datos del Servidor
## 2 Registro Formulario
-----
## Servicios 

### 1- Datos del Servidor
    Servidor: https://backend-registroformulario.onrender.com
    PREFIJO: /api-backend-prueba
    
###NOTA

```
Si da error de cors, ERR Certificado... Quitar la "s" al https. Quedando:
Servidor: http://api-backend-prueba.edgardocayo.cl/
PREFIJO: api-backend-prueba
```

### 2- Registro formulario

### Ruta: /registroForm
>#### Registrar Datos del formulario
    Methodo POST - Ruta: /crear-registro 
>#### Datos recibidos
    
    campo1: "valor del campo"
    campo2: "valor del campo"
    
>#### Respuesta
    (200)
        {
            "registro": {
                "_id": "60b704cb915bc54cf0378df2",
                "campo1": "datopostman",
                "campo2": "datodospostman",
                "__v": 0
            }
        }
### 3- Obtener Registros
### Ruta: /registroForm
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

### 4- Eliminar Datos del Registrado por ID
### Ruta: /registroForm
    Methodo DELETE - Ruta: /eliminar-registro/:id_registroForms
>#### Datos recibidos por URL
    id_registroForms 
>#### ejemplo
    /registroForm/eliminar-registro/60ad3c122f059c1cb8848344
>#### Respuesta del servidor
    {
        "registroForms": {
            "n": 1,
            "opTime": {
                "ts": "7035314378270310406",
                "t": 24
            },
            "electionId": "7fffffff0000000000000018",
            "ok": 1,
            "$clusterTime": {
                "clusterTime": "7035314378270310406",
                "signature": {
                    "hash": "1HPUrwcHTW4KCNspN2vmdmC/eB0=",
                    "keyId": "6995993948380463105"
                }
            },
            "operationTime": "7035314378270310406",
            "deletedCount": 1
        }
    }

>#### Respuesta del servidor: Registro no existe
    {
        "registroForms": "registro no existe o ya fué eliminado"
    }
>#### ERROR: Respuesta del servidor
    (500)
    {error()}

### 5- Eliminar Todos Los Datos registrado
### Ruta: /registroForm
    Methodo DELETE - Ruta: /eliminar-todo-registro
>#### No recibe datos
>#### Respuesta del servidor
    (200)
    {
    "registroForms": {
        "n": 270,
        "opTime": {
            "ts": "7035321602405302542",
            "t": 24
        },
        "electionId": "7fffffff0000000000000018",
        "ok": 1,
        "$clusterTime": {
            "clusterTime": "7035321602405302542",
            "signature": {
                "hash": "RrooIrAFzgMBXBtvDPqHz8bydic=",
                "keyId": "6995993948380463105"
            }
        },
        "operationTime": "7035321602405302542",
        "deletedCount": 270
    }
}

>#### Respuesta del servidor: No existen registro en la DB
    (200)
    {
        "registroForms": "La base de datos ya esta vacia"
    }

>#### ERROR: Respuesta del servidor
    (500)
        {error()}

### 6- Crear Usuario
### Ruta: /usuario
    Methodo POST - Ruta: /crear-usuario
### Datos recibidos
    
    "rut": "1111111-1"
    "nombre": "juanito"
    "apellido": "ruiz"
    "correo": "juanirto@gmail.com"
    "password": "pas1234"
### Respuesta del servidor
    (200)
    "usuario": {
        "rut": "1111111-1",
        "_id": "61a28dc7f16b5e093496c3ef",
        "nombre": "juanito",
        "apellido": "ruiz",
        "correo": "juanirto@gmail.com",
        "password": "$2b$10$nQ0pr4Yrjpqx6q5gZ3l/K.fnN7MtNm/2jhh4y22GlDr1SuVzh/KsO",
        "__v": 0
    }
### 7- Obtener Usuarios
### Ruta: /usuario
    Methodo GET - Ruta: /obtener-usuarios

### Datos recibidos
    No recibe datos
### Datos Obtenidos
    (200)
    "usuarios": [
        {
            "rut": "111111-1",
            "_id": "60aee75a3230560015e8c085",
            "nombre": "Mario",
            "apellido": "Lopez",
            "correo": "mario@gmail.com",
            "password": "$2b$10$zaSg/SaBEym22Nk8Yw/Pfug7dlL/qu8JGiQs//5EWcWZyZNx5X25C",
            "__v": 0
        },
        {
            "rut": "111111111-1",
            "_id": "60aef3fecde6252dd8410f3a",
            "nombre": "Juanito",
            "apellido": "Cald",
            "correo": "juan@gmail.com",
            "password": "$2b$10$H2OhlpDOBnK3GoR9Vfcqeu4qbuX8q6iE0okT3H91MZhE2sNglNSC.",
            "__v": 0
        },

### 8- Eliminar Usuario
### Ruta: /usuario
    Methodo DELETE - Ruta: /eliminar-usuario/:id_usuario

### Ejemplo: /registroForm
    /usuario/eliminar-usuario/61a28dc7f16b5e093496c3ef

### Datos recibidos por URL
    id_usuario
#### Respuesta del servidor

    "registroForms": {
            "n": 1,
            "opTime": {
                "ts": "7035780103049052175",
                "t": 24
            },
            "electionId": "7fffffff0000000000000018",
            "ok": 1,
            "$clusterTime": {
                "clusterTime": "7035780103049052175",
                "signature": {
                    "hash": "UFJvIgJjhJEZdbcuH0qNPHPRpzw=",
                    "keyId": "6995993948380463105"
                }
            },
            "operationTime": "7035780103049052175",
            "deletedCount": 1
        }

### 9- Eliminar Todos Los Usuarios
### Ruta: /usuario
    Methodo DELETE - Ruta: /eliminar-todo-registro
>#### No recibe datos
>#### Respuesta del servidor

    "registroForms": {
            "n": 75,
            "opTime": {
                "ts": "7035780300617547864",
                "t": 24
            },
            "electionId": "7fffffff0000000000000018",
            "ok": 1,
            "$clusterTime": {
                "clusterTime": "7035780300617547864",
                "signature": {
                    "hash": "B9us7iKwXV19dp+MtrvwAkzjJaA=",
                    "keyId": "6995993948380463105"
                }
            },
            "operationTime": "7035780300617547864",
            "deletedCount": 75
        }
