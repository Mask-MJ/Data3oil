<!-- 公司简介 -->
<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-cube';
  // import required modules
  import { Pagination, EffectCube } from 'swiper/modules';

  const technologyList = [
    {
      id: 1,
      title: '初至自动拾取',
      desc1: '数据多样性：地表多样性、激发源多样性、噪音多样性、GAN网络丰富样本、道输入改造样本',
      desc2:
        '样本标签标准库：沙漠、山前、火成岩过渡带、黄土源、南方山地、河堤小型震源，模型表现极高适应性',
      img: [
        '/geophysics/jishuzhanshi1.png',
        '/geophysics/jishuzhanshi2.png',
        '/geophysics/jishuzhanshi3.png',
        '/geophysics/jishuzhanshi4.png',
        '/geophysics/jishuzhanshi5.png',
        '/geophysics/jishuzhanshi6.png',
        '/geophysics/jishuzhanshi7.png',
        '/geophysics/jishuzhanshi8.png',
        '/geophysics/jishuzhanshi9.png',
        '/geophysics/jishuzhanshi10.png',
        '/geophysics/jishuzhanshi12.png',
        '/geophysics/jishuzhanshi13.png',
        '/geophysics/jishuzhanshi14.png',
        '/geophysics/jishuzhanshi15.png',
        '/geophysics/jishuzhanshi16.png',
        '/geophysics/jishuzhanshi17.png',
        '/geophysics/jishuzhanshi18.png',
        '/geophysics/jishuzhanshi19.png',
      ],
    },
    {
      id: 2,
      title: '层位预测工具',
      desc1:
        '通过多个工区，依次进行层位自动识别任务，把除去后几个层的网络权重保存下来，作为预训练模型，预训练模型可以提高新工区训练速度及预测精度。',
      desc2: '预训练模型同时提升网络泛化能力。',
      img: [
        '/geophysics/cengweiyuche1.png',
        '/geophysics/cengweiyuche2.png',
        '/geophysics/cengweiyuche3.png',
      ],
    },
    {
      id: 3,
      title: '预测策略',
      desc1: '卡尔曼滤波3D曲面平滑 ',
      desc2: ' ',
      img: ['/geophysics/yusuanchelue1.jpg'],
    },
    {
      id: 4,
      title: '断裂识别工具',
      desc1: '筹建断层标签库 ',
      desc2: '断层识别内置3D模型&2D训练生产，与层位追踪类似，但断层标签难度大',
      img: [
        '/geophysics/duanlieshibie1.png',
        '/geophysics/duanlieshibie2.png',
        '/geophysics/duanlieshibie3.png',
      ],
    },
    {
      id: 3,
      title: 'GeoLable地学标注工具',
      desc1:
        'GeoLabel地学标注工具为地球物理专用数据标记工具软件。可导入3D、2D图片数据格式(.segy, .jpg, .png, .jepg, 等格式类型)以及视频数据(.avi, .mp4等格式)。满足人工智能在视觉各个领域数据标注的需求，目标检测-矩形标注；语义分割，实例分割-多边形标注；分类-类别标注；标志点检测-控制点标注等等。',
      desc2: ' ',
      img: ['/geophysics/dixuebiaozhu1.png'],
    },
  ];
  const menuCard = [
    { id: 1, title: '公司简介', icon: 'i-line-md:home-simple', img: '/home.svg' },
    { id: 2, title: '社会责任', icon: 'i-line-md:weather-cloudy-loop', img: '/res.svg' },
    { id: 3, title: '公司成员', icon: 'i-line-md:heart', img: '/ren.svg' },
    { id: 4, title: '联系我们', icon: 'i-line-md:email', img: '/lianxi.svg' },
  ];
  const tag = [
    { id: 1, title: '专业服务团队规模' },
    { id: 2, title: '智能化技术赋能' },
    { id: 3, title: '数字化转型' },
    { id: 4, title: '关键字' },
    { id: 5, title: '关键字' },
  ];
  const active = ref(1);
  // hover触发事件
  const changeActive = (index: number) => {
    active.value = index;
  };
</script>

<template>
  <div>
    <!-- 首屏 -->
    <div class="screen">
      <img src="../../assets/beijinh1.webp" class="w-full h-80vh" />
      <NavBar />
      <div class="absolute top-20% left-20% -translate-50% color-white">
        <p class="mb-5 text-center text-4xl leading-snug">
          用AI为传统央企数字化赋能
          <br />
          打造最好的行业融合AI公司
        </p>
        <p class="mb-10 text-center text-xl leading-snug">懂物探的AI公司</p>
      </div>
    </div>

    <!-- 公司简介 -->
    <div class="introduction-bg w-full relative">
      <div class="flex-center w-400 m-auto mb-20 absolute top-0 left-50% -translate-50%">
        <n-card
          v-for="item in menuCard"
          :key="item.id"
          size="large"
          class="bg-opacity-70 transition-all-500"
          :class="active === item.id ? 'ai-bg-active color-white' : ''"
          @mouseenter="changeActive(item.id)"
        >
          <!-- <i :class="`${item.icon} w-8 h-8 mb-5`"></i> -->
          <img :src="item.img" class="banner-icon w-8 h-12 mb-5" />
          <div class="font-bold text-xl">{{ item.title }}</div>
        </n-card>
      </div>

      <div class="flex-center w-400 m-auto pt-30">
        <div class="w-200 mr-20 mb-20">
          <img src="../../assets/gaolouigc1.png" class="w-10 h-10 mb-5" />
          <h2 class="text-3xl font-bold mb-10">融合AI <br />领域领跑企业</h2>
          <div class="color-neutral-700 indent-md mb-10 text-lg">
            <p>
              北京三油科技有限责任公司主要技术团队由具有留学背景的软件项目开发、AI算法及相关行业专家团队构成，专注人工智能在细分领域行业场景的深入，服务于企业数字化、智能化进程，用AI为传统企业技术赋能。
            </p>
            <p>
              行业细分领域为石油及煤田物探、工程物探、合成化工、水文、智慧城市、管道建设等方向软件开发及AI算法定制开发。倡导“专注、务实、高效、创新”的企业精神，通过企业内部机制促进人工智能方向的算法创新。公司注册于中关村西区人才聚集地-同方科技广场，汇集清北、中科院优秀人才资源，来自中关村核心区的科技源动力。
            </p>
            <p
              >北京三油科技致力致力于为传统企业提供数字化、智能化技术赋能，以波形、时深数据为主线，研发包括地震噪音去除、断裂识别、初至拾取、地震相识别等行业算法，同时服务智能制造企业数字化转型，包括企业计划管理及运用私域大模型技术对pdf相关语言类格式转置及关键要素提取等非结构化数据转结构化等算法项目。专注人工智能在细分领域的软件定制、前后端开发、平台搭建、私域大模型部署训练工程化方案等。专注AI，深耕垂直细分领域，为垂直细分行业企业数字化技术赋能。
            </p>
          </div>
          <img src="../../assets/jishufuwu1.png" />
        </div>
        <div class="border-t border-#d2dce1 color-#11ccfa;">
          <n-grid :cols="2">
            <n-gi v-for="(item, index) in tag" :key="item.id" :span="1">
              <div
                class="flex-center w-60 h-50 border-l border-b border-#d2dce1 font-bold text-2xl color-#0c6fea bg-white"
                :class="[1, 3, 4].includes(index) ? 'border-r' : ''"
              >
                {{ item.title }}
              </div>
            </n-gi>
          </n-grid>
        </div>
      </div>
    </div>

    <!-- 技术预研 -->
    <div class="technology m-auto">
      <div class="technology-bg py-10">
        <p class="color-#6dc2e9 mb-5 text-center">技术预研</p>
        <h2 class="text-center text-3xl font-bold mb-5 color-white">
          SmartGeo初至自动拾取<br />
          基于深度学习的地震波初至自动拾取
        </h2>
        <p class="color-#6dc2e9 mb-5 text-center indent-md m-auto">
          推进公司完全知识产权的smartgeo系列物探工具软件商用化，切实做到专注AI促进地球物理数据衍生，为国家能源央企数字化智能化贡献力量。

          <br />
          以起跳为初至位置而不是第一个波谷或者波峰，多模态输入 -->
        </p>

        <n-tabs
          placement="left"
          size="large"
          type="line"
          pane-style="padding: 0 50px"
          tab-style="color: #fff"
          class="m-auto w-300 h-170 p-5"
        >
          <n-tab-pane
            v-for="item in technologyList"
            :key="item.id"
            :name="item.title"
            :tab="item.title"
          >
            <p class="mb-5 color-white">
              {{ item.desc1 }}
              <br />
              {{ item.desc2 }}
            </p>
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
              class="w-250 m-auto"
            >
              <SwiperSlide v-for="(subItem, index) in item.img" :key="index">
                <img class="carousel-img" :src="subItem" />
              </SwiperSlide>
            </Swiper>
          </n-tab-pane>
        </n-tabs>
      </div>
    </div>

    <!-- 企业文化 -->
    <div class="culture-bg w-full h-70vh">
      <div class="w-80% h-120 m-auto">
        <p class="color-#333 mb-5 text-center pt-20">企业文化</p>
        <h2 class="text-center text-3xl font-bold mb-4">心无旁骛，深耕主业，创新变革，自强不息 </h2>
        <p class="color-#333 mb-20 text-center indent-md m-auto pt-10 w-200">
          三油科技沉淀了海纳百川的文化哲学，构建与客户、员工、合伙人和社会共享共赢的文化关系，并以此建立与所有参与者共融共生的AI商业生态圈，践行各项创新发展举措，致力启发人工智能思维在中国的崛起，推动人工智能改变中国。
        </p>

        <n-grid :x-gap="12" :y-gap="8" :cols="10">
          <n-grid-item> </n-grid-item>
          <n-grid-item :span="2">
            <div class="bg-#F3F5F6 shadow shadow-gray-200 h-26 b-rd-1 flex-between px-5">
              <div> <p class="text-lg font-bold mb-2">企业愿景</p> <p>xxxxx</p> </div>
              <div><img src="../../assets/wenhua1.png" alt="" /></div>
            </div>
          </n-grid-item>
          <n-grid-item :span="4"> </n-grid-item>
          <n-grid-item :span="2">
            <div class="bg-#F3F5F6 shadow shadow-gray-200 h-26 b-rd-1 flex-between px-5">
              <div> <p class="text-lg font-bold mb-2">战略定位</p> <p>xxxxx</p> </div>
              <div><img src="../../assets/wenhua2.png" alt="" /></div>
            </div>
          </n-grid-item>
          <n-grid-item> </n-grid-item>
          <n-grid-item>
            <div class="bg-#F3F5F6 shadow shadow-gray-200 h-26 b-rd-1"></div>
          </n-grid-item>
          <n-grid-item>
            <div class="bg-#F0F5F7 shadow shadow-gray-250 h-26 b-rd-1"></div>
          </n-grid-item>
          <n-grid-item :span="2">
            <div class="bg-#F3F5F6 shadow shadow-gray-200 h-26 b-rd-1 flex-between px-5">
              <div> <p class="text-lg font-bold mb-2">经营思想</p> <p>xxxxx</p> </div>
              <div><img src="../../assets/wenhua3.png" alt="" /></div>
            </div>
          </n-grid-item>
          <n-grid-item> </n-grid-item>
          <n-grid-item> </n-grid-item>
          <n-grid-item :span="2">
            <div class="bg-#F3F5F6 shadow shadow-gray-200 h-26 b-rd-1 flex-between px-5">
              <div> <p class="text-lg font-bold mb-2">企业精神</p> <p>xxxxx</p> </div>
              <div><img src="../../assets/wenhua4.png" alt="" /></div>
            </div>
          </n-grid-item>
          <n-grid-item> </n-grid-item>
          <n-grid-item> </n-grid-item>
          <n-grid-item> </n-grid-item>
          <n-grid-item>
            <div class="bg-#F3F5F6 shadow shadow-gray-200 h-26 b-rd-1"></div>
          </n-grid-item>
          <n-grid-item> </n-grid-item>
          <n-grid-item>
            <div class="bg-#F3F5F6 shadow shadow-gray-200 h-26 b-rd-1"></div>
          </n-grid-item>
          <n-grid-item :span="2">
            <div class="bg-#F3F5F6 shadow shadow-gray-200 h-26 b-rd-1 flex-between px-5">
              <div> <p class="text-lg font-bold mb-2">企业使命</p> <p>xxxxx</p> </div>
              <div><img src="../../assets/wenhua5.png" alt="" /></div>
            </div>
          </n-grid-item>
          <n-grid-item> </n-grid-item>
          <n-grid-item>
            <div class="bg-#F3F5F6 shadow shadow-gray-200 h-26 b-rd-1"></div>
          </n-grid-item>
          <n-grid-item>
            <div class="bg-#F0F5F7 shadow shadow-gray-250 h-26 b-rd-1"></div>
          </n-grid-item>
          <n-grid-item>
            <div class="bg-#F3F5F6 shadow shadow-gray-200 h-26 b-rd-1"></div>
          </n-grid-item>
        </n-grid>
      </div>
    </div>

    <!-- 发展战略 -->
    <div class="strategy m-auto">
      <div class="strategy-bg h-120 m-auto">
        <p class="color-#6dc2e9 mb-5 text-center pt-20">发展战略</p>
        <h2 class="text-center text-3xl font-bold mb-4 color-white">
          整合 · 共享 · 创新 <br />
          构建共融共生的AI商业生态 整体推动企业数字化转型
        </h2>
        <p class="color-#6dc2e9 mb-5 text-center indent-md m-auto pt-10 w-200">
          公司主要技术团队由具有留学背景算法及石油行业专家团队构成，专注人工智能在石油石化场景的行业深入，服务于大型能源央企数字化、智能化进程，用AI为传统能源央企技术赋能。
          细分领域为行业AI算法深度定制、石油煤炭物探、工程物探、水文、智慧城市、管道建设、炼化工业安全管控等方向AI算法落地深入。
          倡导“专注、务实、高效、创新”的企业精神，通过良好的现代企业内部机制促进人工智能方向的算法创新。
          <br />
          公司注册于中关村西区人才聚集地-同方科技广场，汇集清北、中科院优秀人才资源，来自中关村核心区的科技源动力。
        </p>
      </div>
    </div>

    <!-- 时间线 -->
    <div class="time-line-bg w-full h-60vh">
      <div class="h-120 pt-20 flex-center flex-wrap">
        <div>
          <h2 class="text-center text-3xl font-bold mb-4">
            三油科技的自我修行，走过的每一步都是蜕变
          </h2>
          <p class="color-#666 mb-20 text-center indent-md m-auto pt-10 w-200">
            三油科技沉淀了海纳百川的文化哲学，构建与客户、员工、合伙人和社会共享共赢的文化关系，并以此建立与所有参与者共融共生的AI商业生态圈，践行各项创新发展举措，致力启发人工智能思维在中国的崛起，推动人工智能改变中国。
          </p>
        </div>
        <n-timeline horizontal class="text-center text-3xl flex-center">
          <n-timeline-item content="SmartGeo" />
          <n-timeline-item type="success" title="项目筹划" time="2020-10" />
          <n-timeline-item type="info" content="团队组件" time="2021-3" />
          <n-timeline-item type="success" title="北京三油科技成立" content="" time="2021-5" />
          <n-timeline-item
            type="info"
            title="发布SmartGeo1.0beta"
            content="专注地震记录的初至拾取"
            time="2021-7"
          />
          <n-timeline-item
            type="success"
            title="验证SmartGeo推理速度"
            content="优化产品设计架构"
            time="2022-7"
          />
          <n-timeline-item
            type="info"
            title="发布SmartGeo2.0预发布"
            content="优化运算速度及文件读取速度"
            time="2021-9"
          />
          <n-timeline-item
            type="success"
            title="三层断层识别 三层层位识别"
            content=""
            time="2021-10"
          />
          <n-timeline-item
            type="info"
            title="初至拾取二代模型"
            content="地下异常体识别训练"
            time="2021-11"
          /><n-timeline-item
            type="success"
            title="规划SmartGeo3.0"
            content="SegD格式支持,工程物探煤田数据收集  "
            time="2021-12"
          />
          <n-timeline-item
            type="info"
            title="发布SmartGeo行业版本"
            content="开发通用物探模型"
            time="2022-3"
          />
          <n-timeline-item type="success" title="地震地质灾害" content="" time="2022-5" />
          <n-timeline-item title="持续更新行业数据仓及算法模型" content="开" time="" />
        </n-timeline>
      </div>
    </div>

    <!-- 底部 -->
    <NavFooter />
    <!-- 回到顶部 -->
    <n-back-top :right="60" />
  </div>
</template>

<style lang="scss" scoped>
  .ai-bg-active {
    background-image: url('../../assets/contacebagimfe1.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .introduction-bg {
    background-image: url('../../assets/shijian-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #e8f1f5;
  }
  .technology-bg {
    background-image: url('../../assets/zerenbaimg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .strategy-bg {
    background-image: url('../../assets/zhanlueimg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .culture-bg {
    background-image: url('../../assets/wenhuabag1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .time-line-bg {
    background-image: url('../../assets/lingyubag1.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
