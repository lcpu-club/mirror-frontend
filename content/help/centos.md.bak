---
mirrorId: centos
title: CentOS
---

## 说明

CentOS8 的非 Stream 版已经移动至 Centos-Vault, 请访问`https://mirrors.lcpu.dev/Help/CentOS-Vault`获取使用方式。

本文包括 `CentOS7` 和 `CentOS8 Stream`的说明。

## CentOS7

CentOS 7 镜像配置文件位于`/etc/yum.repos.d/CentOS-Base.repo`。

1. 使用命令修改

   ```bash
   sudo sed -e 's|^mirrorlist=|#mirrorlist=|g' \
             -e 's|^#baseurl=http://mirror.centos.org|baseurl=https://mirrors.lcpu.dev|g' \
             -i.bak \
             /etc/yum.repos.d/CentOS-Base.repo
   ```

   即将该文件中`baseurl=`行取消注释并改为北大源地址http://mirrors.lcpu.dev/centos/开头。

   修改文件后需要更新缓存：

   ```bash
   sudo yum makecache
   ```

2. 或直接替换文件

   可通过如下命令直接下载配置文件并替换原有的`/etc/yum.repos.d/CentOS-Base.repo`：

   ```bash
   sudo curl http://mirrors.lcpu.dev/repoconfig/centos7/CentOS-Base.repo -o /etc/yum.repos.d/CentOS-Base.repo
   ```

   ```unix-conf
   # CentOS-Base.repo
   #
   # The mirror system uses the connecting IP address of the client and the
   # update status of each mirror to pick mirrors that are updated to and
   # geographically close to the client.  You should use this for CentOS updates
   # unless you are manually picking other mirrors.
   #
   # If the mirrorlist= does not work for you, as a fall back you can try the
   # remarked out baseurl= line instead.
   #
   #

   [base]
   name=CentOS-$releasever - Base
   #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os&infra=$infra
   baseurl=http://mirrors.lcpu.dev/centos/$releasever/os/$basearch/
   gpgcheck=1
   gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

   #released updates
   [updates]
   name=CentOS-$releasever - Updates
   #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates&infra=$infra
   baseurl=http://mirrors.lcpu.dev/centos/$releasever/updates/$basearch/
   gpgcheck=1
   gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

   #additional packages that may be useful
   [extras]
   name=CentOS-$releasever - Extras
   #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras&infra=$infra
   baseurl=http://mirrors.lcpu.dev/centos/$releasever/extras/$basearch/
   gpgcheck=1
   gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

   #additional packages that extend functionality of existing packages
   [centosplus]
   name=CentOS-$releasever - Plus
   #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus&infra=$infra
   baseurl=http://mirrors.lcpu.dev/centos/$releasever/centosplus/$basearch/
   gpgcheck=1
   enabled=0
   gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
   ```

   修改文件后需要更新缓存：

   ```bash
   sudo yum makecache
   ```

## CentOS 8

CentOS 8 镜像配置文件位于`/etc/yum.repos.d/CentOS-Linux-[AppStream|BaseOS|Extras|PowerTools|Plus].repo`。

1. 使用命令修改

   ```bash
   sudo sed -e 's|^mirrorlist=|#mirrorlist=|g' \
            -e 's|^#baseurl=http://mirror.centos.org/$contentdir|baseurl=https://mirrors.lcpu.dev/centos|g' \
            -i.bak \
            /etc/yum.repos.d/CentOS-Linux-AppStream.repo \
            /etc/yum.repos.d/CentOS-Linux-BaseOS.repo \
            /etc/yum.repos.d/CentOS-Linux-Extras.repo \
            /etc/yum.repos.d/CentOS-Linux-PowerTools.repo \
            /etc/yum.repos.d/CentOS-Linux-Plus.repo
   ```

   修改文件后需要更新缓存：

   ```bash
   sudo yum makecache
   ```

2. 或直接替换文件

   可通过如下命令直接下载配置文件并替换原有的`/etc/yum.repos.d/CentOS-Linux-[AppStream|BaseOS|Extras|PowerTools|Plus].repo`：

   ```bash
       sudo wget http://mirrors.lcpu.dev/repoconfig/centos8/CentOS-Linux-AppStream.repo -O /etc/yum.repos.d/CentOS-Linux-AppStream.repo
       sudo wget http://mirrors.lcpu.dev/repoconfig/centos8/CentOS-Linux-BaseOS.repo -O /etc/yum.repos.d/CentOS-Linux-BaseOS.repo
       sudo wget http://mirrors.lcpu.dev/repoconfig/centos8/CentOS-Linux-Extras.repo -O /etc/yum.repos.d/CentOS-Linux-Extras.repo
       sudo wget http://mirrors.lcpu.dev/repoconfig/centos8/CentOS-Linux-PowerTools.repo -O /etc/yum.repos.d/CentOS-Linux-PowerTools.repo
       sudo wget http://mirrors.lcpu.dev/repoconfig/centos8/CentOS-Linux-Plus.repo -O /etc/yum.repos.d/CentOS-Linux-Plus.repo
   ```

   修改文件后需要更新缓存：

   ```bash
      sudo yum makecache
   ```

   - `CentOS-Linux-AppStream.repo`

     ```unix-conf
     # CentOS-Linux-AppStream.repo
     #
     # The mirrorlist system uses the connecting IP address of the client and the
     # update status of each mirror to pick current mirrors that are geographically
     # close to the client.  You should use this for CentOS updates unless you are
     # manually picking other mirrors.
     #
     # If the mirrorlist does not work for you, you can try the commented out
     # baseurl line instead.

     [appstream]
     name=CentOS Linux $releasever - AppStream
     #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=AppStream&infra=$infra
     baseurl=http://mirrors.lcpu.dev/centos/$releasever/AppStream/$basearch/os/
     gpgcheck=1
     enabled=1
     gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
     ```

   - `CentOS-Linux-BaseOS.repo`

     ```unix-conf
     # CentOS-Linux-BaseOS.repo
     #
     # The mirrorlist system uses the connecting IP address of the client and the
     # update status of each mirror to pick current mirrors that are geographically
     # close to the client.  You should use this for CentOS updates unless you are
     # manually picking other mirrors.
     #
     # If the mirrorlist does not work for you, you can try the commented out
     # baseurl line instead.

     [baseos]
     name=CentOS Linux $releasever - BaseOS
     #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=BaseOS&infra=$infra
     baseurl=http://mirrors.lcpu.dev/centos/$releasever/BaseOS/$basearch/os/
     gpgcheck=1
     enabled=1
     gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
     ```

   - `CentOS-Linux-Extras.repo`

     ```unix-conf
     # CentOS-Linux-Extras.repo
     #
     # The mirrorlist system uses the connecting IP address of the client and the
     # update status of each mirror to pick current mirrors that are geographically
     # close to the client.  You should use this for CentOS updates unless you are
     # manually picking other mirrors.
     #
     # If the mirrorlist does not work for you, you can try the commented out
     # baseurl line instead.

     [extras]
     name=CentOS Linux $releasever - Extras
     #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras&infra=$infra
     baseurl=http://mirrors.lcpu.dev/centos/$releasever/extras/$basearch/os/
     gpgcheck=1
     enabled=1
     gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
     ```

   - `CentOS-Linux-PowerTools.repo`

     ```unix-conf
     # CentOS-Linux-PowerTools.repo
     #
     # The mirrorlist system uses the connecting IP address of the client and the
     # update status of each mirror to pick current mirrors that are geographically
     # close to the client.  You should use this for CentOS updates unless you are
     # manually picking other mirrors.
     #
     # If the mirrorlist does not work for you, you can try the commented out
     # baseurl line instead.

     [powertools]
     name=CentOS Linux $releasever - PowerTools
     #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=PowerTools&infra=$infra
     baseurl=http://mirrors.lcpu.dev/centos/$releasever/PowerTools/$basearch/os/
     gpgcheck=1
     enabled=0
     gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
     ```

   - `CentOS-Linux-Plus.repo`

     ```unix-conf
     # CentOS-Linux-Plus.repo
     #
     # The mirrorlist system uses the connecting IP address of the client and the
     # update status of each mirror to pick current mirrors that are geographically
     # close to the client.  You should use this for CentOS updates unless you are
     # manually picking other mirrors.
     #
     # If the mirrorlist does not work for you, you can try the commented out
     # baseurl line instead.

     [plus]
     name=CentOS Linux $releasever - Plus
     #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus&infra=$infra
     baseurl=http://mirrors.eecser.com/centos/$releasever/centosplus/$basearch/os/
     gpgcheck=1
     enabled=0
     gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
     ```
