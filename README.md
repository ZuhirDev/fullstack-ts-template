
# Template TypeScript Boilerplate

Plantilla base para proyectos modernos con **TypeScript + React + Vite**, lista para desarrollo local y despliegue dockerizado. Incluye una pequeña API en Node/Express, integración con Tailwind, componentes shadcn/ui y soporte para modo oscuro.

## ¿Qué incluye?

- Frontend: Vite + React + TypeScript, TailwindCSS, componentes shadcn (`Frontend/src/components/ui`), `ThemeProvider` y `ModeToggle`.
- Backend: Node + Express con un endpoint base `/api` (respuesta JSON simple) listo para ampliarse.
- Infraestructura: `docker-compose` con servicios para backend, frontend y `nginx` como proxy reverso.

## Estructura del repositorio

- `Backend/` — servidor Node/Express.
- `Frontend/` — app React (Vite + TypeScript).
- `Infrastructure/` — `docker-compose.yml`, `.env` y configuración de `nginx`.

## Arrancar con Docker

1. Ajusta `Infrastructure/.env` si deseas cambiar puertos o nombres.
2. Levanta los servicios:

```bash
cd Infrastructure
docker compose up --build -d
```

- Frontend (desarrollo Vite): `http://localhost:5173`.
- Frontend (servido por nginx): `http://localhost:${NGINX_PORT:-85}`.
- Backend: se ejecuta internamente en `3000` y queda accesible vía `nginx` en `/api`.

Comprobar endpoint de salud:

```bash
curl -s http://localhost:${NGINX_PORT:-85}/api
```
