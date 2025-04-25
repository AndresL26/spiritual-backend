# Spiritual Backend API

API REST desarrollada con NestJS para gestionar ejercicios espirituales.

## Requisitos

- Node.js (v18 o superior)
- npm (v9 o superior)

## Instalación

```bash
npm install
```

## Configuración

El proyecto viene configurado por defecto para ejecutarse en el puerto 3001. Puedes modificar esto en el archivo `src/main.ts` o mediante variables de entorno.

## Ejecución

### Desarrollo
```bash
npm run start:dev
```

### Producción
```bash
npm run build
npm run start:prod
```

## Endpoints Disponibles

### GET /api/exercises
Obtiene todos los ejercicios espirituales.

### GET /api/exercises?category=meditation
Filtra ejercicios por categoría (meditation, prayer, mindfulness, yoga).

### GET /api/exercises/:id
Obtiene un ejercicio específico por ID.

### POST /api/exercises
Crea un nuevo ejercicio.

Ejemplo de body:
```json
{
  "title": "Nuevo Ejercicio",
  "description": "Descripción del ejercicio",
  "category": "meditation",
  "duration": 20,
  "difficulty": "beginner",
  "benefits": ["beneficio 1", "beneficio 2"],
  "imageUrl": "https://example.com/imagen.jpg"
}
```

## Estructura del Proyecto

```
src/
├── interfaces/        # Definiciones de tipos e interfaces
├── controllers/      # Controladores de la API
├── services/         # Servicios de negocio
└── main.ts          # Punto de entrada de la aplicación
```

## Contribuir

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
