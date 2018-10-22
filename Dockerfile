
FROM node:latest

VOLUME /srv/lidlapp /srv/lidlapp

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install

COPY . .
