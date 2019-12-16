import axios from '@/libs/api.request'

// 例如:
// 基本信息接口
export const basicInfoService = (req) => {
  return axios.request({
    url: '/basicInfoService',
    method: 'post',
    data: req
  })
}