import axios from 'axios'

export const request = (config) => {
  const instance = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/app/',
    timeout: 4000
  })

  // 请求拦截
  instance.interceptors.request.use(res => {
      return res
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
      return res.data
  })

  return instance(config)
}
