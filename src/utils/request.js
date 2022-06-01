import axios from 'axios'
import { Toast } from 'vant'
// 定义baseURL
// const baseURL = 'http://localhost:3000/search'
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://192.168.43.122:3000'

// 创建axios实例
const services = axios.create({
    baseURL,
    timeout: 1000, // 1s后还没数据回来结束此次响应
})
// 拦截请求
services.interceptors.request.use(config=>{
    // 加载提示
    Toast.loading({
        message: '加载中',
        duration: 0,
    })
    return config
})
// 拦截响应
services.interceptors.response.use(resDate=>{
    // 关闭提示
    Toast.clear()
    // 响应数据处理：根据前后端接口规范来处理数据结构
    /**
     * 解构赋值，避免后面重复判断
     */
    if(resDate.status === 200){
        // const {status,data} =resDate.data
        // if(status ===0){
        //     return data
        // }
        return resDate.data
    }
    
    return Promise.reject(new Error('接口请求异常'))
})
export default services