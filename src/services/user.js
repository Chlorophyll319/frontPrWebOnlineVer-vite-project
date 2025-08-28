import apiModule from './api'
const { api, apiAuth } = apiModule

/**
 * @typedef {object} UserCreationPayload
 * @property {string} username - 使用者帳號 (4-8 字元)
 * @property {string} password - 使用者密碼
 */

/**
 * @typedef {object} UserLoginPayload
 * @property {string} username - 使用者帳號
 * @property {string} password - 使用者密碼
 */

/**
 * @typedef {object} User
 * @property {string} _id - 使用者 ID
 * @property {string} username - 帳號
 * @property {string} role - 角色 ('user' 或 'admin')
 */

/**
 * @typedef {object} LoginResult
 * @property {string} username - 帳號
 * @property {string} role - 角色 ('user' 或 'admin')
 * @property {string} token - JWT token
 */

/**
 * @typedef {object} LoginApiResponse
 * @property {boolean} success - 是否成功
 * @property {string} message - 訊息
 * @property {LoginResult} user - 回應的使用者資料
 */

/**
 * @typedef {object} RefreshApiResponse
 * @property {boolean} success - 是否成功
 * @property {string} message - 訊息
 * @property {string} token - 新的 JWT token
 */

/**
 * @template T
 * @typedef {object} ApiResponse
 * @property {boolean} success - 是否成功
 * @property {string} message - 訊息
 * @property {T} result - 回應的資料內容
 */

export default {
  /**
   * @description 註冊
   * @param {UserCreationPayload} data 使用者註冊資料
   * @returns {Promise<ApiResponse<User>>} 註冊成功的回應 (注意：後端成功回應的 success key 有錯字 'sucess')
   */
  create(data) {
    return api.post('/user', data)
  },
  /**
   * @description 登入
   * @param {UserLoginPayload} data 使用者登入資料
   * @returns {Promise<LoginApiResponse>} 包含 token 和使用者資訊的回應
   */
  login(data) {
    return api.post('/user/login', data)
  },
  /**
   * @description token 舊換新
   * @returns {Promise<RefreshApiResponse>} 包含新 token 的回應
   */
  refresh() {
    return apiAuth.patch('/user/refresh')
  },
  /**
   * @description 登出
   * @returns {Promise<ApiResponse<null>>} 登出成功的回應
   */
  logout() {
    return apiAuth.delete('/user/logout')
  },
}
