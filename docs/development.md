# 开发指南

## 环境部署

确保你已经安装了 nvm。

```bash
nvm install 20
nvm use 20
corepack install
yarn install
```

## 本地开发

```bash
yarn dev
```

## 提交代码

```bash
yarn lint
yarn check:all
```

## API 相关的注意事项

- `/api` 路由下所有文件都交给前端，处理 proxy 请求相关问题，后端需要发布 API 时建议用`/static`路由
