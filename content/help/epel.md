---
mirrorId: epel
title: EPEL
---

## EPEL 安装

```bash
sudo yum install epel-release
```

## EPEL 镜像配置

EPEL 镜像配置文件位于 `/etc/yum.repos.d/epel.repo`。

修改命令：

```bash
sudo sed -e 's|^metalink=|#metalink=|g' \
         -e 's|^#baseurl=https\?://download.fedoraproject.org/pub/epel/|baseurl=https://mirrors.lcpu.dev/epel/|g' \
         -i.bak \
         /etc/yum.repos.d/epel.repo
```

即将该文件中 `baseurl=` 行取消注释并改为北大源地址 `http://mirrors.lcpu.dev/epel/` 开头。

修改文件后需要更新缓存：

```bash
sudo yum makecache
```
