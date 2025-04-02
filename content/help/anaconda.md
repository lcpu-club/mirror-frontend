---
mirrorId: anaconda
title: Anaconda
---

## 镜像配置

### 配置

在用户目录下创建 `.condarc` 文件并修改为下述内容

```yaml
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.lcpu.dev/anaconda/pkgs/main
  - https://mirrors.lcpu.dev/anaconda/pkgs/r
custom_channels:
  conda-forge: https://mirrors.lcpu.dev/anaconda/cloud
  pytorch: https://mirrors.lcpu.dev/anaconda/cloud
  bioconda: https://mirrors.lcpu.dev/anaconda/cloud
```

修改后执行下述命令以清除缓存：

`conda clean -i`

### 第三方库

可按需仿照配置文件中 `custom_channels` 从[第三方库列表](https://mirrors.lcpu.dev/anaconda/cloud/)中增加第三方库镜像使用。

### 软件安装程序

- Anaconda 安装包下载 `https://mirrors.lcpu.dev/anaconda/archive/`
- Miniconda 安装包下载地址 `https://mirrors.lcpu.dev/anaconda/miniconda/`

注：根据 Anaconda 的用户协议，本镜像仅限教育科研使用。

注：本镜像同步使用由 TUNA 提供的同步脚本 [`ananconda.py`](https://github.com/tuna/tunasync-scripts/blob/master/anaconda.py)。
