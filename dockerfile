FROM node:18.17-slim AS builder
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build:ssr

FROM node:18.17-slim as production
COPY --from=builder ./dist ./dist
CMD ["node", "dist/blue-sea-cloudy-trip/server/main.js"]
EXPOSE 4000