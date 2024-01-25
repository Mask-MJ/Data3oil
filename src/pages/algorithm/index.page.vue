<!-- 深度学习算法预研 -->
<script setup lang="ts">
  const mockData = [
    {
      id: 1,
      title: '标题',
      keyword: '关键字',
      subtitle: '小标题',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze4.jpg',
      img2: '/common/wanshanimgfaze1.jpg',
      icon1: '/icon/mokuai1.png',
    },
    {
      id: 2,
      title: '标题',
      subtitle: '小标题',
      keyword: '关键字',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze1.jpg',
      img2: '/common/wanshanimgfaze4.jpg',
      icon1: '/icon/mokuai2.png',
    },
    {
      id: 3,
      title: '标题',
      subtitle: '小标题',
      keyword: '关键字',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze4.jpg',
      img2: '/common/wanshanimgfaze1.jpg',
      icon1: '/icon/mokuai3.png',
    },
    {
      id: 4,
      title: '标题',
      subtitle: '小标题',
      keyword: '关键字',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze1.jpg',
      img2: '/common/wanshanimgfaze4.jpg',
      icon1: '/icon/mokuai4.png',
    },
    {
      id: 5,
      title: '标题',
      subtitle: '小标题',
      keyword: '关键字',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述  内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze4.jpg',
      img2: '/common/wanshanimgfaze1.jpg',
      icon1: '/icon/mokuai5.png',
    },
    {
      id: 6,
      title: '标题',
      subtitle: '小标题',
      keyword: '关键字',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze1.jpg',
      img2: '/common/wanshanimgfaze4.jpg',
      icon1: '/icon/mokuai6.png',
    },
  ];

  const active = ref(1);
  // hover触发事件
  const changeActive = (index: number) => {
    active.value = index;
  };
  function calculatePositions(squareWidth: number, circleWidth: number, count: number) {
    const positions = [];
    const radius = squareWidth / 2;
    const circleRadius = circleWidth / 2;
    const centerX = radius;
    const centerY = radius;

    for (let i = 0; i < count; i++) {
      const angle = (i * (2 * Math.PI)) / count;
      const circleCenterX = centerX + radius * Math.cos(angle);
      const circleCenterY = centerY + radius * Math.sin(angle);
      const circleTop = circleCenterY - circleRadius;
      const circleLeft = circleCenterX - circleRadius;
      positions.push({ top: `${circleTop}px`, left: `${circleLeft}px` });
    }

    return positions;
  }
</script>

<template>
  <div>
    <!-- 首屏 -->
    <div class="first-screen-bg w-full h-100vh">
      <NavBar />
      <h2 class="mb-5 text-center text-4xl leading-snug color-white pt-80"> 深度学习算法预研 </h2>
    </div>
    <!-- card1 -->
    <div class="bg-#d9eafb w-full h-80vh">
      <div class="w-400 m-auto">
        <h2 class="py-20 text-4xl leading-snug text-center"> 深度学习算法预研 </h2>
        <!-- <p class="color-#666">描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p> -->
        <div class="flex-between h-150">
          <div class="text-center bg-white b-rd-1 w-80">
            <div class="card1-bg b-rd-1 h-20 flex-center">
              <h3 class="text-2xl">标题</h3>
            </div>
            <div class="px-10 py-5">
              <p class="mb-3">小标题</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
            </div>
          </div>

          <div class="center-bg flex-1 h-full relative">
            <div class="w-140 absolute top-50% left-50% -translate-50%">
              <img src="/common/jinizhenglogo1.png" alt="" />
            </div>
            <ul class="content-box w-140 m-auto h-full">
              <li
                v-for="item in mockData"
                :key="item.id"
                class="list w-20 h-20 flex-center rounded-full bg-white absolute"
                :style="calculatePositions(560, 80, 6)[item.id - 1]"
              >
                {{ item.keyword }}
              </li>
            </ul>
            <ul class="content-box w-80 h-80 absolute top-23% left-33% -translate-50%">
              <li
                v-for="item in mockData.slice(0, 3)"
                :key="item.id"
                class="list w-15 h-15 flex-center rounded-full bg-white absolute"
                :style="calculatePositions(320, 60, 3)[item.id - 1]"
              >
                <div> {{ item.subtitle }}</div>
              </li>
            </ul>
          </div>

          <div class="text-center bg-white b-rd-1 w-80">
            <div class="card1-bg b-rd-1 h-20 flex-center">
              <h3 class="text-2xl">标题</h3>
            </div>
            <div class="px-10 py-5">
              <p class="mb-3">小标题</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
              <p class="color-#666">内容</p>
            </div>
          </div>
        </div>
        <!-- 
         卡片:图标标题内容
          <n-grid :x-gap="24" :y-gap="16" :cols="3">
          <n-grid-item v-for="item in mockData" :key="item.id">
            <div class="text-center px-20 py-25 model-bg h-100">
              <img :src="item.icon1" class="m-auto mb-5" />
              <h3 class="mb-5 text-2xl leading-snug">{{ item.subtitle }}</h3>
              <p class="color-#666">{{ item.desc2 }}</p>
            </div>
          </n-grid-item>
        </n-grid> -->
      </div>
    </div>
    <!-- card2 -->
    <div class="w-full h-100vh">
      <div class="w-400 m-auto">
        <div class="text-center py-20">
          <h2 class="pb-10 text-4xl"> 深度学习算法预研 </h2>
          <p class="color-#666">描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
        </div>
        <div class="flex">
          <n-grid :x-gap="24" :y-gap="24" :cols="2">
            <n-grid-item :span="1">
              <div
                class="p-10 h-70 bg-gradient-to-r from-light-blue-200 to-sky-100 border-#d2dce1 b-rd-1"
              >
                <div class="mb-8">
                  <h2 class="mb-5 text-4xl">标题</h2>
                  <p class="color-#666">描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                </div>
                <div>
                  <h2 class="mb-5 text-4xl">标题</h2>
                  <p class="color-#666">描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                </div>
              </div>
            </n-grid-item>
            <n-grid-item :span="1">
              <div
                class="p-10 h-70 bg-gradient-to-r from-light-blue-200 to-sky-100 border-#d2dce1 b-rd-1"
              >
                <h2 class="mb-5 text-4xl">标题</h2>
                <p class="color-#666 mb-5">
                  描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                </p>
                <div style="overflow: auto">
                  <n-timeline horizontal size="large">
                    <n-timeline-item content="信息" />
                    <n-timeline-item type="success" title="信息" content="小信息" />
                    <n-timeline-item type="error" content="信息" />
                    <n-timeline-item type="success" title="信息" content="小信息" />
                    <n-timeline-item type="error" content="信息" />
                    <n-timeline-item type="warning" title="信息" content="小信息" />
                    <n-timeline-item type="error" content="信息" />
                    <n-timeline-item type="info" title="信息" content="小信息" />
                  </n-timeline>
                </div>
              </div>
            </n-grid-item>
            <n-grid-item :span="2">
              <div class="p-10 blue-gradient border-#d2dce1 b-rd-1">
                <h2 class="mb-5 text-center text-4xl">标题</h2>
                <p class="color-#666 mb-5 text-center">
                  描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                </p>
                <p class="color-#666 mb-5 text-center">
                  描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                </p>
                <img src="/common/anli-bg1.jpg" class="h-110 w-100%" />
              </div>
            </n-grid-item>
          </n-grid>
        </div>
      </div>
    </div>
    <!-- card3 -->
    <div class="w-full h-100vh card3-bg">
      <div class="w-400 m-auto">
        <div class="text-center color-white py-20">
          <h2 class="text-4xl pb-5">标题</h2>
          <p class=""> 描述描述描述描述描述描述描述描述描述描述描述描述描述描述 </p>
        </div>

        <div class="flex-between mb-20">
          <div class="w-75 h-75 jianbian-bg m-auto">
            <img src="/icon/qiyeshuzihua1.png" class="w-35 h-35 m-auto my-12" />
            <h3 class="mb-5 text-xl text-center color-white">图片标题</h3>
          </div>
          <div class="w-75 h-75 jianbian-bg m-auto">
            <img src="/icon/qiyeshuzihua1.png" class="w-35 h-35 m-auto my-12" />
            <h3 class="mb-5 text-xl text-center color-white">图片标题</h3>
          </div>
          <div class="w-75 h-75 jianbian-bg m-auto">
            <img src="/icon/qiyeshuzihua1.png" class="w-35 h-35 m-auto my-12" />
            <h3 class="mb-5 text-xl text-center color-white">图片标题</h3>
          </div>
          <div class="w-75 h-75 jianbian-bg m-auto">
            <img src="/icon/qiyeshuzihua1.png" class="w-35 h-35 m-auto my-12" />
            <h3 class="mb-5 text-xl text-center color-white">图片标题</h3>
          </div>
        </div>

        <div class="flex-between mb-20">
          <div
            v-for="item in mockData.slice(2)"
            :key="item.id"
            class="p-10 text-center b-rd-3 w-80 h-100 transition-all-500 overflow-hidden"
            :class="active === item.id ? 'active-bg' : 'bg-white '"
            @mouseenter="changeActive(item.id)"
          >
            <div v-if="active === item.id" class="color-white">
              <h2 class="my-5 text-4xl leading-snug">{{ item.subtitle }}</h2>
              <p>{{ item.subtitle }}</p>
              <p>{{ item.subtitle }}</p>
              <p>{{ item.subtitle }}</p>
              <p>{{ item.subtitle }}</p>
              <p>{{ item.subtitle }}</p>
            </div>
            <div v-else>
              <img :src="item.icon1" class="m-auto" />
              <h2 class="my-3 text-4xl leading-snug">{{ item.subtitle }}</h2>
              <p class="color-#666">{{ item.subtitle }}</p>
              <p class="color-#666">{{ item.subtitle }}</p>
              <p class="color-#666">{{ item.subtitle }}</p>
              <p class="color-#666">{{ item.subtitle }}</p>
              <p class="color-#666">{{ item.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- card4 -->
    <div class="mb-40 w-400 m-auto">
      <h2 class="mb-5 text-center text-4xl leading-snug pt-20">标题</h2>
      <n-grid :x-gap="24" :y-gap="24" :cols="2" class="">
        <n-grid-item :span="1" class="bg-#d9eafb flex p-10 imghover transition-all-500">
          <i class="i-line-md:clipboard-list text-8xl text-center color-white mr-10"></i>
          <div class="w-120">
            <h3 class="text-2xl leading-snug mb-5">标题</h3>
            <p class="color-#666">描述</p>
          </div>
        </n-grid-item>
        <n-grid-item :span="1" class="bg-#d9eafb flex p-10 imghover transition-all-500">
          <i class="i-line-md:clipboard-list text-8xl text-center color-white mr-10"></i>
          <div class="w-120">
            <h3 class="text-2xl leading-snug mb-5">标题</h3>
            <p class="color-#666">描述</p>
          </div>
        </n-grid-item>
        <n-grid-item :span="1" class="bg-#d9eafb flex p-10 imghover transition-all-500">
          <i class="i-line-md:clipboard-list text-8xl text-center color-white mr-10"></i>
          <div class="w-120">
            <h3 class="text-2xl leading-snug mb-5">标题</h3>
            <p class="color-#666">描述</p>
          </div>
        </n-grid-item>
        <n-grid-item :span="1" class="bg-#d9eafb flex p-10 imghover transition-all-500">
          <i class="i-line-md:clipboard-list text-8xl text-center color-white mr-10"></i>
          <div class="w-120">
            <h3 class="text-2xl leading-snug mb-5">标题</h3>
            <p class="color-#666">描述</p>
          </div>
        </n-grid-item>
      </n-grid>
    </div>

    <!-- 底部 -->
    <NavFooter />
    <!-- 回到顶部 -->
    <n-back-top :right="60" />
  </div>
</template>

<style lang="scss" scoped>
  .first-screen-bg {
    background-image: url('/FirstScreenBG/beijing2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card1-bg-bg {
    background-image: url('/common/imghoverimg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .blue-gradient {
    background-image: linear-gradient(
      to bottom,
      rgba(186, 230, 253, 0.7),
      rgba(240, 249, 255, 0.1)
    );
  }
  .center-bg {
    background-image: url('/common/jingzhenglibag.png');
    background-repeat: no-repeat;
    background-size: cover;
    .content-box {
      animation: rotate360 50s linear infinite;
      .list {
        animation: rotate3602 50s linear infinite;
      }
    }
  }

  @keyframes rotate360 {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate3602 {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0);
    }
  }

  .imghover:hover {
    background-image: url('/common/imghoverimg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .model-bg {
    background-image: url('/common/anli-bg4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card3-bg {
    background-image: url('/common/shijian-bg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .jianbian-bg {
    background-image: url('/common/jianbian1.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .active-bg {
    background-image: url('/common/jianbian2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
