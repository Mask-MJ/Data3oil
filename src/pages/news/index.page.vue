<script setup lang="ts">
  const mockData = [
    {
      id: 1,
      title: '新闻标题1',
      content: '新闻内容1',
      monthTime: '11月',
      dayTime: '1日',
      img: '/home/xibao.png',
    },
    {
      id: 2,
      title: '新闻标题2',
      content: '新闻内容2',
      monthTime: '1月',
      dayTime: '4日',
      img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
    },
    {
      id: 3,
      title: '新闻标题3',
      content: '新闻内容3',
      monthTime: '1月',
      dayTime: '18日',
      img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
    },
    {
      id: 4,
      title: '新闻标题4',
      content: '新闻内容4',
      monthTime: '1月',
      dayTime: '20日',
      img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg',
    },
    {
      id: 5,
      title: '新闻标题5',
      content: '新闻内容5',
      monthTime: '11月',
      dayTime: '1日',
      img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    },
    {
      id: 6,
      title: '新闻标题6',
      content: '新闻内容6',
      monthTime: '1月',
      dayTime: '4日',
      img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
    },
    {
      id: 7,
      title: '新闻标题7',
      content: '新闻内容7',
      monthTime: '1月',
      dayTime: '18日',
      img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
    },
    {
      id: 8,
      title: '新闻标题8',
      content: '新闻内容8',
      monthTime: '1月',
      dayTime: '20日',
      img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg',
    },
    {
      id: 9,
      title: '新闻标题9',
      content: '新闻内容9',
      monthTime: '1月',
      dayTime: '20日',
      img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    },
  ];
  const page = ref(1);
  const pageSize = ref(10);
</script>

<template>
  <div>
    <div class="screen mb-20">
      <NavBar />
      <n-carousel show-arrow draggable autoplay class="w-400 m-auto pt-40 pb-20">
        <div v-for="item in mockData" :key="item.id" class="news flex-center bg-white">
          <img class="news-img w-50% h-125" :src="item.img" />
          <div class="flex-1 py-10 mx-25 cursor-pointer">
            <h2 class="text-3xl font-bold mb-10"> {{ item.title }}</h2>
            <div class="news-content text-xl color-#333 h-30 transition-all-500">
              {{ item.content }}
            </div>
            <div class="news-line"></div>
            <div class="font-bold flex-y-center">
              查看详情
              <i
                class="i-line-md:chevron-small-right right transition-all-500 ml-5 color-#003686 text-xl"
              ></i>
            </div>
          </div>
        </div>

        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            >
            </li>
          </ul>
        </template>
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <i class="i-line-md:arrow-left"></i>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <i class="i-line-md:arrow-right"></i>
            </button>
          </div>
        </template>
      </n-carousel>
    </div>
    <div class="w-400 m-auto">
      <!-- 新闻列表 -->
      <n-grid :x-gap="24" :y-gap="32" :cols="3" class="mb-20">
        <n-grid-item
          v-for="item in mockData"
          :key="item.id"
          class="border border-neutral-300 b-rd-2 shadow shadow-blue-200/50 news overflow-hidden"
        >
          <img :src="item.img" class="news-img w-130 h-70 m-auto b-rd-2" />
          <div class="py-8 px-10 cursor-pointer">
            <div class="mb-5 bg-#999 inline-block color-white">
              <span class="w-10 inline-block text-center">{{ item.monthTime }}</span>
              <span class="news-dayTime w-12 text-center"> {{ item.dayTime }}</span>
            </div>
            <div class="">
              <h3 class="text-xl font-bold mb-5">{{ item.title }}</h3>
              <div class="h-30 news-content transition-all-500">
                {{ item.content }}
              </div>
            </div>

            <div class="news-line"></div>
            <div class="font-bold flex-y-center">
              查看详情
              <i
                class="i-line-md:chevron-small-right right transition-all-500 ml-5 color-#003686 text-xl"
              ></i>
            </div>
          </div>
        </n-grid-item>
      </n-grid>
      <!-- 分页 -->
      <n-pagination
        v-model:page="page"
        v-model:page-size="pageSize"
        class="flex-center mb-40"
        size="large"
        :page-count="100"
        show-size-picker
        :page-sizes="[10, 20, 30, 40]"
      />
    </div>
    <!-- 底部占位 -->
    <NavFooter />
    <!-- 回到顶部 -->
    <n-back-top :right="60" />
  </div>
</template>

<style lang="scss" scoped>
  .screen {
    background-image: url('/common/zhanlueimg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  //新闻-hover样式
  .news:hover {
    .news-img {
      transform: scale(1.1);
    }
    .news-content,
    .right {
      // @apply translate-x-3 ; //hover:translate-x-8
      transform: translateX(10px);
    }
    .news-line::after {
      width: 100%;
    }
  }
  // 轮播图样式
  .news-img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .custom-arrow {
    display: flex;
    position: absolute;
    bottom: 90px;
    right: 10px;
  }

  .custom-arrow button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-right: 12px;
    color: #ffffff;
    background-color: rgba(139, 185, 245, 0.4);
    border-width: 0;
    border-radius: 8px;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .custom-arrow button:hover {
    background-color: rgba(33, 120, 202, 0.827);
  }

  .custom-arrow button:active {
    transform: scale(0.95);
    transform-origin: center;
  }
  .custom-dots {
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 90px;
    left: 20px;
  }

  .custom-dots li {
    display: inline-block;
    width: 12px;
    height: 4px;
    margin: 0 3px;
    border-radius: 4px;
    background-color: rgba(139, 185, 245, 0.4);
    transition:
      width 0.3s,
      background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .custom-dots li.is-active {
    width: 40px;
    background: #218aec;
  }

  // 轮播图-新闻列表样式
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

  // 新闻列表-时间样式
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
</style>
