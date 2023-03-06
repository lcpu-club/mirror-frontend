---
mirrorId: opencloudos
title: OpenCloudOS
---

## 使用说明

修改 `/etc/yum.repos.d/OpenCloudOS.repo` 中的地址，指向 `https://mirrors.pku.edu.cn/opencloudos`。具体命令为：

```bash
sudo sed  -e "s|https://mirrors.opencloudos.tech|https://mirrors.pku.edu.cn|g" \
          -i.bak \
          /etc/yum.repos.d/OpenCloudOS.repo
```
