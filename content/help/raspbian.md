---
mirrorId: raspbian
title: Raspbian
---

## Raspbian 镜像使用帮助

### Raspbian 简介

Raspbian 是专门用于 ARM 卡片式计算机 Raspberry Pi® “树莓派”的操作系统， 其基于 Debian 开发，针对 Raspberry Pi 硬件优化。

Raspbian 并非由树莓派的开发与维护机构 The Raspberry Pi Foundation “树莓派基金会” 官方支持。其维护者是一群 Raspberry Pi 硬件和 Debian 项目的爱好者。

### 系统架构与版本

架构：

- armhf：32 位 ARMv7 处理器，如 Raspberry Pi 1/2/3/4
- aarch64：64 位 ARMv8 处理器，如 Raspberry Pi 3/4

版本：

- Raspbian 9 “Stretch”：基于 Debian 9 “Stretch”
- Raspbian 10 “Buster”：基于 Debian 10 “Buster”
- Raspbian 11 “Bullseye”：基于 Debian 11 “Bullseye”

注：Raspbian 系统由于从诞生开始就基于（为了 armhf，也必须基于）当时还是 testing 版本的 7.0/wheezy，所以 Raspbian 不倾向于使用 stable/testing 表示版本。

### 使用说明

首先通过 `uname -a` 命令查看系统架构，通过 `cat /etc/os-release` 命令查看系统版本。

各 Debian 下方记为 `<codename>`，请注意自行替换：

```unix-conf
# armv7l 用户：编辑 `/etc/apt/sources.list` 文件，删除原文件所有内容，用以下内容取代
deb http://mirrors.lcpu.dev/raspbian/raspbian/ <codename> main non-free contrib rpi
# deb-src http://mirrors.lcpu.dev/raspbian/raspbian/ <codename> main non-free contrib rpi

# armv7l 用户如果需要开启 multi-arch 使用 arm64 软件源，需要在 `/etc/apt/sources.list` 中加上
deb [arch=arm64] http://mirrors.lcpu.dev/raspbian/multiarch/ <codename> main

# aarch64 用户：编辑 `/etc/apt/sources.list` 文件，用以下内容取代：
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.lcpu.dev/debian/ <codename> main contrib non-free
# deb-src https://mirrors.lcpu.dev/debian/ <codename> main contrib non-free
deb https://mirrors.lcpu.dev/debian/ <codename>-updates main contrib non-free
# deb-src https://mirrors.lcpu.dev/debian/ <codename>-updates main contrib non-free
deb https://mirrors.lcpu.dev/debian/ <codename>-backports main contrib non-free
# deb-src https://mirrors.lcpu.dev/debian/ <codename>-backports main contrib non-free
deb https://mirrors.lcpu.dev/debian-security <codename>-security main contrib non-free
# deb-src https://mirrors.lcpu.dev/debian-security <codename>-security main contrib non-free

# 对于两个架构，编辑 `/etc/apt/sources.list.d/raspi.list` 文件，删除原文件所有内容，用以下内容取代：
deb https://mirrors.lcpu.dev/raspberrypi/ <codename> main
```

注意：网址末尾的 `raspbian` 重复两次是必须的。因为 Raspbian 的仓库中除了 APT 软件源还包含其他代码。APT 软件源不在仓库的根目录，而在 `raspbian/` 子目录下。

编辑镜像站后，请使用 `sudo apt-get update` 命令，更新软件源列表，同时检查您的编辑是否正确。

### 相关链接

#### Raspbian 链接

- Raspbian 主页: [https://www.raspbian.org](https://www.raspbian.org/)
- 文档：https://www.raspbian.org/RaspbianDocumentation
- Bug 反馈：https://www.raspbian.org/RaspbianBugs
- 镜像列表: https://www.raspbian.org/RaspbianMirrors

#### 树莓派链接

- 树莓派基金会主页: https://www.raspberrypi.org/
- 树莓派基金会论坛 Raspberry Pi OS 版块: https://raspberrypi.org/forums/viewforum.php?f=66

### 关于本文档

本文档内容的原始版本由 Raspberry Pi 中文社区“树莓爱好者论坛”提供。按照[知识共享署名-非商业性使用 3.0 中国大陆许可协议](http://creativecommons.org/licenses/by-nc/3.0/cn/)授权北京大学镜像站使用。同时，北京大学镜像站也参考了清华大学 TUNA 镜像站的 Raspbian 镜像使用帮助，对其内容进行了修改。

我们提供的修改版本同样使用[知识共享署名-非商业性使用 3.0 中国大陆许可协议](http://creativecommons.org/licenses/by-nc/3.0/cn/)。
