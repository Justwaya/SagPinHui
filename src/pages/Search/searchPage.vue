<template>
    <div>
        <h4>搜索params：{{ $route.params.keyWord }}</h4>
        <h4>query参数：{{ $route.query.k }}</h4>
        <h1>props函数写法：{{keyWord}}</h1>
        <h1>{{k}}</h1>
    </div>
</template>

<script>
export default {
    name: "searchPage",
    props:['keyWord','k']
};
</script>

<style>
</style>