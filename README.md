# Documentación de los servicios para el registro de formulario
# Indice
## 1 Datos del Servidor
## 2 Registro Formulario
## 3 Usuarios
## 4 Profesionales Servicio Técnico
## 5 Solicitud Formulario 
## 6 Servicios de la Empresa 
## 7 Dato de Empresa
-----
## Servicios 

### 1- Datos del Servidor
    Servidor: https://backend-registroformulario.onrender.com
    PREFIJO: /api-backend-prueba
    
### NOTA

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
    
>#### Respuesta del servidor
    (200)
        {
            "registro": {
                "_id": "60b704cb915bc54cf0378df2",
                "campo1": "datopostman",
                "campo2": "datodospostman",
                "__v": 0
            }
        }
### Obtener Registros
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

### Eliminar Datos del Registrado por ID
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

### Eliminar Todos Los Datos registrado
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

### 4- Usuarios 
### Ruta: /usuario
>#### Registrar Usuario
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
### Obtener Usuarios
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

### Eliminar Usuario
### Ruta: /registroForm
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

### Eliminar Todos Los Usuarios
### Ruta: /registroForm
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

### 4- Profesionales Servicio Técnico

### Ruta: /profesional
>#### Registrar Datos del Profesional
    Methodo POST - Ruta: /crear-profesional
>#### Datos recibidos (JSON)
    
    "profesional": {
        "nombre":"Benito",
        "apellido":"LOpez",
        "correo":"benito@gmail.com",
        "profesión":"Inofrmatico PC",
        "telefono":"8765787778"
    }

>#### Respuesta del servidor
    (200)
        {
            "profesional": {
                "_id": "67472f49e8003c0dbb1e297a",
                "nombre": "Benito",
                "apellido": "LOpez",
                "correo": "benito@gmail.com",
                "telefono": "8765787778",
                "__v": 0
            }
        }

### Obtener Profesionales
### Ruta: /profesional
    Metodo GET - Ruta: /obtener-profesionales

>#### Respuesta
    (200)
    {
        "profesionales": [
            {
                "_id": "67472f49e8003c0dbb1e297a",
                "nombre": "Benito",
                "apellido": "LOpez",
                "correo": "benito@gmail.com",
                "telefono": "8765787778",
                "__v": 0
            },
            {
                "_id": "674716cd5a17930bd9841679",
                "nombre": "Benito",
                "apellido": "LOpez",
                "correo": "benito@gmail.com",
                "telefono": "8765787778",
                "__v": 0
            },
            {
                "_id": "673e782a4ed80a0a319f71ab",
                "nombre": "Juanito",
                "apellido": "marambio",
                "correo": "juanito@gmail.com",
                "telefono": "8765787778",
                "__v": 0
            }
        ]
    }

### Obtener Profesional por ID
### Ruta: /profesional
    Methodo GET - Ruta: /obtener-profesional-por-id/:id_profesional

### Ejemplo: /profesional
    /profesional/obtener-profesional-por-id/674716cd5a17930bd9841679

### Datos recibidos por URL
    id_profesional

### Respuesta del servidor
    (200)
    {
        "profesional": {
            "_id": "674716cd5a17930bd9841679",
            "nombre": "Benito",
            "apellido": "LOpez",
            "correo": "benito@gmail.com",
            "telefono": "8765787778",
            "__v": 0
        }
    }

### Eliminar Profesional por ID
### Ruta: /profesional
    Methodo GET - Ruta: /eliminar-profesional-por-id/:id_profesional

### Ejemplo: /profesional
    /profesional/eliminar-profesional-por-id/673e78da97e0d10acd129c7b

### Datos recibidos por URL
    id_profesional

### Respuesta del servidor
    (200)
    {
        "profesional": {
                "n": 1,
                "electionId": "7fffffff000000000000024c",
                "opTime": {
                "ts": "7442104899971579933",
                "t": 588
            },
            "ok": 1,
            "$clusterTime": {
                "clusterTime": "7442104899971579933",
                "signature": {
                    "hash": "vLiXCWobqqk9GOAei8nLjo3OE9o=",
                    "keyId": "7394796307652542503"
                }
            },
            "operationTime": "7442104899971579933",
            "deletedCount": 1
        }
    }

### 5- Solicitud Formulario

### Ruta: /solicitud-formulario
>#### Registrar Datos del Profesional
    Methodo POST - Ruta: /crear-solicitud-formulario
>#### Datos recibidos (JSON)
    "solicitud_formulario": {
        "nombre":"Laura",
        "apellido":"Bose",
        "correo":"laura@gmail.com",
        "telefono":"+56 9 222323233",
        "mensaje":"Probando formulario correctamente"
    }
>### Respuesta del servidor

    (200)
    {
        "solicitud_formulario": {
            "_id": "6747b14929c3a21044687fc5",
            "nombre": "Laura",
            "apellido": "Bose",
            "correo": "laura@gmail.com",
            "telefono": "+56 9 222323233",
            "mensaje": "Probando formulario correctamente",
            "__v": 0
        }
    }

### Obtener Solicitudes Formulario
### Ruta: /solicitud-formulario
    Metodo GET - Ruta: /obtener-solicitudes-formulario

>#### Respuesta del servidor
    (200)
    {
        "solicitud_formulario": [
            {
                "_id": "6747b14929c3a21044687fc5",
                "nombre": "Laura",
                "apellido": "Bose",
                "correo": "laura@gmail.com",
                "telefono": "+56 9 222323233",
                "mensaje": "Probando formulario correctamente",
                "__v": 0
            },
            {
                "_id": "67472720e8003c0dbb1e2979",
                "nombre": "Laura",
                "apellido": "Bose",
                "correo": "laura@gmail.com",
                "telefono": "+56 9 222323233",
                "mensaje": "Probando formulario correctamente",
                "__v": 0
            },
            {
                "_id": "674725bae8003c0dbb1e2977",
                "nombre": "Benito",
                "apellido": "LOpez",
                "correo": "benito@gmail.com",
                "telefono": "+56 9 63222222",
                "mensaje": "Probando formulario correctamente",
                "__v": 0
            }
        ]
    }

### Obtener Solicitud Formulario por ID
### Ruta: /solicitud-formulario
    Methodo GET - Ruta: /obtener-solicitud-formulario-por-id/:id_solicitud_formulario

### Ejemplo: /solicitud-formulario
    /solicitud-formulario/obtener-solicitud-formulario-por-id/674725bae8003c0dbb1e2977

### Datos recibidos por URL
    id_solicitud_formulario

### Respuesta del servidor
    (200)
    {
        "solicitud_formulario": {
            "_id": "67472720e8003c0dbb1e2979",
            "nombre": "Laura",
            "apellido": "Bose",
            "correo": "laura@gmail.com",
            "telefono": "+56 9 222323233",
            "mensaje": "Probando formulario correctamente",
            "__v": 0
        }
    }

### Eliminar Solicitud Formulario por ID
### Ruta: /solicitud-formulario
    Methodo GET - Ruta: /eliminar-solicitud-formulario-por-id/:id_solicitud_formulario

### Ejemplo: /solicitud-formulario
    /solicitud-formulario/eliminar-solicitud-formulario-por-id/67472720e8003c0dbb1e2979

### Datos recibidos por URL
    id_solicitud_formulario

### Respuesta del servidor
    (200)
    {
        "profesional": {
            "n": 1,
            "electionId": "7fffffff000000000000024c",
            "opTime": {
            "ts": "7442120881544888354",
            "t": 588
            },
            "ok": 1,
            "$clusterTime": {
                "clusterTime": "7442120881544888354",
                "signature": {
                    "hash": "sk6hpa9X9jji6lqLoK93rJUveKo=",
                    "keyId": "7394796307652542503"
                }
            },
            "operationTime": "7442120881544888354",
            "deletedCount": 1
        }
    }

### 6- Servicios de la Empresa

### Ruta: /servicio-empresa
>#### Registrar Servicios de la Empresa
    Methodo POST - Ruta: /crear-servicio-empresa
>#### Datos recibidos (JSON)
    "solicitud_formulario": {
        "nombre":"Mantenimiento Preventivo PC,
        "descripcion":"Aplicaremos un mantenimiento preventivo de tu PC tu PC",
        "valor":50000
    }
>### Respuesta del servidor

    (200)
    {
        "servicio_empresa": {
            "_id": "674a5af226ec3006e2d884bd",
            "nombre": "Mantenimiento Preventivo PC",
            "descripcion": "Aplicaremos un mantenimiento preventivo de tu PC tu PC",
            "valor": 50000,
            "__v": 0
        }
    }

### Obtener Servicios Empresa
### Ruta: /servicio-empresa
    Metodo GET - Ruta: /obtener-servicios-empresa

>#### Respuesta del servidor
    (200)
    {
        "servicios_empresa": [
            {
            "_id": "674a5af226ec3006e2d884bd",
            "nombre": "Mantenimiento Preventivo PC",
            "descripcion": "Aplicaremos un mantenimiento preventivo de tu PC tu PC",
            "valor": 50000,
            "__v": 0
            },
            {
            "_id": "674a5a2526ec3006e2d884bc",
            "nombre": "Mantenimiento Preventivo PC",
            "descripcion": "Aplicaremos un mantenimiento preventivo de tu PC tu PC",
            "valor": 50000,
            "__v": 0
            },
            {
            "_id": "674a59e226ec3006e2d884bb",
            "nombre": "Optimizacion PC",
            "descripcion": "Optimizaremos tu PC",
            "valor": 50000,
            "__v": 0
            },
            {
            "_id": "674a59cc26ec3006e2d884ba",
            "nombre": "Formateo PC",
            "descripcion": "Formateando",
            "valor": 2000,
            "__v": 0
            }
        ]
    }

### Obtener Servicio de Empresa  por ID
### Ruta: /servicio-empresa
    Methodo GET - Ruta: /obtener-servicio-empresa-por-id/:id_servicio_empresa

### Ejemplo: /servicio-empresa
    /servicio-empresa/obtener-servicio-empresa-por-id/674a5af226ec3006e2d884bd

### Datos recibidos por URL
    id_servicio_empresa

### Respuesta del servidor
    (200)
    {
        "servicio_empresa": {
            "_id": "674a5af226ec3006e2d884bd",
            "nombre": "Mantenimiento Preventivo PC",
            "descripcion": "Aplicaremos un mantenimiento preventivo de tu PC tu PC",
            "valor": 50000,
            "__v": 0
        }
    }

### Eloiminar Servicio de Empresa  por ID
### Ruta: /servicio-empresa
    Methodo GET - Ruta: /eliminar-servicio-empresa-por-id/:id_servicio_empresa

### Ejemplo: /servicio-empresa
    /servicio-empresa/eliminar-servicio-empresa-por-id/674a5af226ec3006e2d884bd

### Datos recibidos por URL
    id_servicio_empresa

### Respuesta del servidor
    (200)
    {
        "servicio_empresa": {
            "n": 1,
            "electionId": "7fffffff000000000000024c",
            "opTime": {
            "ts": "7442863051893637127",
            "t": 588
            },
            "ok": 1,
            "$clusterTime": {
            "clusterTime": "7442863051893637127",
            "signature": {
                "hash": "pV9AY791mBNh6/7ifIRcWjRZDOk=",
                "keyId": "7394796307652542503"
            }
            },
            "operationTime": "7442863051893637127",
            "deletedCount": 1
        }
    }

### 7- Dato de Empresa

### Ruta: /dato-empresa
>#### Obtener Dato de Empresa
    Methodo GET - Ruta: /obtener-dato-empresa 
>#### Datos recibidos
    
    No recibe datos
    
>#### Respuesta del servidor
    (200)
        {
            "dato_empresa": {
                "_id": "675a175c3a2af02130f9af73",
                "razon_social": "Mercy Developer Servicio Tecnico Oficial",
                "rol": "77.252.988-k",
                "correo": "contacto@mercydeveloper.com",
                "especialidad": "Servicio Tecnico de Computadoras y Redes",
                "telefono": "+56 9 4423 9873",
                "__v": 0
            }
        }

