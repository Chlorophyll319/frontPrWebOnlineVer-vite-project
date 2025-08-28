import apiModule from './api'
const { api, apiAuth } = apiModule

/**
 * @typedef {object} ProjectCreationPayload
 * @property {string} [studentName] - 學生姓名
 * @property {string} [title] - 專案標題
 * @property {string} [description] - 專案描述
 * @property {string} imageUrl - 專案封面圖片網址
 * @property {string} demoUrl - 精選作品的網址
 * @property {number} [sortOrder] - 排序
 * @property {boolean} visible - 是否可見
 */

/**
 * @typedef {object} Project
 * @property {string} _id - 專案 ID
 * @property {string} studentName - 學生姓名
 * @property {string} title - 專案標題
 * @property {string} description - 專案描述
 * @property {string} imageUrl - 專案圖片 URL
 * @property {string} demoUrl - 專案連結
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
 * @property {T} projects - 回應的資料內容
 */

export default {
  /**
   * @description 前台取得所有已上架的專案
   * @returns {Promise<ApiListResponse<Project[]>>} 內含已上架專案陣列的回應
   */
  get() {
    return api.get('/projects')
  },
  /**
   * @description 前台根據 ID 取得單一一個已上架的專案
   * @param {string} id 專案 ID
   * @returns {Promise<ApiSingleResponse<Project>>} 內含單一專案物件的回應
   */
  getId(id) {
    return api.get(`/projects/${id}`)
  },
  /**
   * @description 後台取得所有的專案
   * @returns {Promise<ApiListResponse<Project[]>>} 內含所有專案陣列的回應
   */
  getAll() {
    return apiAuth.get('/projects/all')
  },
  /**
   * @description 後台新增專案
   * @param {ProjectCreationPayload} data 專案資料
   * @returns {Promise<ApiSingleResponse<Project>>} 內含新增後專案物件的回應
   */
  create(data) {
    return apiAuth.post('/projects', data)
  },
  /**
   * @description 後台修改專案
   * @param {string} id 專案 ID
   * @param {Partial<ProjectCreationPayload>} data 欲更新的專案資料
   * @returns {Promise<ApiSingleResponse<Project>>} 內含更新後專案物件的回應
   */
  update(id, data) {
    return apiAuth.patch(`/projects/${id}`, data)
  },
  /**
   * @description 後台刪除專案
   * @param {string} id 專案 ID
   * @returns {Promise<ApiSingleResponse<null>>}
   */
  remove(id) {
    return apiAuth.delete(`/projects/${id}`)
  },
}
