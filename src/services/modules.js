import apiModule from './api'
const { api, apiAuth } = apiModule

/**
 * @typedef {object} ModuleCreationPayload
 * @property {string} title - 模組標題
 * @property {string} description - 模組描述
 * @property {string} imageUrl - 模組圖片 URL
 * @property {string} category - 分類
 * @property {number} [sortOrder] - 排序
 * @property {boolean} visible - 是否可見
 */

/**
 * @typedef {object} Module
 * @property {string} _id - 課程模組 ID
 * @property {string} title - 模組標題
 * @property {string} description - 模組描述
 * @property {string} imageUrl - 模組圖片 URL
 * @property {string} category - 分類
 * @property {number} sortOrder - 排序
 * @property {boolean} visible - 是否可見
 * @property {Date} createdAt - 建立時間
 * @property {Date} updatedAt - 更新時間
 */

/**
 * @template T
 * @typedef {object} ApiSingleResponse
 * @property {boolean} success - 是否成功
 * @property {string} message - 訊息
 * @property {T} modules - 回應的資料內容
 */

export default {
  /**
   * @description 前台取得所有已上架的課程模組
   * @returns {Promise<ApiListResponse<Module[]>>} 內含已上架課程模組陣列的回應
   */
  get() {
    return api.get('/modules')
  },
  /**
   * @description 前台根據 ID 取得單一一個已上架的課程模組
   * @param {string} id 課程模組 ID
   * @returns {Promise<ApiSingleResponse<Module>>} 內含單一課程模組物件的回應
   */
  getId(id) {
    return api.get(`/modules/${id}`)
  },
  /**
   * @description 後台取得所有的課程模組
   * @returns {Promise<ApiListResponse<Module[]>>} 內含所有課程模組陣列的回應
   */
  getAll() {
    return apiAuth.get('/modules/all')
  },
  /**
   * @description 後台新增課程模組
   * @param {ModuleCreationPayload} data 課程模組資料
   * @returns {Promise<ApiSingleResponse<Module>>} 內含新增後課程模組物件的回應
   */
  create(data) {
    return apiAuth.post('/modules', data)
  },
  /**
   * @description 後台修改課程模組
   * @param {string} id 課程模組 ID
   * @param {Partial<ModuleCreationPayload>} data 欲更新的課程模組資料
   * @returns {Promise<ApiSingleResponse<Module>>} 內含更新後課程模組物件的回應
   */
  update(id, data) {
    return apiAuth.patch(`/modules/${id}`, data)
  },
}
