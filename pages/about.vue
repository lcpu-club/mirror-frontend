<template>
  <div class="flex justify-center">
    <div class="shadow flex-1 max-w-256 flex flex-col gap-4 p-4">
      <div class="flex justify-between items-center border-b">
        <div class="text-2xl">About</div>
      </div>
      <article class="markdown-body">
        本站支持 IPV4 和 IPV6 访问，提供 HTTP，HTTPS 服务。
        <br />
        我们欢迎热爱开源，热爱镜像的同学加入我们。

        <h2>特别鸣谢</h2>
        <div align="center">
          <div>北京大学开源镜像站由计算中心提供硬件支持与技术支持</div>
          <br />
          <a href="https://its.pku.edu.cn" target="_blank">
            <img
              src="https://www.pku.edu.cn/Uploads/Picture/2019/12/26/s5e04176fbbfa3.png"
              width="200"
            />
          </a>
        </div>

        <h2>加入我们</h2>
        <div class="grid grid-rows-[auto_1fr] place-items-center gap-2 grid-flow-col">
          <div>北京大学开源软件协会</div>
          <div>
            <a href="https://github.com/PKUOSC" target="_blank">
              <img src="@/assets/images/pkuosc.svg" width="200" />
            </a>
          </div>
          <div>北京大学Linux俱乐部</div>
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
