---
mirrorId: debian
title: Debian

variables:
  debian_codename:
    type: select
    name: Debian 版本
    options:
      - { name: 'Debian 12', value: 'bookworm' }
      - { name: 'Debian 11', value: 'bullseye' }
    default: 'bookworm'
---

## 镜像配置

Debian 11 版本及之前， 镜像配置文件位于`/etc/apt/sources.list`。

从 12 版本开始，Debian 默认启用 DEB822 格式，位于`/etc/apt/mirrors/debian-security.list`、`/etc/apt/mirrors/debian.list`。

## 使用命令行修改

```bash
sudo sed -i 's/deb.debian.org/mirrors.pku.edu.cn/g' /etc/apt/mirrors/debian.list \
    /etc/apt/mirrors/debian-security.list \
    /etc/apt/sources.list
```

## 直接替换文件

Debian 11 及以前版本，手动替换原有的 `/etc/apt/sources.list` 文件内容为：

```unix-conf
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb http://mirrors.pku.edu.cn/debian/ {{debian_codename}} main contrib non-free
# deb-src https://mirrors.pku.edu.cn/debian/ {{debian_codename}} main contrib non-free
deb http://mirrors.pku.edu.cn/debian/ {{debian_codename}}-updates main contrib non-free
# deb-src http://mirrors.pku.edu.cn/debian/ {{debian_codename}}-updates main contrib non-free

deb http://mirrors.pku.edu.cn/debian/ {{debian_codename}}-backports main contrib non-free
# deb-src http://mirrors.pku.edu.cn/debian/ {{debian_codename}}-backports main contrib non-free

deb http://mirrors.pku.edu.cn/debian-security {{debian_codename}}-security main contrib non-free
# deb-src http://mirrors.pku.edu.cn/debian-security {{debian_codename}}-security main contrib non-free

# 如果条件允许，建议使用官方 security 源
#deb https://security.debian.org/debian-security {{debian_codename}}-security main contrib non-free
```

Debian 12 及以后版本，手动替换原有的 `/etc/apt/sources.list.d/debian.sources` 文件内容为：

```unix-conf
Types: deb
URIs: https://mirrors.tuna.tsinghua.edu.cn/debian
Suites: {{debian_codename}} {{debian_codename}}-updates {{debian_codename}}-backports {{debian_codename}}-security
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
```

修改文件后需要更新索引：

```bash
sudo apt-get update
```

### 关于 Secure Update

一般来说，不建议替换`security.debian.org`。由于镜像站同步可能会滞后，替换后可能会导致系统无法及时更新安全补丁。

对于无法访问`security.debian.org`的设备，可以替换为镜像站的`security`源，这是本文档的默认配置。
