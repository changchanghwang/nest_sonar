FROM node:18-alpine

WORKDIR /

COPY package*.json ./

RUN npm ci

ARG NODE_ENV
ARG PORT

ENV NODE_ENV=$NODE_ENV \
    PORT=$PORT \
    DB_HOST=$DB_HOST \
    DB_NAME=$DB_NAME \
    DB_USER=$DB_USER \
    DB_PASSWORD=$DB_PASSWORD \
    DB_PORT=$DB_PORT

COPY . .

RUN npm run build

EXPOSE $PORT

CMD ["npm", "run", "start:dev"]