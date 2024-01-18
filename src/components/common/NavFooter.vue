<script setup lang="ts">
  const menuList = [
    {
      id: 1,
      title: '商业生态',
      children: [
        { subtitle: '与时俱进', path: '/' },
        { subtitle: '数字化转型案例', path: '/' },
        { subtitle: '地球物理板块', path: '/' },
        { subtitle: '深度学习算法预研', path: '/' },
        { subtitle: '大模型技术跟踪', path: '/' },
      ],
    },
    {
      id: 2,
      title: '关于我们',
      children: [
        { subtitle: '公司简介', path: '/' },
        { subtitle: '社会责任', path: '/' },
        { subtitle: '联系我们', path: '/' },
        { subtitle: '团队成员', path: '/' },
      ],
    },
    {
      id: 3,
      title: '新闻资讯',
      children: [
        { subtitle: '公司动态', path: '/' },
        { subtitle: '通知公告', path: '/' },
      ],
    },
  ];
</script>

<template>
  <div class="footer w-100%">
    <!-- 联系 -->
    <Contact />
    <!-- 底部 -->
    <div class="mx-80">
      <n-grid :x-gap="0" :y-gap="0" :cols="4">
        <n-grid-item :span="3">
          <div class="flex-between py-8 footer-line mb-8">
            <div class="flex-around">
              <img src="/logo2.jpg" class="w-30 h-30 mr-15" />
              <div
                class="w-35 h-12 px-5 bg-white flex-y-center font-bold flex-around text-lg b-rd-1 hover:translate-x-5 transition-all-500"
              >
                我要合作
                <i class="i-line-md:chevron-small-right ml-1"></i>
              </div>
            </div>
            <div class="w-60">
              <div class="w-35 flex-between font-bold text-lg pr-10">
                资料下载
                <i class="i-line-md:chevron-small-right ml-1"></i>
              </div>
              <span class="color-#666">点击下载更多三油科技资料</span>
            </div>
          </div>

          <div class="flex justify-between">
            <ul class="flex justify-between flex-1 mr-40">
              <li v-for="item in menuList" :key="item.id">
                <div class="font-bold text-lg mb-3">{{ item.title }}</div>
                <div class="color-#333">
                  <ul>
                    <li v-for="subItem in item.children" :key="subItem.subtitle" class="mb-2">
                      <router-link :to="subItem.path">{{ subItem.subtitle }}</router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div class="flex w-50 mx-5 flex-wrap">
              <div class="font-bold text-lg mb-3">
                客服电话:
                <span class="block mt-5 text-xl">400-xxxx</span>
              </div>
              <div class="color-#333 mb- 8">
                联系电话:
                <span>130-xxxx</span>
              </div>
              <div class="color-#333 mb-3">
                办公地址:
                <br />
                <span> 北京市xxxxxx xxxxxx xxxxx </span>
              </div>
            </div>
          </div>
        </n-grid-item>
        <n-grid-item :span="1">
          <div class="p-11 left-line">
            <div class="flex w-60 flex-wrap">
              <div class="w-25 mb-4 mr-4">
                <img src="/logo2.jpg" class="h-25 mb-2" />
                <span>三油科技官方微信公众号</span>
              </div>
              <div class="w-25 mb-4 mr-4">
                <img src="/logo2.jpg" class="h-25 mb-2" />
                <span>关注三油科技抖音官方号</span>
              </div>
              <div class="w-25 mb-4 mr-4">
                <img src="/logo2.jpg" class="h-25 mb-2" />
                <span>关注三油科技微博</span>
              </div>
            </div>
          </div>
        </n-grid-item>
        <n-grid-item :span="4">
          <div class="font-bold text-xs color-#666 py-5 top-line">
            北京三油科技有限责任公司 备案号
          </div>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer {
    background: url('/foot-bg.jpg') no-repeat center;
    background-size: cover;
    .footer-line {
      border-bottom: 1px solid rgba(161, 160, 160, 0.3);
    }
    .left-line {
      border-left: 1px solid rgba(161, 160, 160, 0.3);
    }
    .top-line {
      border-top: 1px solid rgba(161, 160, 160, 0.3);
    }
    .contact-bg {
      background-image: url('/common/lianxi-bg.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>
