FROM node:14

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_PATH=./build

RUN npm run build