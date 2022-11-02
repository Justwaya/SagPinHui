//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home/indexPage';
import Search from '@/pages/Search/searchPage';
import Longin from '@/pages/Login/loginPage';
import Register from '@/pages/Register/registerPage';

let originPush = VueRouter.prototype.push;
//重写push方法
//@params：location  跳转位置
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, ()=>{},()=>{})
    }
},
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                show: true
            }
        },
        {
            path: '/search/:keyWord?',
            component: Search,
            meta: {
                show: true
            },
            name: 'search',
            //只能传递params参数
            //props: true

            //函数写法
            props: ($route) => {
                return {
                    keyWord: $route.params.keyWord,
                    k: $route.query.k
                }
            }
        },
        {
            path: '/login',
            component: Longin,
            meta: {
                show: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                show: false
            }
        },
        //重定向，项目刚开始，访问/时，定位到首页
        {
            path: '/',
            redirect: '/home'
        }

    ]
})