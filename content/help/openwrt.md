---
mirrorId: openwrt
navTitle: OpenWRT
---

OpenWRT（曾用名 LEDE）是一款广泛应用于路由器的嵌入式操作系统。本站提供 OpenWRT 的包管理器 opkg 的 release 和 snapshots 镜像。

1. 手工替换
   登录到路由器，并编辑 `/etc/opkg/distfeeds.conf` 文件，将其中的 `downloads.openwrt.org` 替换为 `mirrors.pku.edu.cn/openwrt` 即可。

1. 自动替换
   执行如下命令自动替换

```bash
cp /etc/opkg/distfeeds.conf /etc/opkg/distfeeds.conf.bak
sed -i 's_downloads.openwrt.org_mirrors.pku.edu.cn/openwrt_' /etc/opkg/distfeeds.conf
```
