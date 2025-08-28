import apiModule from './api'
const { api, apiAuth } = apiModule

/**
 * @typedef {object} FaqCreationPayload
 * @property {string} question - 問題
 * @property {string} answer - 回答
 * @property {string} category - 分類
 * @property {number} [sortOrder] - 排序
 * @property {boolean} visible - 是否可見
 */

/**
 * @typedef {object} Faq
 * @property {string} _id - 常見問題 ID
 * @property {string} question - 問題
 * @property {string} answer - 回答
 * @property {string} category - 分類
 * @property {number} sortOrder - 排序
 * @property {boolean} visible - 是否可見
 * @property {Date} createdAt - 建立時間
 * @property {Date} updatedAt - 更新時間
 */

/**
 * @template T
 * @typedef {object} ApiListResponse
 * @property {boolean} success - 是否成功
 * @property {string} message - 訊息
 * @property {T} faqs - 回應的資料內容
 */

export default {
  /**
   * @description 前台取得所有已上架的常見問題
   * @returns {Promise<ApiListResponse<Faq[]>>} 內含已上架常見問題陣列的回應
   */
  get() {
    return api.get('/faqs')
  },
  /**
   * @description 前台根據 ID 取得單一一個已上架的常見問題
   * @param {string} id 常見問題 ID
   * @returns {Promise<ApiSingleResponse<Faq>>} 內含單一常見問題物件的回應
   */
  getId(id) {
    return api.get(`/faqs/${id}`)
  },
  /**
   * @description 後台取得所有的常見問題
   * @returns {Promise<ApiListResponse<Faq[]>>} 內含所有常見問題陣列的回應
   */
  getAll() {
    return apiAuth.get('/faqs/all')
  },
  /**
   * @description 後台新增常見問題
   * @param {FaqCreationPayload} data 常見問題資料
   * @returns {Promise<ApiCreateResponse<Faq>>} 內含新增後常見問題物件的回應
   */
  create(data) {
    return apiAuth.post('/faqs', data)
  },
  /**
   * @description 後台修改常見問題
   * @param {string} id 常見問題 ID
   * @param {Partial<FaqCreationPayload>} data 欲更新的常見問題資料
   * @returns {Promise<ApiSingleResponse<Faq>>} 內含更新後常見問題物件的回應
   */
  update(id, data) {
    return apiAuth.patch(`/faqs/${id}`, data)
  },
}
