<route lang="yaml">
meta:
  title: '課程介紹'
  # 有沒有登入都能看
  login: ''
  # 不是管理員也能看
  admin: false
</route>

<template>
  <!-- 文案待新增 -->
  <!-- 資料庫內容待新增 -->
  <div class="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
    <!-- Hero Section -->
    <section
      class="hero min-h-96 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative overflow-hidden"
    >
      <!-- 背景裝飾 -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
      </div>

      <div class="hero-content text-center max-w-7xl px-4 relative z-10">
        <div class="space-y-6">
          <!-- 標籤 -->
          <div class="animate-fade-in-up">
            <div
              class="inline-flex items-center bg-gradient-to-r from-primary to-secondary p-[1px] rounded-full"
            >
              <div class="bg-base-100 rounded-full px-4 py-2">
                <span
                  class="text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                  勞動部職前訓練課程
                </span>
              </div>
            </div>
          </div>

          <!-- 主標題 -->
          <div class="space-y-6 animate-fade-in-up delay-200">
            <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
              <span class="text-base-content">半年紮實訓練</span><br />
              <span
                class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              >
                從零到一成為前端工程師
              </span>
            </h1>

            <div class="max-w-3xl mt-2 mx-auto">
              <p
                class="text-lg md:text-xl lg:text-2xl text-base-content/70 leading-relaxed font-medium"
              >
                勞動部勞動力發展署北基宜花金馬分署自辦職前訓練課程<br />
                <span class="text-primary font-semibold">培養獨立開發前端網頁的專業能力</span>
              </p>
            </div>
          </div>

          <!-- 統計數據 -->
          <div class="animate-fade-in-up delay-400">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div
                class="bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-8 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300 group"
              >
                <div class="text-center space-y-3">
                  <div
                    class="text-5xl font-black text-primary group-hover:scale-110 transition-transform"
                  >
                    920
                  </div>
                  <div class="text-base-content/60 font-semibold text-lg">訓練時數</div>
                  <div
                    class="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
                  ></div>
                </div>
              </div>

              <div
                class="bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-8 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300 group"
              >
                <div class="text-center space-y-3">
                  <div
                    class="text-5xl font-black text-secondary group-hover:scale-110 transition-transform"
                  >
                    6
                  </div>
                  <div class="text-base-content/60 font-semibold text-lg">個月課程</div>
                  <div
                    class="w-12 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"
                  ></div>
                </div>
              </div>

              <div
                class="bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-8 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300 group"
              >
                <div class="text-center space-y-3">
                  <div
                    class="text-5xl font-black text-accent group-hover:scale-110 transition-transform"
                  >
                    免費
                  </div>
                  <div class="text-base-content/60 font-semibold text-lg">符合資格</div>
                  <div
                    class="w-12 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA 按鈕 -->
          <div class="animate-fade-in-up delay-600">
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                class="btn btn-primary btn-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                立即報名
              </button>
              <button
                class="btn btn-outline btn-lg px-8 py-4 text-lg font-semibold hover:bg-primary hover:border-primary transition-all duration-300"
              >
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 課程模組區塊 -->
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4">
          <span class="text-base-content">核心</span>
          <span class="text-primary">課程模組</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex items-center gap-4 mb-4">
              <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
              <div class="space-y-2 flex-1">
                <div class="skeleton h-6 w-3/4"></div>
                <div class="skeleton h-4 w-1/2"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="skeleton h-4 w-full"></div>
              <div class="skeleton h-4 w-4/5"></div>
              <div class="skeleton h-4 w-3/5"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="flex justify-center">
        <div class="alert alert-error max-w-lg shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
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
          <div>
            <h3 class="font-bold">載入錯誤</h3>
            <div class="text-xs">{{ error }}</div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div
          v-for="(module, index) in modules"
          :key="module._id"
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-base-200 hover:border-primary/30"
        >
          <!-- 圖片區塊 -->
          <figure v-if="module.imageUrl" class="relative overflow-hidden">
            <img
              :src="module.imageUrl"
              :alt="module.title"
              class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute top-4 left-4">
              <div class="badge badge-primary font-semibold">{{ module.category }}</div>
            </div>
          </figure>

          <div class="card-body p-6">
            <!-- 無圖片時的分類標籤 -->
            <div v-if="!module.imageUrl" class="mb-3">
              <div class="badge badge-primary badge-outline">{{ module.category }}</div>
            </div>

            <div class="flex items-start gap-4">
              <!-- 序號圓圈 -->
              <div
                class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"
              >
                <span class="text-primary font-bold text-sm">{{
                  String(index + 1).padStart(2, '0')
                }}</span>
              </div>

              <div class="flex-1 min-w-0">
                <h3
                  class="card-title text-lg mb-3 text-base-content group-hover:text-primary transition-colors"
                >
                  {{ module.title }}
                </h3>
                <p class="text-base-content/70 text-sm leading-relaxed line-clamp-3">
                  {{ module.description }}
                </p>
              </div>
            </div>

            <div class="card-actions justify-end mt-4 pt-4 border-t border-base-200">
              <div class="flex items-center gap-2 text-sm text-base-content/60">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>詳細內容</span>
                <svg
                  class="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 訓練時程 -->
    <div class="mb-16">
      <h3 class="text-2xl lg:text-3xl font-bold text-center mb-12">訓練時程規劃</h3>
      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li v-for="(item, index) in timeline" :key="index">
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 text-primary"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.06 0l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            :class="[
              'timeline-box',
              index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end',
            ]"
          >
            <time class="font-mono italic">{{ item.duration }}</time>
            <div class="text-lg font-black">{{ item.title }}</div>
            {{ item.description }}
          </div>
          <hr v-if="index < timeline.length - 1" class="bg-primary" />
        </li>
      </ul>
    </div>

    <!-- 比較表 -->
    <div>
      <h3 class="text-2xl lg:text-3xl font-bold text-center mb-8">與坊間課程比較</h3>
      
      <!-- 桌面版表格 -->
      <div class="hidden md:block overflow-x-auto">
        <table class="table w-full shadow-lg">
          <thead>
            <tr>
              <th class="text-base">比較項目</th>
              <th class="text-primary text-base">泰山職訓局前端班</th>
              <th class="text-base">坊間前端課程</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in comparisonData" :key="item.feature">
              <th class="text-sm font-semibold">{{ item.feature }}</th>
              <td class="text-sm">{{ item.wda }}</td>
              <td class="text-sm">{{ item.others }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 手機版卡片式顯示 -->
      <div class="md:hidden space-y-4">
        <div v-for="item in comparisonData" :key="item.feature" class="card bg-base-100 shadow-lg">
          <div class="card-body p-4">
            <h4 class="card-title text-lg mb-3 text-center">{{ item.feature }}</h4>
            <div class="grid grid-cols-1 gap-3">
              <div class="p-3 bg-primary/10 rounded-lg">
                <div class="text-xs font-semibold text-primary mb-1">泰山職訓局前端班</div>
                <div class="text-sm text-base-content">{{ item.wda }}</div>
              </div>
              <div class="p-3 bg-base-200 rounded-lg">
                <div class="text-xs font-semibold text-base-content/70 mb-1">坊間前端課程</div>
                <div class="text-sm text-base-content">{{ item.others }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import modulesApi from '@/services/modules.js'

const modules = ref([])
const isLoading = ref(true)
const error = ref(null)

// 文案需要改
const timeline = ref([
  {
    duration: '第 1 ~ 2 個月',
    title: '前端基礎與證照',
    description: 'HTML, CSS, JavaScript 核心觀念，並輔導考取網頁設計丙級證照。',
  },
  {
    duration: '第 3 個月',
    title: '前端框架 Vue.js',
    description: '深入學習 Vue 3 生態系，包含 Vue Router、Pinia 狀態管理與 Composition API。',
  },
  {
    duration: '第 3.5 個月',
    title: 'UI/UX 與工具',
    description: '學習 Figma、TailwindCSS、Git 版本控制等現代化開發工具與協作流程。',
  },
  {
    duration: '第 4.5 個月',
    title: '後端與資料庫',
    description: 'Node.js 與 Express 基礎，學習如何設計與串接 RESTful API，並操作 MongoDB 資料庫。',
  },
  {
    duration: '第 5 ~ 6 個月',
    title: '專題製作與發表',
    description: '分組進行專題實作，從規劃、設計到開發，完整體驗專案開發流程，並舉辦成果發表會。',
  },
])

const comparisonData = ref([
  { feature: '費用', wda: '符合資格者免費', others: '10 ~ 15 萬' },
  { feature: '訓練時數', wda: '920 小時 (半年)', others: '約 300 ~ 500 小時' },
  { feature: '訓練方式', wda: '全日實體課程', others: '線上或實體，時間較彈性' },
  { feature: '補助', wda: '符合資格者可申請職訓生活津貼', others: '通常無' },
  { feature: '課程內容', wda: '從基礎到全端整合，包含證照輔導', others: '多專注於前端框架' },
  {
    feature: '適合對象',
    wda: '待業者、想轉職者，需要規律學習環境',
    others: '在職者、需要彈性學習時間者',
  },
])

onMounted(async () => {
  try {
    const { data } = await modulesApi.get()
    if (data.success && Array.isArray(data.modules)) {
      modules.value = data.modules
        .filter((m) => m.sortOrder !== 0)
        .sort((a, b) => a.sortOrder - b.sortOrder)
    } else {
      throw new Error(data.message || '無法取得課程模組')
    }
  } catch (err) {
    console.error('Failed to fetch modules:', err)
    error.value = err.message || '載入資料時發生錯誤，請稍後再試。'
  } finally {
    isLoading.value = false
  }
})
</script>
