FROM node:12.14.1-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", ".//src//index.js" ]