import PageHome from '/src/components/PageHome'
import PageThreadShow from '/src/components/PageThreadShow'
import NotFound from '/src/components/PageNotFound'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      //check if the thread exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)

      //if exist continue
      //if doesn't exist redirect to not found page
      if (threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          //preserve existing query and hash
          query: to.query,
          hash: to.hash,
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})