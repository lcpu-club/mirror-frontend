FROM node:18-alpine

RUN mkdir -p /opt/mirror-frontend
COPY .output /opt/mirror-frontend
WORKDIR /opt/mirror-frontend

EXPOSE 3000

ENTRYPOINT ["node", "server/index.mjs"]