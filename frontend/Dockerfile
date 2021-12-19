## Install dependencies only when needed
#FROM node:15-alpine AS deps
## Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
#RUN apk add --no-cache libc6-compat
#WORKDIR /usr/src
#COPY package.json ./
#RUN yarn install --frozen-lockfile
#
## Rebuild the source code only when needed
#FROM node:15-alpine AS builder
#WORKDIR /usr/src
#COPY . .
#COPY --from=deps /usr/src/node_modules ./node_modules
#RUN yarn build && yarn install --production --ignore-scripts --prefer-offline
#
## Production image, copy all the files and run next
#FROM node:15-alpine AS runner
#WORKDIR /usr/src
#
#ENV NODE_ENV production
#
##RUN addgroup 1001 nodejs
##RUN adduser nextjs -u 1001
#
## You only need to copy next.config.js if you are NOT using the default configuration
#COPY --from=builder /usr/src/next.config.js ./
#COPY --from=builder /usr/src/tailwind.config.js ./
#COPY --from=builder /usr/src/public ./public
#COPY --from=builder --chown=nextjs:nodejs /usr/src/.next ./.next
#COPY --from=builder /usr/src/node_modules ./node_modules
#COPY --from=builder /usr/src/package.json ./package.json
#
##USER nextjs
#
#EXPOSE 3000
#
#ENV PORT 3000
#
## Next.js collects completely anonymous telemetry data about general usage.
## Learn more here: https://nextjs.org/telemetry
## Uncomment the following line in case you want to disable telemetry.
## ENV NEXT_TELEMETRY_DISABLED 1
#
#CMD ["node_modules/.bin/next", "start"]

FROM node:14-alpine as builder

WORKDIR /usr/src

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

#EXPOSE 3000

FROM node:14-alpine

WORKDIR /usr/src

EXPOSE 3000

COPY package*.json ./

RUN npm ci --production

COPY --from=builder /usr/src/next.config.js ./
COPY --from=builder /usr/src/tailwind.config.js ./
COPY --from=builder /usr/src/postcss.config.js ./
COPY --from=builder /usr/src/public ./public
COPY --from=builder /usr/src/.next ./.next
COPY --from=builder /usr/src/node_modules ./node_modules
COPY --from=builder /usr/src/package.json ./package.json

CMD ["npm", "start"]

