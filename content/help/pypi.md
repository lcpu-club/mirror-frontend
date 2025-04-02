---
mirrorId: pypi
title: PyPI
---

## 镜像配置

### 临时生效

```bash
pip install -i https://mirrors.lcpu.dev/pypi/web/simple package_name
```

### 永久生效

```bash
pip install pip -U -i https://mirrors.lcpu.dev/pypi/web/simple # 首先将 pip 版本升级至 10.0.0+
pip config set global.index-url https://mirrors.lcpu.dev/pypi/web/simple
```
