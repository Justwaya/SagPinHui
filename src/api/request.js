//对axios进行二次封装
import axios from "axios";
// 引入进度条   start: 进度条开始    done: 进度条结束
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css"


//使用axios对象的方法create，去创建一个axios实例
//request就是axios，只不过进行了二次封装
const requests = axios.create({
  //配置对象
  baseURL: "/api",
  timeout: 5000,
});
//请求拦截器
requests.interceptors.request.use((config) => {
  //config:配置对象
  // 进度条开始
  nProgress.start()
  return config;
});
//相应拦截器
requests.interceptors.response.use(
  (res) => {
    // 进度条结束
    nProgress.done()
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default requests;
