# 前端專案

這是一個基於 Vue 3 + Vite 的現代化前端專案，使用最新的技術棧。

## 技術棧

- **Vue 3** - 前端框架
- **Vite 7** - 建構工具
- **Tailwind CSS 4** - CSS 框架
- **PrimeVue 4** - UI 組件庫（後台使用）
- **daisyUI 5** - Tailwind CSS 組件庫（前台使用）
- **Vue Router** - 路由管理
- **Pinia** - 狀態管理
- **PrimeIcons** - 圖標庫

## 專案結構

```
src/
├── components/     # 共用組件
├── layouts/        # 布局組件
│   ├── default.vue # 前台布局（使用 daisyUI）
│   └── admin.vue   # 後台布局（使用 PrimeVue）
├── pages/          # 頁面組件
│   ├── index.vue   # 前台首頁
│   ├── login.vue   # 前台登入
│   └── admin/      # 後台頁面
│       ├── index.vue      # 後台首頁
│       ├── login.vue      # 後台登入
│       ├── projects.vue   # 專案管理
│       ├── modules.vue    # 模組管理
│       ├── blog.vue       # 部落格管理
│       └── faq.vue        # FAQ 管理
├── stores/         # Pinia 狀態管理
├── services/       # API 服務
└── styles/         # 樣式文件
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

## 路由說明

### 前台路由
- `/` - 首頁
- `/login` - 登入頁面

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

## 注意事項

1. 前台和後台使用不同的 UI 框架，請根據頁面類型選擇對應的組件
2. PrimeVue 組件會自動導入，無需手動 import
3. 使用 Tailwind CSS 4 的新語法，不需要傳統的 config 檔案
4. 確保在後台頁面中使用 `admin` layout，前台頁面使用 `default` layout