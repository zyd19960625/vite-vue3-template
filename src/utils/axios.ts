import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 15000
})

axios.interceptors.request.use(
  (response) => response,
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const { message } = error.resopnse.data
      ElMessage.error(`Code: ${code}, Message: ${message}`)
      console.error('Axios Error', error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
