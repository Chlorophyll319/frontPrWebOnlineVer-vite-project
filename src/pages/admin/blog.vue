<route lang="yaml">
meta:
  layout: admin
  title: 部落格內容管理
  login: login-only
  admin: true
</route>

<template>
  <div class="space-y-6">
    <!-- 標題 -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div class="flex-1">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">部落格文章內容管理</h1>
        <p class="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">管理所有部落格項目</p>
      </div>
      <Button
        label="新增文章"
        icon="pi pi-plus"
        severity="primary"
        @click="onAdd()"
        id="newModuleButton"
        size="small"
        class="w-full sm:w-auto"
      />
    </div>

    <!-- 搜尋與篩選 -->
    <Card class="shadow-sm">
      <template #content>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
          <div class="flex-1">
            <label for="searchModules" class="sr-only">搜尋文章</label>
            <span class="p-input-icon-left w-full">
              <InputText
                id="searchModules"
                name="searchModules"
                v-model.trim="searchQuery"
                placeholder="搜尋標題、描述、分類..."
                class="w-full"
              />
            </span>
          </div>
          <div class="sm:w-48">
            <Select
              id="categoryFilter"
              name="categoryFilter"
              v-model="selectedCategory"
              :options="tagsOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="選擇分類"
              showClear
              class="w-full"
            />
          </div>
        </div>
      </template>
    </Card>

    <!-- 模組列表 -->
    <Card class="shadow-sm">
      <template #content>
        <DataTable
          :loading="isLoading"
          :value="filteredBlogs"
          :paginator="true"
          :rows="10"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="顯示第 {first} 到 {last} 項，共 {totalRecords} 項"
          responsiveLayout="scroll"
          class="p-datatable-sm"
        >
          <!-- 標題 -->
          <Column field="title" header="標題" sortable>
            <template #body="{ data }">
              <div class="font-medium line-clamp-2">{{ data.title }}</div>
            </template>
          </Column>

          <!-- 摘要 -->
          <Column field="summary" header="摘要" sortable>
            <template #body="{ data }">
              <p class="w-80 truncate">{{ data.summary }}</p>
            </template>
          </Column>

          <!-- 分類 -->
          <Column field="tags" header="分類" sortable>
            <template #body="{ data }">
              <span>{{ data.tags }}</span>
            </template>
          </Column>

          <!-- 圖片預覽 -->
          <Column field="coverImage" header="封面圖片" sortable>
            <template #body="{ data }">
              <img
                v-if="data.coverImage"
                :src="data.coverImage"
                alt="封面"
                class="w-20 h-12 object-cover rounded shadow cursor-pointer"
                @click="viewImage(data)"
              />
            </template>
          </Column>

          <!-- 作者 -->
          <Column field="author" header="作者" sortable>
            <template #body="{ data }">
              <span>{{ data.author }}</span>
            </template>
          </Column>

          <!-- 狀態：可即時切換 -->
          <Column field="visible" header="狀態" sortable>
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <ToggleSwitch
                  id="visible"
                  name="visible"
                  :modelValue="data.visible"
                  @update:modelValue="(val) => toggleVisible(data, val)"
                />
                <Tag
                  :value="data.visible ? '上架' : '下架'"
                  :severity="getStatusSeverity(data.visible)"
                />
              </div>
            </template>
          </Column>

          <!-- 建立時間 -->
          <Column field="createdAt" header="建立時間" sortable>
            <template #body="{ data }">
              <span>{{ new Date(data.createdAt).toLocaleString() }}</span>
            </template>
          </Column>

          <!-- 操作 -->
          <Column header="操作" :exportable="false">
            <template #body="{ data }">
              <div class="flex gap-2">
                <Button
                  icon="pi pi-pencil"
                  severity="warning"
                  text
                  size="small"
                  @click="editBlog(data)"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>

    <!-- 新增/編輯對話框 -->
    <Dialog
      v-model:visible="showDialog"
      :header="editingBlog ? '編輯部落格' : '新增部落格'"
      modal
      class="p-fluid w-[95vw] sm:w-[38rem] max-w-4xl"
      :dismissableMask="true"
    >
      <div class="rounded-xl bg-white/60 backdrop-blur p-4 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <!-- 標題 -->
          <div class="col-span-1 md:col-span-2">
            <label for="title" class="block text-sm font-medium text-gray-700 mb-1"
              >標題（必填）</label
            >
            <InputText
              id="title"
              name="title"
              v-model.trim="blogForm.title"
              :maxlength="200"
              required
              placeholder="最多 200 字"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <!-- 分類 -->
          <div>
            <label for="tags" class="block text-sm font-medium text-gray-700 mb-1"
              >分類（必填）</label
            >
            <Select
              id="tags"
              name="tags"
              v-model="blogForm.tags"
              :options="tagsOptions"
              optionLabel="label"
              optionValue="value"
              required
              placeholder="選擇分類"
              class="w-full"
            />
          </div>
          <!-- 封面圖片網址 -->
          <div class="col-span-1 md:col-span-2">
            <label
              for="coverImage"
              class="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
            >
              <span>封面圖片網址（選填）</span>
              <i class="pi pi-info-circle text-gray-500" title="建議 1200×675（16:9）"></i>
            </label>
            <InputText
              id="coverImage"
              name="coverImage"
              v-model.trim="blogForm.coverImage"
              type="url"
              placeholder="https://example.com/cover.jpg"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <!-- 摘要 -->
          <div class="col-span-1 md:col-span-2">
            <label for="summary" class="block text-sm font-medium text-gray-700 mb-1"
              >摘要（必填）</label
            >
            <Textarea
              id="summary"
              name="summary"
              v-model.trim="blogForm.summary"
              rows="2"
              autoResize
              :maxlength="300"
              required
              placeholder="最多 300 字"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <!-- 內容 -->
          <div class="col-span-1 md:col-span-2">
            <label for="content" class="block text-sm font-medium text-gray-700 mb-1"
              >內容（必填）</label
            >
            <Textarea
              id="content"
              name="content"
              v-model.trim="blogForm.content"
              rows="6"
              autoResize
              required
              placeholder="請輸入部落格內容"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <!-- 作者 -->
          <div>
            <label for="author" class="block text-sm font-medium text-gray-700 mb-1"
              >作者（選填）</label
            >
            <InputText
              id="author"
              name="author"
              v-model.trim="blogForm.author"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <!-- 狀態 -->
          <div class="col-span-1 md:col-span-2">
            <label for="visible" class="block text-sm font-medium text-gray-700 mb-2"
              >狀態（必填）</label
            >
            <div class="flex items-center gap-3">
              <ToggleSwitch id="visible" name="visible" v-model="blogForm.visible" />
              <span
                class="text-xs px-2 py-1 rounded-md"
                :class="
                  blogForm.visible ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                "
              >
                {{ blogForm.visible ? '上架' : '下架' }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="w-full flex items-center justify-between gap-3">
          <Button
            label="取消"
            icon="pi pi-times"
            text
            class="!px-4 !py-2"
            @click="showDialog = false"
          />
          <Button
            :label="editingBlog ? '更新' : '新增'"
            icon="pi pi-check"
            class="!px-5 !py-2 !bg-indigo-600 hover:!bg-indigo-700 !border-indigo-600"
            @click="saveBlog"
          />
        </div>
      </template>
    </Dialog>
    <ConfirmDialog />
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import Select from 'primevue/select'
import ToggleSwitch from 'primevue/toggleswitch'
import blogsApi from '@/services/blogs.js' // ← 改用 blogsApi

const confirm = useConfirm()
const toast = useToast()

const blogs = ref([])
const isLoading = ref(false)
const searchQuery = ref('')
const selectedCategory = ref(null)
const showDialog = ref(false)
const editingBlog = ref(null)
const blogForm = reactive({
  title: '',
  summary: '',
  content: '',
  coverImage: '',
  tags: '',
  author: '',
  visible: true,
})
const statusOptions = [
  { label: '上架', value: true },
  { label: '下架', value: false },
]
const tagsOptions = [
  { label: '職訓局環境', value: '職訓局環境' },
  { label: '甄試相關', value: '甄試相關' },
  { label: '課程相關', value: '課程相關' },
  { label: '訓練期間相關規則', value: '訓練期間相關規則' },
  { label: '職訓相關補助', value: '職訓相關補助' },
  { label: '學員心得', value: '學員心得' },
]

onMounted(() => {
  fetchBlogs()
})

const filteredBlogs = computed(() => {
  let list = blogs.value
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(
      (b) =>
        (b.title || '').toLowerCase().includes(q) ||
        (b.summary || '').toLowerCase().includes(q) ||
        (b.tags || '').toLowerCase().includes(q) ||
        (b.author || '').toLowerCase().includes(q),
    )
  }
  if (selectedCategory.value !== null) {
    list = list.filter((b) => b.tags === selectedCategory.value)
  }
  return [...list].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})

watch(showDialog, (isVisible) => {
  if (!isVisible) resetForm()
})

const onAdd = () => {
  editingBlog.value = null
  resetForm()
  showDialog.value = true
}

const fetchBlogs = async () => {
  isLoading.value = true
  try {
    const { data } = await blogsApi.getAll()
    if (data.success) {
      blogs.value = data.blogs
    } else {
      throw new Error(data.message || '取得部落格資料失敗')
    }
  } catch (error) {
    const msg = error.response?.data?.message || error.message || '無法取得部落格資料'
    toast.add({ severity: 'error', summary: '錯誤', detail: msg, life: 3000 })
  } finally {
    isLoading.value = false
  }
}

const getStatusSeverity = (visible) => {
  return visible ? 'success' : 'secondary'
}

const resetForm = () => {
  Object.assign(blogForm, {
    title: '',
    summary: '',
    content: '',
    coverImage: '',
    tags: '',
    author: '',
    visible: true,
  })
}

const viewImage = (blog) => {
  if (blog.coverImage) {
    window.open(blog.coverImage, '_blank', 'noopener,noreferrer')
  }
}

const editBlog = (blog) => {
  editingBlog.value = blog
  Object.assign(blogForm, { ...blog })
  showDialog.value = true
}

const saveBlog = async () => {
  if (
    !blogForm.title?.trim() ||
    !blogForm.summary?.trim() ||
    !blogForm.tags?.trim() ||
    !blogForm.content?.trim()
  ) {
    toast.add({
      severity: 'warn',
      summary: '資料不足',
      detail: '請填寫所有必填欄位',
      life: 2500,
    })
    return
  }
  const isUrl = (u) => {
    try {
      new URL(u)
      return true
    } catch {
      return false
    }
  }
  if (blogForm.coverImage && !isUrl(blogForm.coverImage)) {
    toast.add({
      severity: 'warn',
      summary: '格式錯誤',
      detail: '請提供正確的圖片網址格式',
      life: 2500,
    })
    return
  }
  if ((blogForm.title?.length || 0) > 200) {
    toast.add({ severity: 'warn', summary: '字數過長', detail: '標題最多 200 字', life: 2500 })
    return
  }
  if ((blogForm.summary?.length || 0) > 300) {
    toast.add({ severity: 'warn', summary: '字數過長', detail: '摘要最多 300 字', life: 2500 })
    return
  }
  try {
    if (editingBlog.value?._id) {
      const { data } = await blogsApi.update(editingBlog.value._id, { ...blogForm })
      if (!data.success) throw new Error(data.message || '更新部落格失敗')
      toast.add({
        severity: 'success',
        summary: '更新成功',
        detail: `部落格「${blogForm.title || '未命名'}」已更新`,
        life: 3000,
      })
    } else {
      const { data } = await blogsApi.create({ ...blogForm })
      if (!data.success) throw new Error(data.message || '新增部落格失敗')
      toast.add({
        severity: 'success',
        summary: '新增成功',
        detail: `部落格「${blogForm.title || '未命名'}」已新增`,
        life: 3000,
      })
    }
    showDialog.value = false
    await fetchBlogs()
  } catch (error) {
    const msg = error.response?.data?.message || error.message || '操作失敗'
    toast.add({ severity: 'error', summary: '儲存失敗', detail: msg, life: 3000 })
  }
}

const toggleVisible = async (blog, nextVal) => {
  const original = blog.visible
  blog.visible = nextVal
  try {
    const { data } = await blogsApi.update(blog._id, { visible: nextVal })
    if (!data.success) throw new Error(data.message || '更新狀態失敗')
    toast.add({
      severity: 'success',
      summary: '狀態已更新',
      detail: `「${blog.title}」已${nextVal ? '上架' : '下架'}`,
      life: 2000,
    })
  } catch (error) {
    blog.visible = original
    const msg = error.response?.data?.message || error.message || '更新狀態失敗'
    toast.add({ severity: 'error', summary: '更新失敗', detail: msg, life: 3000 })
  }
}
</script>
