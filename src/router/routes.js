
const routes = [
  {
    path: '/',
    component: () => import('layouts/publicLayout.vue'),
    children: [
      { path: '', component: () => import('pages/indexPage.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/errorPage.vue')
  })
}

export default routes
