import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    // ----對照後端寫-------------------------------------﹁
    const username = ref('') // 使用者帳號名稱
    const role = ref('user') // 使用者角色（預設為一般 user）
    const token = ref('') // JWT 登入憑證
    // ﹂-------------------------------------------------

    const isLoggedIn = computed(() => token.value.length > 0)
    const isAdmin = computed(() => role.value === 'admin')

    const login = (data) => {
      username.value = data.username
      role.value = data.role

      if (data.token) {
        token.value = data.token
      }
    }

    const logout = () => {
      username.value = ''
      role.value = 'user'
      token.value = ''
    }

    return {
      username,
      role,
      token,
      isLoggedIn,
      isAdmin,
      login,
      logout,
    }
  },
  {
    persist: {
      key: 'its-project-user',
      pick: ['username', 'role', 'token'],
    },
  },
)
