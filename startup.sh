#!/bin/bash

docker compose up -d --build
docker compose exec tasks npx drizzle-kit push --force
docker compose restart tasks