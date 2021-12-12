FROM node:14-alpine as builder

WORKDIR /usr/src

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_PATH=./build

RUN npm run build

FROM node:14-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm ci --production

COPY --from=builder /usr/src/build build

CMD ["npm", "run", "start"]