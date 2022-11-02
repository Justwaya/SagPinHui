<template>
    <div>
        <TypeNavIndex></TypeNavIndex>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <RankSort></RankSort>
        <LikeGuess></LikeGuess>
        <FloorPage></FloorPage>
        <FloorPage></FloorPage>
        <BrandIcon></BrandIcon>
    </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import RankSort from "@/pages/Home/RankSort";
import LikeGuess from "@/pages/Home/LikeGuess";
import FloorPage from "@/pages/Home/FloorPage";
import BrandIcon from "@/pages/Home/BrandIcon";
export default {
    name: "indexPage",
    components: {
        ListContainer,
        TodayRecommend,
        RankSort,
        LikeGuess,
        FloorPage,
        BrandIcon,
    },
};
</script>

<style>
</style>