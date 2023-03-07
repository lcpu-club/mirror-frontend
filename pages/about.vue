<template>
  <div class="flex justify-center">
    <div class="shadow flex-1 max-w-256 flex flex-col gap-4">
      <div class="flex justify-between items-center p-4 border-b">
        <div class="text-2xl">About</div>
      </div>
      <article class="markdown-body p-4">
        北京大学开源软件镜像站由
        <a href="https://its.pku.edu.cn">北京大学计算中心</a>
        提供硬件支持与技术支持。
        <br />
        本站支持 IPV4 和 IPV6 访问，提供 HTTP 和 HTTPS 服务。
        <br />
        欢迎所有热爱开源，热爱镜像的同学加入我们。

        <h3>加入我们</h3>
        <div class="grid grid-rows-[auto_1fr] place-items-center gap-2 grid-flow-col">
          <div>北京大学开源软件协会</div>
          <div>
            <a href="https://github.com/PKUOSC" target="_blank">
              <img src="@/assets/images/pkuosc.svg" width="200" />
            </a>
          </div>
          <div>北京大学 Linux 俱乐部</div>
          <div>
            <a href="https://lcpu.club">
              <img src="https://lcpu.club/lcpulogo.svg" width="100" />
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/styles/markdown.css'
</script>
