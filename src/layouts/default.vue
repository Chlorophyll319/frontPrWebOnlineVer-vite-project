<template>
  <div
    data-theme="cupcake"
    class="fixed top-0 left-0 w-full z-50 navbar bg-base-100 shadow-sm box-border"
  >
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost text-xl normal-case h-auto flex-col items-start">
        <!-- 課程標籤 -->
        <span class="text-xs text-base-content/70 font-light leading-tight"
          >泰山職訓局 前端網頁開發技術</span
        >
        <!-- 標題 -->
        <span class="text-xl leading-tight">非本科的轉職前端之旅</span>
      </router-link>
    </div>
    <!-- 桌機版選單 -->
    <div class="flex-none hidden md:block">
      <ul class="menu menu-horizontal px-1">
        <template v-for="item in navItems" :key="item.to">
          <li v-if="item.show">
            <router-link :to="item.to" class="btn btn-ghost">
              {{ item.title }}
            </router-link>
          </li>
        </template>
        <li v-if="user.isLoggedIn">
          <button @click="handleLogout" class="btn btn-ghost">登出</button>
        </li>
      </ul>
    </div>
    <!-- 手機版漢堡選單 -->
    <div class="flex-none md:hidden">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu menu-sm mt-3 z-[1] p-2 shadow bg-base-100 rounded-xl w-52"
        >
          <template v-for="item in navItems" :key="item.to">
            <li v-if="item.show">
              <router-link
                :to="item.to"
                class="btn btn-ghost rounded-lg text-base py-2 px-4 w-full justify-start"
              >
                {{ item.title }}
              </router-link>
            </li>
          </template>
          <li v-if="user.isLoggedIn">
            <button
              @click="handleLogout"
              class="btn btn-ghost rounded-lg text-base py-2 px-4 w-full justify-start"
            >
              登出
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <main class="p-4 box-border pt-[72px]" data-theme="cupcake">
    <router-view />
  </main>
  <!-- Footer -->
  <footer data-theme="cupcake" class="footer footer-center bg-base-100 text-base-content py-8">
    <div>
      <p>Copyright © {{ new Date().getFullYear() }} - @kcnfoggy54</p>
      <a href="https://www.flaticon.com/" title="Flaticon">designed by Freepik from Flaticon</a>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import userService from '@/services/user'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const router = useRouter()
const navItems = computed(() => [
  { title: '首頁', to: '/', show: true },
  { title: '課程介紹', to: '/courseIntroduction', show: true },
  { title: '其他資訊', to: '/otherInfo', show: true },
  { title: '報名流程', to: '/howToSignUp', show: true },
  { title: '後台登入', to: '/admin/login', show: !user.isLoggedIn },
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
