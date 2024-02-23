<script setup lang="ts">
  const businessEcologyList = [
    {
      id: 1,
      title: '大数据',
      img: '/icon/qiyeshuzihua1.png',
      desc: '致力于为传统企业提供数字化、智能化技术赋能，以波形、时深数据为主线，研发包括地震噪音去除、断裂识别、初至拾取、地震相识别等行业算法。',
    },
    {
      id: 2,
      title: '大模型',
      img: '/icon/rengongzhineng2.png',
      desc: '专注人工智能在细分领域的软件定制、前后端开发、平台搭建、私域大模型部署训练工程化方案等。专注AI，深耕垂直细分领域，为垂直细分行业企业数字化技术赋能。',
    },
    {
      id: 3,
      title: '多模态',
      img: '/icon/ronghe3.png',
      desc: '服务智能制造企业数字化转型，包括企业计划管理及运用私域大模型技术对pdf相关语言类格式转置及关键要素提取等非结构化数据转结构化等算法项目。',
    },
  ];
  const newsList = [
    {
      id: 1,
      monthTime: '11月',
      dayTime: '1日',
      title: '人工智能第三次浪潮带来难得机遇，物探行业智能化发展需求迫切而广泛',
    },
    {
      id: 2,
      monthTime: '1月',
      dayTime: '4日',
      title: '人工智能第三次浪潮带来难得机遇，物探行业智能化发展需求迫切而广泛',
    },
    {
      id: 3,
      monthTime: '1月',
      dayTime: '8日',
      title: '近期研究取得可喜进展和丰硕成果，展示良好发展前景和丰富的应用场景',
    },
    {
      id: 4,
      monthTime: '1月',
      dayTime: '10日',
      title: '近期研究取得可喜进展和丰硕成果，展示良好发展前景和丰富的应用场景',
    },
  ];
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
  // 商业生态标题
  const businessEcologyTitle = computed(() => {
    return businessEcologyList.map((item) => item.title).join(' + ');
  });
</script>

<template>
  <div>
    <!-- 首屏 -->
    <div class="screen">
      <video
        class="video"
        src="/FirstScreenBG/bannrvideo.mp4"
        autoplay
        muted
        loop
        type="video/mp4"
        style="transform: matrix(1, 0, 0, 1, 0, 0)"
      ></video>
      <NavBar />
      <div
        class="absolute top-82% left-50% -translate-50% text-center text-4xl leading-snug color-white"
      >
        <p class="mb-10">
          用AI为传统央企数字化赋能
          <br />
          打造最好的行业融合AI公司
        </p>
        <div class="flex-center">
          <img src="/banner-icon.svg" class="banner-icon w-4 h-12" />
        </div>
      </div>
    </div>
    <!-- 商业生态 -->
    <div class="business-ecology py-25">
      <div class="text-center mb-10">
        <p class="color-#666 mb-2"> 商业生态 </p>
        <h2 class="text-3xl font-bold mb-4">
          {{ businessEcologyTitle }}
          <br />
          整体推动企业数字化转型
        </h2>
        <p class="color-#333"> 了解更多 > </p>
      </div>
      <div class="flex w-400 h-100 m-auto">
        <div
          v-for="item in businessEcologyList"
          :key="item.id"
          class="mx-3 bg-white bg-opacity-70 b-rd-3 transition-all-500 overflow-hidden"
          :class="active === item.id ? 'w-45% business-ecology-active' : 'w-25% text-center'"
          @mouseenter="changeActive(item.id)"
        >
          <div
            v-if="active === item.id"
            class="px-5 color-white animate__animated animate__fadeInUp"
          >
            <div class="image w-15 h-15 mt-8 mb-8">
              <img :src="item.img" class="w-50% h-50%" />
            </div>
            <h3 class="text-xl font-bold mb-4"> {{ item.title }} </h3>
            <div class="desc mb-4 w-100">{{ item.desc }}</div>
            <p class="flex-y-center"
              >了解详情 <i class="i-line-md:chevron-right-circle ml-1"></i>
            </p>
          </div>
          <div v-else class="py-10">
            <div class="image w-25 h-25 m-auto mb-8">
              <img :src="item.img" class="w-50% h-50%" />
            </div>
            <h3 class="text-xl font-bold mb-4"> {{ item.title }} </h3>
            <p class="color-#333">展开更多 > </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司介绍 -->
    <div class="company-introduction h-100vh flex-center">
      <div class="w-80% h-40%">
        <p class="color-neutral-200 mb-2">公司简介</p>
        <h2 class="text-3xl font-bold mb-4 color-white">
          整合 · 共享 · 创新
          <br />
          构建共融共生的AI商业生态
        </h2>
        <div class="color-neutral-200 indent-md w-60% mb-20">
          <p>
            公司主要技术团队由具有留学背景算法及石油行业专家团队构成，专注人工智能在石油石化场景的行业深入，服务于大型能源央企数字化、智能化进程，用AI为传统能源央企技术赋能。
            细分领域为行业AI算法深度定制、石油煤炭物探、工程物探、水文、智慧城市、管道建设、炼化工业安全管控等方向AI算法落地深入。
            倡导“专注、务实、高效、创新”的企业精神，通过良好的现代企业内部机制促进人工智能方向的算法创新。
          </p>
          <p>
            公司注册于中关村西区人才聚集地-同方科技广场，汇集清北、中科院优秀人才资源，来自中关村核心区的科技源动力。
          </p>
        </div>
        <div class="flex-between w-130 color-white">
          <div class="w-60 h-12 border border-white text-center b-rd-2 lh-12 flex-between px-5">
            了解更多
            <i class="i-line-md:chevron-right-circle ml-1 text-xl"></i>
          </div>
          <div class="w-60 h-12 border border-white text-center b-rd-2 lh-12 flex-between px-5">
            案例查看
            <i class="i-line-md:clipboard-list-twotone ml-1 text-xl"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- card1 -->
    <div class="news py-20 m-auto w-400">
      <h2 class="text-3xl font-bold mb-10">标题</h2>
      <div class="card1-bg w-full h-120 relative">
        <ul class="flex absolute top-55% left-5%">
          <li
            v-for="item in mockData.slice(2)"
            :key="item.id"
            class="m-5 p-5 w-80 h-40 b-rd-3 bg-white opacity-75 hover:-translate-y-8 transition-all-400 hover:color-cyan-500"
          >
            <h3 class="text-2xl font-bold mb-3">{{ item.title }}</h3>
            <img :src="item.icon1" class="ml-50" />
          </li>
        </ul>
      </div>
    </div>
    <!-- 新闻资讯 -->
    <div class="news py-20 mb-10 m-auto w-400">
      <h2 class="text-3xl font-bold mb-10">新闻资讯</h2>
      <n-grid :x-gap="24" :y-gap="16" :cols="3">
        <n-grid-item :span="2">
          <n-carousel autoplay draggable class="b-rd-2">
            <img class="carousel-img" src="/home/xibao.png" />
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
            />
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
            />
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
            />
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
            />
          </n-carousel>
        </n-grid-item>

        <n-grid-item v-for="item in newsList" :key="item.id">
          <div class="h-full b-rd-2 py-5 px-10 border border-neutral-300 cursor-pointer news-item">
            <div class="mb-5 bg-#999 inline-block color-white">
              <span class="w-10 inline-block text-center">{{ item.monthTime }}</span>
              <span class="news-dayTime w-12 text-center"> {{ item.dayTime }}</span>
            </div>
            <div class="text-xl font-bold h-30 hover:translate-x-8 transition-all-500">
              {{ item.title }}
            </div>
            <div class="news-line"></div>
            <div class="font-bold">查看详情 > </div>
          </div>
        </n-grid-item>
      </n-grid>
    </div>

    <!-- 数字化转型案例 -->
    <!-- <div class="py-20 mx-80">
      <h2 class="text-3xl font-bold mb-10">数字化转型案例</h2>
      <div class="h-100 border border-#999">内容占位</div>
    </div> -->
    <!-- 能源板块 -->
    <!-- <div class="py-20 mx-80">
      <h2 class="text-3xl font-bold mb-10">能源板块</h2>
      <div class="h-100 border border-#999">内容占位</div>
    </div> -->
    <!-- 人工智能 -->
    <!-- <div class="py-20 mx-80">
      <h2 class="text-3xl font-bold mb-10">人工智能</h2>
      <div class="h-100 border border-#999">内容占位</div>
    </div> -->
    <!-- 大模型技术跟踪 -->
    <!-- <div class="py-20 mx-80">
      <h2 class="text-3xl font-bold mb-10">大模型技术跟踪</h2>
      <div class="h-100 border border-#999">内容占位</div>
    </div> -->

    <!-- 底部占位 -->
    <NavFooter />
    <!-- 回到顶部 -->
    <n-back-top :right="60" />
  </div>
</template>

<style lang="scss" scoped>
  .screen {
    position: relative;
    width: 100%;
    height: 100vh;
    .video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .banner-icon {
      animation: runArraw 1.5s linear infinite;
    }
  }

  @keyframes runArraw {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-5px);
    }
  }

  .business-ecology {
    background: url('/common/homabtbag1.jpg') no-repeat center;
    background-size: cover;
    .image {
      border-radius: 50%;
      background-image: linear-gradient(0deg, #f8fbfd 0%, #e5f2fe 100%),
        linear-gradient(#ffffff, #ffffff);
      background-blend-mode: normal, normal;
      border: solid 1px #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .business-ecology-active {
      background-image: url(/common/indfwfmfwzz.gif);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .company-introduction {
    background: url('/common/gongsijieshao.jpg') no-repeat center;
    background-size: cover;
  }
  .card1-bg {
    background-image: url(/common/stock-map.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .news {
    .carousel-img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .carousel-img:hover {
      transform: scale(1.1);
    }
    .news-dayTime {
      margin-left: 5px;
      padding: 0 8px;
      background: #0073e5;
      position: relative;
      height: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .news-dayTime::before {
      content: '';
      display: block;
      border-color: transparent #999;
      /*上下颜色 左右颜色*/
      border-width: 0 0 24px 5px;
      border-style: solid;
      position: absolute;
      left: 0;
      top: 0;
    }
    .news-line {
      position: relative;
      margin-bottom: 20px;
    }
    .news-line::before {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      top: 0;
      background: rgba(213, 213, 213, 0.5);
    }
    .news-line::after {
      content: '';
      width: 0;
      height: 1px;
      position: absolute;
      top: 0;
      background: #003686;
      transition: all ease-out 0.3s 0.1s;
    }
    .news-item:hover .news-line::after {
      width: 100%;
    }
  }
</style>
