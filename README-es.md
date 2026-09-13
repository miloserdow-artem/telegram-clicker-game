# Language / Язык
> [🇷🇺 Русский](README.md) | [🇬🇧 English](README-en.md) | [🇪🇸 Español](README-es.md)

# Telegram Clicker Game Mini App

## Descripción
He desarrollado un juego clicker completo para Telegram Mini App. El proyecto fue implementado en noviembre de 2025 como parte de una campaña de promoción para mi propio canal de Telegram.

Las funciones de la aplicación incluían:
1. Sistema de guardado y retención de datos de usuario;
2. Mecánica de tareas;
3. Sistema de referidos;
4. Tablas de clasificación (leaderboard).
5. Como parte del proyecto, se organizó un evento de un mes: los 3 mejores jugadores de la tabla de clasificación recibieron una suscripción a Telegram Premium. Gracias al sistema de referidos, la audiencia del canal aumentó en 200 suscriptores.

Durante el desarrollo de este proyecto, amplié significativamente mis competencias en desarrollo frontend y JavaScript, y dominé el trabajo con bases de datos y APIs.

## Características
- ✅ **Pantalla principal del juego** - Moneda clickeable con seguimiento de saldo
- ✅ **Sistema de mejoras** - Ingresos pasivos y mejoras de la fuerza de clic
- ✅ **Sección de tareas** - Tareas de suscripción a canales para ganar recompensas
- ✅ **Sistema de referidos** - Invita a amigos y gana monedas
- ✅ **Códigos promocionales** - Activa códigos para reclamar recompensas
- ✅ **Tablas de clasificación** - Top de jugadores por saldo y referidos
- ✅ **Panel de administración** - Gestión de tareas y códigos promocionales
- ✅ **Ganancias sin conexión** - Gana monedas offline (hasta 24 horas)
- ✅ **Integración con Telegram** - Integración completa con la WebApp API

## Tecnologías
**Frontend:**
- HTML, CSS, JavaScript
- Telegram WebApp API

**Backend:**
- Node.js con Express.js
- MongoDB con Mongoose
- Axios para la interacción con la API de Telegram Bot

### Requisitos
- Node.js (versión 14 o superior)
- MongoDB (local o en la nube)
- Token de Bot de Telegram (obtenido de @BotFather)

### Pasos de instalación
1. **Clona o descarga el proyecto**
2. **Instala las dependencias:**
```bash
npm install
```
3. **Configura las variables de entorno:**
Edita el archivo `.env` con tus valores reales:
```env
# Configuración de MongoDB
MONGODB_URI=mongodb://localhost:27017/telegram-clicker-game

# Configuración del servidor
PORT=3000
NODE_ENV=production

# Configuración del Bot de Telegram
BOT_TOKEN=tu_token_de_bot
BOT_USERNAME=nombre_de_tu_bot

# IDs de administradores (separados por comas)
ADMIN_IDS=123456789,987654321

# Recompensa por referido (en monedas)
REFERRAL_REWARD=1000000
```
Reemplaza el archivo `coin.png` de 1000x1000px por el tuyo propio.
Edita el archivo `style.css` para cambiar los colores a tu gusto.
Edita el archivo `config/upgraged.js` para nombrar cada mejora en el campo `name`, añadir una descripción en `description`, y ajustar el precio, la recompensa y el icono emoji.

4. **Inicia MongoDB:**
Asegúrate de que MongoDB se está ejecutando en tu sistema o utiliza un servicio en la nube como MongoDB Atlas.

5. **Inicia el servidor:**
```bash
# Modo de desarrollo (con reinicio automático)
npm run dev

# Modo de producción
npm start
```
El servidor se iniciará en `http://localhost:3000`

## Configuración del Bot de Telegram

### 1. Creación del Bot
1. Abre Telegram y busca a @BotFather
2. Envía el comando `/newbot`
3. Sigue las instrucciones para crear tu bot
4. Guarda el token del bot (lo necesitarás para el archivo `.env`)

### 2. Configuración de la Mini App
1. En BotFather, usa el comando `/mybots`
2. Selecciona tu bot
3. Ve a "Bot Settings" → "Menu Button"
4. Configura la Web App URL: `https://tudominio.com` (o la URL de tu despliegue)

### 3. Despliegue en producción
1. **Consigue un dominio y hosting** (Vercel, Railway, Heroku, etc.)
2. **Configura MongoDB** (se recomienda MongoDB Atlas)
3. **Configura las variables de entorno** en tu plataforma de hosting
4. **Actualiza la configuración del bot:**
   - Actualiza la Menu Button URL en BotFather
   - Asegúrate de que HTTPS esté activado
5. **Despliega:**
```bash
git push # o usa el comando de despliegue de tu plataforma
```

## API Endpoints

### Endpoints del juego (`/api/game`)
- `POST /init` - Inicializar o recuperar datos del usuario
- `POST /click` - Registrar un clic en la moneda
- `POST /upgrades/passive` - Obtener mejoras pasivas
- `POST /upgrades/click` - Obtener mejoras de clic
- `POST /upgrades/passive/buy` - Comprar una mejora pasiva
- `POST /upgrades/click/buy` - Comprar una mejora de clic
- `GET /leaderboard/balance` - Obtener tabla de clasificación por saldo
- `GET /leaderboard/referrals` - Obtener tabla de clasificación por referidos
- `POST /tasks` - Obtener tareas disponibles
- `POST /tasks/check` - Verificar el cumplimiento de una tarea
- `POST /promo/activate` - Activar un código promocional

## Modelos de la Base de Datos

### User (Usuario)
- Telegram ID, nombre de usuario
- Saldo, fuerza de clic, ingresos por segundo
- Mejoras pasivas y de clic
- Tareas completadas
- Códigos promocionales activados
- Datos de referidos
- Estado de administrador

### Task (Tarea)
- Título, descripción
- Enlace e ID del canal
- Cantidad de la recompensa
- Estado activo

### PromoCode (Código promocional)
- Código (único, en mayúsculas)
- Cantidad de la recompensa
- Máx. de usos, usos actuales
- Fecha de expiración
- Estado activo

## Estructura de archivos
```├── models/
│   ├── User.js         # Modelo de usuario
│   ├── Task.js         # Modelo de tarea
│   └── PromoCode.js    # Modelo de código promocional
├── routes/
│   ├── game.js         # Endpoints de la API del juego
│   └── admin.js        # Endpoints de la API de administración
├── config/
│   └── upgrades.js     # Configuración de mejoras
├── server.js           # Configuración del servidor Express
├── game-client.js      # Lógica del juego en el cliente
├── index.html          # Interfaz principal del juego
├── main_coin_1.png     # Imagen de la moneda
├── package.json        # Dependencias
├── .env                # Variables de entorno
└── README.md           # Este archivo
```

## Solución de problemas

### Problemas de conexión con MongoDB
- Asegúrate de que MongoDB se esté ejecutando
- Verifica el `MONGODB_URI` en el `.env`
- Para MongoDB Atlas, añade tu dirección IP a la lista blanca

### El Bot no funciona
- Verifica que el `BOT_TOKEN` sea correcto
- Asegúrate de que el nombre del bot coincida con `BOT_USERNAME`
- Asegúrate de que la Web App URL esté correctamente configurada en BotFather

### Las tareas no se verifican
- El ID del canal debe ser exacto (usa @getidsbot)
- El bot debe ser administrador del canal
- En modo de desarrollo, las tareas se completan automáticamente para realizar pruebas

## Desarrollo

### Pruebas locales
1. Utiliza ngrok para exponer tu servidor local:
```bash
ngrok http 3000
```
2. Actualiza la Web App URL de tu bot en BotFather usando la URL de ngrok
3. Realiza las pruebas dentro de Telegram

### Modo de depuración
El juego incluye registro de logs en la consola. Revisa las herramientas de desarrollo del navegador para la depuración.

## Notas de seguridad
- Nunca subas el archivo `.env` al repositorio
- Mantén tu `BOT_TOKEN` en secreto
- Usa HTTPS en producción
- Valida todos los datos del usuario en el backend
- Implementa un límite de velocidad de peticiones (rate limiting) para producción

## Licencia
MIT License - ¡siéntete libre de modificarlo y usarlo para tus propios proyectos!

## Soporte
Si encuentras algún problema o tienes dudas:
1. Revisa este README
2. Revisa los logs de errores en la consola
3. Verifica tus variables de entorno
4. Prueba los endpoints de la API individualmente

## Autores
Artem Miloserdov
github: miloserdow-artem
tg: @miloserdow_artem
