---
mirrorId: linuxmint
navTitle: Linux Mint
---

## 镜像配置

Linux Mint 也采用 apt 作为包管理器，与 Ubuntu 和 Debian 类似，您需要编辑`/etc/apt/sources.list`和`/etc/apt/sources.list.d/*`中的路径。对于来自 Ubuntu 的部分源，可以参考 Ubuntu 镜像使用帮助进行修改。

以 vera 为例，要使用北京大学软件源，需要修改`/etc/apt/sources.list.d/mint.list`，把`packages.linuxmint.com`替换为`mirrors.pku.edu.cn/linuxmint`。

```unix-conf
deb http://mirrors.pku.edu.cn/linuxmint/ vera main upstream import backport
```

然后运行`apt update`即可。
