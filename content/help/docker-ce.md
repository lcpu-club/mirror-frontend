---
mirrorId: docker-ce
title: Docker-ce
variables:
  distro:
    type: select
    name: Debian/Ubuntu选择
    options:
      - { name: 'Ubuntu', value: 'ubuntu' }
      - { name: 'Debian', value: 'debian' }
    default: 'ubuntu'
---

# 自动识别操作系统并安装

Docker 提供了一个自动配置与安装的脚本，支持 **Debian、RHEL、SUSE** 系列及衍生系统的安装。

以下内容假定

- 您为 `root` 用户，或有 `sudo` 权限，或知道 `root` 密码；
- 您系统上有 `curl` 或 `wget`

```bash
export DOWNLOAD_URL="https://mirrors.pku.edu.cn/docker-ce"
```

## 如您使用 curl

```bash
curl -fsSL https://get.docker.com/ | sh
```

## 如您使用 wget

```bash
wget -O- https://get.docker.com/ | sh
```

# CentOS

CenOS 中，使用下述命令下载 Docker-ce 安装包镜像配置文件到指定位置。

```bash
sudo wget http://mirrors.pku.edu.cn/repoconfig/docker-ce/docker-ce.repo -O /etc/yum.repos.d/docker-ce.repo
```

修改文件后需要更新缓存：

```bash
sudo yum makecache
```

# Ubuntu/Debian

注：已根据您的选择替换了代码

以下内容根据 [官方文档](https://docs.docker.com/engine/install/{{distro}}/) 修改而来。

如果你过去安装过 docker，先删掉:

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

首先安装依赖:

```bash
sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common
```

信任 Docker 的 GPG 公钥:

```bash
curl -fsSL https://mirrors.pku.edu.cn/docker-ce/linux/{{distro}}/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

添加软件仓库:

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://mirrors.pku.edu.cn/docker-ce/linux/{{distro}} \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

最后安装

```bash
sudo apt-get update
sudo apt-get install docker-ce
```
