<route lang="yaml">
meta:
  title: '報名流程'
  # 有沒有登入都能看
  login: ''
  # 不是管理員也能看
  admin: false
</route>

<script setup>
import { ref } from 'vue'

// 當前步驟
const currentStep = ref(1)
const totalSteps = 5

// 切換步驟
const setCurrentStep = (step) => {
  currentStep.value = step
}
</script>

<template>
  <!-- 文案要改 -->
  <div class="bg-base-200/50 min-h-screen">
    <div class="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      <!-- 頁面標題 -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-primary mb-4">想加入我們嗎？</h2>
        <p class="mt-4 text-lg text-base-content/70 max-w-3xl mx-auto">
          開啟你的前端工程師職涯！這裡有完整的報名流程與注意事項，讓你輕鬆掌握所有細節。
        </p>
      </div>

      <!-- 報名步驟總覽 -->
      <div class="mb-16 p-4">
        <ul class="steps steps-vertical lg:steps-horizontal w-full">
          <li
            v-for="step in totalSteps"
            :key="step"
            :data-content="step"
            :class="[
              'step cursor-pointer transition-all duration-300 hover:shadow-md',
              { 'step-primary': currentStep >= step },
            ]"
            @click="setCurrentStep(step)"
          >
            <span class="step-title">
              {{
                step === 1
                  ? '確認資格'
                  : step === 2
                    ? '準備文件'
                    : step === 3
                      ? '完成報名'
                      : step === 4
                        ? '參加甄試'
                        : '錄取報到'
              }}
            </span>
          </li>
        </ul>
      </div>

      <!-- 步驟詳情 -->
      <div class="space-y-8">
        <!-- 1. 確認報名資格 -->
        <div
          v-show="currentStep === 1"
          class="card bg-base-100 shadow-lg animate-in fade-in duration-500"
        >
          <div class="card-body">
            <h3 class="card-title text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              先看看你符合資格嗎？
            </h3>
            <p class="mt-2">別擔心！大部分想轉職的朋友都符合條件，快來檢查一下：</p>

            <!-- 資格檢查 - 用清晰的對比卡片 -->
            <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- 可以報名 -->
              <div class="card bg-success/10 border-2 border-success/30">
                <div class="card-body">
                  <div class="flex items-center space-x-2 mb-3">
                    <span class="text-2xl">✅</span>
                    <h4 class="font-bold text-lg text-success">可以報名的條件</h4>
                  </div>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-center space-x-2">
                      <span class="w-2 h-2 bg-success rounded-full"></span>
                      <span>年滿15歲，想轉職但覺得技能不足</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <span class="w-2 h-2 bg-success rounded-full"></span>
                      <span>有中華民國國籍</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <span class="w-2 h-2 bg-success rounded-full"></span>
                      <span>新住民（與國民結婚在台居留）</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <span class="w-2 h-2 bg-success rounded-full"></span>
                      <span>其他經政府許可在台居留工作者</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- 不能報名 -->
              <div class="card bg-error/10 border-2 border-error/30">
                <div class="card-body">
                  <div class="flex items-center space-x-2 mb-3">
                    <span class="text-2xl">❌</span>
                    <h4 class="font-bold text-lg text-error">不能報名的情況</h4>
                  </div>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-center space-x-2">
                      <span class="w-2 h-2 bg-error rounded-full"></span>
                      <span>目前還是學生（日間部在學中）</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <span class="w-2 h-2 bg-error rounded-full"></span>
                      <span>已經有工作了</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <span class="w-2 h-2 bg-error rounded-full"></span>
                      <span>自己當老闆或創業中</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <span class="w-2 h-2 bg-error rounded-full"></span>
                      <span>太常參加政府訓練課程</span>
                    </li>
                  </ul>
                  <div class="mt-3 p-2 bg-warning/20 rounded text-xs">
                    💡 已在職建議先離職再報名
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mt-4 p-4 bg-gradient-to-r from-success/20 to-success/10 rounded-lg border-l-4 border-success"
            >
              <div class="flex items-start space-x-3">
                <span class="text-2xl">💡</span>
                <div>
                  <div class="font-bold text-success text-lg">被資遣的朋友看這裡！</div>
                  <p class="text-sm mt-1">
                    如果你有非自願離職單，一定要先到就業服務站拿推介單再報名！這樣就能申請職業訓練生活津貼，還有甄試加分唷～
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. 準備文件 -->
        <div
          v-show="currentStep === 2"
          class="card bg-base-100 shadow-lg animate-in fade-in duration-500"
        >
          <div class="card-body">
            <h3 class="card-title text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              準備這些文件
            </h3>
            <p class="mt-2">別急！這些文件都很好準備，大部分家裡就有了：</p>
            <!-- 文件清單 - 用 checklist 風格 -->
            <div class="mt-4">
              <div class="bg-base-200/30 p-4 rounded-lg">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label
                    class="flex items-center space-x-3 p-3 bg-white rounded cursor-pointer hover:bg-base-50"
                  >
                    <input type="checkbox" class="checkbox checkbox-primary" />
                    <div class="flex items-center space-x-2">
                      <span class="text-lg">📄</span>
                      <div>
                        <div class="font-semibold text-sm">身分證正反面影本</div>
                        <div class="text-xs text-base-content/70">便利商店印一份</div>
                      </div>
                    </div>
                  </label>

                  <label
                    class="flex items-center space-x-3 p-3 bg-white rounded cursor-pointer hover:bg-base-50"
                  >
                    <input type="checkbox" class="checkbox checkbox-primary" />
                    <div class="flex items-center space-x-2">
                      <span class="text-lg">🎓</span>
                      <div>
                        <div class="font-semibold text-sm">畢業證書影本</div>
                        <div class="text-xs text-base-content/70">最高學歷證書</div>
                      </div>
                    </div>
                  </label>

                  <label
                    class="flex items-center space-x-3 p-3 bg-white rounded cursor-pointer hover:bg-base-50"
                  >
                    <input type="checkbox" class="checkbox checkbox-primary" />
                    <div class="flex items-center space-x-2">
                      <span class="text-lg">📋</span>
                      <div>
                        <div class="font-semibold text-sm">勞保明細表</div>
                        <div class="text-xs text-base-content/70">勞保局網站下載</div>
                      </div>
                    </div>
                  </label>

                  <label
                    class="flex items-center space-x-3 p-3 bg-white rounded cursor-pointer hover:bg-base-50"
                  >
                    <input type="checkbox" class="checkbox checkbox-primary" />
                    <div class="flex items-center space-x-2">
                      <span class="text-lg">📸</span>
                      <div>
                        <div class="font-semibold text-sm">證件照 2 張</div>
                        <div class="text-xs text-base-content/70">一吋或兩吋都可以</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-4 p-3 bg-success/10 border-l-4 border-success rounded">
              <div class="flex items-center space-x-2">
                <span>💡</span>
                <span class="font-semibold">小撇步：</span>
              </div>
              <p class="text-sm mt-1">
                如果你有特殊身分（如被資遣、身心障礙等），記得帶相關證明文件，會有加分效果！
              </p>
            </div>
          </div>
        </div>

        <!-- 3. 完成報名 -->
        <div
          v-show="currentStep === 3"
          class="card bg-base-100 shadow-lg animate-in fade-in duration-500"
        >
          <div class="card-body">
            <h3 class="card-title text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              選擇報名方式
            </h3>
            <p class="mt-2">根據你的身分，有不同的報名管道：</p>

            <div class="divider">🚀 報名方式</div>

            <!-- 非自願離職者專屬 -->
            <div
              class="mb-4 p-4 bg-gradient-to-r from-error/20 to-error/10 rounded-lg border-l-4 border-error"
            >
              <div class="flex items-start space-x-3">
                <span class="text-2xl">🚨</span>
                <div>
                  <div class="font-bold text-error text-lg">被資遣的朋友看這裡！</div>
                  <p class="text-sm mt-1">
                    非自願離職者<span class="font-semibold text-error">只能透過就業服務站報名</span
                    >！ 必須先拿推介單，不能用其他方式報名。
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
              <!-- 就業服務站報名 -->
              <div
                class="p-6 border-2 rounded-lg bg-gradient-to-br from-success/10 to-success/5 border-success/30"
              >
                <div class="flex items-center space-x-2 mb-3">
                  <span class="text-2xl">🏛️</span>
                  <h4 class="font-bold text-lg text-success">就業服務站報名</h4>
                </div>
                <div class="space-y-3">
                  <div class="p-3 bg-white rounded-lg border-l-4 border-success">
                    <div class="font-semibold text-sm text-success">✅ 非自願離職者</div>
                    <div class="text-xs text-base-content/70 mt-1">被資遣的朋友只能用這個方式</div>
                  </div>
                  <div class="p-3 bg-white rounded-lg">
                    <div class="font-semibold text-sm">👥 其他特定對象</div>
                    <div class="text-xs text-base-content/70 mt-1">中高齡、身障等也建議用這個</div>
                  </div>
                </div>
                <div class="mt-4 p-3 bg-success/20 rounded-lg">
                  <div class="text-xs text-success font-semibold">
                    💰 最大優點：可申請職業訓練生活津貼！還有專人協助和完整就業輔導
                  </div>
                </div>
              </div>

              <!-- 網路報名 -->
              <div
                class="p-6 border rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
              >
                <div class="flex items-center space-x-2 mb-3">
                  <span class="text-2xl">💻</span>
                  <h4 class="font-bold text-lg text-primary">網路報名</h4>
                  <span class="badge badge-primary badge-sm">方便</span>
                </div>
                <div class="space-y-3">
                  <div class="p-3 bg-white rounded-lg">
                    <div class="font-semibold text-sm">🌐 台灣就業通</div>
                    <div class="text-xs text-base-content/70 mt-1">線上填表最方便</div>
                  </div>
                  <div class="p-3 bg-white rounded-lg">
                    <div class="font-semibold text-sm">⚡ 24小時開放</div>
                    <div class="text-xs text-base-content/70 mt-1">隨時都能報名</div>
                  </div>
                </div>
                <a
                  href="https://www.taiwanjobs.gov.tw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-sm w-full mt-4"
                >
                  前往台灣就業通
                </a>
                <div class="mt-2 text-xs text-base-content/70 text-center">
                  ⚠️ 非自願離職者不能用這個
                </div>
              </div>

              <!-- 現場報名 -->
              <div class="p-6 border rounded-lg bg-base-200/50">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="text-2xl">🏢</span>
                  <h4 class="font-bold text-lg">現場報名</h4>
                </div>
                <div class="space-y-3">
                  <div class="p-3 bg-white rounded-lg">
                    <div class="font-semibold text-sm">👀 可以參觀</div>
                    <div class="text-xs text-base-content/70 mt-1">順便看看訓練環境</div>
                  </div>
                  <div class="p-3 bg-white rounded-lg">
                    <div class="font-semibold text-sm">❓ 當面詢問</div>
                    <div class="text-xs text-base-content/70 mt-1">有問題直接問工作人員</div>
                  </div>
                </div>
                <div class="mt-4 text-xs text-base-content/70 p-2 bg-info/10 rounded">
                  📍 請參考簡章內的訓練場地資訊
                </div>
              </div>
            </div>

            <!-- 其他報名方式說明 -->
            <div class="mt-6 p-4 bg-base-200/30 rounded-lg">
              <div class="flex items-center space-x-2 mb-3">
                <span class="text-lg">📋</span>
                <div class="font-semibold">其他報名方式</div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-center space-x-3">
                  <span class="text-xl">📮</span>
                  <div>
                    <div class="font-semibold text-sm">郵寄報名</div>
                    <div class="text-xs text-base-content/70">新北市新莊區中平路439號 南棟3樓</div>
                  </div>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-xl">📠</span>
                  <div>
                    <div class="font-semibold text-sm">傳真報名</div>
                    <div class="text-xs text-base-content/70">傳真至 (02)8995-6373</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mt-4 p-4 bg-gradient-to-r from-warning/20 to-warning/10 rounded-lg border-l-4 border-warning"
            >
              <div class="flex items-start space-x-3">
                <span class="text-2xl">⚠️</span>
                <div>
                  <div class="font-bold text-warning text-lg">報名小提醒</div>
                  <p class="text-sm mt-1">如果報名人數太少，課程可能會延期或調整時間唷！</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. 參加甄試 -->
        <div
          v-show="currentStep === 4"
          class="card bg-base-100 shadow-lg animate-in fade-in duration-500"
        >
          <div class="card-body">
            <h3 class="card-title text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              準備甄試
            </h3>
            <p class="mt-2">別緊張！甄試只是要確認你真的想學習，不會很難：</p>

            <div class="mt-4 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="card bg-primary/5 border border-primary/20">
                  <div class="card-body text-center">
                    <div class="text-4xl mb-2">📝</div>
                    <h4 class="font-bold text-lg text-primary">筆試（50%）</h4>
                    <p class="text-sm mt-2">基本國文、英文和邏輯</p>
                    <p class="text-xs text-base-content/70 mt-1">不用會程式！國高中程度就OK</p>
                    <div class="badge badge-primary badge-sm mt-2">成績好的人進入口試</div>
                  </div>
                </div>
                <div class="card bg-secondary/5 border border-secondary/20">
                  <div class="card-body text-center">
                    <div class="text-4xl mb-2">💬</div>
                    <h4 class="font-bold text-lg text-secondary">口試（50%）</h4>
                    <p class="text-sm mt-2">輕鬆聊聊學習動機</p>
                    <p class="text-xs text-base-content/70 mt-1">告訴我們為什麼想學前端</p>
                    <div class="badge badge-secondary badge-sm mt-2">總分要達60分才錄取</div>
                  </div>
                </div>
              </div>

              <!-- 甄試內容 - 用 FAQ 問答式 -->
              <div class="space-y-4">
                <div class="p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                  <div class="flex items-center space-x-2 mb-3">
                    <span class="text-lg">📚</span>
                    <h5 class="font-bold text-primary">筆試考什麼？</h5>
                  </div>
                  <p class="text-sm mb-3">測驗題形式，主要考基本能力（國文、英文、邏輯）</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="flex items-center space-x-2 text-sm">
                      <span class="w-2 h-2 bg-error rounded-full"></span>
                      <span>開始15分鐘後不能進場</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm">
                      <span class="w-2 h-2 bg-info rounded-full"></span>
                      <span>成績好的2倍人數進口試</span>
                    </div>
                  </div>
                  <div class="mt-2 p-2 bg-info/20 rounded text-xs">
                    💡 可到官網「甄選試題專區」練習
                  </div>
                </div>

                <div class="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                  <div class="flex items-center space-x-2 mb-3">
                    <span class="text-lg">💬</span>
                    <h5 class="font-bold text-secondary">口試會問什麼？</h5>
                  </div>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div class="text-center p-3 bg-white rounded">
                      <div class="text-2xl mb-1">🎯</div>
                      <div class="text-xs font-semibold">學習動機</div>
                    </div>
                    <div class="text-center p-3 bg-white rounded">
                      <div class="text-2xl mb-1">📈</div>
                      <div class="text-xs font-semibold">工作經驗</div>
                    </div>
                    <div class="text-center p-3 bg-white rounded">
                      <div class="text-2xl mb-1">🗣️</div>
                      <div class="text-xs font-semibold">表達能力</div>
                    </div>
                    <div class="text-center p-3 bg-white rounded">
                      <div class="text-2xl mb-1">🚀</div>
                      <div class="text-xs font-semibold">職涯規劃</div>
                    </div>
                  </div>
                  <div class="mt-3 p-2 bg-secondary/20 rounded text-xs">
                    💡 真誠表達就好，準備約半天時間
                  </div>
                </div>
              </div>

              <div class="p-4 bg-info/10 rounded-lg border-l-4 border-info">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="text-lg">🎒</span>
                  <h5 class="font-bold text-info">甄試當天要帶什麼？</h5>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div class="flex items-center space-x-2 p-2 bg-white rounded text-sm">
                    <span>📋</span>
                    <span>甄試通知單</span>
                  </div>
                  <div class="flex items-center space-x-2 p-2 bg-white rounded text-sm">
                    <span>✏️</span>
                    <span>文具用品</span>
                  </div>
                  <div class="flex items-center space-x-2 p-2 bg-white rounded text-sm">
                    <span>🪪</span>
                    <span>身分證</span>
                  </div>
                  <div class="flex items-center space-x-2 p-2 bg-white rounded text-sm">
                    <span>🎓</span>
                    <span>學歷證件</span>
                  </div>
                  <div class="flex items-center space-x-2 p-2 bg-white rounded text-sm">
                    <span>📄</span>
                    <span>其他證明</span>
                  </div>
                  <div class="flex items-center space-x-2 p-2 bg-white rounded text-sm">
                    <span>😊</span>
                    <span>放鬆心情</span>
                  </div>
                </div>
              </div>

              <!-- 加分機會 - 用重要性分層 -->
              <div class="space-y-3">
                <!-- 最重要的加分 -->
                <div
                  class="p-4 bg-gradient-to-r from-success/20 to-success/10 rounded-lg border-2 border-success/30"
                >
                  <div class="flex items-center space-x-3 mb-2">
                    <span class="text-2xl">💼</span>
                    <div>
                      <div class="font-bold text-success text-lg">非自願離職（被資遣）</div>
                      <div class="text-xs text-success/80">最重要！記得先拿推介單</div>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div class="flex items-center space-x-2">
                      <span class="text-success">💰</span>
                      <span class="text-sm">可申請生活津貼</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <span class="text-success">📈</span>
                      <span class="text-sm">甄試加分 3%</span>
                    </div>
                  </div>
                </div>

                <!-- 其他加分身分 -->
                <div class="p-3 bg-info/10 rounded-lg">
                  <div class="text-sm font-semibold mb-2 text-info">其他可加分 3% 的身分：</div>
                  <div class="flex flex-wrap gap-2">
                    <span class="badge badge-outline badge-sm">🌍 新住民</span>
                    <span class="badge badge-outline badge-sm">🛡️ 性侵害被害人</span>
                    <span class="badge badge-outline badge-sm">👥 其他特定對象</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mt-4 p-4 bg-gradient-to-r from-success/20 to-success/10 rounded-lg border-l-4 border-success"
            >
              <div class="flex items-start space-x-3">
                <span class="text-2xl">🎉</span>
                <div>
                  <div class="font-bold text-success text-lg">甄試小叮嚀</div>
                  <p class="text-sm mt-1">
                    甄試通知會用掛號寄給你，記得準時到場（遲到15分鐘就不能考囉）
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. 錄取與報到 -->
        <div
          v-show="currentStep === 5"
          class="card bg-base-100 shadow-lg animate-in fade-in duration-500"
        >
          <div class="card-body">
            <h3 class="card-title text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              錄取後的流程
            </h3>
            <p class="mt-2">考完試後就等好消息吧！這邊是後續的流程：</p>

            <div class="mt-4 space-y-4">
              <div class="space-y-6">
                <div
                  class="flex items-center space-x-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg"
                >
                  <div class="text-4xl">📢</div>
                  <div class="flex-1">
                    <div class="font-bold text-lg">等待榜單公布</div>
                    <div class="text-sm text-base-content/70 mt-1">
                      甄試後1週內會在網站公布錄取名單
                    </div>
                    <div class="badge badge-primary badge-sm mt-2">記得常去看看</div>
                  </div>
                </div>

                <div
                  class="flex items-center space-x-4 p-4 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-lg"
                >
                  <div class="text-4xl">📧</div>
                  <div class="flex-1">
                    <div class="font-bold text-lg">收到錄取通知</div>
                    <div class="text-sm text-base-content/70 mt-1">
                      正取的同學會收到掛號信通知報到
                    </div>
                    <div class="badge badge-secondary badge-sm mt-2">恭喜你！</div>
                  </div>
                </div>

                <div
                  class="flex items-center space-x-4 p-4 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg"
                >
                  <div class="text-4xl">🎒</div>
                  <div class="flex-1">
                    <div class="font-bold text-lg">準時報到上課</div>
                    <div class="text-sm text-base-content/70 mt-1">
                      帶著興奮的心情來開始學習之旅吧！
                    </div>
                    <div class="badge badge-accent badge-sm mt-2">學習開始</div>
                  </div>
                </div>
              </div>

              <div class="collapse collapse-plus bg-warning/10 border border-warning/20">
                <input type="checkbox" />
                <div class="collapse-title text-lg font-medium">📋 詳細錄取標準</div>
                <div class="collapse-content">
                  <div class="space-y-4">
                    <div class="p-4 bg-white rounded-lg">
                      <h5 class="font-bold mb-3 flex items-center">
                        <span class="mr-2">✅</span>錄取條件
                      </h5>
                      <div class="space-y-2 text-sm">
                        <div class="flex items-center space-x-2">
                          <span class="w-2 h-2 bg-success rounded-full"></span>
                          <span
                            >總平均要達到
                            <span class="font-bold text-success">60分</span> 以上</span
                          >
                        </div>
                        <div class="flex items-center space-x-2">
                          <span class="w-2 h-2 bg-info rounded-full"></span>
                          <span>同分的話：筆試成績高者優先</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <span class="w-2 h-2 bg-warning rounded-full"></span>
                          <span>筆試、口試都同分：口試評量配分最高項目分數高者優先</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 bg-white rounded-lg">
                      <h5 class="font-bold mb-3 flex items-center">
                        <span class="mr-2">📞</span>成績複查
                      </h5>
                      <p class="text-sm text-base-content/90">
                        對成績有疑問嗎？可在成績公告後
                        <span class="font-bold text-info">3個工作天內</span> 申請複查
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="p-4 bg-gradient-to-r from-info/20 to-info/10 rounded-lg border-l-4 border-info"
              >
                <div class="flex items-start space-x-3">
                  <span class="text-2xl">ℹ️</span>
                  <div>
                    <div class="font-bold text-info text-lg">小提醒</div>
                    <p class="text-sm mt-1">
                      如果報名人數不夠（少於10人），課程可能會取消或合併到其他梯次唷
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 步驟導航按鈕 -->
        <div class="flex justify-between items-center mt-8 p-4 bg-base-100 rounded-lg shadow">
          <button
            v-if="currentStep > 1"
            @click="setCurrentStep(currentStep - 1)"
            class="btn btn-outline btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            上一步
          </button>
          <div v-else></div>

          <div class="text-center">
            <span class="text-sm text-base-content/70">
              步驟 {{ currentStep }} / {{ totalSteps }}
            </span>
          </div>

          <button
            v-if="currentStep < totalSteps"
            @click="setCurrentStep(currentStep + 1)"
            class="btn btn-primary"
          >
            下一步
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div v-else></div>
        </div>
      </div>

      <!-- 額外資訊區塊 -->
      <div class="mt-16 space-y-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-primary mb-4">更多詳細資訊</h2>
          <p class="text-base-content/70">以下是一些額外的重要資訊供你參考</p>
        </div>

        <!-- 住宿資訊 -->
        <div class="card bg-base-100 shadow-lg">
          <div class="card-body">
            <h3 class="card-title text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 text-info"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              住宿資訊
            </h3>
            <p class="mt-2">外地的朋友別擔心！這些地方有提供住宿：五股、泰山、基隆、宜蘭、花蓮</p>

            <div class="mt-4 space-y-4">
              <div class="collapse collapse-plus bg-info/5 border border-info/20">
                <input type="checkbox" />
                <div class="collapse-title text-lg font-medium">🏠 誰可以申請住宿？要多少錢？</div>
                <div class="collapse-content">
                  <div class="space-y-4">
                    <div class="p-4 bg-white rounded-lg">
                      <h5 class="font-bold mb-3 flex items-center">
                        <span class="mr-2">✅</span>申請條件
                      </h5>
                      <div class="space-y-2">
                        <div class="flex items-center space-x-2">
                          <span class="w-2 h-2 bg-info rounded-full"></span>
                          <span>不是在訓練場所在縣市設籍的外地人</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <span class="w-2 h-2 bg-info rounded-full"></span>
                          <span>有特殊需求經審核通過</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 bg-white rounded-lg">
                      <h5 class="font-bold mb-3 flex items-center">
                        <span class="mr-2">💰</span>費用說明
                      </h5>
                      <div class="space-y-2">
                        <div class="flex justify-between items-center">
                          <span>住宿保證金</span>
                          <span class="font-semibold text-info">1,000 元</span>
                        </div>
                        <div class="flex justify-between items-center">
                          <span>磁卡保證金</span>
                          <span class="font-semibold text-info">500 元</span>
                        </div>
                        <div class="text-xs text-base-content/70 mt-2">
                          *沒有磁卡就不用付磁卡保證金
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="collapse collapse-plus bg-warning/5 border border-warning/20">
                <input type="checkbox" />
                <div class="collapse-title text-lg font-medium">📋 住宿生活規定</div>
                <div class="collapse-content">
                  <div class="space-y-3">
                    <div class="flex items-start space-x-3 p-3 bg-white rounded">
                      <span class="text-xl">🕙</span>
                      <div>
                        <div class="font-semibold">門禁時間</div>
                        <div class="text-sm text-base-content/70">晚上10點到早上6點不能進出</div>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3 p-3 bg-white rounded">
                      <span class="text-xl">📝</span>
                      <div>
                        <div class="font-semibold">晚點名</div>
                        <div class="text-sm text-base-content/70">每天晚上10點要點名</div>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3 p-3 bg-white rounded">
                      <span class="text-xl">⚠️</span>
                      <div>
                        <div class="font-semibold">退宿條件</div>
                        <div class="text-sm text-base-content/70">
                          無故不到3次或請假超過16次就會被退宿
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 權益與補助 -->
        <div class="card bg-gradient-to-r from-success/10 to-info/10 border-success/20 shadow-lg">
          <div class="card-body">
            <h3 class="card-title text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
              超棒的福利權益
            </h3>
            <p class="mt-2">來上課不但免費，還有這些好康等著你：</p>

            <div class="mt-6 space-y-6">
              <!-- 免費課程 -->
              <div class="p-6 bg-white rounded-xl shadow-sm border-l-4 border-success">
                <div class="flex items-center space-x-3 mb-3">
                  <span class="text-3xl">🎓</span>
                  <div>
                    <h4 class="text-lg font-bold text-success">完全免費上課</h4>
                    <p class="text-sm text-base-content/70">所有課程費用全額補助，不用花一毛錢！</p>
                  </div>
                </div>
              </div>

              <!-- 生活津貼 -->
              <div class="p-6 bg-white rounded-xl shadow-sm border-l-4 border-info">
                <div class="flex items-center space-x-3 mb-4">
                  <span class="text-3xl">💵</span>
                  <div>
                    <h4 class="text-lg font-bold text-info">職業訓練生活津貼</h4>
                    <p class="text-sm text-base-content/70">符合條件還能領生活津貼，學習有保障！</p>
                  </div>
                </div>

                <div class="collapse collapse-plus bg-info/5">
                  <input type="checkbox" checked />
                  <div class="collapse-title font-medium">🤔 誰可以申請生活津貼？</div>
                  <div class="collapse-content">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div class="space-y-3">
                        <div
                          class="flex items-start space-x-2 p-3 bg-gradient-to-r from-success/10 to-success/5 rounded"
                        >
                          <span class="text-lg">💼</span>
                          <div>
                            <div class="font-semibold text-sm">非自願離職者</div>
                            <div class="text-xs text-base-content/70">
                              被資遣的朋友（記得先拿推介單）
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex items-start space-x-2 p-3 bg-gradient-to-r from-info/10 to-info/5 rounded"
                        >
                          <span class="text-lg">👥</span>
                          <div>
                            <div class="font-semibold text-sm">特定對象失業者</div>
                            <div class="text-xs text-base-content/70">
                              中高齡、身心障礙、低收入戶等
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex items-start space-x-2 p-3 bg-gradient-to-r from-warning/10 to-warning/5 rounded"
                        >
                          <span class="text-lg">⏰</span>
                          <div>
                            <div class="font-semibold text-sm">長期失業者</div>
                            <div class="text-xs text-base-content/70">失業1年以上且有勞保年資</div>
                          </div>
                        </div>
                      </div>
                      <div class="space-y-3">
                        <div
                          class="flex items-start space-x-2 p-3 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded"
                        >
                          <span class="text-lg">👩</span>
                          <div>
                            <div class="font-semibold text-sm">二度就業婦女</div>
                            <div class="text-xs text-base-content/70">
                              因家庭因素離開職場2年以上
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex items-start space-x-2 p-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded"
                        >
                          <span class="text-lg">🌍</span>
                          <div>
                            <div class="font-semibold text-sm">新住民</div>
                            <div class="text-xs text-base-content/70">外籍配偶等新住民朋友</div>
                          </div>
                        </div>
                        <div
                          class="flex items-start space-x-2 p-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded"
                        >
                          <span class="text-lg">🛡️</span>
                          <div>
                            <div class="font-semibold text-sm">其他特殊身分</div>
                            <div class="text-xs text-base-content/70">家暴被害人、更生人等</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4 p-4 bg-gradient-to-r from-success/20 to-info/20 rounded-lg">
                      <div class="font-bold mb-2 flex items-center">
                        <span class="mr-2">📋</span>申請條件
                      </div>
                      <div class="text-sm space-y-1">
                        <div>✅ 訓練期間1個月以上</div>
                        <div>✅ 每週上課4天以上</div>
                        <div>✅ 每天白天上課4小時以上</div>
                        <div>✅ 每月總訓練時數100小時以上</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 其他福利 -->
              <div class="p-6 bg-white rounded-xl shadow-sm border-l-4 border-warning">
                <div class="flex items-center space-x-3 mb-4">
                  <span class="text-3xl">🎁</span>
                  <div>
                    <h4 class="text-lg font-bold text-warning">其他超棒福利</h4>
                    <p class="text-sm text-base-content/70">還有更多你想不到的好處！</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    class="text-center p-4 bg-gradient-to-b from-primary/10 to-primary/5 rounded-lg"
                  >
                    <div class="text-2xl mb-2">🛡️</div>
                    <div class="font-semibold text-sm">勞保保障</div>
                    <div class="text-xs text-base-content/70 mt-1">訓練期間加入勞保</div>
                  </div>
                  <div
                    class="text-center p-4 bg-gradient-to-b from-success/10 to-success/5 rounded-lg"
                  >
                    <div class="text-2xl mb-2">📜</div>
                    <div class="font-semibold text-sm">結訓證書</div>
                    <div class="text-xs text-base-content/70 mt-1">完成課程獲得證書</div>
                  </div>
                  <div class="text-center p-4 bg-gradient-to-b from-info/10 to-info/5 rounded-lg">
                    <div class="text-2xl mb-2">💼</div>
                    <div class="font-semibold text-sm">就業輔導</div>
                    <div class="text-xs text-base-content/70 mt-1">協助找工作和檢定</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 重要提醒 -->
        <div
          class="card bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 shadow-lg"
        >
          <div class="card-body">
            <h3 class="card-title text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              最後的小提醒
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div class="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
                <span class="text-2xl">📝</span>
                <div>
                  <div class="font-semibold">簽約與打卡</div>
                  <p class="text-sm text-base-content/70">會用臉部辨識打卡唷</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
                <span class="text-2xl">🛡️</span>
                <div>
                  <div class="font-semibold">勞保保障</div>
                  <p class="text-sm text-base-content/70">訓練期間會幫你加勞保</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
                <span class="text-2xl">🎓</span>
                <div>
                  <div class="font-semibold">結訓證書</div>
                  <p class="text-sm text-base-content/70">完成課程會拿到證書</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
                <span class="text-2xl">💼</span>
                <div>
                  <div class="font-semibold">就業輔導</div>
                  <p class="text-sm text-base-content/70">會協助你找工作</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
                <span class="text-2xl">📢</span>
                <div>
                  <div class="font-semibold">資訊更新</div>
                  <p class="text-sm text-base-content/70">有變動以官網公告為主</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 p-3 bg-white/50 rounded-lg">
                <span class="text-2xl">♿</span>
                <div>
                  <div class="font-semibold">特殊協助</div>
                  <p class="text-sm text-base-content/70">有需要可找職重單位</p>
                </div>
              </div>
            </div>

            <div class="mt-6 space-y-4">
              <div class="collapse collapse-plus bg-warning/10 border border-warning/20">
                <input type="checkbox" />
                <div class="collapse-title font-medium">⚠️ 特殊身分注意事項</div>
                <div class="collapse-content">
                  <div class="space-y-3">
                    <div class="p-3 bg-white rounded flex items-start space-x-3">
                      <span class="text-lg">🪖</span>
                      <div>
                        <div class="font-semibold text-sm">現役軍人</div>
                        <div class="text-xs text-base-content/70">
                          需要上校以上單位薦送，個人報名會被退訓
                        </div>
                      </div>
                    </div>
                    <div class="p-3 bg-white rounded flex items-start space-x-3">
                      <span class="text-lg">💼</span>
                      <div>
                        <div class="font-semibold text-sm">公司負責人</div>
                        <div class="text-xs text-base-content/70">
                          包含未解除董事、監察人職務者都不能報名
                        </div>
                      </div>
                    </div>
                    <div class="p-3 bg-white rounded flex items-start space-x-3">
                      <span class="text-lg">📊</span>
                      <div>
                        <div class="font-semibold text-sm">報名人數不足</div>
                        <div class="text-xs text-base-content/70">
                          未達1.6倍會延後2週或詢問改班意願
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="collapse collapse-plus bg-error/10 border border-error/20">
                <input type="checkbox" />
                <div class="collapse-title font-medium">⚠️ 被退訓的話要賠償</div>
                <div class="collapse-content">
                  <div class="p-4 bg-white rounded-lg mt-3">
                    <div class="space-y-3">
                      <div class="p-3 bg-success/10 rounded flex items-start space-x-3">
                        <span class="text-lg">🎓</span>
                        <div>
                          <div class="font-semibold text-sm text-success">課程完全免費</div>
                          <div class="text-xs text-base-content/70">
                            政府全額補助，學員不用繳任何費用
                          </div>
                        </div>
                      </div>
                      <div class="p-3 bg-error/10 rounded flex items-start space-x-3">
                        <span class="text-lg">💰</span>
                        <div>
                          <div class="font-semibold text-sm text-error">但是！被退訓要賠償</div>
                          <div class="text-xs text-base-content/70">
                            如果違規被退訓，可能要賠償已使用的訓練費用
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3 text-xs text-base-content/70 p-2 bg-warning/10 rounded">
                      💡 所以要好好上課、遵守規定，才能享受免費的完整訓練唷！
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 聯絡資訊 -->
        <div class="text-center mt-16">
          <h3 class="text-2xl font-bold mb-4">還有問題嗎？</h3>
          <p class="text-base-content/70 mb-6">
            別害羞！有任何疑問都可以問我們，我們很樂意幫你解答 🤗
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.taiwanjobs.gov.tw/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-wide"
            >
              <span class="text-lg mr-2">🌐</span>
              前往台灣就業通
            </a>
            <a href="tel:(02)8995-6373" class="btn btn-outline btn-secondary">
              <span class="text-lg mr-2">📞</span>
              打電話詢問
            </a>
          </div>
          <div class="mt-8 p-6 bg-gradient-to-r from-success/10 to-info/10 rounded-lg">
            <div class="text-4xl mb-3">🚀</div>
            <h4 class="text-xl font-bold mb-2">準備好開始你的前端之旅了嗎？</h4>
            <p class="text-base-content/70">
              期待在課堂上見到你！讓我們一起學習、成長，成為優秀的前端工程師吧！
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-in {
  animation: slideInUp 0.5s ease-out;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.step-title {
  font-weight: 500;
  transition: all 0.3s ease;
}

.step:hover .step-title {
  font-weight: 600;
  color: oklch(var(--p));
}

.step.step-primary {
  --step-color: oklch(var(--p));
}
</style>
