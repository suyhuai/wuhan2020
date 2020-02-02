<template>
    <div>
        <van-notice-bar left-icon="volume-o">{{content}}</van-notice-bar>
    </div>
</template>

<script>
    import {NoticeBar} from 'vant';
    export default {
        name: 'NoticeBar',
        components:{
            [NoticeBar .name]:NoticeBar ,
        },
        data() {
            return {
            };
        },
        props: {
            content: String
        },
    }

</script>

<style>
</style>
