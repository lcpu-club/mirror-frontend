---
mirrorId: archlinux
title: Arch Linux
downloads:
  - link: archlinux/iso/latest/:^archlinux-(?<date>.*?)-(?<arch>.*?)\.iso$
    name: 'ArchLinux {{date}} {{arch}}'
---

## 镜像配置

编辑文件 `/etc/pacman.d/mirrorlist`，在开头插入

```unix-conf
## China
Server = https://mirrors.lcpu.dev/archlinux/$repo/os/$arch
```

以添加并启用北大镜像源。

修改文件 `/etc/pacman.d/mirrorlist`后，执行命令

```bash
pacman -Syyu
```

以强制刷新软件包列表。
