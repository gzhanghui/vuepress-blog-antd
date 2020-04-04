module.exports = {
  title: 'VuePress Blog Example',
  description: 'This is a blog example built by VuePress',
  theme: require.resolve('../../'),
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#dateformat
     */

    // dateFormat: 'YYYY-MM-DD',

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#nav
     */

    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'home'
      },
      {
        text: 'Vue',
        link: '/vue/',
        icon: 'vue'
      },
      {
        text: '标签',
        link: '/tag/',
        icon: 'tag'
      }
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#footer
     */
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '/',
        },
        {
          type: 'codesandbox',
          link: '/',
        },
        {
          type: 'facebook',
          link: '/',
        },
        {
          type: 'github',
          link: 'https://github.com/vuepressjs/vuepress-theme-blog',
        },
        {
          type: 'gitlab',
          link: '/',
        },
        {
          type: 'instagram',
          link: '/',
        },
        {
          type: 'linkedin',
          link: '/',
        },
        {
          type: 'mail',
          link: '/',
        },
        {
          type: 'messenger',
          link: '/',
        },
        {
          type:'music',
          link:'/'
        },
        {
          type: 'phone',
          link: '/',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/vuepressjs',
        },
        {
          type:'video',
          link:'/'
        },
        {
          type: 'web',
          link: '/',
        },
        {
          type: 'youtube',
          link: '/'
        }
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#directories
     */

    directories:[
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
      },
      {
        id: 'vue', // Unique id for current classifier
        dirname: '_vue', // Matched directory name
        path: '/vue/', // Entry page for current classifier
        title: 'vue', // Entry and pagination page titles for current classifier.
        // layout: 'IndexWriting', // Layout component name for entry page.
        frontmatter:{ //Front matter for entry page.
          tag: 'vue'
        },
        // itemLayout: 'Writing', // Layout for matched pages.
        itemPermalink: '/vue/:year/:month/:day/:slug', // Permalink for matched pages.
        pagination: { // Pagination behavior
          lengthPerPage: 2,
        },
      }
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#frontmatters
     */

    frontmatters: [
      {
        id: "tag",
        keys: ['tag', 'tags'],
        path: '/tag/',
        layout: 'Tags',
        scopeLayout: 'Tags'
      }
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#globalpagination
     */

    // globalPagination: {
    //   lengthPerPage: 10,
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#sitemap
     */
    sitemap: {
      hostname: 'https://example.vuepress-theme-blog.ulivz.com/'
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#comment
     */
    comment: {
      service: 'disqus',
      shortname: 'vuepress-plugin-blog',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#newsletter
     */
    newsletter: {
      endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#feed
     */
    feed: {
      canonical_base: 'https://example.vuepress-theme-blog.ulivz.com/',
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summary
     */

    // summary:false,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summarylength
     */

    // summaryLength:100,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#pwa
     */

    // pwa:true,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#paginationcomponent
     */

    // paginationComponent: 'SimplePagination'

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#smoothscroll
     */
    smoothScroll: true
  },
}
