import axios from 'axios'

export function request(config){  
     // 1. 创建axios实例
     const instance = axios.create({
         baseURL:'http://152.136.185.210:8000/api/n3',
         timeout:5000,
         headers:{} // 对headers 进行一些设置
     })

     // 2. axios的拦截器

     // 请求拦截; 
     instance.interceptors.request.use(config =>{
        // console.log(config)

        // 为什么要拦截请求，拦截以后可以做些什么？以下是举例说明

        // 1. 也可以对headers进行一些设置

        // 2. 每次发送请求时可以，添加加载中动画

        // 3. 某些请求，比如登录（token），必须携带一些特殊的信息

        return config
     }, err => {
        // console.log(err)
     }) 

     // 响应拦截
     instance.interceptors.response.use(res =>{
        // console.log(res)
         return res.data
     },err=>{
         // console.log(err)
     }); 


     // 3. 发送请求
    return instance(config)
 }

