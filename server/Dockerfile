FROM node:12.13-alpine

WORKDIR /server

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000 3000
