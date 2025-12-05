# API Registro de Bicicletas - Instituto Técnico Profesional

Base URL:

```
http://localhost:3000/api-backend-prueba
```

---

## 🚀 Endpoints Estudiante

### 1. Crear estudiante

* **Método:** `POST`
* **Ruta:** `/estudiante/crear`
* **Descripción:** Crea un nuevo estudiante en el sistema.
* **Body (JSON):**

```json
{
  "nombre": "Juan",
  "apellido": "Perez",
  "rut": "12345678-9",
  "correo": "juan@example.com"
}
```

* **Respuesta exitosa (201):**

```json
{
  "message": "Estudiante creado",
  "estudiante": {
    "_id": "6500abc1234567890abcdef1",
    "nombre": "Juan",
    "apellido": "Perez",
    "rut": "12345678-9",
    "correo": "juan@example.com",
    "createdAt": "2025-10-16T03:00:00.000Z",
    "updatedAt": "2025-10-16T03:00:00.000Z",
    "__v": 0
  }
}
```

---

### 2. Listar estudiantes

* **Método:** `GET`
* **Ruta:** `/estudiante/listar`
* **Descripción:** Retorna todos los estudiantes registrados.
* **Respuesta (200):**

```json
[
  {
    "_id": "6500abc1234567890abcdef1",
    "nombre": "Juan",
    "apellido": "Perez",
    "rut": "12345678-9",
    "correo": "juan@example.com"
  }
]
```

---

### 3. Buscar estudiante por RUT

* **Método:** `GET`
* **Ruta:** `/estudiante/buscar/:rut`
* **Descripción:** Obtiene los datos de un estudiante según su RUT.
* **Ejemplo:** `/estudiante/buscar/12345678-9`
* **Respuesta (200):**

```json
{
  "_id": "6500abc1234567890abcdef1",
  "nombre": "Juan",
  "apellido": "Perez",
  "rut": "12345678-9",
  "correo": "juan@example.com"
}
```

---

### 4. Actualizar estudiante por RUT

* **Método:** `PUT`
* **Ruta:** `/estudiante/actualizar/:rut`
* **Descripción:** Actualiza los datos de un estudiante existente.
* **Body (JSON):**

```json
{
  "nombre": "Juan Carlos",
  "apellido": "Perez Soto",
  "correo": "juancarlos@example.com"
}
```

* **Respuesta (200):**

```json
{
  "message": "Estudiante actualizado",
  "estudiante": {
    "_id": "6500abc1234567890abcdef1",
    "nombre": "Juan Carlos",
    "apellido": "Perez Soto",
    "rut": "12345678-9",
    "correo": "juancarlos@example.com"
  }
}
```

---

### 5. Eliminar estudiante por RUT

* **Método:** `DELETE`
* **Ruta:** `/estudiante/eliminar/:rut`
* **Descripción:** Elimina un estudiante del sistema.
* **Ejemplo:** `/estudiante/eliminar/12345678-9`
* **Respuesta (200):**

```json
{
  "message": "Estudiante eliminado",
  "estudiante": {
    "_id": "6500abc1234567890abcdef1",
    "nombre": "Juan Carlos",
    "apellido": "Perez Soto",
    "rut": "12345678-9",
    "correo": "juancarlos@example.com"
  }
}
```

---

## 🚲 Endpoints Bicicleta

### 1. Registrar bicicleta

* **Método:** `POST`
* **Ruta:** `/bicicleta/registrar`
* **Descripción:** Registra una bicicleta vinculada a un estudiante por RUT.
* **Body (JSON):**

```json
{
  "rut": "12345678-9",
  "marca": "Trek",
  "modelo": "FX 1",
  "color": "Rojo",
  "estacionamiento": "A1",
  "establecimiento": "lincoyan"
}
```

* **Respuesta (201):**

```json
{
  "message": "Bicicleta registrada",
  "bicicleta": {
    "_id": "6500def1234567890abcdef3",
    "estudiante": "6500abc1234567890abcdef1",
    "marca": "Trek",
    "modelo": "FX 1",
    "color": "Rojo",
    "estacionamiento": "A1",
    "fechaRegistro": "2025-10-16T03:15:00.000Z"
  }
}
```

---

### 2. Listar todas las bicicletas

* **Método:** `GET`
* **Ruta:** `/bicicleta/listar`
* **Descripción:** Retorna todas las bicicletas registradas con la información del estudiante.
* **Respuesta (200):**

```json
[
  {
    "_id": "6500def1234567890abcdef3",
    "estudiante": {
      "_id": "6500abc1234567890abcdef1",
      "nombre": "Juan",
      "apellido": "Perez",
      "rut": "12345678-9"
    },
    "marca": "Trek",
    "modelo": "FX 1",
    "color": "Rojo",
    "estacionamiento": "A1",
    "fechaRegistro": "2025-10-16T03:15:00.000Z",
    "identificador": "6500abc1234567890abcdef1"
  }
]
```

---

### 3. Obtener bicicleta por ID

* **Método:** `GET`
* **Ruta:** `/bicicleta/:id`
* **Descripción:** Obtiene los datos de una bicicleta específica.
* **Ejemplo:** `/bicicleta/6500def1234567890abcdef3`

---

### 4. Listar bicicletas por estudiante (RUT)

* **Método:** `GET`
* **Ruta:** `/bicicleta/estudiante/:rut`
* **Descripción:** Lista todas las bicicletas de un estudiante.
* **Ejemplo:** `/bicicleta/estudiante/12345678-9`

---

### 5. Listar bicicletas por establecimiento (identificador)

* **Método:** `GET`
* **Ruta:** `/bicicleta/establecimiento/:identificador`
* **Descripción:** Lista todas las bicicletas de un Establecimiento.
* **Ejemplo:** `/bicicleta/establecimiento/acacias2551`

---

### 6. Actualizar bicicleta por ID

* **Método:** `PUT`
* **Ruta:** `/bicicleta/:id`
* **Body (JSON):**

```json
{
  "color": "Azul",
  "estacionamiento": "B2"
}
```

* **Descripción:** Actualiza datos de la bicicleta.

---

### 7. Eliminar bicicleta por ID

* **Método:** `DELETE`
* **Ruta:** `/bicicleta/:id`
* **Descripción:** Elimina la bicicleta registrada.

---
### 8. Obtener Todas las bicicletas por ID establecimiento y por fecha

* **Método:** `DELETE`
* **Ruta:** `/bicicleta/establecimiento/:identificador/fecha/:fecha`
* **Descripción:** Elimina la bicicleta registrada.
* **Apoyo:** se debe enviar _id como el identificador del establecimiento y no la referencia 
* **Ejemplo:** `/bicicleta/establecimiento/690d03b8394c53154066b6e0/fecha/2025-12-04`
* **Respuesta (200):** 

```json
[
  {
    "estacionamiento": "A2",
    "_id": "6931e464549ec900323e10b1",
    "estudiante": {
      "_id": "6931e084549ec900323e10af",
      "nombre": "Delta",
      "apellido": "Beta",
      "rut": "23.123.432-1",
      "correo": "Alpha@gmail.com",
      "createdAt": "2025-12-04T19:27:00.115Z",
      "updatedAt": "2025-12-04T19:27:00.115Z",
      "__v": 0
    }, 
  }...
]
```
---

## 🚀 Endpoints Estudiante
### 1. Crear usuario de acceso

* **Método:** `POST`
* **Ruta:** `/acceso/crear`
* **Descripción:** `Registra un nuevo usuario autorizado.`

* **Body (JSON):**

```json
{
  "nombre": "Pedro",
  "apellido": "Morales",
  "correo": "pedro.morales@example.com",
  "rut": "12.345.678-9",
  "password": "123456"
}
```
* **Respuesta exitosa (201):**

```json
{
  "message": "Usuario de acceso creado",
  "usuario": {
    "_id": "6502abc1234567890abcdef1",
    "nombre": "Pedro",
    "apellido": "Morales",
    "correo": "pedro.morales@example.com",
    "rut": "12.345.678-9",
    "createdAt": "2025-11-16T03:00:00.000Z",
    "updatedAt": "2025-11-16T03:00:00.000Z"
  }
}
```

---

## 📘 Endpoints Establecimiento

### 1. Registrar Establecimiento

* **Método:** `POST`
* **Ruta:** `/establecimiento/crear`
* **Descripción:** Registra un establecimiento.
* **Body (JSON):**

```json
{
  "identificador": "lincoyan32221",
  "nombre": "Lincoyan",
  "descripcion": "CFT Campus lincoyan",
  "direccion": "lincoyan 3222",
  "capacidad": 20,
}
```

* **Respuesta (201):**

```json
{
  "message": "Establecimiento Registrado",
  "establecimiento": {
    "_id": "691fdee9e500945d68266592",
    "identificador": "lincoyan32221",
    "nombre": "Lincoyan",
    "direccion": "lincoyan 3222",
    "capacidad": 20,
    "fechaRegistro": "2025-11-21T03:39:21.629Z",
    "createdAt": "2025-11-21T03:39:21.632Z",
    "updatedAt": "2025-11-21T03:39:21.632Z",
    "__v": 0
  }
}
```
---

### 2. Listar todos los establecimiento

* **Método:** `GET`
* **Ruta:** `/establecimiento/listar`
* **Descripción:** Retorna todas los establecimiento registradas.
* **Respuesta (200):**

```json
[
  {
    "_id": "690d0039ca618e39c846a8ac",
    "nombre": "CFT Técnica Arica",
    "direccion": "Av. Siempre Viva 123",
    "capacidad": 20,
    "bicicletas": [],
    "fechaRegistro": "2025-11-06T20:08:25.747Z",
    "__v": 0
  },
  ...
]
```
### 3. Obtener establecimiento por ID

* **Método:** `GET`
* **Ruta:** `/bicicleta/:id`
* **Descripción:** Obtiene los datos de un establecimiento por id específica.
* **Ejemplo:** `/establecimiento/691f6de923d31003d07fb28f`

---

### 4. Actualizar estab por ID

* **Método:** `PUT`
* **Ruta:** `/establecimiento/actualizar/:id`
* **Ejemplo:** `/establecimiento/actualizar/690d0039ca618e39c846a8ac`
* **Body (JSON):**

```json
{
  "identificador": "linco776",
  "nombre": "Lincoyan",
  "descripcion": "CFT Campus lincoyan",
  "direccion": "lincoyan 3222",
  "capacidad": 20,
}
```

---

### 🔹 Notas importantes

* Todos los endpoints usan **JSON** como formato de entrada y salida.
* La relación bicicleta-estudiante se hace mediante el **RUT del estudiante**, que se busca automáticamente en la base de datos.
* Para endpoints de bicicletas, se recomienda usar el `_id` de MongoDB para operaciones de actualización o eliminación.
