<template>
  <div class="menu-bar">
    <Scroll>
    <Profile>
      <template v-slot:profile-tags>
        <div class="menu-nav">
          <ul v-if="$themeConfig.nav" class="nav">
            <li v-for="item in $themeConfig.nav" :key="item.text" class="nav-item">
              <iconfont :size="20" :icon="item.icon" />
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:article>
        <span></span>
      </template>
      <template v-slot:hot-comment>
        <div class="theme-color">
          <h3 class="theme-color-title">风格</h3>
          <div class="clearfix">
            <div class="theme-color-block" style="background:#000"></div>
            <div class="theme-color-block" style="background:#fff;border:1px solid #ccc"></div>
          </div>
          <h3 class="theme-color-title">主题色</h3>
          <div class="theme-color-content clearfix">
            <div
              class="theme-color-block"
              v-for="(item,index) in theme"
              :key="item"
              :style="{backgroundColor:item }"
              @click="switchTheme(index)"
            ></div>
          </div>
        </div>
      </template>
    </Profile>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from "./Scroll";
import Profile from "./Profile";
const trim = function(string) {
  return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
  }
}

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(" ");
  var curClass = " " + el.className + " ";

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
export default {
  data() {
    return {
      theme: [
        "rgb(24, 144, 255)",
        "rgb(245, 34, 45)",
        "rgb(250, 84, 28)",
        "rgb(250, 173, 20)",
        "rgb(19, 194, 194)",
        "rgb(82, 196, 26)",
        "rgb(47, 84, 235)",
        "rgb(114, 46, 209)"
      ]
    };
  },
  components: { Profile, Scroll },
  methods: {
    switchTheme(index) {
      const dom = document.querySelector("#vuepress-theme-blog");
      this.theme.forEach((item, i) => {
        if (hasClass(dom, "theme-" + i)) {
          removeClass(dom, "theme-" + i);
          addClass(dom, "theme-" + index);
          return;
        }
      });
    }
  }
};
</script>

<style lang="stylus">
.menu-bar {
  padding: 24px;
  height 100%

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .menu-nav {
    margin: 50px 0 40px 0;

    .nav-item {
      display: flex;
      height 50px
      align-items: center;
      border-bottom 1px solid #dfdfdf
    }
  }
}

.theme-color-block {
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
}
</style>
