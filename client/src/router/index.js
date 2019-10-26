import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Finder from '@/components/Finder'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/finder',
      name: 'finder',
      component: Finder
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
    
  ]
})
