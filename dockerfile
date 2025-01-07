FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN apk update && apk upgrade
RUN apk add git
RUN apk add bash

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 4000

CMD npm run dev