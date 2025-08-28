import apiModule from './api'
const { api, apiAuth } = apiModule

/**
 * @typedef {object} BlogCreationPayload
 * @property {string} title - 標題
 * @property {string} summary - 摘要
 * @property {string} content - 內容
 * @property {string} coverImage - 封面圖片 URL
 * @property {string} tags - 標籤
 * @property {string} author - 作者
 * @property {boolean} visible - 是否可見
 */

/**
 * @typedef {object} Blog
 * @property {string} _id - 部落格 ID
 * @property {string} title - 標題
 * @property {string} summary - 摘要
 * @property {string} content - 內容
 * @property {string} coverImage - 封面圖片 URL
 * @property {string} tags - 標籤
 * @property {string} author - 作者
 * @property {boolean} visible - 是否可見
 * @property {Date} createdAt - 建立時間
 * @property {Date} updatedAt - 更新時間
 */

/**
 * @template T
 * @typedef {object} ApiSingleResponse
 * @property {boolean} success - 是否成功
 * @property {string} message - 訊息
 * @property {T} blogs - 回應的資料內容
 */

export default {
  /**
   * @description 前台取得所有已上架的部落格
   * @returns {Promise<ApiListResponse<Blog[]>>} 內含已上架部落格陣列的回應
   */
  get() {
    return api.get('/blogs')
  },
  /**
   * @description 前台根據 ID 取得單一一個已上架的部落格
   * @param {string} id 部落格 ID
   * @returns {Promise<ApiSingleResponse<Blog>>} 內含單一部落格物件的回應
   */
  getId(id) {
    return api.get(`/blogs/${id}`)
  },
  /**
   * @description 後台取得所有的部落格
   * @returns {Promise<ApiListResponse<Blog[]>>} 內含所有部落格陣列的回應
   */
  getAll() {
    return apiAuth.get('/blogs/all')
  },
  /**
   * @description 後台新增部落格
   * @param {BlogCreationPayload} data 部落格資料
   * @returns {Promise<ApiSingleResponse<Blog>>} 內含新增後部落格物件的回應
   */
  create(data) {
    return apiAuth.post('/blogs', data)
  },
  /**
   * @description 後台修改部落格
   * @param {string} id 部落格 ID
   * @param {Partial<BlogCreationPayload>} data 欲更新的部落格資料
   * @returns {Promise<ApiSingleResponse<Blog>>} 內含更新後部落格物件的回應
   */
  update(id, data) {
    return apiAuth.patch(`/blogs/${id}`, data)
  },
}
