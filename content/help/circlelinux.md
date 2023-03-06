---
mirrorId: circle
title: Circle Linux
---

## 镜像配置

Circle Linux 的 repo 路径在 `/etc/yum.repos.d/circle.repo` 中，可以使用命令修改。

```bash
sudo sed -e 's|^mirrorlist=|#mirrorlist=|g' \
            -e 's|^#baseurl=https://mirror.cclinux.org|baseurl=https://mirrors.pku.edu.cn/circle|g' \
            -i.bak \
            /etc/yum.repos.d/circle.repo
```

即将该文件中 `baseurl=` 行取消注释并改为北大源地址 `http://mirrors.pku.edu.cn/circle` 开头。

改文件后需要更新缓存：

```bash
sudo yum makecache
```
