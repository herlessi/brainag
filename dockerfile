FROM node:alpine
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

# RUN npm install -g nodemon
# RUN npm i knex
RUN npm i @nestjs/cli

ARG PORTA="3000"
ENV PORTA=$PORTA
EXPOSE $PORTA

CMD [ "npm", "start" ]