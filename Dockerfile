
FROM node:10-alpine
USER node

VOLUME /srv/lidlapp /srv/lidlapp

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin
