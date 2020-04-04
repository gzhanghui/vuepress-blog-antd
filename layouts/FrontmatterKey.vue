<template>
  <div id="vuepress-theme--layout">
    <h1>deawdawda</h1>
    <!-- <BlogTags :tags="$frontmatterKey.list" /> -->
  </div>
</template>


<script type="text/ecmascript-6">
export default {
 data() {
 return {

 }
 },
 mounted(){
   console.log(this.$frontmatterKey)
   for (const key in this.$frontmatterKey) {
     console.log(key)
   }
 },
 components: {

 }
}
</script>

<style scoped lang="stylus">
</style>
