FROM node:18.17-slim AS builder
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build-prod

FROM nginx:latest
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/blue-sea-cloudy-trip /usr/share/nginx/html
EXPOSE 80