FROM node:22-alpine3.20 AS base

ENV DIR=/app
WORKDIR $DIR

FROM base AS dev

ENV NODE_ENV=development

RUN apk add --no-cache dumb-init

COPY package*.json .
RUN npm install

COPY nodemon.json .
COPY tsconfig*.json .
COPY src src

EXPOSE 3000

CMD ["dumb-init", "npm", "run", "dev"]

FROM base AS build

RUN apk update && apk add --no-cache dumb-init=1.2.5-r3

COPY package*.json .
RUN npm ci
COPY tsconfig*.json .
COPY src src

RUN npm run build && \
    npm prune --production

FROM base AS production

ENV NODE_ENV=production

COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=build $DIR/package*.json .
COPY --from=build $DIR/node_modules node_modules
COPY --from=build $DIR/dist dist

USER node
EXPOSE 3000

CMD ["dumb-init", "node", "dist/index.js"]