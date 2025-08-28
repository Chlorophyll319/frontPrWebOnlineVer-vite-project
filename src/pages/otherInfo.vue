<route lang="yaml">
meta:
  title: '其他資訊'
  # 有沒有登入都能看
  login: ''
  # 不是管理員也能看
  admin: false
</route>

<template>
  <!-- 資料庫內容待新增 -->
  <div class="bg-base-200/50">
    <div class="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <!-- 頁面標題 -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-primary mb-4">你想知道的那些事</h2>
        <p class="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
          這裡整理了關於課程、環境、補助與學長姐心得等文章
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="card bg-base-100 shadow-lg">
          <div class="card-body">
            <div class="skeleton h-8 w-1/2 mb-4"></div>
            <div class="skeleton h-px w-full my-2"></div>
            <div class="space-y-3">
              <div class="skeleton h-8 w-full"></div>
              <div class="skeleton h-8 w-full"></div>
              <div class="skeleton h-8 w-4/5"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="alert alert-error shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>錯誤：{{ error }}</span>
        </div>
      </div>

      <!-- Content -->
      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- 使用 v-for 動態生成卡片 -->
          <div
            v-for="category in infoCategories"
            :key="category.title"
            class="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div class="card-body">
              <h2 class="card-title">{{ category.title }}</h2>
              <div class="divider my-2" />
              <ul class="space-y-1">
                <li v-for="link in category.links" :key="link.to">
                  <router-link
                    :to="link.to"
                    class="btn btn-ghost btn-sm justify-start w-full font-normal"
                  >
                    {{ link.text }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 其他連結區塊 -->
        <div class="mt-12 text-center">
          <div class="divider">其他連結</div>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <div class="tooltip">
              <div class="tooltip-content">
                <div
                  class="animate-bounce bg-primary text-primary-content px-3 py-1 rounded-full text-sm font-semibold -rotate-6 shadow-lg"
                >
                  較推薦使用，班級導師看到會即時回應
                </div>
              </div>
              <button class="btn btn-primary">
                <a
                  href="https://discord.com/invite/TrerFKG"
                  target="_blank"
                  rel="noopener noreferrer"
                  >官方 Discord 連結</a
                >
              </button>
            </div>
            <div class="tooltip">
              <div class="tooltip-content">
                <div
                  class="animate-bounce bg-secondary text-secondary-content px-3 py-1 rounded-full text-sm font-semibold -rotate-6 shadow-lg"
                >
                  泰山職訓局的官方網站！
                </div>
              </div>
              <button class="btn btn-secondary">
                <a href="https://wdaweb.github.io/" target="_blank" rel="noopener noreferrer"
                  >前端班官方網站</a
                >
              </button>
            </div>
            <div class="tooltip">
              <div class="tooltip-content">
                <div
                  class="animate-bounce bg-accent text-accent-content px-3 py-1 rounded-full text-sm font-semibold -rotate-6 shadow-lg"
                >
                  有任何問題可以放在這裡但可能不會即時回應
                </div>
              </div>
              <button class="btn btn-accent">
                <a href="https://my.cbox.ws/moreQA" target="_blank" rel="noopener noreferrer"
                  >非官方 Cbox 留言區</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import blogsService from '@/services/blogs'

const rawBlogs = ref([])
const loading = ref(true)
const error = ref(null)

// The order of categories is important, so we define it here.
// This matches the enum in the backend model.
const categoryOrder = [
  '職訓局環境',
  '甄試相關',
  '課程相關',
  '訓練期間相關規則',
  '職訓相關補助',
  '學員心得',
]

const getItemLink = (item) => {
  // 根據項目類型決定連結，為未來擴展（如測驗）做準備
  // 目前假設所有項目都來自 blogsService，所以類型是 'article'
  const type = item.type || 'article'

  if (type === 'article') {
    // 文章頁面現在是獨立的路由，路徑為 /article/:id
    return `/article/${item._id}`
  }
  // 未來可以增加 quiz 的處理
  // if (type === 'quiz') {
  //   return `/quiz/${item._id}`
  // }

  // 提供一個備用連結
  return '#'
}

const infoCategories = computed(() => {
  if (!rawBlogs.value.length) return []

  // Initialize categories based on the defined order
  const grouped = categoryOrder.map((title) => ({ title, links: [] }))

  for (const blog of rawBlogs.value) {
    const category = grouped.find((c) => c.title === blog.tags)
    if (category) {
      category.links.push({ text: blog.title, to: getItemLink(blog) })
    }
  }

  return grouped.filter((category) => category.links.length > 0)
})

onMounted(async () => {
  try {
    const res = await blogsService.get()
    const data = res?.data ?? res
    if (data?.success && Array.isArray(data?.blogs)) {
      // 為每個項目加上類型，方便未來擴展
      rawBlogs.value = data.blogs.map((blog) => ({ ...blog, type: 'article' }))
    } else {
      throw new Error(data?.message || '無法取得文章列表')
    }
  } catch (err) {
    console.error('Failed to fetch blogs:', err)
    error.value = err.message || '載入資料時發生錯誤，請稍後再試。'
  } finally {
    loading.value = false
  }
})
</script>
