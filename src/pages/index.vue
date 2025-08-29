<route lang="yaml">
meta:
  title: '首頁'
  # 有沒有登入都能看
  login: ''
  # 不是管理員也能看
  admin: false
</route>

<template>
  <div class="min-h-screen">
    <!-- Hero Section ---->
    <section class="hero min-h-screen bg-gradient-to-br from-base-100 to-base-200/50 relative">
      <!-- 背景裝飾 GIF -->
      <!-- 色彩增值+相對寬度 https://cdn-icons-gif.flaticon.com/12753/12753496.gif 手機板不顯示，平板與電腦顯示 -->
      <div
        class="absolute top-[40%] right-[15%] animate-pulse hidden xl:block"
        style="mix-blend-mode: multiply"
      >
        <img
          src="https://cdn-icons-gif.flaticon.com/18649/18649783.gif"
          alt="裝飾圖標"
          class="w-24 h-24 md:w-32 md:h-32"
        />
      </div>
      <div class="hero-content text-center w-full max-w-none px-2 relative z-10">
        <div class="space-y-2">
          <!-- 起：點出使用者狀態 -->
          <div class="space-y-2">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-base-content leading-tight sm:mb-[10%] md:mb-6"
            >
              有時候人生就是會<br class="hidden md:block" />
              <span
                class="font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >卡在一個不上不下的地方</span
              >
            </h1>

            <!-- 手機+平板版簡化版本 -->
            <div class="md:hidden w-full mb-8 px-4 mt-10">
              <div class="text-center space-y-6">
                <div class="space-y-4">
                  <div
                    class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    政府免費職訓課程
                  </div>
                  <h2 class="text-xl font-bold text-base-content">
                    六個月完整前端課程<br />
                    <span class="text-primary">政府全額補助</span>
                  </h2>
                </div>

                <div class="flex justify-center gap-6 text-sm">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary">免費</div>
                    <div class="text-xs text-base-content/60">
                      政府自辦課程<br />
                      學費全免
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-secondary">6個月</div>
                    <div class="text-xs text-base-content/60">
                      市面上最長<br />
                      最完整課程
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-accent">補助生活費</div>
                    <div class="text-xs text-base-content/60">
                      青年學習獎勵金或<br />
                      非自願職訓生活津貼
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 桌面版完整版本 -->
            <div class="hidden md:block w-full mt-12 mx-4">
              <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <!-- 絕對定位分隔線 -->
                <div
                  class="hidden lg:block absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-base-300 to-transparent pointer-events-none"
                ></div>

                <!-- 左側：痛點描述 -->
                <div class="space-y-6">
                  <div class="text-left mb-6">
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fill-rule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      你是不是也有這樣的感覺？
                    </div>
                    <h2 class="text-xl font-semibold text-base-content mb-2">
                      停下來的時候，其實最需要幫助
                    </h2>
                  </div>
                  <!-- 痛點條列 -->
                  <div class="space-y-4 md:text-base text-sm text-base-content/80 leading-relaxed">
                    <!-- 痛點1 -->
                    <div class="flex items-center gap-3">
                      <div
                        class="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          class="w-2.5 h-2.5 text-secondary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <p class="truncate">
                        <span class="md:hidden">發現所待行業無法生存</span>
                        <span class="hidden md:inline"
                          >剛畢業或工作一段時間發現所待的行業<span
                            class="font-semibold text-secondary"
                            >無法在這個社會生存</span
                          ></span
                        >
                      </p>
                    </div>
                    <!-- 痛點2 -->
                    <div class="flex items-center gap-3">
                      <div
                        class="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          class="w-2.5 h-2.5 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <p class="truncate">
                        <span class="md:hidden">自學資源太多太雜迷茫</span>
                        <span class="hidden md:inline"
                          >想自學轉前端，但網路上的<span class="font-semibold text-secondary"
                            >自學資源太多太雜</span
                          >，越找越迷茫</span
                        >
                      </p>
                    </div>
                    <!-- 痛點3 -->
                    <div class="flex items-center gap-3">
                      <div
                        class="w-5 h-5 bg-neutral/20 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          class="w-2.5 h-2.5 text-neutral"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <p class="truncate">
                        <span class="md:hidden">待業期不想太快進職場</span>
                        <span class="hidden md:inline"
                          >進入了不穩定的<span class="font-semibold text-secondary">待業期</span
                          >，又不想<span class="font-semibold text-secondary">那麼快</span
                          >進入職場</span
                        >
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 右側：解決方案 -->
                <div class="space-y-4">
                  <div class="text-left mb-2">
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      那我想跟你分享我找到的免費資源
                    </div>
                    <h2 class="text-xl font-semibold text-base-content mb-2 md:mb-4">
                      讓政府來幫你轉職
                    </h2>
                  </div>

                  <!-- 主要賣點 -->
                  <div class="space-y-2 mb-6">
                    <!-- 完全免費 -->
                    <div class="flex items-center gap-4 animate-pulse" style="animation-delay: 0s">
                      <div
                        class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce"
                        style="animation-delay: 0.2s"
                      >
                        <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="flex flex-col justify-center text-left">
                        <h3 class="text-lg font-bold text-primary">學費全免</h3>
                        <p class="text-sm text-base-content/70 mt-0.5">
                          政府自辦的六個月完整課程、而且全額補助
                        </p>
                      </div>
                    </div>

                    <!-- 生活補助 -->
                    <div
                      class="flex items-center gap-4 animate-pulse"
                      style="animation-delay: 0.5s"
                    >
                      <div
                        class="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce"
                        style="animation-delay: 0.7s"
                      >
                        <svg class="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="flex flex-col justify-center text-left">
                        <h3 class="text-lg font-bold text-secondary">29歲以下或非自願離職者</h3>
                        <p class="text-sm text-base-content/70 mt-0.5">
                          每月青年學習津貼$8,000
                          <br />
                          非青年為自願離職者可請領職訓生活津貼（身份重疊二擇一）
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA 按鈕區 -->
          <div class="flex flex-col mb-4 md:flex-row gap-4 justify-center items-center">
            <RouterLink
              to="/otherInfo"
              class="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              先來看我整理的資料
            </RouterLink>
            <button @click="scrollTo('#main')" class="btn btn-outline btn-primary btn-lg px-8">
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              為什麼想做這個網站
            </button>
          </div>

          <!-- 信任指標 -->
          <div class="text-center space-y-2">
            <p class="text-xs text-base-content/60">
              <span class="md:hidden">也許你能從這個網站裡找到一些靈感</span>
              <span class="hidden md:inline"
                >如果你也在人生的分岔路上不知道怎麼選，也許你能從這個網站裡找到一些靈感</span
              >
            </p>
            <div
              class="flex flex-row flex-wrap md:flex-row gap-2 md:gap-4 justify-center items-center text-xs text-base-content/60"
            >
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="md:hidden">真實經驗</span>
                <span class="hidden md:inline">真實經驗分享</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-secondary rounded-full"></div>
                <span class="md:hidden">政府職訓</span>
                <span class="hidden md:inline">政府職訓課程</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-accent rounded-full"></div>
                <span>完全免費</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-neutral rounded-full"></div>
                <span class="md:hidden">政府投資未來</span>
                <span class="hidden md:inline">讓政府幫你投資自己的未來</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div id="main" class="py-12 lg:py-20">
      <!-- My Story Section -->
      <section id="story" class="mb-16 lg:mb-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary mb-4">為什麼想做這個網站？</h2>
          <p class="text-lg xl:text-xl 2xl:text-2xl text-base-content/70 mb-6">做這個網站的契機，其實來自一次閒聊…</p>
          <div class="divider divider-primary w-24 mx-auto"></div>
          <!-- 情感式敘事內容 -->
          <div class="story-content max-w-4xl mx-auto">
            <!-- 段落容器，採用自然段落間距 -->
            <div class="prose prose-lg lg:prose-xl mx-auto text-center">
              <!-- 段落1：起因 -->
              <div
                class="story-paragraph mb-8 opacity-0 animate-fade-in"
                style="animation-delay: 0.2s"
              >
                <p class="text-base-content/90 leading-relaxed lg:text-lg xl:text-xl 2xl:text-2xl">
                  我做這個網站的契機，其實來自一次閒聊。當時聽老師說，下期的招生情況不太理想。我一邊覺得可惜，一邊也想起自己在轉職初期那段既迷茫又焦慮的日子。
                </p>
              </div>

              <!-- 段落2：背景與困境 -->
              <div
                class="story-paragraph mb-8 opacity-0 animate-fade-in"
                style="animation-delay: 0.4s"
              >
                <p class="text-base-content/90 leading-relaxed lg:text-lg xl:text-xl 2xl:text-2xl">
                  我本來是設計科班出身。剛離職時，原本的計畫是想轉職成 UI/UX
                  設計師，但怎麼學都學不太起來；同時，我也不想回到那種「行銷設計一人多工、薪水又少」的狀態。很快我就發現線上課程不適合我——我的自制力不強，沒有人陪跑時，很難撐過每個卡關。
                </p>
              </div>

              <!-- 段落3：現實壓力與轉機 -->
              <div
                class="story-paragraph mb-8 opacity-0 animate-fade-in"
                style="animation-delay: 0.6s"
              >
                <p class="text-base-content/90 leading-relaxed lg:text-lg xl:text-xl 2xl:text-2xl">
                  現實壓力也在。父母一直催我趕快找工作，我自己也覺得喘不過氣；想出來走走轉換一下，卻又沒什麼錢。後來經過朋友推薦，我注意到這堂政府職訓課。這門課不但免費，還有生活費補助，對剛離職、手頭緊的我來說是一個剛剛好的選項。加上外縣市學生可以住宿、課程是實體上課，剛好也解決了「想換個環境卻沒錢」的問題。
                </p>
              </div>

              <!-- 段落4：佛系心態 -->
              <div
                class="story-paragraph mb-8 opacity-0 animate-fade-in"
                style="animation-delay: 0.8s"
              >
                <p class="text-base-content/90 leading-relaxed lg:text-lg xl:text-xl 2xl:text-2xl">
                  老實說，當時我的心態蠻佛系的，並不是立志一定要成為工程師，而是覺得：在可承受的範圍內試試看也好。就算最後還是回到
                  UI/UX，懂一些前端的語言與限制，也會是加分。
                </p>
              </div>

              <!-- 段落5：意外的投入 -->
              <div
                class="story-paragraph mb-8 opacity-0 animate-fade-in"
                style="animation-delay: 1s"
              >
                <p class="text-base-content/90 leading-relaxed lg:text-lg xl:text-xl 2xl:text-2xl">
                  一開始我其實沒打算很投入，只想抱著「學得會很好，學不會也沒損失」的心態來試試看。再加上那位推薦我來的朋友還跟我說，他會幫我寫作業。結果課程不到一個月，他就跑去談戀愛了，留下我自己面對滿滿的進度。也因為這樣，我不得不硬著頭皮跟上，反而意外找回了投入感。
                </p>
              </div>

              <!-- 段落6：真正的發現 -->
              <div
                class="story-paragraph mb-12 opacity-0 animate-fade-in"
                style="animation-delay: 1.2s"
              >
                <p class="text-base-content/90 leading-relaxed lg:text-lg font-medium">
                  在學習過程中，我逐漸發現，比起單純的視覺，我更在意的是整體邏輯、資訊架構與功能流程。這讓我真正開始認真考慮，把轉職前端當成一條路。在同學、老師與AI的幫助下讓我不再是孤軍奮戰，也能一步一步沉下心走到今天。
                </p>
              </div>

              <!-- 核心理念 - Blockquote -->
              <div
                class="story-highlight mb-12 opacity-0 animate-fade-in"
                style="animation-delay: 1.4s"
              >
                <div class="relative">
                  <div class="text-6xl text-primary/15 mb-4">"</div>
                  <blockquote
                    class="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-primary/90 font-medium leading-relaxed px-4 relative"
                  >
                    這個網站不是招生頁，也不是技術炫耀，而是我想從過來人的角度，整理出當初我最想知道、卻到處找不到的資訊。希望現在正迷惘的你，可以在這裡找到一點安心，陪你撐過那個最難判斷方向的時候。
                  </blockquote>
                  <div class="text-6xl text-primary/15 mt-4 rotate-180">"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Introduction -->
      <section class="mb-16 lg:mb-24 bg-gradient-to-b from-base-200/20 via-primary/5 to-primary/10">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12 pt-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-primary mb-4">所以這是什麼樣的課？</h2>
            <p class="text-lg text-base-content/70 mb-6">
              我覺得這是一個讓你安全試探程式世界的機會，也是一個緊湊轉職生活中的休憩站
            </p>
            <div class="divider divider-primary w-24 mx-auto"></div>
          </div>

          <!-- 精簡版課程介紹 -->
          <div class="max-w-5xl mx-auto px-4 py-12 lg:py-16">
            <div class="grid lg:grid-cols-3 gap-8">
              <!-- 課程性質 -->
              <div
                class="bg-base-100/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div class="text-center mb-4">
                  <div
                    class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      class="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-primary mb-3">試試看的機會</h3>
                </div>
                <p class="text-base-content/80 leading-relaxed text-center">
                  沒有華麗包裝，不保證畢業找到工作。如果你對前端有興趣但不確定適不適合，六個月讓你深度體驗。
                </p>
              </div>

              <!-- 學習環境 -->
              <div
                class="bg-base-100/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div class="text-center mb-4">
                  <div
                    class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      class="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-accent mb-3">實體學習環境</h3>
                </div>
                <p class="text-base-content/80 leading-relaxed text-center">
                  固定教室、固定時間，還有一群跟你一樣在摸索的同學。老師陪你卡關，同學一起熬夜趕作業。
                </p>
              </div>

              <!-- 課程節奏 -->
              <div
                class="bg-base-100/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div class="text-center mb-4">
                  <div
                    class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      class="w-8 h-8 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-secondary mb-3">合理的節奏</h3>
                </div>
                <p class="text-base-content/80 leading-relaxed text-center">
                  不太緊也不太鬆。每個階段有明確目標，時間安排合理讓你好好消化。最後做個完整的個人專題。
                </p>
              </div>
            </div>

            <!-- 總結重點 -->
            <div class="mt-12 text-center">
              <div class="bg-base-100/60 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                <h4 class="text-2xl font-bold text-primary mb-6">三個重要的點</h4>
                <div class="grid md:grid-cols-3 gap-6">
                  <div class="flex items-center justify-center space-x-3">
                    <div
                      class="w-8 h-8 bg-success/20 text-success rounded-full flex items-center justify-center font-bold"
                    >
                      1
                    </div>
                    <span class="text-base-content/90 font-medium">免費 + 生活津貼</span>
                  </div>
                  <div class="flex items-center justify-center space-x-3">
                    <div
                      class="w-8 h-8 bg-info/20 text-info rounded-full flex items-center justify-center font-bold"
                    >
                      2
                    </div>
                    <span class="text-base-content/90 font-medium">完整學習路徑</span>
                  </div>
                  <div class="flex items-center justify-center space-x-3">
                    <div
                      class="w-8 h-8 bg-warning/20 text-warning rounded-full flex items-center justify-center font-bold"
                    >
                      3
                    </div>
                    <span class="text-base-content/90 font-medium">有人陪你學習</span>
                  </div>
                </div>
                <p class="text-base-content/70 italic mt-6">
                  在沒有太大壓力的情況下，好好試試看自己是否適合走程式這條路
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Features -->
      <!-- 這個區塊，想要用 bento grid 風 -->
      <section class="m-auto mb-16 px-4 max-w-7xl lg:mb-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-primary mb-4">課程特色</h2>
          <p class="text-lg text-base-content/70 mb-6">為什麼推薦這堂課給你？</p>
          <div class="divider divider-primary w-24 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div class="card-body items-center text-center p-8">
              <div class="avatar placeholder mb-6">
                <div class="bg-primary text-primary-content rounded-full w-20 h-20">
                  <span class="text-3xl"
                    ><img src="https://cdn-icons-gif.flaticon.com/18998/18998739.gif" alt="讀書"
                  /></span>
                </div>
              </div>
              <h2 class="card-title text-xl mb-3">實體教學</h2>
              <p class="text-base-content/80 leading-relaxed">
                <!-- 文案需要修改 -->
                有老師、定期定量規定地點的上課方式、有同學一起學習，不是孤軍奮戰
              </p>
            </div>
          </div>

          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div class="card-body items-center text-center p-8">
              <div class="avatar placeholder mb-6">
                <div class="bg-secondary text-secondary-content rounded-full w-20 h-20">
                  <span class="text-3xl"
                    ><img src="https://cdn-icons-gif.flaticon.com/17122/17122663.gif" alt="技術"
                  /></span>
                </div>
              </div>
              <h2 class="card-title text-xl mb-3">完整技術棧</h2>
              <p class="text-base-content/80 leading-relaxed">
                <!-- 文案需要修改 -->
                從 HTML 到 Vue、Node.js、API、資料庫，涵蓋前後端。並且也有帶到 專題規劃 與 UIUX
                課程。
              </p>
            </div>
          </div>

          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div class="card-body items-center text-center p-8">
              <div class="avatar placeholder mb-6">
                <div class="bg-accent text-accent-content rounded-full w-20 h-20">
                  <span class="text-3xl"
                    ><img src="https://cdn-icons-gif.flaticon.com/16678/16678036.gif" alt="實作"
                  /></span>
                </div>
              </div>
              <h2 class="card-title text-xl mb-3">實作導向</h2>
              <p class="text-base-content/80 leading-relaxed">
                <!-- 文案需要修改 -->
                畢業專題的形式為一人作業，可以練習一個人完整跑完 前即規劃、介面設計，到實作前後端。
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Chat Preview Section -->
      <section class="mb-16 lg:mb-24" aria-labelledby="chat-heading">
        <div class="hero bg-base-200 rounded-2xl shadow-xl">
          <div
            class="hero-content flex-col lg:flex-row items-center gap-12 max-w-6xl py-12 lg:py-16"
          >
            <!-- Mobile Mockup - Left Side -->
            <div class="flex-shrink-0">
              <div class="mockup-phone border-primary shadow-2xl aspect-[9/19]">
                <div class="mockup-phone-camera"></div>
                <div class="mockup-phone-display w-full max-w-sm aspect-[9/19] flex flex-col">
                  <div class="artboard artboard-demo phone-1 bg-base-100 p-2 text-center text-xs">
                    {{
                      String(now.getHours()).padStart(2, '0') +
                      ':' +
                      String(now.getMinutes()).padStart(2, '0')
                    }}
                  </div>
                  <div
                    ref="chatContainer"
                    class="artboard artboard-demo phone-1 bg-base-100 p-4 overflow-y-auto h-full flex-1"
                  >
                    <!-- Chat Messages -->
                    <TransitionGroup name="chat-bubble" tag="div" class="space-y-4">
                      <div
                        v-for="(msg, index) in displayedMessages"
                        :key="index"
                        :class="['chat', msg.sender === 'me' ? 'chat-end' : 'chat-start']"
                      >
                        <!-- 如果是連續them或me的話就一次出彈出來 -->
                        <div
                          :class="[
                            'chat-bubble',
                            msg.sender === 'me' ? 'chat-bubble-primary' : 'chat-bubble-secondary',
                            'text-sm',
                          ]"
                        >
                          {{ msg.text }}
                        </div>
                      </div>
                      <!-- Typing indicator -->
                      <div v-if="isTyping" key="typing" class="chat chat-start">
                        <div class="chat-bubble chat-bubble-secondary">
                          <span class="loading loading-dots loading-sm"></span>
                        </div>
                      </div>
                    </TransitionGroup>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content - Right Side -->
            <div class="max-w-xl text-center lg:text-left">
              <div class="mb-8">
                <div class="badge badge-primary badge-outline mb-4 text-sm px-4 py-2">
                  你可能也擔心的二三事
                </div>
                <h2 id="chat-heading" class="text-3xl lg:text-4xl font-bold text-primary mb-6">
                  在真的來上這堂課之前，<br class="hidden md:block" />我有很多疑慮
                </h2>
                <p class="text-lg text-base-content/80 leading-relaxed mb-8">
                  這裡整理了我當時最想知道的答案，希望能幫助到同樣在十字路口的你。
                </p>
              </div>

              <div class="space-y-4 mb-10">
                <div class="flex items-center gap-4">
                  <div class="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <!-- 這邊文案怪怪的 -->
                  <span class="text-base-content/70">真實學員的困惑與解答</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-3 h-3 bg-secondary rounded-full flex-shrink-0"></div>
                  <!-- 這邊文案怪怪的 -->
                  <span class="text-base-content/70">過來人的誠實分享</span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <!-- 這邊文案怪怪的 -->
                  <span class="text-base-content/70">沒有話術，只有經驗</span>
                </div>
              </div>

              <div class="flex flex-col md:flex-row gap-4">
                <button @click="scrollTo('#faq-section')" class="btn btn-primary btn-lg">
                  查看完整 FAQ
                </button>
                <RouterLink to="/howToSignUp" class="btn btn-outline btn-primary btn-lg">
                  查看報名流程
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Resource Navigation -->
      <section id="overview" class="mb-16 lg:mb-24 m-auto px-4 max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-primary mb-4">我整理了這些資訊給你</h2>
          <!-- 增加文案 -->
          <p class="text-lg text-base-content/70 mb-6">希望能讓你少繞一點路</p>
          <div class="divider divider-primary w-24 mx-auto"></div>
        </div>

        <!-- 這個區塊，想要用 bento grid 風 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mx-auto">
          <div
            class="card bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-body items-center text-center p-8">
              <div class="text-6xl mb-6">
                <img src="https://cdn-icons-png.flaticon.com/128/764/764279.png" alt="課程模組" />
              </div>
              <h2 class="card-title text-lg mb-4">課程模組介紹</h2>
              <p class="text-sm text-center mb-8 leading-relaxed flex-grow">
                到底這堂課教什麼？HTML、Vue、API、Node.js…就業市場上必備的/熱門的都有。
              </p>
              <div class="card-actions">
                <!-- 連結去 vite-project\src\pages\courseIntroduction.vue -->
                <RouterLink to="/courseIntroduction" class="btn btn-primary btn-sm"
                  >查看更多</RouterLink
                >
              </div>
            </div>
          </div>

          <div
            class="card bg-gradient-to-br from-secondary/20 to-secondary/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-body items-center text-center p-8">
              <div class="text-6xl mb-6">
                <img src="https://cdn-icons-png.flaticon.com/128/4403/4403603.png" alt="faqs" />
              </div>
              <h2 class="card-title text-lg mb-4">常見問題整理</h2>
              <p class="text-sm text-center mb-8 leading-relaxed flex-grow">
                關於報名、課程制度、政府提供的資源，我把我問過的都整理下來了。
              </p>
              <div class="card-actions">
                <button @click="scrollTo('#faq-section')" class="btn btn-secondary btn-sm">
                  查看更多
                </button>
              </div>
            </div>
          </div>

          <div
            class="card bg-gradient-to-br from-accent/20 to-accent/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-body items-center text-center p-8">
              <div class="text-6xl mb-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10435/10435171.png"
                  alt="學員成果"
                />
              </div>
              <h2 class="card-title text-lg mb-4">學員成果展示</h2>
              <p class="text-sm text-center mb-8 leading-relaxed flex-grow">
                半年內我們從零寫出這些作品，不是完美，但真的做出來了。
              </p>
              <div class="card-actions">
                <button @click="scrollTo('#projects-showcase')" class="btn btn-accent btn-sm">
                  查看更多
                </button>
              </div>
            </div>
          </div>

          <div
            class="card bg-gradient-to-br from-warning/20 to-warning/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="card-body items-center text-center p-8">
              <div class="text-6xl mb-6">
                <img src="https://cdn-icons-png.flaticon.com/128/4014/4014511.png" alt="報名流程" />
              </div>
              <h2 class="card-title text-lg mb-4">報名流程與提醒</h2>
              <p class="text-sm text-center mb-8 leading-relaxed flex-grow">
                要去哪報？要帶什麼？名額會不會爆滿？我幫你列成檢查清單了。
              </p>
              <div class="card-actions">
                <button @click="scrollTo('#faq-section')" class="btn btn-warning btn-sm">
                  查看更多
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Curriculum -->
      <section class="mb-24 m-auto px-4 max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-primary mb-4">課程在教什麼</h2>
          <p class="text-lg text-base-content/70">這不是一次就能變工程師，但你會有清楚的地圖</p>
          <div class="divider divider-primary w-24 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div
            v-for="mod in modulesUi"
            :key="mod._id"
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
          >
            <figure class="h-48 bg-white from-base-200 to-base-300">
              <img :src="mod.imageUrl" :alt="mod.title" class="h-full" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{{ mod.title }}</h2>
              <p class="text-sm flex-grow">{{ mod.description }}</p>
              <div class="card-actions justify-between items-center">
                <div class="badge badge-outline">{{ mod.category }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Student Projects -->
      <section id="projects-showcase" class="mb-24 m-auto px-4 max-w-7xl justify-center">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-primary mb-4">學員成果精選</h2>
          <p class="text-lg text-base-content/70">看看跟你一樣在起點的人，做出了什麼</p>
          <div class="divider divider-primary w-24 mx-auto"></div>
        </div>

        <div class="carousel carousel-center max-w-full p-4 space-x-4 bg-base-200 rounded-box">
          <div v-for="proj in projectsUi" :key="proj._id" class="carousel-item">
            <div class="card w-auto min-w-64 max-w-sm bg-base-100 shadow-xl">
              <figure class="px-6 pt-6">
                <img
                  :src="proj.imageUrl"
                  :alt="proj.title"
                  class="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">{{ proj.title }}</h2>
                <div v-if="proj.studentName" class="badge badge-primary badge-outline">
                  {{ proj.studentName }}
                </div>
                <p class="text-sm">{{ proj.description }}</p>
                <div class="card-actions">
                  <a :href="proj.demoUrl" target="_blank" class="btn btn-primary btn-sm"
                    >查看作品</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="faq-section" class="mb-24 m-auto px-4 max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-primary mb-4">報名常見問題</h2>
          <p class="text-lg text-base-content/70">關於報名、課程、補助，你想知道的可能都在這裡</p>
          <div class="divider divider-primary w-24 mx-auto"></div>
        </div>

        <div>
          <div class="join join-vertical w-full">
            <div
              v-for="(faq, index) in faqsUi"
              :key="faq._id"
              class="collapse collapse-arrow join-item border border-base-300"
            >
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg font-medium">{{ faq.question }}</div>
              <div class="collapse-content">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Final CTA - 重構為符合CTA設計要求 -->
      <section
        class="relative bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 py-16 lg:py-24 overflow-hidden"
      >
        <!-- 背景裝飾 -->
        <div class="absolute inset-0 opacity-50">
          <div
            class="w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent"
          ></div>
        </div>

        <div class="relative max-w-4xl mx-auto px-4 text-center">
          <!-- 主標題 (6-8字行動導向) -->
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
            開始你的轉職行動
          </h2>

          <!-- 副標題 -->
          <p class="text-lg md:text-xl text-base-content/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            不用再猜測、不用再等待，這是你踏出第一步的最好時機
          </p>

          <!-- 信任元素與社會證明 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div class="text-center p-4 bg-white/50 rounded-lg border border-primary/10">
              <div class="text-2xl font-bold text-primary mb-1">100%</div>
              <div class="text-xs text-base-content/60">政府補助</div>
            </div>
            <div class="text-center p-4 bg-white/50 rounded-lg border border-secondary/10">
              <div class="text-2xl font-bold text-secondary mb-1">6個月</div>
              <div class="text-xs text-base-content/60">完整學程</div>
            </div>
            <div class="text-center p-4 bg-white/50 rounded-lg border border-info/10">
              <div class="text-2xl font-bold text-neutral mb-1">生活津貼</div>
              <div class="text-xs text-base-content/60">有錢領</div>
            </div>
          </div>

          <!-- 行動按鈕組 (降低行動門檻) -->
          <div class="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <!-- 主要CTA按鈕 -->
            <RouterLink
              to="/howToSignUp"
              class="btn btn-primary btn-lg px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-200 min-w-[200px]"
            >
              立即查看報名
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </RouterLink>

            <!-- 次要CTA按鈕 -->
            <button
              @click="scrollTo('#faq-section')"
              class="btn btn-outline btn-primary btn-lg px-8 py-4 text-lg hover:bg-primary hover:border-primary min-w-[200px]"
            >
              先看常見問題
            </button>
          </div>

          <!-- 信任與保證聲明 -->
          <div class="max-w-2xl mx-auto">
            <div class="flex items-center justify-center gap-4 text-sm text-base-content/70 mb-4">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                完全免費
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                政府認證
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                就業導向
              </div>
            </div>

            <blockquote
              class="text-base italic text-primary/80 font-medium border-l-4 border-primary/30 pl-4 text-left"
            >
              這些資訊，是我為了那時候迷茫的自己整理的。現在，希望也能成為你轉職路上的明燈。
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted, watch, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import modulesService from '@/services/modules'
import projectsService from '@/services/projects'
import faqsService from '@/services/faqs'

const scrollTo = (selector) => {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const modules = ref([])
const projects = ref([])
const faqs = ref([])

const modulesUi = computed(() =>
  Array.isArray(modules.value) ? modules.value.filter((m) => m.sortOrder === 0) : [],
)
const projectsUi = computed(() => (Array.isArray(projects.value) ? projects.value : []))
const faqsUi = computed(() => (Array.isArray(faqs.value) ? faqs.value : []))

// --- Chat Animation ---
const allMessages = [
  { sender: 'me', text: '課程會不會不實用？' },
  { sender: 'them', text: '非常實用！課綱以「就業導向」為出發點，學到的技能在市場上都用得到。' },
  { sender: 'them', text: '我整理了完整的課程模組，讓你清楚知道會學到什麼。' },
  { sender: 'me', text: '我怕自己撐不下去 😵‍💫' },
  { sender: 'them', text: '這裡的課程確實不輕鬆，每天的知識量都非常多。' },
  { sender: 'them', text: '但老師很願意花時間協助，上課內容也有錄影可複習。' },
  { sender: 'them', text: '最重要的是免費，撐不下去也沒成本壓力 🤣' },
  { sender: 'me', text: '我沒有資訊背景，適合來上這堂課嗎？' },
  { sender: 'them', text: '我也非本科！這堂課是從基礎開始教，只要你願意學就跟得上。' },
  { sender: 'them', text: '但每個人學習的方式不一樣，要找到適合自己的撇步🌹' },
]

const displayedMessages = ref([])
const isTyping = ref(false)
const chatContainer = ref(null)
let chatAnimationTimeout

const playChat = async () => {
  // 將連續的相同發送者訊息分組，以便一次性顯示
  const groupedMessages = allMessages.reduce((acc, msg) => {
    const lastGroup = acc[acc.length - 1]
    if (lastGroup && lastGroup[0].sender === msg.sender) {
      lastGroup.push(msg)
    } else {
      acc.push([msg])
    }
    return acc
  }, [])

  // Reset
  displayedMessages.value = []
  isTyping.value = false
  await new Promise((r) => (chatAnimationTimeout = setTimeout(r, 100)))

  for (const messageGroup of groupedMessages) {
    const sender = messageGroup[0].sender

    // 如果對方正在輸入，先清除指示器
    if (isTyping.value) {
      isTyping.value = false
      await new Promise((r) => (chatAnimationTimeout = setTimeout(r, 200)))
    }

    // 如果是對方(them)的訊息，顯示「正在輸入...」
    if (sender === 'them') {
      isTyping.value = true
      // 根據訊息數量微調延遲，更真實
      const typingDelay = 800 + messageGroup.length * 150 + Math.random() * 400
      await new Promise((r) => (chatAnimationTimeout = setTimeout(r, typingDelay)))
      isTyping.value = false
    }

    // 一次性推入整個訊息群組
    displayedMessages.value.push(...messageGroup)

    // 等待下一個群組出現
    const displayDelay = 1200 + Math.random() * 800
    await new Promise((r) => (chatAnimationTimeout = setTimeout(r, displayDelay)))
  }

  // Loop after a delay
  chatAnimationTimeout = setTimeout(playChat, 5000)
}

watch(
  displayedMessages,
  async () => {
    await nextTick()
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  },
  { deep: true },
)

// --- Clock ---
const now = ref(new Date())
let clockInterval

onMounted(async () => {
  // Start clock
  clockInterval = setInterval(() => {
    now.value = new Date()
  }, 1000)

  // Start chat animation
  playChat()

  // Fetch page data
  try {
    const res = await modulesService.get()
    const data = res?.data ?? res
    if (data?.success && Array.isArray(data?.modules)) {
      modules.value = data.modules
    } else {
      console.error('Failed to load modules:', data?.message)
      modules.value = []
    }
  } catch (error) {
    console.error('Error fetching modules:', error)
    modules.value = []
  }

  try {
    const res = await projectsService.get()
    const data = res?.data ?? res
    if (data?.success && Array.isArray(data?.projects)) {
      projects.value = data.projects
    } else {
      console.error('Failed to load projects:', data?.message)
      projects.value = []
    }
  } catch (error) {
    console.error('Error fetching projects:', error)
    projects.value = []
  }

  try {
    const res = await faqsService.get()
    const data = res?.data ?? res
    if (data?.success && Array.isArray(data?.faqs)) {
      faqs.value = data.faqs
    } else {
      console.error('Failed to load faqs:', data?.message)
      faqs.value = []
    }
  } catch (error) {
    console.error('Error fetching faqs:', error)
    faqs.value = []
  }
})

onUnmounted(() => {
  clearInterval(clockInterval)
  clearTimeout(chatAnimationTimeout)
})
</script>

<style scoped>
.chat-bubble-enter-active,
.chat-bubble-leave-active {
  transition: all 0.5s ease;
}
.chat-bubble-enter-from,
.chat-bubble-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* 自定義動畫延遲 */
.animation-delay-1000 {
  animation-delay: 0.5s;
}

/* 脈動增強效果 */
@keyframes enhanced-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

/* hover時的特殊效果 */
.group:hover .animate-ping {
  animation-duration: 0.5s;
}

/* 情感式敘事段落樣式 */
.story-content {
  padding: 2rem 1rem;
}

.story-paragraph p {
  margin: 0;
  text-align: left;
  max-width: none;
}

.story-highlight {
  text-align: center;
  margin: 3rem 0;
}

.story-highlight blockquote {
  border: none;
  margin: 0;
  padding: 0;
}

.story-highlight mark {
  font-weight: 600;
  border-radius: 6px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

/* 淡入動畫 */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

/* 響應式文字大小調整 */
@media (max-width: 768px) {
  .story-content {
    padding: 1.5rem 0.75rem;
  }

  .story-paragraph p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .story-highlight blockquote {
    font-size: 1.25rem;
    line-height: 1.6;
    padding: 0 1rem;
  }

  .story-highlight .text-6xl {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .story-content {
    padding: 1rem 0.5rem;
  }

  .story-paragraph {
    margin-bottom: 1.5rem !important;
  }

  .story-highlight {
    margin: 2rem 0 !important;
  }

  .story-highlight blockquote {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .story-highlight .text-6xl {
    font-size: 2.5rem;
  }
}

/* prose 覆寫，確保文字對齊和間距正確 */
.prose {
  max-width: none;
}

.prose p {
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
