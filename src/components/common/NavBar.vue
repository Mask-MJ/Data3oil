<script setup lang="ts">
  const menuOptions = [
    { id: 'home', label: '首页', path: '/' },
    { id: 'about', label: '公司简介', path: '/about' },
    { id: 'digitalize', label: '数字化转型案例', path: '/digitalize' },
    { id: 'outerModel', label: '大模型', path: '/outerModel' },
    { id: 'intelligence', label: '人工智能', path: '/intelligence' },
    { id: 'energy', label: '能源板块', path: '/energy' },
    { id: 'news', label: '新闻资讯', path: '/news' },
  ];
  const scrollY = ref(0);
  onMounted(() => {
    window.addEventListener('scroll', () => {
      scrollY.value = window.scrollY;
    });
  });
  onDeactivated(() => {
    window.removeEventListener('scroll', () => {
      scrollY.value = 0;
    });
  });
</script>

<template>
  <div
    class="header w-full flex-center color-white hover:bg-white hover:color-black fixed top-0 transition-500 z-999"
    :class="scrollY && 'bg-white color-black! '"
    @mouseenter="scrollY = 1"
    @mouseleave="scrollY = 0"
  >
    <img class="w-14 h-14" :src="scrollY ? '/logo.png' : '/logo-white.png'" alt="" />
    <ul class="item w-250 flex-center">
      <li v-for="item in menuOptions" :key="item.id" class="mx-4 text-lg">
        <router-link :to="item.path">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid rgba(226, 226, 226, 0.3);
    min-width: 1200px;
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
