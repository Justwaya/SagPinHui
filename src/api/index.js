// API接口进行统一管理
import requests from "./request";

// 三级联动接口
// api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = () =>
  // 返回结果为Promise对象
  requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
