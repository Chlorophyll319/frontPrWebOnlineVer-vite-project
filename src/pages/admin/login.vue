<route lang="yaml">
meta:
  layout: admin
  title: 後台登入
  login: no-login-only
</route>

<template>
  <div class="flex items-center justify-center py-6">
    <div class="w-full max-w-sm">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <!-- Compact header -->
        <div class="text-center mb-5">
          <div
            class="w-12 h-12 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center"
          >
            <i class="pi pi-cog text-white text-lg"></i>
          </div>
          <h1 class="text-lg font-semibold text-gray-800 mb-1">後台管理系統</h1>
          <p class="text-gray-600 text-xs">請輸入您的登入資訊</p>
        </div>

        <!-- Compact form -->
        <form @submit.prevent="handleLogin" class="space-y-3">
          <!-- Username field -->
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">
              使用者名稱
            </label>
            <div class="relative">
              <i
                class="pi pi-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm"
              ></i>
              <InputText
                id="username"
                v-model="form.username"
                type="text"
                name="username"
                autocomplete="username"
                placeholder="請輸入使用者名稱"
                class="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-green-600 focus:border-green-600 hover:border-gray-400 transition-all duration-200"
                :class="{ 'border-red-500': errors.username }"
                unstyled
              />
            </div>
            <small v-if="errors.username" class="text-red-500 text-xs mt-1 block">
              {{ errors.username }}
            </small>
          </div>

          <!-- Password field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
              密碼
            </label>
            <div class="relative">
              <i
                class="pi pi-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm"
              ></i>
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                autocomplete="current-password"
                placeholder="請輸入密碼"
                class="w-full pl-9 pr-10 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-green-600 focus:border-green-600 hover:border-gray-400 transition-all duration-200"
                :class="{ 'border-red-500': errors.password }"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-all duration-200"
              >
                <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'" class="text-sm"></i>
              </button>
            </div>
            <small v-if="errors.password" class="text-red-500 text-xs mt-1 block">
              {{ errors.password }}
            </small>
          </div>

          <!-- Submit button -->
          <div class="pt-2">
            <button
              type="submit"
              :disabled="loading"
              class="w-full py-2 px-4 bg-green-600 hover:bg-green-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-sm font-semibold rounded shadow-sm focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition-all duration-200"
            >
              <i v-if="loading" class="pi pi-spinner pi-spin mr-2"></i>
              {{ loading ? '登入中...' : '登入系統' }}
            </button>
          </div>
        </form>

        <!-- Footer -->
        <div class="mt-4 text-center">
          <p class="text-xs text-gray-500">請確保您的帳號資訊安全</p>
        </div>
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
const showPassword = ref(false)
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
