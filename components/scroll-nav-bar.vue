<template>
  <div class="cube-scroll-nav-bar card-border" :class="'cube-scroll-nav-bar_' + direction">
    <scroll ref="scroll" nestMode="none" :options="options" :direction="direction">
      <div class="cube-scroll-nav-bar-items" ref="items">
        <div
          class="cube-scroll-nav-bar-item tabs"
          v-for="(txt, index) in usedTxts"
          :key="index"
          :class="{'cube-scroll-nav-bar-item_active': active === labels[index]}"
          @click="clickHandler(labels[index])"
        >
          <slot :txt="txt" :index="index" :active="active" :label="labels[index]">
            <span v-html="txt"></span>
          </slot>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import scrollMixin from "../mixins/scroll";
import Scroll from "./Scroll";
const DIRECTION_H = "horizontal";
const DIRECTION_V = "vertical";

const COMPONENT_NAME = "cube-scroll-nav-bar";
const EVENT_CHANGE = "change";

export default {
  name: COMPONENT_NAME,
  inject: {
    scrollNav: {
      default: null
    }
  },
  components: { Scroll },
  mixins: [scrollMixin],
  props: {
    direction: {
      type: String,
      default: DIRECTION_H,
      validator(val) {
        return val === DIRECTION_H || val === DIRECTION_V;
      }
    },
    labels: {
      type: Array,
      default() {
        /* istanbul ignore next */
        return [];
      }
    },
    txts: {
      type: Array,
      default() {
        this._defaultTxts = true;
        /* istanbul ignore next */
        return this.labels;
      }
    },
    current: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      active: this.current,
      usedTxts: this.txts
    };
  },
  watch: {
    labels(newLabels) {
      if (this._defaultTxts) {
        this.usedTxts = newLabels;
      }
    },
    txts(newTxts) {
      this.usedTxts = newTxts;
    },
    current(newVal) {
      this.active = newVal;
    },
    active(newVal) {
      this.$emit(EVENT_CHANGE, newVal);
      this._adjust();
    }
  },
  mounted() {
    this.scrollNav && this.scrollNav.setBar(this);
    if (this.active && this.$refs.scroll) {
      // waiting panels loaded
      this.$nextTick(() => {
        this._adjust();
      });
    }
  },
  beforeDestroy() {
    this.scrollNav && this.scrollNav.setBar(null);
  },
  methods: {
    clickHandler(label) {
      if (label === this.active) {
        return;
      }
      this.active = label;
      this.scrollNav && this.scrollNav.barChange(label);
    },
    refresh() {
      this.$refs.scroll.refresh();
      this._adjust();
    },
    _adjust() {
      // waiting ui
      this.$nextTick(() => {
        const isHorizontal = this.direction === DIRECTION_H;
        const targetProp = isHorizontal ? "clientWidth" : "clientHeight";
        const active = this.active;
        const viewportSize = this.$refs.scroll.$el[targetProp];
        const itemsEle = this.$refs.items;
        const scrollerSize = itemsEle[targetProp];
        const minTranslate = Math.min(0, viewportSize - scrollerSize);
        const middleTranslate = viewportSize / 2;
        const items = itemsEle.children;
        let size = 0;
        this.labels.every((label, index) => {
          if (label === active) {
            size += items[index][targetProp] / 2;
            return false;
          }
          size += items[index][targetProp];
          return true;
        });
        let translate = middleTranslate - size;
        translate = Math.max(minTranslate, Math.min(0, translate));
        this.$refs.scroll.scrollTo(
          isHorizontal ? translate : 0,
          isHorizontal ? 0 : translate,
          300
        );
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cube-scroll-nav-bar {
  position: relative;
  display: flex;
}

.cube-scroll-nav-bar_horizontal {
  align-items: center;

  .cube-scroll-wrapper {
    flex: 1;
    text-align: left;
  }

  .cube-scroll-content {
    display: inline-block;
    vertical-align: top;
  }

  .cube-scroll-nav-bar-items {
    white-space: nowrap;
  }
}

.cube-scroll-nav-bar_vertical {
  height: 100%;
  justify-content: center;
  text-align: center;

  .cube-scroll-nav-bar-item {
    display: block;
  }
}

.cube-scroll-nav-bar-item {
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  position: relative;
  margin 0 12px;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scaleX(0.0001);
    opacity: 0;
    transition: all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    content: '';
  }

  a {
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 16px 10px;
    font-weight: 500;
    display: inline-block;
  }
}
</style>
