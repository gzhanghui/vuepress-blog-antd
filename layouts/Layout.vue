<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <Profile class="profile-wrap bg-wrap" />
        <div id="hotComment"></div>
      </div>
      <div class="col-md-9">
        <BaseListLayout v-if="$pagination" class="bg-wrap" />
        <Content v-else />
      </div>
    </div>
  </div>
</template>
<script>
import Profile from '@theme/components/Profile.vue'
export default {
  components: {
    Profile,
  },
}
</script>

<style>
</style>