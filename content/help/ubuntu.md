---
mirrorId: ubuntu
title: Ubuntu
variables:
  ubuntu_codename:
    type: select
    name: Ubuntu 版本
    options:
      - { name: 'Ubuntu 24.04 LTS', value: 'noble' }
      - { name: 'Ubuntu 22.04 LTS', value: 'jammy' }
      - { name: 'Ubuntu 20.04 LTS', value: 'focal' }
      - { name: 'Ubuntu 18.04 LTS', value: 'bionic' }
      - { name: 'Ubuntu 16.04 LTS', value: 'xenial' }
      - { name: 'Ubuntu 14.04 LTS', value: 'trusty' }
    default: 'noble'
downloads:
  - name: '{{name}} ({{release}})'
    link: 'ubuntu-releases/:^(?<release>[a-z]+)$/:^(?<name>.+)\.iso$'
---

## 镜像配置

22.04 版本及之前， Ubuntu 镜像配置文件位于`/etc/apt/sources.list`。

从 24.04 版本开始，Ubuntu 默认启用 DEB822 格式，位于`/etc/apt/sources.list.d/ubuntu.sources`。

### 使用命令修改

```bash
sudo sed -ri.bak -e 's/(http|https):\/\/(archive.ubuntu.com|mirrors.[^\/]*?)\/ubuntu/\1:\/\/mirrors.pku.edu.cn\/ubuntu/g' -e '/security.ubuntu.com\/ubuntu/d' /etc/apt/sources.list /etc/apt/sources.list.d/ubuntu.sources
```

注：该命令表示将 `archive.ubuntu.com` 和 `mirrors.*` 替换为 `mirrors.pku.edu.cn`，并把 `security.ubuntu.com` 删除。

修改文件后需要更新索引：

```bash
sudo apt-get update
```

### 直接替换文件

Ubuntu 22.04 及以前，手动替换文件内容为：

```unix-conf
deb http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}} main restricted universe multiverse
# deb-src http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}} main restricted universe multiverse

deb http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-updates main restricted universe multiverse
# deb-src http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-updates main restricted universe multiverse

deb http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-backports main restricted universe multiverse
# deb-src http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-backports main restricted universe multiverse

deb http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-security main restricted universe multiverse
# deb-src http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-security main restricted universe multiverse

# 如果条件允许，建议使用官方 security 源
# deb http://security.ubuntu.com/ubuntu {{ubuntu_codename}}-security main restricted universe multiverse

## Uncomment the following two lines to add software from Canonical's
## 'partner' repository.
## This software is not part of Ubuntu, but is offered by Canonical and the
## respective vendors as a service to Ubuntu users.
# deb http://archive.canonical.com/ubuntu {{ubuntu_codename}} partner
# deb-src http://archive.canonical.com/ubuntu {{ubuntu_codename}} partner
```

从 Ubuntu 24.04 开始，手动替换文件内容为：

```unix-conf
Types: deb
URIs: https://mirrors.pku.edu.cn/ubuntu
Suites: {{ubuntu_codename}} {{ubuntu_codename}}-updates {{ubuntu_codename}}-backports {{ubuntu_codename}}-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
# Types: deb-src
# URIs: https://mirrors.pku.edu.cn/ubuntu
# Suites: {{ubuntu_codename}} {{ubuntu_codename}}-updates {{ubuntu_codename}}-backports
# Components: main restricted universe multiverse
# Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

# Types: deb-src
# URIs: http://security.ubuntu.com/ubuntu/
# Suites: {{ubuntu_codename}}-security
# Components: main restricted universe multiverse
# Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

# 如果条件允许，建议使用官方 security 源
# Types: deb
# URIs: http://security.ubuntu.com/ubuntu/
# Suites: {{ubuntu_codename}}-security
# Components: main restricted universe multiverse
# Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

修改文件后需要更新索引：

```bash
sudo apt-get update
```

### 关于 Secure Update

一般来说，不建议替换`security.ubuntu.com`。由于镜像站同步可能会滞后，替换后可能会导致系统无法及时更新安全补丁。

对于无法访问`security.ubuntu.com`的设备，可以替换为镜像站的`security`源，这是本文档的默认配置。
