<route lang="yaml">
meta:
  name: AdminDashboard
  layout: admin
  title: 後台首頁
  login: login-only
  admin: true
</route>

<template>
  <div class="space-y-6">
    <!-- 歡迎卡片 -->
    <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>

    <!-- 載入中提示 -->
    <Skeleton v-if="loading" height="10rem" class="mb-4"></Skeleton>

    <!-- 內容 -->
    <Card class="shadow-sm">
      <template #title>
        <div class="flex align-items-center gap-3">
          <i class="pi pi-home text-2xl text-green-900"></i>
          <span class="text-xl font-semibold">歡迎來到後台管理系統</span>
        </div>
      </template>
      <template #content>
        <p class="text-gray-700 mb-4">
          您可以從上方的導覽列開始，或點擊下方的快速按鈕來管理網站內容。
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3">
          <Button
            v-for="nav in quickNavs"
            :key="nav.label"
            :label="nav.label"
            :icon="`pi ${nav.icon}`"
            :class="[nav.class, 'text-sm']"
            @click="$router.push(nav.to)"
          />
        </div>
      </template>
    </Card>

    <!-- 快速統計 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- 載入中的骨架屏 -->
      <template v-if="loading">
        <Skeleton v-for="i in 4" :key="i" height="6rem"></Skeleton>
      </template>
      <!-- 實際數據卡片 -->
      <Card
        v-else
        v-for="(stat, index) in stats"
        :key="stat.title"
        class="shadow-sm cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
        @click="$router.push(stat.to)"
      >
        <template #content>
          <div class="flex align-items-center justify-content-between">
            <template v-if="!error">
              <div>
                <div :class="['text-2xl font-bold', stat.textColor]">{{ stat.count }}</div>
                <div class="text-sm text-gray-600">{{ stat.title }}</div>
              </div>
              <i :class="['pi', stat.icon, 'text-3xl', stat.iconColor]"></i>
            </template>
            <template v-else>
              <div class="text-center w-full">
                <i class="pi pi-exclamation-triangle text-2xl text-orange-500"></i>
                <p class="text-sm text-gray-600 mt-2">無法載入</p>
              </div>
            </template>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import projectsService from '@/services/projects'
import modulesService from '@/services/modules'
import blogsService from '@/services/blogs'
import faqsService from '@/services/faqs'

const quickNavs = ref([
  {
    label: '學員成果管理',
    icon: 'pi-briefcase',
    class: 'bg-green-600 hover:bg-green-900 border-green-950',
    to: '/admin/projects',
  },
  {
    label: '課程模組管理',
    icon: 'pi-box',
    class: 'bg-amber-600 hover:bg-amber-900 border-amber-950',
    to: '/admin/modules',
  },
  {
    label: '部落格文章管理',
    icon: 'pi-file',
    class: 'bg-green-600 hover:bg-green-900 border-green-950',
    to: '/admin/blog',
  },
  {
    label: 'FAQ管理',
    icon: 'pi-question-circle',
    class: 'bg-purple-600 hover:bg-purple-900 border-purple-950',
    to: '/admin/faq',
  },
])

const stats = ref([
  {
    title: '學員成果總數',
    count: 0,
    icon: 'pi-briefcase',
    textColor: 'text-green-600',
    iconColor: 'text-green-200',
    to: '/admin/projects',
    error: false,
    service: projectsService.getAll,
    responseKey: 'projects',
  },
  {
    title: '課程模組總數',
    count: 0,
    icon: 'pi-box',
    textColor: 'text-amber-600',
    iconColor: 'text-amber-200',
    to: '/admin/modules',
    error: false,
    service: modulesService.getAll,
    responseKey: 'modules',
  },
  {
    title: '部落格文章總數',
    count: 0,
    icon: 'pi-file',
    textColor: 'text-green-600',
    iconColor: 'text-green-200',
    to: '/admin/blog',
    error: false,
    service: blogsService.getAll,
    responseKey: 'blogs',
  },
  {
    title: 'FAQ 項目總數',
    count: 0,
    icon: 'pi-question-circle',
    textColor: 'text-purple-600',
    iconColor: 'text-purple-200',
    to: '/admin/faq',
    error: false,
    service: faqsService.getAll,
    responseKey: 'faqs',
  },
])

const loading = ref(true)
const error = ref(null)

const fetchStats = async () => {
  loading.value = true
  error.value = null
  try {
    // 建立一個包含所有 API 請求的 Promise 陣列
    const promises = stats.value.map((stat) => stat.service())
    // 等待所有請求完成
    const results = await Promise.all(promises)

    // 遍歷結果並更新統計數據
    stats.value.forEach((stat, index) => {
      const response = results[index]
      // 根據 responseKey 從回應中取得資料陣列並計算其長度
      if (response.data && Array.isArray(response.data[stat.responseKey])) {
        stat.count = response.data[stat.responseKey].length
      } else {
        console.warn(`Unexpected response structure for ${stat.title}`, response)
        stat.error = true
      }
    })
  } catch (err) {
    console.error('Failed to fetch stats:', err)
    error.value = '無法載入儀表板統計數據，請稍後再試。'
    stats.value.forEach((stat) => {
      stat.error = true
    })
  } finally {
    loading.value = false
  }
}

onMounted(fetchStats)
</script>
