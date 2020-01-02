import axios from './index.js'

// 例如:
// 基本信息接口
export const userInforService = (req) => {
  return axios.request({
    url: '/userInforService',
    method: 'post',
    data: req
  })
}
