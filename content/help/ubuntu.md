---
mirrorId: ubuntu
navTitle: Ubuntu
variables:
  ubuntu_codename:
    type: select
    name: Ubuntu 版本
    options:
      - { name: 'Ubuntu 20.04 LTS', value: 'focal' }
      - { name: 'Ubuntu 18.04 LTS', value: 'bionic' }
      - { name: 'Ubuntu 16.04 LTS', value: 'xenial' }
      - { name: 'Ubuntu 14.04 LTS', value: 'trusty' }
    default: 'focal'
---

## 镜像配置

Ubuntu 镜像配置文件位于`/etc/apt/sources.list`。

### 使用命令修改

```bash
sudo sed -ri.bak -e 's/\/\/.*?(archive.ubuntu.com|mirrors.*?)\/ubuntu/\/\/mirrors.pku.edu.cn\/ubuntu/g' -e '/security.ubuntu.com\/ubuntu/d' /etc/apt/sources.list
```

注：该命令表示将`archive.ubuntu.com`和`mirrors.*`替换为`mirrors.pku.edu.cn`，并把`security.ubuntu.com`删除。

修改文件后需要更新索引：

```bash
sudo apt-get update
```

### 直接替换文件

手动替换文件内容为：

```unix-conf
deb http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}} main restricted universe multiverse
# deb-src http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}} main restricted universe multiverse

deb http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-updates main restricted universe multiverse
# deb-src http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-updates main restricted universe multiverse

deb http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-backports main restricted universe multiverse
# deb-src http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-backports main restricted universe multiverse

deb http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-security main restricted universe multiverse
# deb-src http://mirrors.pku.edu.cn/ubuntu {{ubuntu_codename}}-security main restricted universe multiverse

## Uncomment the following two lines to add software from Canonical's
## 'partner' repository.
## This software is not part of Ubuntu, but is offered by Canonical and the
## respective vendors as a service to Ubuntu users.
# deb http://archive.canonical.com/ubuntu {{ubuntu_codename}} partner
# deb-src http://archive.canonical.com/ubuntu {{ubuntu_codename}} partner
```

修改文件后需要更新索引：

```bash
sudo apt-get update
```
