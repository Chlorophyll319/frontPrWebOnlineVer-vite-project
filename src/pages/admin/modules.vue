<route lang="yaml">
meta:
  layout: admin
  title: 課程模組管理
  login: login-only
  admin: true
</route>

<template>
  <div class="space-y-6">
    <!-- 標題 -->
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">課程模組管理</h1>
        <p class="text-gray-600 mt-2">管理所有課程模組項目</p>
      </div>
      <Button
        label="新增模組"
        icon="pi pi-plus"
        severity="primary"
        @click="onAdd()"
        id="newModuleButton"
      />
    </div>

    <!-- 搜尋與篩選 -->
    <Card class="shadow-sm">
      <template #content>
        <div class="flex gap-4 items-center">
          <div class="flex-1">
            <label for="searchModules" class="sr-only">搜尋模組</label>
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
          <div>
            <Select
              id="statusFilter"
              name="statusFilter"
              v-model="selectedStatus"
              :options="statusOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="選擇狀態"
              showClear
              class="w-48"
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
          :value="filteredModules"
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

          <!-- 描述 -->
          <Column field="description" header="描述" sortable>
            <template #body="{ data }">
              <p class="w-80 truncate">{{ data.description }}</p>
            </template>
          </Column>

          <!-- 分類 -->
          <Column field="category" header="分類" sortable>
            <template #body="{ data }">
              <span>{{ data.category }}</span>
            </template>
          </Column>

          <!-- 排序 -->
          <Column field="sortOrder" header="排序" sortable>
            <template #body="{ data }">
              <span>{{ data.sortOrder }}</span>
            </template>
          </Column>

          <!-- 圖片預覽 -->
          <Column field="imageUrl" header="封面圖片" sortable>
            <template #body="{ data }">
              <img
                v-if="data.imageUrl"
                :src="data.imageUrl"
                alt="封面"
                class="w-20 h-12 object-cover rounded shadow cursor-pointer"
                @click="viewImage(data)"
              />
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

          <!-- 操作 -->
          <Column header="操作" :exportable="false">
            <template #body="{ data }">
              <div class="flex gap-2">
                <Button
                  icon="pi pi-pencil"
                  severity="warning"
                  text
                  size="small"
                  @click="editModule(data)"
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
      :header="editingModule ? '編輯模組' : '新增模組'"
      modal
      class="p-fluid"
      style="width: 38rem"
      :pt="{
        content: { class: 'max-h-[70dvh] overflow-y-auto' },
        footer: { class: 'mt-4 sm:mt-6 pt-4 border-t border-gray-200/80 bg-white sticky bottom-0' },
      }"
    >
      <!-- 內層容器：緊湊 -->
      <div class="rounded-xl bg-white/60 backdrop-blur p-4 space-y-4">
        <!-- 表單網格：手機 1 欄、md 起 2 欄 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <!-- 標題（必填） -->
          <div class="col-span-1 md:col-span-2">
            <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
              標題（必填）
            </label>
            <InputText
              id="title"
              name="title"
              v-model.trim="moduleForm.title"
              :maxlength="100"
              required
              placeholder="最多 100 字"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <!-- 分類（必填） -->
          <div>
            <label for="category" class="block text-sm font-medium text-gray-700 mb-1"
              >分類（必填）</label
            >
            <Select
              id="category"
              name="category"
              v-model="moduleForm.category"
              :options="categoryOptions"
              optionLabel="label"
              optionValue="value"
              required
              placeholder="選擇分類"
              class="w-full"
            />
          </div>

          <!-- 排序（選填） -->
          <div>
            <label for="sortOrder" class="block text-sm font-medium text-gray-700 mb-1"
              >排序 (1) 數字越小越前 (2) 0為首頁顯示</label
            >
            <InputNumber
              id="sortOrder"
              name="sortOrder"
              v-model="moduleForm.sortOrder"
              :min="0"
              class="w-full [&_.p-inputnumber-input]:w-full [&_.p-inputnumber-input]:rounded-lg [&_.p-inputnumber-input]:border [&_.p-inputnumber-input]:border-gray-300 [&_.p-inputnumber-input]:text-sm [&_.p-inputnumber-input]:h-9 [&_.p-inputnumber-input:focus]:ring-2 [&_.p-inputnumber-input:focus]:ring-indigo-500 [&_.p-inputnumber-input:focus]:border-indigo-500"
            />
          </div>

          <!-- 封面圖片網址（必填） -->
          <div class="col-span-1 md:col-span-2">
            <label
              for="imageUrl"
              class="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
            >
              <span>封面圖片網址（必填）</span>
              <i class="pi pi-info-circle text-gray-500" title="建議 1200×675（16:9）"></i>
            </label>
            <InputText
              id="imageUrl"
              name="imageUrl"
              v-model.trim="moduleForm.imageUrl"
              type="url"
              required
              placeholder="https://example.com/cover.jpg"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <!-- 描述（必填） -->
          <div class="col-span-1 md:col-span-2">
            <label for="description" class="block text-sm font-medium text-gray-700 mb-1"
              >描述（必填）</label
            >
            <Textarea
              id="description"
              name="description"
              v-model.trim="moduleForm.description"
              rows="2"
              autoResize
              :maxlength="300"
              required
              placeholder="最多 300 字"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <!-- 狀態（必填） -->
          <div class="col-span-1 md:col-span-2">
            <label for="visible" class="block text-sm font-medium text-gray-700 mb-2"
              >狀態（必填）</label
            >
            <div class="flex items-center gap-3">
              <ToggleSwitch id="visible" name="visible" v-model="moduleForm.visible" />
              <span
                class="text-xs px-2 py-1 rounded-md"
                :class="
                  moduleForm.visible ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                "
              >
                {{ moduleForm.visible ? '上架' : '下架' }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- footer：固定在底部 -->
      <template #footer>
        <div class="w-full flex items-center justify-between gap-3">
          <Button
            label="取消"
            icon="pi pi-times"
            text
            class="!px-4 !py-2"
            @click="showDialog = false"
            id="cancelModuleButton"
          />
          <Button
            :label="editingModule ? '更新' : '新增'"
            icon="pi pi-check"
            class="!px-5 !py-2 !bg-indigo-600 hover:!bg-indigo-700 !border-indigo-600"
            @click="saveModule"
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
import InputNumber from 'primevue/inputnumber'
import modulesApi from '@/services/modules.js'

const confirm = useConfirm()
const toast = useToast()

const modules = ref([])
const isLoading = ref(false)
const searchQuery = ref('')
const selectedStatus = ref(null)
const showDialog = ref(false)
const editingModule = ref(null)
const moduleForm = reactive({
  title: '',
  description: '',
  category: '',
  imageUrl: '',
  sortOrder: 0,
  visible: true,
})
const statusOptions = [
  { label: '上架', value: true },
  { label: '下架', value: false },
]
const categoryOptions = [
  { label: '前端基礎技術', value: '前端基礎技術' },
  { label: '前端框架與進階技術', value: '前端框架與進階技術' },
  { label: '後端開發與 API 串接', value: '後端開發與 API 串接' },
  { label: '資料庫設計與操作', value: '資料庫設計與操作' },
  { label: '版本控制與專案維運', value: '版本控制與專案維運' },
  { label: 'UI/UX 設計', value: 'UI/UX 設計' },
  { label: '作品製作與分享', value: '作品製作與分享' },
]

onMounted(() => {
  fetchModules()
})

const filteredModules = computed(() => {
  let list = modules.value
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(
      (m) =>
        (m.title || '').toLowerCase().includes(q) ||
        (m.description || '').toLowerCase().includes(q) ||
        (m.category || '').toLowerCase().includes(q),
    )
  }
  if (selectedStatus.value !== null) {
    list = list.filter((m) => m.visible === selectedStatus.value)
  }
  return [...list].sort((a, b) => {
    const so = (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
    return so !== 0 ? so : new Date(b.createdAt) - new Date(a.createdAt)
  })
})

watch(showDialog, (isVisible) => {
  if (!isVisible) resetForm()
})

const onAdd = () => {
  editingModule.value = null
  resetForm()
  showDialog.value = true
}

const fetchModules = async () => {
  isLoading.value = true
  try {
    const { data } = await modulesApi.getAll()
    if (data.success) {
      modules.value = data.modules
    } else {
      throw new Error(data.message || '從伺服器獲取模組資料失敗')
    }
  } catch (error) {
    const msg = error.response?.data?.message || error.message || '無法取得模組資料'
    toast.add({ severity: 'error', summary: '錯誤', detail: msg, life: 3000 })
  } finally {
    isLoading.value = false
  }
}

const getStatusSeverity = (visible) => {
  return visible ? 'success' : 'secondary'
}

const resetForm = () => {
  Object.assign(moduleForm, {
    title: '',
    description: '',
    category: '',
    imageUrl: '',
    sortOrder: 0,
    visible: true,
  })
}

const viewImage = (module) => {
  if (module.imageUrl) {
    window.open(module.imageUrl, '_blank', 'noopener,noreferrer')
  }
}

const editModule = (module) => {
  editingModule.value = module
  Object.assign(moduleForm, { ...module })
  showDialog.value = true
}

const saveModule = async () => {
  if (
    !moduleForm.title?.trim() ||
    !moduleForm.imageUrl?.trim() ||
    !moduleForm.description?.trim() ||
    !moduleForm.category?.trim()
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
  if (!isUrl(moduleForm.imageUrl)) {
    toast.add({
      severity: 'warn',
      summary: '格式錯誤',
      detail: '請提供正確的圖片網址格式',
      life: 2500,
    })
    return
  }
  if ((moduleForm.title?.length || 0) > 100) {
    toast.add({ severity: 'warn', summary: '字數過長', detail: '標題最多 100 字', life: 2500 })
    return
  }
  if ((moduleForm.description?.length || 0) > 300) {
    toast.add({ severity: 'warn', summary: '字數過長', detail: '描述最多 300 字', life: 2500 })
    return
  }
  try {
    if (editingModule.value?._id) {
      const { data } = await modulesApi.update(editingModule.value._id, { ...moduleForm })
      if (!data.success) throw new Error(data.message || '更新模組失敗')
      toast.add({
        severity: 'success',
        summary: '更新成功',
        detail: `模組「${moduleForm.title || '未命名'}」已更新`,
        life: 3000,
      })
    } else {
      const { data } = await modulesApi.create({ ...moduleForm })
      if (!data.success) throw new Error(data.message || '新增模組失敗')
      toast.add({
        severity: 'success',
        summary: '新增成功',
        detail: `模組「${moduleForm.title || '未命名'}」已新增`,
        life: 3000,
      })
    }
    showDialog.value = false
    await fetchModules()
  } catch (error) {
    const msg = error.response?.data?.message || error.message || '操作失敗'
    toast.add({ severity: 'error', summary: '儲存失敗', detail: msg, life: 3000 })
  }
}

const toggleVisible = async (module, nextVal) => {
  const original = module.visible
  module.visible = nextVal
  try {
    const { data } = await modulesApi.update(module._id, { visible: nextVal })
    if (!data.success) throw new Error(data.message || '更新狀態失敗')
    toast.add({
      severity: 'success',
      summary: '狀態已更新',
      detail: `「${module.title}」已${nextVal ? '上架' : '下架'}`,
      life: 2000,
    })
  } catch (error) {
    module.visible = original
    const msg = error.response?.data?.message || error.message || '更新狀態失敗'
    toast.add({ severity: 'error', summary: '更新失敗', detail: msg, life: 3000 })
  }
}
</script>
