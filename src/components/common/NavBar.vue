<script setup lang="ts">
  // const router = useRouter();
  // const activeKey = ref('home');
  const menuOptions = [
    { id: 'home', label: '首页', path: '/' },
    { id: 'case', label: '数字化转型案例', path: '/case' },
    { id: 'news', label: '新闻资讯', path: '/news' },
    { id: 'geophysics', label: '地球物理板块', path: '/geophysics' },
    { id: 'algorithm', label: '深度学习算法预研', path: '/algorithm' },
    { id: 'model', label: '大模型技术跟踪', path: '/model' },
  ];
</script>

<template>
  <div
    class="header w-full flex-center color-white hover:bg-white hover:color-black fixed top-0 transition-500"
  >
    <img class="w-20 h-20" src="../../assets/logo.jpg" alt="" />
    <ul class="item w-200 flex-center">
      <li v-for="item in menuOptions" :key="item.id" class="mx-4 font-800">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid rgba(226, 226, 226, 0.3);
  }
  .item {
    li {
      position: relative;
      cursor: pointer;
      height: 80px;
      line-height: 80px;
    }
    li:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      width: 0;
      margin: 0 auto;
      height: 2px;
      bottom: 0;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      background-color: #003686;
    }
    li:hover:before {
      width: 100%;
    }
  }
</style>
