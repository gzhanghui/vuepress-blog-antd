<template>
    <div class="error-wrap">
    <div class="text-wrap">
      <h1>Page Not Found</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <router-link path="/" to="/" class="btn">Go Home</router-link>
    </div>
  </div>


</template>

<script>
export default {
}
</script>

<style lang="stylus">
.error-wrap {
  width: 100%;
  height 100%
  position: fixed;
  background #ffffff  url('../image/404.png') no-repeat
  background-size cover
  margin-top -84px

  .text-wrap {
    position: absolute;
    width: 400px;
    left: 50%;
    top: 20vh;
    margin-left: -200px;
    text-align: center;
  }

  .btn {
    text-decoration: none;
    border: 1px solid rgb(146, 148, 248);
    position: relative;
    overflow: hidden;
    margin-top 20px
  }

  .btn:hover {
    box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
  }

  .btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(146, 148, 248, 0.4),transparent);
    transition: all 650ms;
  }

  .btn:hover:before {
    left: 100%;
  }
}
</style>