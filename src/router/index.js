import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { START_LOCATION } from 'vue-router/auto'
import userService from '@/services/user'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
  scrollBehavior(to, from, savedPosition) {
    // 如果有儲存的位置 (瀏覽器前進/後退)，使用儲存的位置
    if (savedPosition) {
      return savedPosition
    }
    // 否則捲動到頂部
    return { top: 0 }
  },
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()

  if (from === START_LOCATION && user.isLoggedIn) {
    try {
      const { data } = await userService.refresh()
      user.login({ ...user.$state, token: data.token })
    } catch (error) {
      console.error(error)
      user.token = ''
    }
  }

  const isAdminRoute = to.path.startsWith('/admin')

  // 1. 已登入，但想去「僅限未登入」的頁面 (如登入頁)
  if (to.meta.login === 'no-login-only' && user.isLoggedIn) {
    // 如果是後台登入頁，導向後台首頁；否則導向前台首頁
    if (isAdminRoute) {
      return next('/admin')
    }
    return next('/')
  } else if (to.meta.login === 'login-only' && !user.isLoggedIn) {
    // 2. 未登入，但想去「需要登入」的頁面
    // 如果是後台頁面，導向後台登入頁；否則導向前台登入頁
    if (isAdminRoute) {
      return next('/admin/login')
    }
    return next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    // 3. 已登入但非管理員，想去「需要管理員」的頁面
    return next('/')
  } else {
    return next()
  }
})

router.afterEach((to) => {
  // eslint-disable-next-line no-undef
  document.title = `${to.meta.title} | 如何轉職成為前端工程師`
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    // eslint-disable-next-line no-undef
    if (localStorage.getItem('router:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      // eslint-disable-next-line no-undef
      localStorage.setItem('router:dynamic-reload', 'true')
      // eslint-disable-next-line no-undef
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem('router:dynamic-reload')
})

export default router
