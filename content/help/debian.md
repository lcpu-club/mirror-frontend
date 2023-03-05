---
mirrorId: debian
navTitle: Debian
---

## 镜像配置

Debian 镜像配置文件位于 `/etc/apt/sources.list`。

手动替换原有的 `/etc/apt/sources.list` 文件内容为：

```unix-conf
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb http://mirrors.pku.edu.cn/debian/ {debian_codename} main contrib non-free
# deb-src https://mirrors.pku.edu.cn/debian/ {debian_codename} main contrib non-free
deb http://mirrors.pku.edu.cn/debian/ {debian_codename}-updates main contrib non-free
# deb-src http://mirrors.pku.edu.cn/debian/ {debian_codename}-updates main contrib non-free

deb http://mirrors.pku.edu.cn/debian/ {debian_codename}-backports main contrib non-free
# deb-src http://mirrors.pku.edu.cn/debian/ {debian_codename}-backports main contrib non-free

deb http://mirrors.pku.edu.cn/debian-security {debian_codename}-security main contrib non-free
# deb-src http://mirrors.pku.edu.cn/debian-security {debian_codename}-security main contrib non-free
```

修改文件后需要更新索引：

```bash
sudo apt-get update
```
