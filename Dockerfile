FROM node:22-alpine

ENV NUXT_PUBLIC_FILE_BASE=https://mirrors.lcpu.dev
ENV NUXT_PUBLIC_MIRROR_STATUS_URL=https://mirrors.lcpu.dev/static/mirrorlist

RUN mkdir -p /opt/mirror-frontend
COPY .output /opt/mirror-frontend
WORKDIR /opt/mirror-frontend

EXPOSE 3000

ENTRYPOINT ["node", "server/index.mjs"]