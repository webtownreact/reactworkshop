FROM node:lts-alpine as build-stage

WORKDIR /app

RUN npm install -g pnpm

COPY ./ /app/
RUN pnpm install
RUN pnpm run build-prod

FROM nginx:stable-alpine
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
