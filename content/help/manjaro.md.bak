---
mirrorId: manjaro
title: Manjaro
---

## 镜像配置

编辑文件 `/etc/pacman.d/mirrorlist`，在开头插入：

```unix-conf
## China
Server = https://mirrors.lcpu.dev/manjaro/$repo/os/$arch
```

以添加并启用北大镜像源。

修改文件 `/etc/pacman.d/mirrorlist` 后，使用 Manjaro 的软件包管理器更新：

```bash
pamac checkupdates
pamac update
```

由于 Manjaro 基于 Arch Linux，也可以使用 Arch Linux 的 pacman 命令更新：

```bash
pacman -Syyu
```

以强制刷新软件包列表。
