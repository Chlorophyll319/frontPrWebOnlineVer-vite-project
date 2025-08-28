<template>
  <div class="min-h-screen bg-gray-50">
    <Menubar :model="menuItems" class="shadow-sm">
      <template #start>
        <router-link to="/admin" class="flex items-center gap-2 no-underline cursor-pointer">
          <i class="pi pi-cog text-xl text-green-600"></i>
          <span class="font-semibold text-lg text-gray-800">後台管理系統</span>
        </router-link>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <Button
            icon="pi pi-user"
            severity="secondary"
            text
            :tooltip="user.username"
          />
          <Button icon="pi pi-sign-out" severity="secondary" text @click="handleLogout" tooltip="登出" />
        </div>
      </template>
      <template #item="{ item, props }">
        <div
          v-bind="props.action"
          :class="[
            'flex items-center gap-2 px-3 py-2 cursor-pointer',
            activeMenu === item.label ? 'bg-green-100 text-green-700 font-bold' : ''
          ]"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </div>
      </template>
    </Menubar>
    
    <main class="p-6">
      <Toast />
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import userService from '@/services/user'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

const user = useUserStore()
const router = useRouter()
const route = useRoute()
const toast = useToast()

const activeMenu = ref('')

const handleLogout = async () => {
  try {
    await userService.logout()
  } catch (error) {
    // 只要不是 500 伺服器錯誤，都當作已經登出
    if (!error.response || error.response.status >= 500) {
      toast.add({
        severity: 'error',
        summary: '登出失敗',
        detail: '請稍後再試',
        life: 3000
      })
      return
    }
    // 400/401/403 都直接清掉本地狀態
  }
  user.logout()
  toast.add({
    severity: 'info',
    summary: '已登出',
    detail: '您已成功登出系統',
    life: 3000
  })
  router.push('/admin/login')
}

const menuItems = computed(() => [
  {
    label: '內容管理',
    icon: 'pi pi-file-edit',
    items: [
      {
        label: '專案管理',
        icon: 'pi pi-briefcase',
        command: () => router.push('/admin/projects'),
        route: '/admin/projects'
      },
      {
        label: '模組管理',
        icon: 'pi pi-box',
        command: () => router.push('/admin/modules'),
        route: '/admin/modules'
      },
      {
        label: '部落格文章管理',
        icon: 'pi pi-file',
        command: () => router.push('/admin/blog'),
        route: '/admin/blog'
      },
      {
        label: 'FAQ 管理',
        icon: 'pi pi-question-circle',
        command: () => router.push('/admin/faq'),
        route: '/admin/faq'
      }
    ]
  },
  {
    label: '前台',
    icon: 'pi pi-external-link',
    command: () => {
      window.open('/', '_blank')
    }
  }
])

// 監聽路由變化，自動設定 activeMenu
watch(
  () => route.path,
  (newPath) => {
    const items = menuItems.value[0].items
    const found = items.find(item => item.route === newPath)
    activeMenu.value = found ? found.label : ''
  },
  { immediate: true }
)
</script>
