# 泰山職訓前端課程學員分享網

這是一個基於 Vue 3 + Vite 的現代化前端專案，為「泰山職訓局前端網頁開發技術課程」打造的資訊展示與管理平台。

## 專案簡介

本專案是一個完整的課程資訊網站，包含：

- **前台展示**：課程介紹、學員成果、常見問題等
- **後台管理**：內容管理系統，可管理專案、模組、部落格文章和FAQ
- **響應式設計**：適配桌面和行動裝置
- **Markdown 支援**：支援完整的 Markdown 語法和數學公式

## 技術棧

- **Vue 3** (3.5.18) - 前端框架
- **Vite** (7.0.6) - 建構工具
- **Tailwind CSS 4** (4.1.11) - CSS 框架
- **PrimeVue 4** (4.3.7) - UI 組件庫（後台使用）
- **daisyUI 5** (5.0.50) - Tailwind CSS 組件庫（前台使用）
- **Vue Router** (4.5.1) - 檔案路由系統 (unplugin-vue-router)
- **Pinia** (3.0.3) - 狀態管理
- **PrimeIcons** (7.0.0) - 圖標庫
- **Markdown-it** (14.1.0) - Markdown 解析器
- **Highlight.js** (11.11.1) - 程式碼高亮
- **MathJax** (4.0.0) - 數學公式渲染

## 自動化部署

本專案使用 **GitHub Actions** 實現自動化部署到 GitHub Pages。

### 部署流程

當程式碼推送到 `main` 分支時，會自動觸發以下流程：

1. **檢出程式碼** - 從儲存庫複製最新程式碼
2. **安裝依賴與建構** - 執行 `npm install` 和 `npm run build`
3. **部署到 GitHub Pages** - 將 `dist` 目錄發佈到 `gh-pages` 分支

### 配置說明

部署配置位於 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install and Build
        run: |
          npm install
          npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
```

### 環境變數設定

在 GitHub 儲存庫設定中新增以下 Secret：

- `VITE_API_URL` - API 伺服器位址

> 💡 **提示**：前往儲存庫 Settings → Secrets and variables → Actions → New repository secret 進行設定

### 部署狀態

[![Deploy Status](https://github.com/Chlorophyll319/frontPrWebOnlineVer-vite-project/actions/workflows/deploy.yml/badge.svg)](https://github.com/Chlorophyll319/frontPrWebOnlineVer-vite-project/actions/workflows/deploy.yml)

## 專案預覽

### 前台展示

> 📸 \_截圖區域

- ![前台首頁](https://i.meee.com.tw/4j89Ma7.png)
- ![課程介紹頁](https://i.meee.com.tw/38KCFu2.png)
- ![文章詳情頁](https://i.meee.com.tw/aQt8Fvh.png)

### 後台管理

> 📸 \_截圖區域

- ![後台登入](https://i.meee.com.tw/rr9DoJq.png)
- ![後台首頁](https://i.meee.com.tw/c5Q3Tcy.png)
- ![內容管理](https://i.meee.com.tw/r3V0410.png)

## 系統要求

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 或 **yarn** >= 1.22.0
- **現代瀏覽器支援**：Chrome 90+, Firefox 90+, Safari 14+, Edge 90+

## 快速開始

### 1. 克隆專案

```bash
git clone <repository-url>
cd vite-project
```

### 2. 安裝依賴

```bash
npm install
```

### 3. 啟動開發伺服器

```bash
npm run dev
```

### 4. 訪問應用

- 🌐 **前台**: http://localhost:3000
- 🔧 **後台**: http://localhost:3000/admin

## 專案結構

```
src/
├── components/        # 共用組件
│   ├── HelloWorld.vue
│   └── NavMenu.vue
├── layouts/          # 布局組件
│   ├── default.vue   # 前台布局（使用 daisyUI）
│   └── admin.vue     # 後台布局（使用 PrimeVue）
├── pages/            # 頁面組件（檔案路由系統）
│   ├── index.vue           # 前台首頁
│   ├── courseIntroduction.vue  # 課程介紹
│   ├── howToSignUp.vue     # 報名流程
│   ├── otherInfo.vue       # 其他資訊
│   ├── article/            # 文章系統
│   │   └── [id].vue        # 文章詳情頁
│   └── admin/              # 後台頁面
│       ├── index.vue       # 後台首頁
│       ├── login.vue       # 後台登入
│       ├── projects.vue    # 專案管理
│       ├── modules.vue     # 模組管理
│       ├── blog.vue        # 部落格管理
│       └── faq.vue         # FAQ 管理
├── stores/           # Pinia 狀態管理
│   ├── index.js      # Store 配置
│   └── user.js       # 用戶狀態管理
├── services/         # API 服務
│   ├── api.js        # 基礎 API 配置
│   ├── blogs.js      # 部落格服務
│   ├── faqs.js       # FAQ 服務
│   ├── modules.js    # 模組服務
│   ├── projects.js   # 專案服務
│   └── user.js       # 用戶服務
├── utils/            # 工具函數
│   └── markdown.js   # Markdown 處理工具
└── styles/           # 樣式文件
```

## 開發指南

### 前台開發

- 使用 daisyUI 組件
- 布局：`default.vue`
- 樣式：Tailwind CSS + daisyUI

### 後台開發

- 使用 PrimeVue 組件
- 布局：`admin.vue`
- 樣式：PrimeVue 主題 + Tailwind CSS

## 安裝和運行

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建構生產版本
npm run build

# 預覽生產版本
npm run preview
```

> ⚠️ **注意**: 環境變數以 `VITE_` 開頭才能在前端使用

## 路由說明

本專案使用 **檔案路由系統** (unplugin-vue-router)，根據 `src/pages` 目錄結構自動生成路由。

### 前台路由

- `/` - 首頁
- `/courseIntroduction` - 課程介紹
- `/howToSignUp` - 報名流程
- `/otherInfo` - 其他資訊
- `/article/[id]` - 文章詳情頁

### 後台路由

- `/admin` - 後台首頁
- `/admin/login` - 後台登入
- `/admin/projects` - 專案管理
- `/admin/modules` - 模組管理
- `/admin/blog` - 部落格管理
- `/admin/faq` - FAQ 管理

## 組件使用

### PrimeVue 組件（後台）

```vue
<template>
  <Button label="按鈕" icon="pi pi-check" />
  <Card>
    <template #title>標題</template>
    <template #content>內容</template>
  </Card>
</template>
```

### daisyUI 組件（前台）

```vue
<template>
  <button class="btn btn-primary">按鈕</button>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">標題</h2>
      <p>內容</p>
    </div>
  </div>
</template>
```

## 專案特色

### 1. 雙布局系統

- **前台**：使用 daisyUI + Tailwind CSS，提供現代化的展示介面
- **後台**：使用 PrimeVue，提供專業的管理介面

### 2. 檔案路由系統

- 使用 `unplugin-vue-router` 自動生成路由
- 支援動態路由 (如 `[id].vue`)
- 自動生成 TypeScript 類型定義

### 3. Markdown 內容管理

- 完整支援 Markdown 語法
- 程式碼高亮顯示
- 數學公式渲染
- 表格、清單、連結等豐富內容

### 4. 響應式設計

- 適配各種螢幕尺寸
- 行動裝置優先設計
- 平滑的動畫效果

## 開發注意事項

1. **雙 UI 框架共存**：前台使用 daisyUI，後台使用 PrimeVue，避免樣式衝突
2. **自動組件導入**：PrimeVue 和 Vue 組件會自動導入，無需手動 import
3. **檔案路由**：新增頁面只需在 `src/pages` 目錄建立 `.vue` 檔案
4. **Layout 系統**：在 `<route>` meta 中指定布局，預設使用 `default` layout
5. **Tailwind CSS 4**：使用最新語法，支援 `@tailwindcss/vite` 插件

## 故障排除

### 常見問題與解決方案

#### 🚨 安裝相關問題

**Q: `npm install` 時出現錯誤**

```bash
# 清除快取並重新安裝
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Q: Node.js 版本不符**

```bash
# 檢查版本
node --version
npm --version

# 升級 Node.js (建議使用 nvm)
nvm install 18
nvm use 18
```

#### 🚨 開發相關問題

**Q: 開發伺服器無法啟動**

```bash
# 檢查連接埠是否被佔用
lsof -i :3000

# 使用其他連接埠
npm run dev -- --port 3001
```

**Q: 熱重載不生效**

```bash
# 重啟開發伺服器
npm run dev

# 清除瀏覽器快取 (Ctrl+Shift+R 或 Cmd+Shift+R)
```

#### 🚨 建構相關問題

**Q: 建構失敗**

```bash
# 檢查 TypeScript 錯誤
npx vue-tsc --noEmit

# 檢查 ESLint 錯誤
npm run lint

# 清除快取後重新建構
rm -rf dist .vite
npm run build
```

## 開發工具推薦

### VS Code 擴充套件

```json
{
  "recommendations": [
    "Vue.volar", // Vue 3 語言支援
    "Vue.vscode-typescript-vue-plugin", // TypeScript Vue 插件
    "bradlc.vscode-tailwindcss", // Tailwind CSS 智能提示
    "esbenp.prettier-vscode", // 程式碼格式化
    "dbaeumer.vscode-eslint", // ESLint 支援
    "formulahendry.auto-rename-tag", // 自動重新命名標籤
    "ms-vscode.vscode-json" // JSON 支援
  ]
}
```

### 開發設定

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.vue": "vue"
  },
  "emmet.includeLanguages": {
    "vue": "html"
  }
}
```

## 技術亮點

- ⚡ **極速開發體驗**: Vite 7 提供毫秒級的熱重載
- 🎨 **雙 UI 系統**: 前台 daisyUI 現代化設計 + 後台 PrimeVue 專業管理介面
- 📱 **完美響應式**: 行動裝置優先，適配各種螢幕尺寸
- 🔧 **檔案路由系統**: 約定大於配置，自動生成路由和 TypeScript 類型
- 📝 **Markdown CMS**: 支援程式碼高亮、數學公式、表格等豐富內容
- 🎯 **TypeScript 就緒**: 完整的類型支援和智能提示
- 🚀 **現代化建構**: Tree-shaking、程式碼分割、優化打包
- 🎭 **組件自動導入**: PrimeVue 和 Vue 組件無需手動 import
- 🎪 **自訂布局系統**: 靈活的頁面布局管理
- 📊 **開發體驗優化**: ESLint + Prettier + 熱重載
