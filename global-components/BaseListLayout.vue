<template>
  <div id="base-list-layout">
        <div class="ui-posts" itemscope itemtype="http://schema.org/Blog">
          <article
            v-for="page in pages"
            :key="page.key"
            class="ui-post post-list-item card-border"
            itemprop="blogPost"
            itemscope
            itemtype="https://schema.org/BlogPosting"
          >
            <meta itemprop="mainEntityOfPage" :content="page.path" />

            <NavLink
              class="list-item-title "
              :link="page.path"
              itemprop="name headline"
            >{{ page.title }}</NavLink>
            <div v-if="page.frontmatter.tags" itemprop="keywords">
              <router-link
                class="list-item-tag"
                v-for="tag in resolvePostTags(page.frontmatter.tags)"
                :key="tag"
                :to="'/tag/' + tag"
              >{{ tag }}</router-link>
            </div>

            <p
              class="list-item-summary"
              itemprop="description"
            >{{ page.frontmatter.summary || page.summary }}</p>
            <div
              class="meta"
              v-if="page.frontmatter.author"
              itemprop="publisher author"
              itemscope
              itemtype="http://schema.org/Person"
            >
              <span class="avatar"></span>
              <a itemprop="name" href="https://ant.design">{{ page.frontmatter.author }}</a>
              <span
                class="location"
                v-if="page.frontmatter.location"
                itemprop="address"
              >在{{ page.frontmatter.location }}</span>
              <time
                pubdate
                itemprop="datePublished"
                :datetime="page.frontmatter.date"
              >发布于{{ resolvePostDate(page.frontmatter.date) }}</time>
            </div>
            <ul class="list-item-action">
              <li>
                <i class="el-icon-star-off"></i>
                <span>190</span>
              </li>
              <li>
                <i class="el-icon-view"></i>
                <span>190</span>
              </li>
              <li>
                <i class="el-icon-chat-dot-square"></i>
                <span>190</span>
              </li>
            </ul>
          </article>
        </div>
    <component :is="paginationComponent" v-if="pages.length > 1 && paginationComponent"></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon, TagIcon } from 'vue-feather-icons'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: { NavigationIcon, ClockIcon, TagIcon },

  data() {
    return {
      paginationComponent: null,
    }
  },
 props: {
      pages: {
        type: Array,
        default:()=>{
          return []
        }
      },
 },
  created() {
    this.paginationComponent = this.getPaginationComponent()
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      if (n === 'SimplePagination') {
        return SimplePagination
      }

      return Vue.component(n) || Pagination
    },

    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  },
}
</script>

<style lang="stylus" scoped>

.post-list-item {
  padding-top: 16px;
  padding-bottom: 16px;

  .list-item-title {
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 24px;
    display: block;
  }

  .list-item-tag {
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
  }

  .list-item-summary {
    margin: 16px 0;
  }

  .meta {
    margin-bottom: 12px;

    .avatar {
      position: relative;
      top: 1px;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      vertical-align: top;
      line-height: 24px;
      border-radius: 50%;
      display: inline-block;
      background: url('https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png'); // gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png)
      background-size: cover;
    }

    .location, time {
      margin-left: 16px;
    }
  }

  .list-item-action {
    margin: 0;
    padding: 0;

    li {
      position: relative;
      display: inline-block;
      padding: 0 8px;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
