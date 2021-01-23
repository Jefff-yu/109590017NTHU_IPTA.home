import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import contact from '../views/contact.vue'
import qa from '../views/qa.vue'
import teachers from '../views/intro.vue'
import scholarship from '../views/scholarship.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/qa',
    name: 'qa',
    component: qa
  },
  {
    path: '/scholarship',
    name: 'scholarship',
    component: scholarship
  },
  {
    path: '/intro',
    name: 'intro',
    component: teachers
  },

]

const router = new VueRouter({
  routes
})

export default router
