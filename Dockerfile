FROM node:11-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . /home/app

RUN npm install

CMD ["node","server.js"]

