---
mirrorId: termux
title: Termux
---

# 镜像配置

### 文本用户界面（TUI）替换

在较新版的 Termux 中，官方提供了文本交互的方式（TUI）来半自动替换镜像，推荐使用该种方式以规避其他风险。

在 Termux 中执行如下命令：

```bash
termux-change-repo
```

在图形界面引导下，使用自带方向键可上下移动。第一步使用空格选择需要更换的仓库，回车键确认。之后在第二步选择 `mirrors.lcpu.dev` (Mirror by Peking University) 镜像源。确认无误后回车，镜像源会自动完成更换。

### 命令行替换

使用如下命令行替换官方源：

```bash
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.lcpu.dev/termux/termux-main stable main@' $PREFIX/etc/apt/sources.list
apt update && apt upgrade
```

### 手动修改

编辑 `$PREFIX/etc/apt/sources.list` 修改为如下内容

```unix-conf
deb https://mirrors.lcpu.dev/termux/termux-main stable main
```

请使用内置或安装在 Termux 里的文本编辑器，例如 `vi` / `vim` / `nano` 等，**不要使用 RE 管理器等其他具有 ROOT 权限的外部 APP** 来修改 Termux 的文件。

### 社区源

镜像站还提供了如下社区维护的源，如需使用请自行添加：

- https://mirrors.lcpu.dev/termux/termux-x11
- https://mirrors.lcpu.dev/termux/termux-root

### 警告

镜像仅适用于 Android 7.0 (API 24) 及以上版本，旧版本系统使用本镜像可能导致程序错误。
