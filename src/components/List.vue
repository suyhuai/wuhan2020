<template>
    <div>

        <van-row type="flex" justify="left" align="center" class="van-hairline--surround">
            <van-col span="9">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="optionValue" :options="options"/>
                </van-dropdown-menu>
            </van-col>
            <van-col span="10">
                <AreaPicker/>
            </van-col>
            <van-col span="5">
                <van-button type="info" @click="onSearch" size="small" round icon="search">搜索</van-button>
            </van-col>
        </van-row>

        <van-tabs v-model="active">
            <van-tab title="物资供应">
                <van-list
                        v-model="supplyLoading"
                        :finished="supplyFinished"
                        finished-text="没有更多了"
                        @load="onSupplyLoad"
                >
                    <van-cell v-for="(item,index) in supplyList" :key="index" class="aaaa">
                        <Card :info="item"></Card>
                    </van-cell>
                </van-list>
            </van-tab>
            <van-tab title="求助信息">
                <van-list
                        v-model="needsLoading"
                        :finished="needsFinished"
                        finished-text="没有更多了"
                        @load="onNeedsLoad"
                >
                    <van-cell v-for="(item,index) in needsList" :key="index">
                        <Card :info="item"></Card>
                    </van-cell>
                </van-list>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
    import {Col, Row, List, CellGroup, Cell, Tab, Tabs, Toast, Button, DropdownMenu, DropdownItem} from 'vant'
    import axios from "axios"
    import Card from '@/components/Card.vue'
    import AreaPicker from '@/components/Areapicker.vue'

    export default {
        name: "List",
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [List.name]: List,
            [CellGroup.name]: CellGroup,
            [Cell.name]: Cell,
            [Card.name]: Card,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Toast.name]: Toast,
            [AreaPicker.name]: AreaPicker,
            [Button.name]: Button,
            [DropdownMenu.name]: DropdownMenu,
            [DropdownItem.name]: DropdownItem
        },
        data() {
            return {
                optionValue: "",
                options: [
                    {text: "选择物资(全部)", value: ""},
                    {text: "口罩", value: "口罩"},
                    {text: "防护服", value: "防护服"},
                    {text: "防护眼镜", value: "防护眼镜"},
                    {text: "防护配件", value: "防护配件"},
                    {text: "其他物资", value: "其他物资"},
                ],
                supplyList: [],
                needsList: [],
                supplyLoading: false,
                needsLoading: false,
                supplyFinished: false,
                needsFinished: false,
                active: 0,
                status: ""
            };
        },

        methods: {
            onSupplyLoad() {
                axios.get("/supply", {
                    params: {
                        productions: this.optionValue,
                        status: this.status,
                        area: this.$store.getters.Area,
                        offset: this.supplyList.length
                    }
                }).then(res => {
                    window.console.log(res.data)
                    this.supplyLoading = false
                    if (!res.data.Success) {
                        Toast.fail("请求失败，请稍后再试")
                    }
                    if (!res.data.Data) {
                        this.supplyFinished = true
                        return
                    }
                    for (let data of res.data.Data) {
                        if (!data.price) {
                            data.price = "询价"
                        }
                        this.supplyList.push(data)
                    }
                }).catch(() => {
                    Toast.fail("连接失败")
                })
            },
            onNeedsLoad() {
                axios.get("/needs", {
                    params: {
                        productions: this.optionValue,
                        status: this.status,
                        area: this.$store.getters.Area,
                        offset: this.needsList.length
                    }
                }).then(res => {
                    this.needsLoading = false
                    if (!res.data.Success) {
                        Toast.fail("请求失败，请稍后再试")
                    }
                    if (!res.data.Data) {
                        this.needsFinished = true
                        return
                    }
                    for (let data of res.data.Data) {
                        this.needsList.push(data)
                    }
                })
            },
            onSearch() {
                if (this.active == 0) {
                    this.supplyList = []
                    this.supplyFinished = false
                    this.supplyLoading = true
                    this.onSupplyLoad()
                } else if (this.active == 1) {
                    this.needsList = []
                    this.needsFinished = false
                    this.needsLoading = true
                    this.onNeedsLoad()
                }
            }
        }
    }
</script>

<style>

    .aaaa>div{
        border-radius: 5px;
        box-shadow: 0px 0px 5px #CCCCCC;
    }

</style>