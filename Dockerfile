FROM node:18-alpine

ENV NUXT_PUBLIC_FILE_BASE=https://mirrors.pku.edu.cn
ENV NUXT_UPSTREAM_FILE_BASE=https://mirrors.pku.edu.cn/files
ENV NUXT_UPSTREAM_MIRROR_BASE=https://mirrors.pku.edu.cn/monitor
ENV NUXT_UPSTREAM_STATUS_BASE=https://mirrors.pku.edu.cn/monitor_device_status

RUN mkdir -p /opt/mirror-frontend
COPY .output /opt/mirror-frontend
WORKDIR /opt/mirror-frontend

EXPOSE 3000

ENTRYPOINT ["node", "server/index.mjs"]