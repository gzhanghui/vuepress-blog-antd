<template>
  <div class="player">
      <div class="avatar-wrapper" v-if="music.src">
        <aplayer :float="true" :mini="true" :music="music"/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios"
import Aplayer from "vue-aplayer"
import { EventBus } from '@theme/components/event-bus'
export default {
  data() {
    return {
      hotComment: {}
    };
  },
  mounted() {
    this.getComments();
  },
  computed: {
    music() {
      const data = this.hotComment;
      return {
        src: data.url,
        title: data.name,
        artist: data.artistsname,
        pic: data.picurl,
        lrc: null
      };
    }
  },
  components: { Aplayer },
  methods: {
    getComments() {
      axios
        .get("https://api.uomg.com/api/comments.163?format=json")
        .then(res => {
          if (res.data.code === 1) {
            this.hotComment = res.data.data;
            EventBus.$emit('load-hot-comment',res.data.data)
            localStorage.setItem('hotComment',JSON.stringify(res.data.data))
          }
        });
    }
  }
};
</script>

<style scoped>
.player{
  display: inline-block;
  position:fixed;
  left: 0;
  bottom: 0;
}

</style>
