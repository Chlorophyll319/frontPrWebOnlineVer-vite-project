<template>
  <ul :class="menuClass">
    <template v-for="item in navItems" :key="item.to">
      <li v-if="item.show">
        <router-link :to="item.to">
          <div v-if="item.to === '/cart' && user.cartTotal > 0" class="indicator">
            <span class="indicator-item badge badge-secondary">{{ user.cartTotal }}</span>
            {{ item.title }}
          </div>
          <span v-else>{{ item.title }}</span>
        </router-link>
      </li>
    </template>
    <li v-if="user.isLoggedIn"><a @click="handleLogout">登出</a></li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import userService from '@/services/user'
import { useUserStore } from '@/stores/user'

defineProps({
  menuClass: {
    type: String,
    required: true
  }
})

const user = useUserStore()
const router = useRouter()

const navItems = computed(() => [
  { title: '首頁', to: '/', show: true },
  { title: '註冊', to: '/register', show: !user.isLoggedIn },
  { title: '登入', to: '/login', show: !user.isLoggedIn },
  { title: '購物車', to: '/cart', show: user.isLoggedIn },
  { title: '訂單', to: '/orders', show: user.isLoggedIn },
  { title: '管理', to: '/admin', show: user.isLoggedIn && user.isAdmin },
])

const handleLogout = async () => {
  try {
    await userService.logout()
  } catch (error) {
    console.error(error)
  }
  user.logout()
  router.push('/')
}
</script>