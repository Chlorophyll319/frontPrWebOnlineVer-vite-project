<route lang="yaml">
meta:
  layout: admin
  title: 專題管理
  login: login-only
  admin: true
</route>

<template>
  <div class="space-y-6">
    <!-- 標題 -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div class="flex-1">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">學員專題管理</h1>
        <p class="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">管理學員專題展示項目</p>
      </div>
      <Button
        label="新增專題"
        icon="pi pi-plus"
        severity="primary"
        @click="onAdd()"
        id="newProjectButton"
        size="small"
        class="w-full sm:w-auto"
      />
    </div>

    <!-- 搜尋與篩選 -->
    <Card class="shadow-sm">
      <template #content>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
          <div class="flex-1">
            <label for="searchProjects" class="sr-only">搜尋專題</label>
            <span class="p-input-icon-left w-full">
              <InputText
                id="searchProjects"
                name="searchProjects"
                v-model.trim="searchQuery"
                placeholder="搜尋專題、學員..."
                class="w-full"
              />
            </span>
          </div>
          <div class="sm:w-48">
            <Select
              id="statusFilter"
              name="statusFilter"
              v-model="selectedStatus"
              :options="statusOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="選擇狀態"
              showClear
              class="w-full"
            />
          </div>
        </div>
      </template>
    </Card>

    <!-- 專題列表 -->
    <Card class="shadow-sm">
      <template #content>
        <DataTable
          :loading="isLoading"
          :value="filteredProjects"
          :paginator="true"
          :rows="10"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="顯示第 {first} 到 {last} 項，共 {totalRecords} 項"
          responsiveLayout="scroll"
          class="p-datatable-sm"
        >
          <!-- 專題名稱 -->
          <Column field="title" header="專題名稱" sortable>
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

          <!-- 學員 -->
          <Column field="studentName" header="學員" sortable>
            <template #body="{ data }">
              {{ data.studentName }}
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
                  :severity="data.visible ? 'success' : 'secondary'"
                />
              </div>
            </template>
          </Column>

          <!-- 操作 -->
          <Column header="操作" :exportable="false">
            <template #body="{ data }">
              <div class="flex gap-2">
                <Button
                  icon="pi pi-eye"
                  severity="info"
                  text
                  size="small"
                  @click="viewProject(data)"
                />
                <Button
                  icon="pi pi-pencil"
                  severity="warning"
                  text
                  size="small"
                  @click="editProject(data)"
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
      :header="editingProject ? '編輯專題' : '新增專題'"
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
          <!-- 專題名稱（選填） -->
          <div class="col-span-1 md:col-span-2">
            <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
              專題名稱（選填）
            </label>
            <InputText
              id="title"
              name="title"
              v-model.trim="projectForm.title"
              :maxlength="100"
              placeholder="最多 100 字"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <!-- 學員姓名（選填） -->
          <div>
            <label for="studentName" class="block text-sm font-medium text-gray-700 mb-1"
              >學員姓名（選填）</label
            >
            <InputText
              id="studentName"
              name="studentName"
              v-model.trim="projectForm.studentName"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <!-- 排序（選填） -->
          <div>
            <label for="sortOrder" class="block text-sm font-medium text-gray-700 mb-1"
              >排序（數字越小越前）（選填）</label
            >
            <InputNumber
              id="sortOrder"
              name="sortOrder"
              v-model="projectForm.sortOrder"
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
              v-model.trim="projectForm.imageUrl"
              type="url"
              required
              placeholder="https://example.com/cover.jpg"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <!-- 專題描述（選填） -->
          <div class="col-span-1 md:col-span-2">
            <label for="description" class="block text-sm font-medium text-gray-700 mb-1"
              >專題描述（選填）</label
            >
            <Textarea
              id="description"
              name="description"
              v-model.trim="projectForm.description"
              rows="2"
              autoResize
              :maxlength="1000"
              placeholder="最多 1000 字"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <!-- 專題連結（必填） -->
          <div class="col-span-1 md:col-span-2">
            <label for="demoUrl" class="block text-sm font-medium text-gray-700 mb-1"
              >專題連結（必填）</label
            >
            <InputText
              id="demoUrl"
              v-model.trim="projectForm.demoUrl"
              type="url"
              required
              placeholder="https://example.com/demo"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <!-- 狀態（必填） -->
          <div class="col-span-1 md:col-span-2">
            <label for="visible" class="block text-sm font-medium text-gray-700 mb-2"
              >狀態（必填）</label
            >
            <div class="flex items-center gap-3">
              <ToggleSwitch id="visible" name="visible" v-model="projectForm.visible" />
              <span
                class="text-xs px-2 py-1 rounded-md"
                :class="
                  projectForm.visible ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                "
              >
                {{ projectForm.visible ? '上架' : '下架' }}
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
            id="cancelProjectButton"
          />
          <Button
            :label="editingProject ? '更新' : '新增'"
            icon="pi pi-check"
            class="!px-5 !py-2 !bg-indigo-600 hover:!bg-indigo-700 !border-indigo-600"
            @click="saveProject"
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
import projectsApi from '@/services/projects.js'

const confirm = useConfirm()
const toast = useToast()

// 狀態
const projects = ref([])
const isLoading = ref(false)
const searchQuery = ref('')
/**
 * selectedStatus:
 * - true  => 只顯示上架
 * - false => 只顯示下架
 * - null  => 全部
 */
const selectedStatus = ref(null)
const showDialog = ref(false)
const editingProject = ref(null)

// 表單：完全對齊 API 欄位
const projectForm = reactive({
  title: '',
  studentName: '',
  description: '',
  imageUrl: '',
  demoUrl: '',
  sortOrder: 0,
  visible: true,
})

const statusOptions = [
  { label: '上架', value: true },
  { label: '下架', value: false },
]

// lifecycle
onMounted(() => {
  fetchProjects()
})

// computed
const filteredProjects = computed(() => {
  let list = projects.value

  // 搜尋：標題 / 學員 / 描述
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(
      (p) =>
        (p.title || '').toLowerCase().includes(q) ||
        (p.studentName || '').toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q),
    )
  }

  // 狀態篩選
  if (selectedStatus.value !== null) {
    list = list.filter((p) => p.visible === selectedStatus.value)
  }

  // 依 sortOrder、建立時間排序（先 sortOrder，再建立時間新到舊）
  return [...list].sort((a, b) => {
    const so = (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
    return so !== 0 ? so : new Date(b.createdAt) - new Date(a.createdAt)
  })
})

watch(showDialog, (isVisible) => {
  if (!isVisible) resetForm()
})

// methods
const onAdd = () => {
  editingProject.value = null
  resetForm()
  showDialog.value = true
}

const fetchProjects = async () => {
  isLoading.value = true
  try {
    const { data } = await projectsApi.getAll() // 後台全部列表
    if (data.success) {
      projects.value = data.projects
    } else {
      throw new Error(data.message || '從伺服器獲取專題資料失敗')
    }
  } catch (error) {
    const msg = error.response?.data?.message || error.message || '無法取得專題資料'
    toast.add({ severity: 'error', summary: '錯誤', detail: msg, life: 3000 })
  } finally {
    isLoading.value = false
  }
}

const getStatusSeverity = (visible) => {
  return visible ? 'success' : 'secondary'
}

const resetForm = () => {
  Object.assign(projectForm, {
    title: '',
    studentName: '',
    description: '',
    imageUrl: '',
    demoUrl: '',
    sortOrder: 0,
    visible: true,
  })
}

const viewProject = (project) => {
  if (project.demoUrl) {
    window.open(project.demoUrl, '_blank', 'noopener,noreferrer')
  }
}

const editProject = (project) => {
  editingProject.value = project
  Object.assign(projectForm, { ...project })
  showDialog.value = true
}

const saveProject = async () => {
  // 與後端一致的必填
  if (!projectForm.demoUrl?.trim() || !projectForm.imageUrl?.trim()) {
    toast.add({
      severity: 'warn',
      summary: '資料不足',
      detail: '請填寫「專題連結」與「封面圖片網址」',
      life: 2500,
    })
    return
  }

  // 簡單 URL 格式檢查（避免後端直接打槍）
  const isUrl = (u) => {
    try {
      new URL(u)
      return true
    } catch {
      return false
    }
  }
  if (!isUrl(projectForm.demoUrl) || !isUrl(projectForm.imageUrl)) {
    toast.add({
      severity: 'warn',
      summary: '格式錯誤',
      detail: '請提供正確的網址格式（含 http/https）',
      life: 2500,
    })
    return
  }

  // 與後端一致的長度限制（前端先擋住，避免 400）
  if ((projectForm.title?.length || 0) > 100) {
    toast.add({ severity: 'warn', summary: '字數過長', detail: '標題最多 100 字', life: 2500 })
    return
  }
  if ((projectForm.description?.length || 0) > 1000) {
    toast.add({ severity: 'warn', summary: '字數過長', detail: '描述最多 1000 字', life: 2500 })
    return
  }

  try {
    if (editingProject.value?._id) {
      const { data } = await projectsApi.update(editingProject.value._id, { ...projectForm })
      if (!data.success) throw new Error(data.message || '更新專題失敗')
      toast.add({
        severity: 'success',
        summary: '更新成功',
        detail: `專題「${projectForm.title || '未命名'}」已更新`,
        life: 3000,
      })
    } else {
      const { data } = await projectsApi.create({ ...projectForm })
      if (!data.success) throw new Error(data.message || '新增專題失敗')
      toast.add({
        severity: 'success',
        summary: '新增成功',
        detail: `專題「${projectForm.title || '未命名'}」已新增`,
        life: 3000,
      })
    }
    showDialog.value = false
    await fetchProjects()
  } catch (error) {
    const msg = error.response?.data?.message || error.message || '操作失敗'
    toast.add({ severity: 'error', summary: '儲存失敗', detail: msg, life: 3000 })
  }
}

// 列表直接切換上/下架
const toggleVisible = async (project, nextVal) => {
  const original = project.visible
  project.visible = nextVal // 立即反應 UI
  try {
    const { data } = await projectsApi.update(project._id, { visible: nextVal })
    if (!data.success) throw new Error(data.message || '更新狀態失敗')
    toast.add({
      severity: 'success',
      summary: '狀態已更新',
      detail: `「${project.title}」已${nextVal ? '上架' : '下架'}`,
      life: 2000,
    })
  } catch (error) {
    project.visible = original // 還原
    const msg = error.response?.data?.message || error.message || '更新狀態失敗'
    toast.add({ severity: 'error', summary: '更新失敗', detail: msg, life: 3000 })
  }
}
</script>
