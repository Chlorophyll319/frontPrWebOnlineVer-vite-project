<route lang="yaml">
meta:
  layout: admin
  title: 後台登入
  login: no-login-only
</route>

<template>
  <div class="flex justify-content-center align-items-center min-h-screen bg-blue-50">
    <div class="card w-30rem shadow-2xl">
      <div class="card-body p-6">
        <h2 class="text-3xl font-bold text-center mb-6 text-blue-900">後台系統登入</h2>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="field">
            <label for="username" class="block text-sm font-medium text-gray-700 mb-2"
              >使用者名稱</label
            >
            <InputText
              id="username"
              v-model="form.username"
              type="text"
              name="username"
              autocomplete="username"
              placeholder="請輸入使用者名稱"
              class="w-full"
              :class="{ 'p-invalid': errors.username }"
            />
            <small v-if="errors.username" class="p-error">{{ errors.username }}</small>
          </div>

          <div class="field">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">密碼</label>
            <Password
              inputId="password"
              v-model="form.password"
              name="password"
              autocomplete="current-password"
              placeholder="請輸入密碼"
              class="w-full"
              :class="{ 'p-invalid': errors.password }"
              :feedback="false"
              toggleMask
            />
            <small v-if="errors.password" class="p-error">{{ errors.password }}</small>
          </div>

          <div class="field">
            <Button type="submit" label="登入" class="w-full" :loading="loading" size="large" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import userService from '@/services/user'
import { useToast } from 'primevue/usetoast'

const router = useRouter()
const user = useUserStore()
const toast = useToast()

const loading = ref(false)
const errors = reactive({
  username: '',
  password: '',
})

const form = reactive({
  username: '',
  password: '',
})

const validateForm = () => {
  errors.username = ''
  errors.password = ''

  if (!form.username.trim()) {
    errors.username = '請輸入使用者名稱'
    return false
  }

  if (!form.password) {
    errors.password = '請輸入密碼'
    return false
  }

  return true
}

const handleLogin = async () => {
  if (!validateForm()) return

  loading.value = true

  try {
    const response = await userService.login(form)
    const { user: loggedInUser } = response.data || { user: {} }
    user.login({
      username: loggedInUser?.username || form.username,
      role: loggedInUser?.role || 'admin',
      token: loggedInUser?.token || '',
    })

    toast.add({
      severity: 'success',
      summary: '登入成功',
      detail: '歡迎來到後台管理系統！',
      life: 3000,
    })

    router.push('/admin')
  } catch (error) {
    console.error('Login failed:', error)
    toast.add({
      severity: 'error',
      summary: '登入失敗',
      detail: '請檢查帳號密碼',
      life: 3000,
    })
  } finally {
    loading.value = false
  }
}
</script>
