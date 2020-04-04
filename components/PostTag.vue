<template>
  <li class="ant-tag">
    <router-link :to="'/tag/' + tag">
      {{ tag }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "PostTag",
  props: {
    tag: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="stylus">

.ant-tag {
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-block;
  height: auto;
  margin: 0 8px 0 0;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  cursor: default;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}

.post-tag
  background-color $postTagBgColor
  border-radius 3px 0 0 3px
  height 26px
  padding 0 20px 0 23px
  position relative
  cursor pointer

  &:not(:last-child)
    margin-right 10px

  a
    color $postTagColor
    text-decoration none
    transition color 0.2s

  &:before
    position absolute
    left 10px
    top 10px
    background #fff
    border-radius 50%
    box-shadow inset 0 1px rgba(0, 0, 0, 0.25)
    content ''
    height 6px
    width 6px

  &:after
    position absolute
    right 0
    top 0
    background $bgColor
    border-bottom 13px solid transparent
    border-left 10px solid $postTagBgColor
    border-top 13px solid transparent
    content ''

  &:hover
    background-color $accentColor

    &:after
      border-left-color $accentColor

    a
      color #fff
</style>
