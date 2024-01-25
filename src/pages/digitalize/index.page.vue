<!-- 数字化转型案例 -->
<script setup lang="ts">
  // Import Swiper Vue.js components
  // import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-cube';
  import 'swiper/css/navigation';
  // import required modules
  // import { EffectCoverflow, Pagination, EffectCube, Navigation } from 'swiper/modules';

  // const showList = [
  //   '/geophysics/jishuzhanshi1.png',
  //   '/geophysics/jishuzhanshi2.png',
  //   '/geophysics/jishuzhanshi3.png',
  //   '/geophysics/jishuzhanshi4.png',
  //   '/geophysics/jishuzhanshi5.png',
  //   '/geophysics/jishuzhanshi7.png',
  //   '/geophysics/jishuzhanshi8.png',
  //   '/geophysics/jishuzhanshi9.png',
  //   '/geophysics/jishuzhanshi17.png',
  //   '/geophysics/jishuzhanshi18.png',
  //   '/geophysics/jishuzhanshi19.png',
  // ];

  // const algorithmList = [
  //   {
  //     id: '01',
  //     title: '关键点识别',
  //     img: '/geophysics/suanfa1.png',
  //   },
  //   {
  //     id: '02',
  //     title: '目标检测',
  //     img: '/geophysics/suanfa2.png',
  //   },
  //   {
  //     id: '03',
  //     title: '三维室内数据配准',
  //     img: '/geophysics/suanfa3.png',
  //   },
  //   {
  //     id: '04',
  //     title: '语义分割',
  //     img: '/geophysics/suanfa4.png',
  //   },
  //   {
  //     id: '05',
  //     title: '目标跟踪',
  //     img: '/geophysics/suanfa5.mp4',
  //   },
  // ];

  const industrialList = [
    {
      id: 1,
      title: '行业背景',
      desc1:
        '我国企业数字化转型是一项长期任务，企业数字化是推进信息化的最好方法，数字化带来了数据化，人工智能是企业实现智能化的主要途径。业务生产出数据、数据再反哺业务，从而整体推动企业数字化转型。企业数字化转型是一项长期任务，企业数字化是推进信息化的最好方法，数字化带来了数据化，人工智能是企业实现智能化的主要途径。业务生产出数据、数据再反哺业务，从而整体推动企业数字化转型。',
      desc2:
        '截止至2018年我国数字经济规模达到31.3万亿元，按可比口径计算，名义增长20.9%，占GDP比重为34.8%，占比同比提升1.9个百分点，据相关机构预测，AI未来10年将创造16万亿美元？',
      img: '/geophysics/hangyebeijing1.png',
    },
    {
      id: 2,
      title: '项目背景',
      desc1:
        '地球物理勘探是探索地球本体及近地空间的介质结构、物质组成、形成和演化，研究与其相关的各种自然现象及其变化的规律。',
      desc2:
        '在此基础上为探测地球内部结构与构造、寻找能源、资源和环境监测提供理论、方法和技术，为灾害预报提供重要依据，涵括石油、煤炭、金属矿场、水文、地质灾害等。',
      img: '/geophysics/xiangmubeijing2.png',
    },
    {
      id: 3,
      title: '前景',
      desc1:
        '主要研发方向：形成一套以SEGY格式管理且方便地球物理工作人员应用深度学习（网络）技术的大数据集合，并基于数据流形成SmartGeo智能工坊平台。',
      desc2:
        'AI在物探领域的应用大多停留在实验室研发、测试阶段，少量已在市场主流软件中运用，在传统算力提升降速的情况下，作为长期受制于算力的信号处理运算行业，AI算力的飞速发展将极大程度推动物探行业提质增效。',
      img: '/geophysics/qianjing1.png',
    },
  ];

  const mockData = [
    {
      id: '01',
      title: '标题',
      subtitle: '小标题',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze4.jpg',
      img2: '/common/wanshanimgfaze1.jpg',
    },
    {
      id: '02',
      title: '标题',
      subtitle: '小标题',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze1.jpg',
      img2: '/common/wanshanimgfaze4.jpg',
    },
    {
      id: '03',
      title: '标题',
      subtitle: '小标题',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze4.jpg',
      img2: '/common/wanshanimgfaze1.jpg',
    },
    {
      id: '04',
      title: '标题',
      subtitle: '小标题',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze1.jpg',
      img2: '/common/wanshanimgfaze4.jpg',
    },
    {
      id: '05',
      title: '标题',
      subtitle: '小标题',
      desc1: '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述 ',
      desc2:
        '内容描述 内容描述 内容描述 内容描述 内容描述 内容描述  内容描述 内容描述 内容描述 内容描述 内容描述 内容描述',
      img1: '/common/wanshanimgfaze4.jpg',
      img2: '/common/wanshanimgfaze1.jpg',
    },
  ];
</script>

<template>
  <div>
    <!-- 首屏 -->
    <div class="first-screen-bg w-full h-100vh">
      <NavBar />
      <h2 class="mb-5 text-center text-4xl leading-snug color-white pt-80"> 数字化转型案例 </h2>
    </div>
    <!-- 行业背景 -->
    <div class="industrial-bg w-full h-80vh m-auto py-20">
      <h2 class="mb-10 text-center text-4xl leading-snug">数字化转型案例</h2>
      <n-tabs
        type="segment"
        trigger="hover"
        animated
        size="large"
        justify-content="space-evenly"
        class="w-400 m-auto"
      >
        <n-tab-pane
          v-for="item in industrialList"
          :key="item.id"
          :name="item.title"
          :tab="item.title"
        >
          <n-flex justify="center">
            <n-card class="w-100 h-150 mr-5">
              <p> {{ item.desc1 }}</p>
              <br />
              <p> {{ item.desc2 }}</p>
            </n-card>
            <n-card class="flex-1" content-class="flex-center">
              <img :src="item.img" class="h-80" />
            </n-card>
          </n-flex>
        </n-tab-pane>
      </n-tabs>
    </div>
    <!-- 领域 -->
    <n-flex vertical class="w-full bg-#e6f3fe py-20">
      <div class="w-400 m-auto">
        <div class="pb-10">
          <h2 class="mb-5 text-center text-4xl leading-snug">标题</h2>
          <p class="text-center color-#666">描述描述描述描述</p>
        </div>

        <div class="pb-10">
          <!-- 蓝色渐变背景 -->
          <div class="w-400 h-8 bg-gradient-to-r from-cyan-200 to-blue-400 m-auto b-rd-5"> </div>
          <!-- card1 -->
          <div class="flex-center text-center">
            <div v-for="item in mockData" :key="item.id" class="w-20% px-10">
              <div
                class="w-10 h-10 mb-5 flex-center bg-gradient-to-r from-sky-600 to-cyan-400 b-rd-50% m-auto"
              >
                {{ item.id }}
              </div>
              <h3 class="mb-5 text-2xl leading-snug">{{ item.title }}</h3>
              <p class="color-#666 h-20">{{ item.desc1 }} </p>
            </div>
          </div>
        </div>

        <!-- card2 -->
        <div class="pb-10 flex-around">
          <div v-for="item in mockData" :key="item.id" class="w-18% bg-white b-rd-1 relative">
            <img :src="item.img1" class="wh-100% opacity-50" />
            <h3
              class="text-2xl text-center leading-snug color-white absolute top-25% left-50% -translate-50%"
              >{{ item.title }}</h3
            >
            <div class="p-10">
              <p>{{ item.desc1 }}</p>
              <p>{{ item.desc2 }}</p>
            </div>
          </div>
        </div>

        <!-- card3 -->
        <div class="flex h-100">
          <div
            v-for="item in mockData.slice(3)"
            :key="item.id"
            class="w-50% mx-5 bg-white b-rd-1 flex-around"
          >
            <div class="w-30 h-30 mx-10 flex">
              <img :src="item.img1" />
            </div>
            <div class="flex-1 p-10">
              <h3 class="text-2xl leading-snug mb-5">{{ item.title }}</h3>
              <p>{{ item.desc2 }}</p>
            </div>
          </div>
        </div>

        <div class="pt-20 mb-10">
          <h2 class="mb-5 text-center text-4xl leading-snug">标题</h2>
          <p class="text-center color-#666 px-80 pb-20"
            >描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p
          >
          <div class="flex">
            <!-- 蓝色背景 -->
            <div class="w-30% mr-5">
              <div
                class="h-25 mb-3 bg-gradient-to-r from-cyan-300 to-blue-700 b-rd-1 text-2xl flex-center color-white"
              >
                标题</div
              >
              <div class="bg-neutral-50 b-rd-1 p-3 h-75">
                <div class="bg-white b-rd-1 flex-center h-15 mb-3">aa</div>
                <div class="bg-white b-rd-1 flex-center h-15 mb-3">bb</div>
                <div class="bg-white b-rd-1 flex-center h-15 mb-3">cc</div>
                <div class="bg-white b-rd-1 flex-center h-15">dd</div>
              </div>
            </div>
            <div class="flex-1">
              <div
                class="h-25 mb-3 bg-gradient-to-r from-cyan-300 to-blue-700 b-rd-1 text-2xl flex-center color-white"
                >标题
              </div>
              <div class="bg-neutral-50 b-rd-1 p-3 h-75"> </div>
            </div>
          </div>
        </div>

        <!-- <Swiper
        :effect="'coverflow'"
        :grab-cursor="true"
        :centered-slides="true"
        :slides-per-view="'auto'"
        :coverflow-effect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        :modules="[EffectCoverflow, Pagination]"
        class="w-400 m-auto"
      >
        <SwiperSlide v-for="(item, index) in showList" :key="index">
          <img class="carousel-img" :src="item" />
        </SwiperSlide>
      </Swiper> -->
        <!-- <Swiper
        :effect="'cube'"
        :grab-cursor="true"
        :cube-effect="{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }"
        :pagination="true"
        :modules="[EffectCube, Pagination]"
        class="w-200 m-auto"
      >
        <SwiperSlide>
          <img class="carousel-img" src="/geophysics/yanfa2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img class="carousel-img" src="/geophysics/yanfa1.jpg" alt="" />
        </SwiperSlide>
      </Swiper> -->
      </div>
    </n-flex>

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
    <!-- <Swiper
      :slides-per-view="3"
      :centered-slides="true"
      :space-between="30"
      :pagination="{
        type: 'fraction',
      }"
      :navigation="true"
      :modules="[Pagination, Navigation]"
      class="w-400 m-auto mb-20"
    >
      <SwiperSlide v-for="item in algorithmList" :key="item.id">
        <div class="text-xl font-bold pb-5 text-center">{{ item.title }}</div>
        <img
          v-if="item.title !== '目标跟踪'"
          :src="item.img"
          style="object-fit: cover"
          class="w-full h-100"
        />
        <video
          v-else
          :src="item.img"
          class="w-full h-100"
          autoplay
          muted
          loop
          type="video/mp4"
          :style="{ transform: 'matrix(1, 0, 0, 1, 0, 0)', 'object-fit': 'cover' }"
        >
        </video>
      </SwiperSlide>
    </Swiper> -->

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
  .industrial-bg {
    background-image: url('/common/bg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .carousel-img {
    width: 100%;
    height: 400px;
    // object-fit: cover;
    transition: transform 0.5s ease;
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
  .algorithm {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.7);
    color: #fff;
  }
  .imghover:hover {
    background-image: url('/common/imghoverimg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
