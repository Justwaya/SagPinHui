<template>
    <div id="app">
        <indexHead></indexHead>
        <router-view></router-view>
        <indexFoot v-show="$route.meta.show"></indexFoot>
    </div>
</template>

<script>
import indexHead from "@/components/Header/indexHead";
import indexFoot from "@/components/Footer/indexFoot";
export default {
    name: "App",
    components: {
        indexHead,
        indexFoot,
    }
};
</script>

<style>
</style>
