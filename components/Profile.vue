<template>
  <div class="profile">
    <div class="card">
      <div class="card-body">
        <div>
          <div class="avatar">
            <img
              alt="avatar"
              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            />
            <div class="name">Serati Ma</div>
            <div>海纳百川，有容乃大</div>
          </div>
          <div class="profile-desc">
            <p><i class="iconfont icon-milk-tea" />啥也不是</p>
            <p><i class="iconfont icon-coffee-cup" />蚂蚁金服某某技术部－UED</p>
            <p><i class="iconfont icon-location-information" />浙江省杭州市</p>
          </div>
          <div
            class="ant-divider ant-divider-horizontal ant-divider-dashed"
            role="separator"
          />
          <slot name="profile-tags">
          <div class="tags-list">
            <div class="tags-title">标签</div>
            <span class="tag">很有想法的</span>
            <span class="tag">专注设计</span>
            <span class="tag">辣~</span>
            <span class="tag">大长腿</span>
            <span class="tag">川妹子</span>
            <span class="tag">海纳百川</span>
          </div>
          </slot>
          <slot name='article'>
          <div class="article-tags">
            <div class="article-tags-title">文章标签</div>
            <div class="article-tag-list">
              <router-link
                class="article-tag-item"
                :class="tag.name"
                v-for="tag in $tag.list"
                :key="tag.path"
                :to="tag.path"
              >
               <em>{{ tag.name }}</em>
              <!-- <iconfont :size = '32' :icon='tag.name'/> <em>{{ tag.name }}</em> -->
              </router-link>
            
            </div>
          </div>
          </slot> 
          <slot name="hot-comment">
          <div v-if="hotComment.name" class="hot-comment">
            <div>网易云热评</div>
            <p :title="`${hotComment.name}--${hotComment.artistsname}`">{{hotComment.content}}</p>
          </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { EventBus } from '@theme/components/event-bus'
export default {
  data(){
    return {
      hotComment:{}
    }
  },
  mounted(){
    EventBus.$on('load-hot-comment',(hotComment)=>{
        this.hotComment = hotComment
    })
  }
};
</script>

<style scoped lang="stylus">
.card {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  position: relative;
  border-radius: 2px;
  transition: all 0.3s;
}

.avatar {
  margin-bottom: 24px;
  text-align: center;
}

.avatar>img {
  width: 104px;
  height: 104px;
  margin-bottom: 20px;
}

.avatar .name {
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}

.profile-desc {
  position: relative;
  margin-bottom: 8px;

  i {
    margin-right: 8px;
  }
}

.tags-list {
  margin-top: 32px;

  .tags-title {
    margin-bottom: 12px;
  }
}

.tag {
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
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
  margin-bottom: 8px;
}

.article-tags {
  margin-top: 30px;
}

.article-tags-title {
  margin-bottom: 12px;
}

.article-tag-item {
  margin-bottom: 15px;
  margin-right: 15px;
  display: inline-block;
  align-items: center;
  background: $accentColor;
  color #ffffff;
  text-decoration: none;
  border-radius: 2px;
  padding 4px 8px;
  .icon {
    font-size: 32px;
  }

  em {
    font-style: normal;
  }
  
}
.hot-comment{
  margin:12px 0
}
</style>
