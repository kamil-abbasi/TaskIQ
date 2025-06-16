FROM node:23-alpine

WORKDIR /app

RUN apk add curl

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD ["npm", "run", "start:dev"]