import axios from 'axios'
var instance=axios.create({
    baseURL:"https://www.liulongbin.top:8888/api/private/v1/"
})
//请求拦截器
instance.interceptors.request.use(
    (config)=>{
        //读取sessionStorage中的数据  然后添加到请求头中
        const token = sessionStorage.getItem('token')
        if(token){
            config.headers.authorization = token
        }
        return config
    },
    (err)=>{

    }
)


export default instance;