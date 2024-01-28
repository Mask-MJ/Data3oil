<!-- 大模型技术跟踪 -->
<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  // import required modules
  import { Pagination, Navigation } from 'swiper/modules';

  const mockData = [
    {
      id: 1,
      title: '标题',
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
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze1.jpg',
      img2: '/common/wanshanimgfaze4.jpg',
      icon1: '/icon/mokuai6.png',
    },
  ];

  // const active = ref(1);
  // hover触发事件
  // const changeActive = (index: number) => {
  //   active.value = index;
  // };
</script>

<template>
  <div>
    <!-- 首屏 -->
    <div class="first-screen-bg w-full h-100vh">
      <NavBar />
      <h2 class="mb-5 text-center text-4xl color-white pt-80"> 大模型技术跟踪 </h2>
    </div>
    <!-- card1 -->
    <div class="card1-bg w-full">
      <div class="w-400 m-auto py-20">
        <div class="text-center">
          <h2 class="mb-10 text-4xl">
            <i class="i-line-md:square-twotone text-xl color-#0c6fea text-center"></i>
            大模型技术跟踪
            <i class="i-line-md:square-twotone text-xl color-#0c6fea text-center"></i>
          </h2>
          <p class="color-#666">描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
        </div>

        <n-grid :x-gap="24" :y-gap="16" :cols="3">
          <n-grid-item v-for="item in mockData" :key="item.id">
            <div class="text-center px-20 py-25 model-bg h-100">
              <img :src="item.icon1" class="m-auto mb-5" />
              <h3 class="mb-5 text-2xl">{{ item.subtitle }}</h3>
              <p class="color-#666">{{ item.desc2 }}</p>
            </div>
          </n-grid-item>
        </n-grid>
      </div>
    </div>
    <!-- card2 -->
    <div class="w-full py-20 card2-bg">
      <div class="w-400 m-auto">
        <div class="text-center">
          <h2 class="mb-5 text-4xl">标题</h2>
          <p class="color-#666">描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
        </div>

        <div class="flex-around">
          <!-- 左边大盒子 -->
          <div class="py-5 flex-center">
            <!-- 左边01-03 -->
            <ul class="-mr-10">
              <li class="flex-center mb-20 relative">
                <div class="w-50 h-10 bg-#e7f3fd border border-blue-100 flex-center">标题</div>
                <div class="w-20 h-20 bg-blue-100 b-rd-50% flex-center absolute -top-5 -right-8">
                  <div class="w-10 h-10 bg-blue-500 b-rd-50% flex-center color-white font-bold">
                    01
                  </div>
                </div>
              </li>
              <li class="flex-center mb-20 relative">
                <div class="w-50 h-10 bg-#e7f3fd border border-blue-100 flex-center mr-15">
                  标题
                </div>
                <div class="w-20 h-20 bg-blue-100 b-rd-50% flex-center absolute -top-5 right-1">
                  <div class="w-10 h-10 bg-blue-500 b-rd-50% flex-center color-white font-bold">
                    02
                  </div>
                </div>
              </li>
              <li class="flex-center relative">
                <div class="w-50 h-10 bg-#e7f3fd border border-blue-100 flex-center">标题</div>
                <div class="w-20 h-20 bg-blue-100 b-rd-50% flex-center absolute -top-5 -right-8">
                  <div class="w-10 h-10 bg-blue-500 b-rd-50% flex-center color-white font-bold">
                    03
                  </div>
                </div>
              </li>
            </ul>
            <!-- 中间圆圈 -->
            <div class="w-90 h-90 border border-cyan-300 b-rd-50% border-dashed flex-center">
              <div class="w-70 h-70 bg-blue-100 b-rd-50% flex-center">
                <div
                  class="w-50 h-50 bg-gradient-to-b from-blue-700 to-cyan-300 b-rd-50% text-xl flex-center color-white"
                >
                  标题
                </div>
              </div>
            </div>
            <!-- 右边04-06 -->
            <ul class="-ml-10">
              <div class="flex-center mb-20 relative">
                <div class="w-20 h-20 bg-blue-100 b-rd-50% flex-center absolute -top-5 -left-8">
                  <div class="w-10 h-10 bg-blue-500 b-rd-50% flex-center color-white font-bold">
                    04
                  </div>
                </div>
                <div class="w-50 h-10 bg-#e7f3fd border border-blue-100 flex-center">标题</div>
              </div>
              <div class="flex-center mb-20 relative">
                <div class="w-20 h-20 bg-blue-100 b-rd-50% flex-center absolute -top-5 left-1">
                  <div class="w-10 h-10 bg-blue-500 b-rd-50% flex-center color-white font-bold">
                    05
                  </div>
                </div>
                <div class="w-50 h-10 bg-#e7f3fd border border-blue-100 flex-center ml-15">
                  标题
                </div>
              </div>
              <div class="flex-center relative">
                <div class="w-20 h-20 bg-blue-100 b-rd-50% flex-center absolute -top-5 -left-8">
                  <div class="w-10 h-10 bg-blue-500 b-rd-50% flex-center color-white font-bold">
                    06
                  </div>
                </div>
                <div class="w-50 h-10 bg-#e7f3fd border border-blue-100 flex-center">标题</div>
              </div>
            </ul>
          </div>

          <img src="/common/jiantouimg.png" alt="" />

          <!-- 右边大盒子 -->
          <div class="py-5">
            <div class="text-center">
              <div class="mb-3 text-2xl"> 标题 </div>
              <div class="flex-center">
                <span class="bg-#e7f3fd w-50 px-3 py-5 b-rd-1 border border-white mr-2">
                  subtitle
                </span>
                <span class="bg-#e7f3fd w-50 px-3 py-5 b-rd-1 border border-white mr-2">
                  subtitle
                </span>
                <span class="bg-#e7f3fd w-50 px-3 py-5 b-rd-1 border border-white mr-2">
                  subtitle
                </span>
              </div>
            </div>
            <div class="flex-center my-5">
              <img src="/common/jiantouxiaimg.png" />
            </div>
            <div class="text-center">
              <div class="mb-3 text-2xl"> 标题 </div>
              <div class="flex-center">
                <span class="bg-#e7f3fd w-50 px-3 py-5 b-rd-1 border border-white mr-2">
                  subtitle
                </span>
                <span class="bg-#e7f3fd w-50 px-3 py-5 b-rd-1 border border-white mr-2">
                  subtitle
                </span>
                <span class="bg-#e7f3fd w-50 px-3 py-5 b-rd-1 border border-white mr-2">
                  subtitle
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- card3 -->
    <div class="w-full py-20">
      <div class="w-400 m-auto">
        <div class="text-center mb-5">
          <h2 class="mb-10 text-4xl"> 标题 </h2>
          <p class="color-#666">描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
        </div>
        <div class="w-400 m-auto flex-around b-rd-1">
          <div class="bg-#d9eafb w-50 mr-5 px-2 pt-2">
            <div
              class="h-30 mb-3 bg-gradient-to-r from-cyan-300 to-blue-700 b-rd-1 text-xl flex-center color-white"
            >
              标题
            </div>
            <n-grid :x-gap="3" :y-gap="3" :cols="1">
              <n-grid-item v-for="item in mockData" :key="item.id">
                <div class="b-rd-1 mb-3 font-bold flex-center bg-white h-30">
                  {{ item.subtitle }}
                </div>
              </n-grid-item>
            </n-grid>
          </div>
          <div class="bg-#d9eafb flex-1 px-2 pt-2">
            <div
              class="h-30 mb-3 bg-gradient-to-r from-cyan-300 to-blue-700 b-rd-1 text-xl flex-center color-white"
              >标题
            </div>
            <n-grid :x-gap="3" :y-gap="3" :cols="1">
              <n-grid-item v-for="item in mockData" :key="item.id">
                <div class="b-rd-1 mb-3 font-bold flex-center bg-white h-30">
                  {{ item.subtitle }}
                </div>
              </n-grid-item>
            </n-grid>
          </div>
        </div>
      </div>
    </div>
    <!-- card4 -->
    <div class="w-full py-20 mb-20">
      <div class="w-400 m-auto">
        <h2 class="text-4xl text-center mb-10">标题</h2>
        <Swiper
          :slides-per-view="1"
          :centered-slides="true"
          :space-between="30"
          :pagination="{
            type: 'fraction',
          }"
          :navigation="true"
          :modules="[Pagination, Navigation]"
          class="w-400 m-auto"
        >
          <SwiperSlide v-for="item in mockData" :key="item.id" class="SwiperSlide px-20">
            <img :src="item.img1" style="object-fit: cover" />
            <div class="w-200 ml-10 px-10 py-10 bg-#fafafa">
              <h3 class="mb-5 text-xl font-bold">{{ item.subtitle }}</h3>
              <p class="mb-3">
                <i class="i-line-md:circle-twotone"></i>
                {{ item.desc1 }}
              </p>
              <p class="mb-3">
                <i class="i-line-md:circle-twotone"></i>
                {{ item.desc1 }}
              </p>
              <p class="mb-3">
                <i class="i-line-md:circle-twotone"></i>
                {{ item.desc1 }}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <!-- 底部 -->
    <NavFooter />
    <!-- 回到顶部 -->
    <n-back-top :right="60" />
  </div>
</template>

<style lang="scss" scoped>
  .first-screen-bg {
    background-image: url('/FirstScreenBG/beijing1.webp');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card1-bg {
    background-image: url('/common/anli-bg3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .model-bg {
    background-image: url('/common/anli-bg4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card2-bg {
    background-image: url('/common/bg2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 800px;
    height: 400px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
  .SwiperSlide {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
