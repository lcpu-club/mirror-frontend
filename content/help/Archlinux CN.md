---
mirrorId: archlinuxcn
navTitle: Arch Linux CN
---

## 镜像配置

编辑文件 `/etc/pacman.d/mirrorlist`，在开头插入：

```unix-conf
## China
Server = https://mirrors.pku.edu.cn/archlinuxcn/$arch
```

以添加并启用北大镜像源。

之后用 `-Sy` 安装 archlinuxcn-keyring 包导入 GPG key：

```bash
sudo pacman -Sy archlinuxcn-keyring
```

最后执行命令：

```bash
sudo pacman -Syyu
```

强制刷新软件包列表
