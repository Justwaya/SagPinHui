import { reqCategoryList } from '../../api/index';
export default {
    state: {
        categoryList: [],
    },
    actions: {
        //向服务器发送请求
        async categoryList(context) {
            let result = await reqCategoryList()
            console.log(result);
            if (result.code == 200) {
                context.commit("CATEGORYLIST", result.data)
            }
        }
    },
    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        }
    },
    getters: {}
}