import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newSong',
      name: 'newSong',
      component: resolve => require(['../pages/newSong.vue'], resolve)
    },
    {
      path: '/rank',
      name: 'rank',
      component: resolve => require(['../pages/rank.vue'], resolve)
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['../pages/search.vue'], resolve)
    }
  ]
})
