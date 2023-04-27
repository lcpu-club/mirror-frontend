<template>
  <div class="flex justify-center">
    <div class="shadow flex-1 max-w-256 flex flex-col gap-4">
      <div class="flex justify-between items-center p-4 border-b">
        <div class="text-2xl">About</div>
      </div>
      <article class="markdown-body p-4">
        本站支持 IPV4 和 IPV6 访问，提供 HTTP 和 HTTPS 服务。
        <br />
        镜像站由<a href="https://its.pku.edu.cn" target="_blank">北京大学计算中心</a>运行维护。
        <br />
        镜像站由一群热爱开源的小伙伴开发。
        <br />
        镜像站新版本前端由<a href="https://lcpu.club">北京大学 Linux 俱乐部</a>
        提供， Linux 俱乐部是是由学生自发成立的，以学习研究 Linux
        操作系统和其它各种与开源相关的软硬件技术为目的社团。欢迎大家加入 Linux 俱乐部。
        <br />
        镜像站第一版贡献者：
        <a href="https://github.com/jeremyguo">郭俊毅</a>、
        <a href="https://github.com/fuzhenxin">付振新</a>、
        <a href="https://github.com/keke04">周可行</a>、
        <a href="https://github.com/pisonjay">彭伟桀</a>、
        <a href="https://github.com/yixuan-wang">王奕轩</a>、
        <a href="https://github.com/ouyen">ouyen</a>。
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/styles/markdown.css'
</script>
