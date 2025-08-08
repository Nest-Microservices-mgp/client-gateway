# Client Gateway

```
npm run start:dev
```

## Dev

1. Clonar repositorio
2. Instalar dependencias
3. Crear `.env` basadao en `.env.template`
4. Tener levantados los otros microservicios
5. Levanantar el proyecto con `npm run start:dev`

## Nats

```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```

## PROD

Ejecutar

```
docker build -f dockerfile.prod -t client-gateway .
```
