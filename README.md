# Api_Naruto 🍃

Una API REST de Naruto construida con JSON Server y una interfaz web interactiva desarrollada con TypeScript, Vite y RxJS.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Mariogarluu/Api_Naruto)

## 📋 Descripción

Este proyecto es una API REST que proporciona información sobre personajes y aldeas del universo de Naruto. Incluye una interfaz web interactiva que consume la API y muestra los datos de forma dinámica utilizando programación reactiva con RxJS.

## ✨ Características

- **API REST completa**: Acceso a personajes y aldeas de Naruto
- **Interfaz interactiva**: Visualización de datos con diseño tipo tarjetas
- **Filtrado en tiempo real**: Búsqueda de personajes con debounce
- **Programación reactiva**: Implementación con RxJS para manejo de eventos y datos
- **TypeScript**: Código con tipado estático para mayor robustez
- **Vite**: Desarrollo rápido con Hot Module Replacement (HMR)

## 🚀 Tecnologías Utilizadas

- **Frontend**:
  - TypeScript
  - Vite
  - RxJS
  - HTML5 & CSS3

- **Backend**:
  - JSON Server (API REST simulada)

## 📦 Instalación

### Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Mariogarluu/Api_Naruto.git
   cd Api_Naruto
   ```

2. **Instalar dependencias del proyecto**:
   ```bash
   npm install
   ```

3. **Instalar JSON Server globalmente** (si no lo tienes instalado):
   ```bash
   npm install -g json-server
   ```

## 🎯 Uso

Para ejecutar el proyecto necesitas levantar tanto el servidor JSON como el servidor de desarrollo de Vite.

### 1. Levantar la API con JSON Server (Puerto 3000)

JSON Server es una herramienta que crea una API REST completa a partir de un archivo JSON. En este proyecto, el archivo `db.json` contiene los datos de personajes y aldeas.

**Ejecutar JSON Server**:

```bash
json-server --watch Json-Server-Naruto/db.json --port 3000
```

**Explicación del comando**:
- `json-server`: Comando para iniciar JSON Server
- `--watch Json-Server-Naruto/db.json`: Indica el archivo JSON que contiene los datos
- `--port 3000`: Especifica el puerto 3000 para la API

Una vez ejecutado, la API estará disponible en `http://localhost:3000` con los siguientes endpoints:

- `GET http://localhost:3000/characters` - Obtener todos los personajes
- `GET http://localhost:3000/characters/:id` - Obtener un personaje por ID
- `GET http://localhost:3000/villages` - Obtener todas las aldeas
- `GET http://localhost:3000/villages/:id` - Obtener una aldea por ID

JSON Server también proporciona operaciones completas de CRUD:
- `POST` - Crear nuevos registros
- `PUT/PATCH` - Actualizar registros existentes
- `DELETE` - Eliminar registros

### 2. Levantar el Servidor de Desarrollo (Frontend)

En otra terminal, ejecuta:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite. La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## 📊 Estructura de Datos

### Personajes (Characters)

```json
{
  "id": 1,
  "name": "Naruto Uzumaki",
  "rank": "Hokage",
  "villageId": 1,
  "chakraAffinity": "Wind",
  "techniques": ["Rasengan", "Sage Mode", "Kurama Mode"],
  "image": "url_de_imagen"
}
```

### Aldeas (Villages)

```json
{
  "id": 1,
  "name": "Hidden Leaf Village",
  "country": "Land of Fire",
  "leader": "Hokage",
  "symbol": "🍃"
}
```

## 🎮 Funcionalidades de la Interfaz

1. **Visualización de Personajes**: Muestra tarjetas con información detallada de cada personaje
2. **Visualización de Aldeas**: Muestra información de las aldeas ninja
3. **Filtrado en Tiempo Real**: Busca personajes por nombre con un campo de búsqueda reactivo
4. **Navegación por Pestañas**: Alterna entre vista de personajes y aldeas

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo de Vite

# Construcción
npm run build        # Compila TypeScript y construye para producción

# Vista Previa
npm run preview      # Previsualiza la versión de producción
```

## 📁 Estructura del Proyecto

```
Api_Naruto/
├── Json-Server-Naruto/
│   └── db.json              # Base de datos JSON con personajes y aldeas
├── public/                   # Archivos estáticos públicos
├── src/
│   ├── main.ts              # Punto de entrada de la aplicación
│   ├── style.css            # Estilos de la aplicación
│   └── counter.ts           # Utilidades auxiliares
├── index.html               # HTML principal
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Este archivo
```

## 🌐 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/characters` | Obtiene todos los personajes |
| GET | `/characters/:id` | Obtiene un personaje específico |
| GET | `/villages` | Obtiene todas las aldeas |
| GET | `/villages/:id` | Obtiene una aldea específica |
| POST | `/characters` | Crea un nuevo personaje |
| PUT | `/characters/:id` | Actualiza un personaje completo |
| PATCH | `/characters/:id` | Actualiza campos específicos de un personaje |
| DELETE | `/characters/:id` | Elimina un personaje |

## 🔧 Configuración de JSON Server

JSON Server proporciona varias opciones de configuración:

```bash
# Puerto personalizado
json-server --watch Json-Server-Naruto/db.json --port 3000

# Con delay para simular latencia de red
json-server --watch Json-Server-Naruto/db.json --port 3000 --delay 1000

# Solo lectura (no permite POST, PUT, DELETE)
json-server --watch Json-Server-Naruto/db.json --port 3000 --read-only

# Con host específico
json-server --watch Json-Server-Naruto/db.json --port 3000 --host 0.0.0.0
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Mariogarluu**

- GitHub: [@Mariogarluu](https://github.com/Mariogarluu)

## 🙏 Agradecimientos

- Datos e imágenes inspirados en la serie Naruto
- JSON Server por proporcionar una forma sencilla de crear APIs REST
- La comunidad de TypeScript y RxJS

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
