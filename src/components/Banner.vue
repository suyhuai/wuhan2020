<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <div class="banner">
                    <span class="banner-span">"团结一致！"</span>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="banner">
                    <span class="banner-span">"抗击肺炎！"</span>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="banner">
                    <span class="banner-span">"武汉加油！"</span>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="banner">
                    <span class="banner-span">"中国必胜！"</span>
                </div>
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
            return {};
        },
        props: {
            content: String
        },
    }

</script>

<style>
    .banner {
        height: 10vh;
        line-height: 10vh;
        width: 100%;

        background: -moz-linear-gradient(left, #000000 0%, #FF0000 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #000000), color-stop(100%, #FF0000));
        background: -webkit-linear-gradient(left, #000000 0%, #FF0000 100%);
        background: -o-linear-gradient(left, #000000 0%, #FF0000 100%);
        background: -ms-linear-gradient(left, #000000 0%, #FF0000 100%);
        background: linear-gradient(to right, #000000 0%, #FF0000 100%);
    }

    .banner-span {
        font-size: 2em;
        color: white;
    }
</style>
