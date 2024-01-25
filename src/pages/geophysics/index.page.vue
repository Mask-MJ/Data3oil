<!-- 文化地球物理 -->
<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';

  const showList = [
    '/geophysics/jishuzhanshi1.png',
    '/geophysics/jishuzhanshi2.png',
    '/geophysics/jishuzhanshi3.png',
    '/geophysics/jishuzhanshi4.png',
    '/geophysics/jishuzhanshi5.png',
    '/geophysics/jishuzhanshi7.png',
    '/geophysics/jishuzhanshi8.png',
    '/geophysics/jishuzhanshi9.png',
    '/geophysics/jishuzhanshi17.png',
    '/geophysics/jishuzhanshi18.png',
    '/geophysics/jishuzhanshi19.png',
  ];

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
</script>

<template>
  <div>
    <!-- 首屏 -->
    <div class="first-screen-bg w-full h-100vh">
      <NavBar />
      <h2 class="mb-5 text-center text-4xl leading-snug color-white pt-80">
        专注AI促进地球物理数据衍生
      </h2>
    </div>
    <!-- card1 行业背景 -->
    <div class="industrial-bg w-full h-80vh py-20">
      <div class="w-400 m-auto">
        <h2 class="text-center text-4xl leading-snug pb-10">地球物理勘探</h2>
        <n-tabs
          type="segment"
          trigger="hover"
          animated
          size="large"
          justify-content="space-evenly"
          class="w-400 h-200 m-auto"
        >
          <n-tab-pane
            v-for="item in industrialList"
            :key="item.id"
            :name="item.title"
            :tab="item.title"
          >
            <n-flex>
              <n-card class="w-100 h-150 mr-5">
                <p> {{ item.desc1 }}</p>
                <br />
                <p> {{ item.desc2 }}</p>
              </n-card>
              <n-card class="flex-1">
                <img :src="item.img" class="h-90" />
              </n-card>
            </n-flex>
          </n-tab-pane>
        </n-tabs>
      </div>
    </div>
    <!-- card2  -->
    <n-flex vertical class="w-full bg-#e6f3fe py-20">
      <div class="w-400 m-auto">
        <h2 class="mb-10 text-center text-4xl leading-snug">标题</h2>
        <div class="w-400 m-auto flex-center flex-wrap">
          <div
            v-for="(item, index) in mockData"
            :key="item.id"
            class="flex-center overflow-hidden text-center mb-10"
          >
            <div class="w-105 h-60 border border-white b-rd-3 card2-bg">
              <div
                class="bg-lightblue-600 w-20 h-20 b-rd-50% text-xl m-auto flex-end pb-2 color-white -mt-10 mb-10"
              >
                {{ `0${item.id}` }}
              </div>
              <h3 class="text-2xl mb-5">{{ item.title }}</h3>
              <p class="color-#666">描述描述描述</p>
            </div>
            <img
              v-if="![2, 5].includes(index)"
              src="/common/jiantouimg.png"
              class="mx-10 w-17 h-100%"
            />
          </div>
        </div>
      </div>
    </n-flex>
    <!-- card3  -->
    <div class="w-400 m-auto py-20">
      <h2 class="mb-5 text-center text-4xl">标题111111</h2>
      <n-grid :x-gap="24" :y-gap="24" :cols="2" class="">
        <n-grid-item :span="1" class="bg-#d9eafb flex p-10 h-100 imghover transition-all-500">
          <span class="text-8xl text-center color-white mr-15">01.</span>
          <div class="w-120">
            <h3 class="text-2xl mb-5">标题</h3>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666 mb-10">描述</p>
            <p class="color-#666">欢迎咨询 ></p>
          </div>
        </n-grid-item>
        <n-grid-item :span="1" class="bg-#d9eafb flex p-10 h-100 imghover transition-all-500">
          <span class="text-8xl text-center color-white mr-15">02.</span>
          <div class="w-120">
            <h3 class="text-2xl leading-snug mb-5">标题</h3>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666 mb-10">描述</p>
            <p class="color-#666">欢迎咨询 ></p>
          </div>
        </n-grid-item>
        <n-grid-item :span="1" class="bg-#d9eafb flex p-10 h-100 imghover transition-all-500">
          <span class="text-8xl text-center color-white mr-15">03.</span>
          <div class="w-120">
            <h3 class="text-2xl leading-snug mb-5">标题</h3>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666 mb-10">描述</p>
            <p class="color-#666">欢迎咨询 ></p>
          </div>
        </n-grid-item>
        <n-grid-item :span="1" class="bg-#d9eafb flex p-10 h-100 imghover transition-all-500">
          <span class="text-8xl text-center color-white mr-15">04.</span>
          <div class="w-120">
            <h3 class="text-2xl leading-snug mb-5">标题</h3>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666">描述</p>
            <p class="color-#666 mb-10">描述</p>
            <p class="color-#666">欢迎咨询 ></p>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
    <!-- card4  -->
    <div class="py-20 mb-20">
      <h2 class="mb-5 text-center text-4xl leading-snug">标题</h2>
      <Swiper
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
      </Swiper>
    </div>

    <!-- <h2 class="mb-5 text-center text-4xl leading-snug pt-20">算法服务</h2>
    <Swiper
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
          class="w-full h-200"
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
    <!-- <h2 class="mb-5 text-center text-4xl leading-snug pt-20">标题1111111</h2>
    <Swiper
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

    <!-- 底部 -->
    <NavFooter />
    <!-- 回到顶部 -->
    <n-back-top :right="60" />
  </div>
</template>

<style lang="scss" scoped>
  .first-screen-bg {
    background-image: url('/FirstScreenBG/dengta.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .industrial-bg {
    background-image: url('/common/bg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card2-bg {
    background-color: rgba(255, 255, 255, 0.4);
  }
  .jiantou::after {
    content: '';
    display: block;
    width: 80px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -80px;
    background-image: url('/common/jiantouimg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .carousel-img {
    width: 100%;
    height: 400px;
    // object-fit: cover;
    transition: transform 0.5s ease;
  }
  .imghover:hover {
    background-image: url('/common/imghoverimg1.jpg');
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
  .algorithm {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.7);
    color: #fff;
  }
</style>
