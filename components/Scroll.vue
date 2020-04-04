<template>
  <div ref="wrapper" class="cube-scroll-wrapper">
    <div class="cube-scroll-content">
      <div ref="listWrapper" class="cube-scroll-list-wrapper">
        <slot>
          <ul class="cube-scroll-list">
            <li
              class="cube-scroll-item border-bottom-1px"
              v-for="(item, index) in data"
              :key="index"
              @click="clickItem(item)">{{item}}</li>
          </ul>
        </slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  import scrollMixin from '../mixins/scroll'

  const DIRECTION_H = 'horizontal'
  const DIRECTION_V = 'vertical'
  const EVENT_CLICK = 'click'
  const EVENT_SCROLL = 'scroll'
  const EVENT_SCROLL_END = 'scroll-end'
  const SCROLL_EVENTS = [EVENT_SCROLL, EVENT_SCROLL_END]
  const DEFAULT_OPTIONS = {
    observeDOM: true,
    click: true,
    probeType: 1
  }
  export default {
    name: 'Scroll',
    mixins: [scrollMixin],
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      scrollEvents: {
        type: Array,
        default() {
          return []
        },
        validator(arr) {
          return arr.every((item) => {
            return SCROLL_EVENTS.indexOf(item) !== -1
          })
        }
      },
      // TODO: plan to remove at 1.10.0
      listenScroll: {
        type: Boolean,
        default: undefined,
        deprecated: {
          replacedBy: 'scroll-events'
        }
      },
      listenBeforeScroll: {
        type: Boolean,
        default: undefined,
        deprecated: {
          replacedBy: 'scroll-events'
        }
      },
      direction: {
        type: String,
        default: DIRECTION_V
      },
      nestMode: {
        type: String,
        default: 'none'
      }
    },
    watch: {
      data() {
        this.refresh()
      }
    },
    activated() {
      /* istanbul ignore next */
      this.enable()
    },
    deactivated() {
      /* istanbul ignore next */
      this.disable()
    },
    mounted() {
      this.$nextTick(() => {
        this.initScroll()
      })
    },
    beforeDestroy() {
      this.destroy()
    },
    methods: {
      initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        let options = Object.assign({}, DEFAULT_OPTIONS, {
          scrollY: this.direction === DIRECTION_V,
          scrollX: this.direction === DIRECTION_H,
          probeType: this.needListenScroll ? 3 : 1
        }, this.options)
        this.scroll = new BScroll(this.$refs.wrapper, options)
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      destroy() {
        this.scroll && this.scroll.destroy()
        this.scroll = null
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      clickItem(item) {
        this.$emit(EVENT_CLICK, item)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .cube-scroll-wrapper
    position: relative
    height: 100%
    overflow: hidden

  .cube-scroll-list-wrapper
    overflow: hidden

  .cube-pulldown-wrapper
    position: absolute
    width: 100%
    left: 0
    display: flex
    justify-content: center
    align-items: center
    transition: all
    .before-trigger
      height: 54px
      line-height: 0
      padding-top: 6px
    .after-trigger
      .loading
        padding: 8px 0
      .cube-pulldown-loaded
        padding: 12px 0

  .cube-pullup-wrapper
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    .before-trigger
      padding: 22px 0
      min-height: 1em
    .after-trigger
      padding: 19px 0

  .cube-scroll-content
    position: relative
    z-index: 1

  .cube-scroll-item
    height: 60px
    line-height: 60px
    font-size: 16px
    padding-left: 20px
</style>
