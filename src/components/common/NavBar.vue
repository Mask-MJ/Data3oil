<script setup lang="ts">
  const router = useRouter();
  const activeKey = ref('home');
  const menuOptions = [
    {
      key: 'home',
      label: '首页',
      onClick: () => {
        activeKey.value = 'home';
        router.push('/');
      },
    },
    {
      key: 'about',
      label: '关于',
      onClick: () => {
        activeKey.value = 'about';
        router.push('/about');
      },
    },
  ];
</script>

<template>
  <div class="flex-center">
    <img class="w-20 h-20" src="../../assets/logo.jpg" alt="" />
    <div class="w-200">
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" responsive />
    </div>
  </div>
</template>

<style lang="" scoped></style>
