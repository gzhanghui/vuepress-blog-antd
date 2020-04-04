<template>
  <div class="container-fluid">
    <div class="row" style="padding-top:100px">
      <div class="col-md-3">
        <Profile class="profile-wrap card-bg" />
      </div>
      <div class="col-md-9">
        <div class="list-wrap card-bg">
          <ScrollNavBar :current="current" :labels="labels" @change="changeHandler">
            <template slot-scope="scope">
              <router-link :to="JSON.parse(scope.label).path">{{JSON.parse(scope.label).name}}</router-link>
            </template>
          </ScrollNavBar>
          <BaseListLayout :pages="pages" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "@theme/components/Header.vue";
import MobileHeader from "@theme/components/MobileHeader.vue";
import Footer from "@theme/components/Footer.vue";
import Profile from "@theme/components/Profile.vue";
import ScrollNavBar from "@theme/components/scroll-nav-bar.vue";
export default {
  components: {
    // DefaultGlobalLayout: GlobalLayout,
    Profile,
    ScrollNavBar
  },

  data() {
    return {
      current: "",
      labels: []
    };
  },
  mounted() {
    if (this.$route.meta.pid !== "tag") {
      this.labels = this.$themeConfig.directories.map(item =>
        JSON.stringify({ name: item.id, path: item.path })
      );
    } else {
      this.labels = this.$tag.list.map(item =>
        JSON.stringify({ name: item.name, path: item.path })
      );
    }
    const id = this.$route.meta.id;
    this.current = this.labels.find(item => item.indexOf(id) > -1);
  },
  computed: {
    pages() {
      return this.$pagination.pages;
    },
    directories() {
      return this.$themeConfig.directories;
    }
  },
  watch: {
    $route(to, from) {
      if (to.path.indexOf("tag") > -1) {
        this.labels = this.$tag.list.map(item => {
          return JSON.stringify({ name: item.name, path: item.path });
        });
        this.current = this.labels[0];
      } else {
        this.labels = this.$themeConfig.directories.map(item => {
          return JSON.stringify({ name: item.id, path: item.path });
        });
        this.current = this.labels[0];
      }
      const id = this.$route.meta.id;
      this.current = this.labels.find(item => {
        return item.indexOf(id) > -1;
      });
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.$router.push({ path: tab.name });
    },
    changeHandler(cur) {
      this.current = cur;
      // this.$router.push({ path: cur.name });
    }
  }
};
</script>

<style lang="stylus" scoped>
.list-wrap,.profile-wrap {
  padding 24px
}
</style>
