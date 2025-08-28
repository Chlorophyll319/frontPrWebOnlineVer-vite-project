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
        <h1 class="text-3xl font-bold text-gray-900">FAQ 管理</h1>
        <p class="text-gray-600 mt-2">管理所有常見問題項目</p>
      </div>
      <Button
        label="新增 FAQ"
        icon="pi pi-plus"
        severity="primary"
        @click="onAdd()"
        id="newFaqButton"
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

    <!-- FAQ 列表 -->
    <Card class="shadow-sm">
      <template #content>
        <DataTable
          :loading="isLoading"
          :value="filteredFaqs"
          :paginator="true"
          :rows="10"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="顯示第 {first} 到 {last} 項，共 {totalRecords} 項"
          responsiveLayout="scroll"
          class="p-datatable-sm"
        >
          <Column field="question" header="問題" sortable>
            <template #body="{ data }">
              <div class="font-medium line-clamp-2">{{ data.question }}</div>
            </template>
          </Column>
          <Column field="answer" header="答案" sortable>
            <template #body="{ data }">
              <p class="w-80 truncate">{{ data.answer }}</p>
            </template>
          </Column>
          <Column field="category" header="分類" sortable>
            <template #body="{ data }">
              <span>{{ data.category }}</span>
            </template>
          </Column>
          <Column field="sortOrder" header="排序" sortable>
            <template #body="{ data }">
              <span>{{ data.sortOrder }}</span>
            </template>
          </Column>
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
          <Column header="操作" :exportable="false">
            <template #body="{ data }">
              <div class="flex gap-2">
                <Button
                  icon="pi pi-pencil"
                  severity="warning"
                  text
                  size="small"
                  @click="editFaq(data)"
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
      :header="editingFaq ? '編輯 FAQ' : '新增 FAQ'"
      modal
      class="p-fluid"
      style="width: 38rem"
    >
      <div class="rounded-xl bg-white/60 backdrop-blur p-4 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="col-span-1 md:col-span-2">
            <label for="question" class="block text-sm font-medium text-gray-700 mb-1"
              >問題（必填）</label
            >
            <InputText
              id="question"
              name="question"
              v-model.trim="faqForm.question"
              :maxlength="200"
              required
              placeholder="最多 200 字"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div class="col-span-1 md:col-span-2">
            <label for="answer" class="block text-sm font-medium text-gray-700 mb-1"
              >答案（必填）</label
            >
            <Textarea
              id="answer"
              name="answer"
              v-model.trim="faqForm.answer"
              rows="3"
              autoResize
              :maxlength="1000"
              required
              placeholder="最多 1000 字"
              class="p-inputtext-sm text-sm w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label for="category" class="block text-sm font-medium text-gray-700 mb-1"
              >分類（必填）</label
            >
            <Select
              id="category"
              name="category"
              v-model="faqForm.category"
              :options="categoryOptions"
              optionLabel="label"
              optionValue="value"
              required
              placeholder="選擇分類"
              class="w-full"
            />
          </div>
          <div>
            <label for="sortOrder" class="block text-sm font-medium text-gray-700 mb-1"
              >排序（選填）</label
            >
            <InputNumber
              id="sortOrder"
              name="sortOrder"
              v-model="faqForm.sortOrder"
              :min="0"
              class="w-full"
            />
          </div>
          <div class="col-span-1 md:col-span-2">
            <label for="visible" class="block text-sm font-medium text-gray-700 mb-2"
              >狀態（必填）</label
            >
            <div class="flex items-center gap-3">
              <ToggleSwitch id="visible" name="visible" v-model="faqForm.visible" />
              <span
                class="text-xs px-2 py-1 rounded-md"
                :class="
                  faqForm.visible ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                "
              >
                {{ faqForm.visible ? '上架' : '下架' }}
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
            id="cancelFaqButton"
          />
          <Button
            :label="editingFaq ? '更新' : '新增'"
            icon="pi pi-check"
            class="!px-5 !py-2 !bg-indigo-600 hover:!bg-indigo-700 !border-indigo-600"
            @click="saveFaq"
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
import faqsApi from '@/services/faqs.js'

const confirm = useConfirm()
const toast = useToast()

const faqs = ref([])
const isLoading = ref(false)
const searchQuery = ref('')
const selectedStatus = ref(null)
const showDialog = ref(false)
const editingFaq = ref(null)
const faqForm = reactive({
  question: '',
  answer: '',
  category: '',
  sortOrder: 0,
  visible: true,
})
const statusOptions = [
  { label: '上架', value: true },
  { label: '下架', value: false },
]
const categoryOptions = [
  { label: '課程內容', value: '課程內容' },
  { label: '報名', value: '報名' },
  { label: '甄試', value: '甄試' },
  { label: '!!重要', value: '!!重要' },
]

onMounted(() => {
  fetchFaqs()
})

const filteredFaqs = computed(() => {
  let list = faqs.value
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(
      (f) =>
        (f.question || '').toLowerCase().includes(q) ||
        (f.answer || '').toLowerCase().includes(q) ||
        (f.category || '').toLowerCase().includes(q),
    )
  }
  if (selectedStatus.value !== null) {
    list = list.filter((f) => f.visible === selectedStatus.value)
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
  editingFaq.value = null
  resetForm()
  showDialog.value = true
}

const fetchFaqs = async () => {
  isLoading.value = true
  try {
    const { data } = await faqsApi.getAll()
    if (data.success) {
      faqs.value = data.faqs
    } else {
      throw new Error(data.message || '從伺服器獲取 FAQ 資料失敗')
    }
  } catch (error) {
    const msg = error.response?.data?.message || error.message || '無法取得 FAQ 資料'
    toast.add({ severity: 'error', summary: '錯誤', detail: msg, life: 3000 })
  } finally {
    isLoading.value = false
  }
}

const getStatusSeverity = (visible) => {
  return visible ? 'success' : 'secondary'
}

const resetForm = () => {
  Object.assign(faqForm, {
    question: '',
    answer: '',
    category: '',
    sortOrder: 0,
    visible: true,
  })
}

const editFaq = (faq) => {
  editingFaq.value = faq
  Object.assign(faqForm, { ...faq })
  showDialog.value = true
}

const saveFaq = async () => {
  if (!faqForm.question?.trim() || !faqForm.answer?.trim() || !faqForm.category?.trim()) {
    toast.add({
      severity: 'warn',
      summary: '資料不足',
      detail: '請填寫所有必填欄位',
      life: 2500,
    })
    return
  }
  if ((faqForm.question?.length || 0) > 200) {
    toast.add({ severity: 'warn', summary: '字數過長', detail: '問題最多 200 字', life: 2500 })
    return
  }
  if ((faqForm.answer?.length || 0) > 1000) {
    toast.add({ severity: 'warn', summary: '字數過長', detail: '答案最多 1000 字', life: 2500 })
    return
  }
  try {
    if (editingFaq.value?._id) {
      const { data } = await faqsApi.update(editingFaq.value._id, { ...faqForm })
      if (!data.success) throw new Error(data.message || '更新 FAQ 失敗')
      toast.add({
        severity: 'success',
        summary: '更新成功',
        detail: `FAQ「${faqForm.question || '未命名'}」已更新`,
        life: 3000,
      })
    } else {
      const { data } = await faqsApi.create({ ...faqForm })
      if (!data.success) throw new Error(data.message || '新增 FAQ 失敗')
      toast.add({
        severity: 'success',
        summary: '新增成功',
        detail: `FAQ「${faqForm.question || '未命名'}」已新增`,
        life: 3000,
      })
    }
    showDialog.value = false
    await fetchFaqs()
  } catch (error) {
    const msg = error.response?.data?.message || error.message || '操作失敗'
    toast.add({ severity: 'error', summary: '儲存失敗', detail: msg, life: 3000 })
  }
}

const toggleVisible = async (faq, nextVal) => {
  const original = faq.visible
  faq.visible = nextVal
  try {
    const { data } = await faqsApi.update(faq._id, { visible: nextVal })
    if (!data.success) throw new Error(data.message || '更新狀態失敗')
    toast.add({
      severity: 'success',
      summary: '狀態已更新',
      detail: `「${faq.question}」已${nextVal ? '上架' : '下架'}`,
      life: 2000,
    })
  } catch (error) {
    faq.visible = original
    const msg = error.response?.data?.message || error.message || '更新狀態失敗'
    toast.add({ severity: 'error', summary: '更新失敗', detail: msg, life: 3000 })
  }
}
</script>
