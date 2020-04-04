<template>
  <svg class="svg-icon" aria-hidden="true" :style="{width:size,height:size}">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'Iconfont',
  props: {
    icon: {
      type: String,
      required: true
    },
    size:{
         type: [Number,String],
         default: 16
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>