<template>
  <div class="container-fluid">
    <div class="row" style="padding-top:100px">
      <div class="col-md-3 col-md-offset-1" style="background:#fff">
        <Profile />
      </div>
      <div class="col-md-7 list-wrap">
        <el-tabs v-model="activeName">
          <el-tab-pane label="所有文章" name="all">
            <BaseListLayout :pages='pages'/>
          </el-tab-pane>
          <el-tab-pane v-for="item in categoryList"  :label="`${item.name}(${item.pages.length})`" :name="item.name" :key="item.name">
            <BaseListLayout :pages='item.pages'/>
          </el-tab-pane>
          
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "@theme/components/Header.vue";
import MobileHeader from "@theme/components/MobileHeader.vue";
import Footer from "@theme/components/Footer.vue";
import Profile from "@theme/components/Profile.vue";
export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Profile
  },

  data() {
    return {
      activeName: "all",
    };
  },
  mounted(){
        console.log(this.$tag.list)
  },
  computed:{
    pages(){
      return this.$pagination.pages
    },
    categoryList(){
      return this.$category.list
    }
  }
};
</script>

<style lang="stylus" scoped>
.list-wrap {
  background: #ffffff;

  .el-tabs__item {
    font-size: 16px !important;
    font-weight: 500;
    color: #1890ff;
  }
}
</style>
