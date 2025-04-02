---
mirrorId: centos-vault
title: CentOS Vault
---

该版本提供 CentOS 以不再维护的版本的镜像。

首先在服务器上运行`cat /etc/redhat-release`命令获取操作系统小版本号，比如`8.5.2111`或`7.9.2009`

1. 使用命令修改

```
# 对于CentOS8
mirrorver=8.5.2111  #这里使用上面命令获取到的小版本号
sudo sed -e "s|^mirrorlist=|#mirrorlist=|g" \
          -e "s|^#baseurl=http://mirror.centos.org/\$contentdir/\$releasever|baseurl=https://mirrors.lcpu.dev/centos-vault/$mirrorver|g" \
          -i.bak \
          /etc/yum.repos.d/CentOS-*.repo

# 对于CetnOS7及之前的版本
mirrorver=7.9.2009  #这里使用上面命令获取到的小版本号
sudo sed -e "s|^mirrorlist=|#mirrorlist=|g" \
          -e "s|^#baseurl=http://mirror.centos.org/centos/\$releasever|baseurl=https://mirrors.lcpu.dev/centos-vault/$mirrorver|g" \
          -i.bak \
          /etc/yum.repos.d/CentOS-*.repo
```

2. 手动将`/etc/yum.repos.d/CentOS-*.repo`文件中 baseurl=行取消注释并改为北大源地址http://mirrors.lcpu.dev/centos-vault/${小版本号}开头。
