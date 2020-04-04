<template>
  <router-link class="ant-tag" :to="tag.path">{{ tag.name }} ({{ tag.pages.length }})</router-link>
</template>

<script>
export default {
  props: ['tag'],
}
</script>

<style lang="stylus">
.blog-tag {
  display: inline-flex;
  align-items: center;
  height: 45px;
  word-break: break-word;
  font-size: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 0 15px;
  border-radius: 5px;
  font-weight: 300;
  text-align: left;
  box-sizing: border-box;
  transition: background-color 0.3s;
  color: $darkTextColor;
  border: 1px solid $darkBorderColor;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: $accentColor !important;
    border: 1px solid $accentColor;
    box-shadow: 0 0 5px $accentColor;
  }
}

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

@media screen and (max-width: 768px) {
  .blog-tag {
    font-size: 14px;
    padding: 3px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
