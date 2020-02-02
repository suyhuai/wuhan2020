<template>
    <div>
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell v-for="(item,index) in list" :key="index">
                <Card :info="item"></Card>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
    import {List, Cell} from 'vant'
    import Card from '@/components/Card.vue'
    export default {
        name: "List",
        components: {
            [List.name]: List,
            [Cell.name]: Cell,
            [Card.name]: Card
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
            };
        },

        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    let item = {
                        type: "供应",
                        productions:"N95",
                        person: "郑俊潇",
                        tel: "18969123953",
                        price: "询价",
                        amount: "100000",
                        company: "厦门科技有限公司",
                        area: "广州 上海",
                        remark:"出厂在山东 仓库在邯郸可直接提货 能自己解决物流更方便 顺丰暂时不能发货"
                    }
                    for (let i = 0; i < 3; i++) {
                        this.list.push(item);
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 10) {
                        this.finished = true;
                    }
                }, 500);
            }
        }
    }
</script>

<style>
</style>