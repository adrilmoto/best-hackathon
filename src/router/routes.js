
const routes = [
  {
    path: '/',
    component: () => import('layouts/publicLayout.vue'),
    children: [
      { path: '', component: () => import('pages/indexPage.vue') },
      { path: 'partners', component: () => import('pages/partnersPage.vue') },
      { path: 'faq', component: () => import('pages/faqPage.vue') },
      { path: 'contacts', component: () => import('pages/contactPage.vue') }
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
