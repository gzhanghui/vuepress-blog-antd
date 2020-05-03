<template>
  <div id="vuepress-theme-blog__global-layout" v-if="loadCom">
    <vue-drawer-layout
      :content-drawable="true"
      :enable="enable"
      ref="drawer"
      :drawer-width="300"
      @slide-start="handleSlideMove"
      @slide-end="handleSlideEnd"
    >
      <div class="drawer bg-wrap" slot="drawer">
        <profile/>
        <button @click="handleToggleDrawer" class="setting-button">
          <span class="iconfont" :class="visible?'icon-close':' icon-menu'"></span>
        </button>
      </div>
      <div class="layout-main" slot="content">
        <Header />
        <!-- <MobileHeader
          :is-open="isMobileHeaderOpen"
          @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
        /> -->
        <div class="content-wrapper" @click="isMobileHeaderOpen = false" >
          <DefaultGlobalLayout />
        </div>
          <Player/>
        <Footer />
      </div>
    </vue-drawer-layout>
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import MobileHeader from '@theme/components/MobileHeader.vue'
import Footer from '@theme/components/Footer.vue'
import Profile from "@theme/components/Profile.vue"
import { EventBus } from '@theme/components/event-bus'
// import DrawerLayout from 'vue-drawer-layout'
import Vue from 'vue'
export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    MobileHeader,
    Footer,
    Profile
  },

  data() {
    return {
      isMobileHeaderOpen: false,
      visible: false,
      size: 300,
      loadCom:false
    }
  },

  mounted() {
     import('vue-drawer-layout').then(module=>{
          Vue.use(module.default)
          this.loadCom=true
     })
    // Vue.use(DrawerLayout)
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false
    })
  },
  methods: {
    closeSettingPanel() {
      this.drawer = !this.drawer;
    },
    handleToggleDrawer() {
      this.$refs.drawer.toggle();
       this.drawer = !this.drawer;
    },
    handleSlideEnd(visible){
      this.visible = visible
    },
    handleSlideMove(pos){
      console.log(pos)
    }
  },
  computed: {
    enable() {
      // return "ontouchstart" in window;
      return true;
    }
  }
}
</script>

<style lang="stylus">
@import url('//at.alicdn.com/t/font_1794475_rdhwptdisp.css');
html {
  height: 100%;

  body {
    height: 100%;

    #app {
      height: 100%;
      position: relative;
      background-color: #f0f2f5;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
  }
}
#vuepress-theme-blog__global-layout {
  word-wrap: break-word;
  height: 100%;
  position: relative;
}
.setting-button {
  position: absolute;
  right: -58px;
  top: 120px;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: #1890ff;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: 0;
  color: $bgColor;
}
.layout-main{
  height: 100%;
  overflow:auto
  position relative
  z-index 1
}
.bg-wrap{
   background:$bgColor;
   padding:20px;
}
.content-wrapper {
  // padding: 160px 15px 80px 15px;
  // min-height: calc(100vh - 80px - 60px - 160px);
  // max-width: $contentWidth;
  margin: 0 auto;
  padding-top: 80px
  // background:#fff 

  @media (max-width: $MQMobile) {
    & {
      // padding: 100px 15px 20px 15px;
      min-height: calc(100vh - 20px - 60px - 100px);
    }
  }
}
</style>
