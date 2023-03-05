---
mirrorId: openeuler
navTitle: OpenEuler
---

## 使用说明

修改 `/etc/yum.repos.d/openEuler.repo` 中的地址，指向 `https://mirrors.pku.edu.cn/openeuler`。
具体命令为：

```bash
sudo sed  -e "s|http://repo.openeuler.org|https://mirrors.pku.edu.cn/openeuler|g" \
          -i.bak \
          /etc/yum.repos.d/openEuler.repo
```
