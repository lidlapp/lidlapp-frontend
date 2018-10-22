
FROM node:latest

VOLUME /srv/lidlapp /srv/lidlapp

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

USER node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
