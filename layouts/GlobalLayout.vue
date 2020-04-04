<template>
  <div id="vuepress-theme-blog" class="theme-blog light theme-3">
    <vue-drawer-layout 
    :content-drawable="true" 
    :enable="enable" 
    ref="drawer"
     :drawer-width="300"
     @slide-start="handleSlideMove"
     @slide-end="handleSlideEnd" >
      <div class="drawer" slot="drawer">
        <button @click="handleToggleDrawer"  class="setting-button">
          <span :class="visible?'el-icon-close':' el-icon-setting'"></span>
        </button>
      <MenuBar/>
      </div>
      <div class="content" slot="content">
        <script src="//at.alicdn.com/t/font_1363480_ejr0pj5o6ef.js" />
        <Header />
        <DefaultGlobalLayout></DefaultGlobalLayout>
        <Player />
        <Footer />
      </div>
    </vue-drawer-layout>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "@theme/components/Header.vue";
import MobileHeader from "@theme/components/MobileHeader.vue";
import Footer from "@theme/components/Footer.vue";
import Profile from "@theme/components/Profile.vue";
import MenuBar from "@theme/components/MenuBar.vue";
export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer,
    MenuBar
  },

  data() {
    return {
      visible: false,
      size: 300
    };
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
      return false;
    }
  }
};
</script>
<style lang="stylus">
@import url('../styles/bootstrap.min.css');
@require '../styles/theme';
html {
  height: 100%;

  body {
    height: 100%;

    #app {
      height: 100%;
      position: relative;
      background-color: #f0f2f5;
    }
  }
}
a{
  transition: all .3s
}
a:hover, a:focus {
    text-decoration: none;
}
.setting-button {
  position: absolute;
  right: -58px;
  top: 120px;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  // background: #1890ff;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  outline: none;
  border: 0;
  color: #fff;
}


.theme-blog {
  word-wrap: break-word;
  height: 100%;
  position: relative;
}

.drawer {
  background: #ffffff;
  height 100%
}

.content {
  overflow: auto;
  height: 100%;
}
</style>
