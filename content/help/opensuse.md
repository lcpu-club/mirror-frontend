---
mirrorId: opensuse
title: OpenSUSE
---

## 镜像配置

openSUSE 默认源使用 [MirrorBrain](https://en.opensuse.org/SDB:Metalink) 进行内容分发网络管理，请求时先从 openSUSE 主服务器上获取元信息后自动分配镜像站点。有时请求元信息可能会较慢，这时可以关掉自动刷新或者通过配置镜像源来替换默认源。

### 命令行配置软件源

配置之前请先禁用官方源：

```
sudo zypper mr -da
```

然后根据你使用的版本进行配置：

#### openSUSE Tumbleweed 配置方法

```bash
sudo zypper ar -cfg 'https://mirrors.lcpu.dev/opensuse/tumbleweed/repo/oss/' pku-mirror-oss
sudo zypper ar -cfg 'https://mirrors.lcpu.dev/opensuse/tumbleweed/repo/non-oss/' pku-mirror-non-oss
sudo zypper ar -fcg 'https://mirrors.lcpu.dev/opensuse/update/tumbleweed/' pku-mirror-update
```

#### openSUSE Leap 配置方法

```bash
sudo zypper ar -cfg 'https://mirrors.lcpu.dev/opensuse/distribution/leap/$releasever/repo/oss/' pku-mirror-oss
sudo zypper ar -cfg 'https://mirrors.lcpu.dev/opensuse/distribution/leap/$releasever/repo/non-oss/' pku-mirror-non-oss
sudo zypper ar -cfg 'https://mirrors.lcpu.dev/opensuse/update/leap/$releasever/oss/' pku-mirror-update
sudo zypper ar -cfg 'https://mirrors.lcpu.dev/opensuse/update/leap/$releasever/non-oss/' pku-mirror-update-non-oss
```

Leap 15.3 或更新版本还需要添加 sle 和 backports 源：

```bash
sudo zypper ar -cfg 'https://mirrors.lcpu.dev/opensuse/update/leap/$releasever/sle/' pku-mirror-sle-update
sudo zypper ar -cfg 'https://mirrors.lcpu.dev/opensuse/update/leap/$releasever/backports/' pku-mirror-backports-update
```

最后刷新软件源：

```bash
sudo zypper ref
```

### YaST 图形界面配置软件源

1. 打开 YaST；
2. 点击 Software (软件) 分组中的 Software Repositories(软件源)；
3. 在打开的窗口上方的列表中点击 openSUSE-Leap-XX.X-Oss 或 openSUSE-Tumbleweed-Oss，点击 Edit（编辑）；
4. 将 download.opensuse.org 替换为 mirrors.lcpu.dev/opensuse，点 OK；
5. 再用同样的方法编辑 -Non-Oss 和 -Update;
6. 再点击右下方的 刷新 ，选择 刷新全部标记为已启用的条目 ，刷新全部的软件源
