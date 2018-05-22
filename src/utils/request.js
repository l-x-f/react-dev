import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // baseURL:`https://api.yooqun.com/v1/pc_admin`, // api的base_url
  baseURL:``, // api的base_url
  timeout: 30000 // 请求超时时间
})
let getToken='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjY5NjE1MDAsImlhdCI6MTUyNjk1NDMwMCwidWlkIjoxLCJuYmYiOjE1MjY5NTQzMDB9.UCouR0LQJq_UaHRj4UBmmO3K8a3VIJgU61HHTgk1Xvw'
// request interceptor
service.interceptors.request.use(config => {
  config.headers['Authorization'] = 'JWT ' + getToken // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => { 
      return response.data    
  },
  error => {  
    return Promise.reject(error)
  }
)

export default service
