<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
                    <img :src="image" class="banner">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import {Swipe, SwipeItem} from 'vant';

    export default {
        name: 'Banner',
        components: {
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem
        },
        data() {
            return {
                SwiperImg: [
                    "https://wuhanup.oss-cn-beijing.aliyuncs.com/image/wuhanjiayou.jpeg",
                ]
            };
        },
        props: {
            content: String
        },
    }

</script>

<style>
    .banner{
        max-width: 100%;
        min-width: 100%;
    }
</style>
