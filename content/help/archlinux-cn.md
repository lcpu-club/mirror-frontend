---
mirrorId: archlinuxcn
title: Arch Linux CN
---

## 镜像配置

在文件 `/etc/pacman.conf`末尾插入以下内容：

```unix-conf
[archlinuxcn]
Server = https://mirrors.lcpu.dev/archlinuxcn/$arch
```

以添加并启用北大 Arch Linux CN 镜像源。

之后用 `-Sy` 安装 `archlinuxcn-keyring` 包导入 GPG key：

```bash
sudo pacman -Sy archlinuxcn-keyring
```

最后执行命令：

```bash
sudo pacman -Syyu
```

以便强制刷新软件包列表。
