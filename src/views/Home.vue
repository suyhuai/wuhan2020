<template>
    <div>
        <van-row type="flex" justify="center">
            <van-col id="body" span="24">
                <Banner content="武汉加油！中国加油！"/>
                <NoticeBar :content="notice"/>
                <van-row type="flex" align="center" justify="space-between">
                    <van-col span="12" style="padding: 0 12px">
                        <van-button block round icon="edit" color="linear-gradient(to right, #4bb0ff, #6149f6)" size="mini" to="/supply">发布供应</van-button>
                    </van-col>
                    <van-col span="12" style="padding: 0 12px">
                        <van-button block round icon="edit" color="linear-gradient(to right, #FF0000, #FF7F50)" size="mini" to="/needs">发布需求</van-button>
                    </van-col>
                </van-row>
                <AreaPicker @sendMsgFunc="getAreaResult"/>
                <van-tabs v-model="active">
                    <van-tab title="物资供应">
                        <List/>
                    </van-tab>
                    <van-tab title="医院需求">
                        <List/>
                    </van-tab>
                </van-tabs>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import {Col, Row, Tab, Tabs, Button} from 'vant'
    import axios from 'axios'
    import Banner from '@/components/Banner.vue'
    import AreaPicker from '@/components/Areapicker.vue'
    import NoticeBar from '@/components/Noticebar.vue'
    import List from '@/components/List.vue'


    export default {
        name: 'home',
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Button.name]: Button,
            [Banner.name]: Banner,
            [NoticeBar.name]: NoticeBar,
            [AreaPicker.name]: AreaPicker,
            [List.name]: List
        },
        data() {
            return {
                bannerContents: [],
                notice: "武汉新冠肺炎患者女儿：妈妈难获确诊，一床难求 盼火神山医院能解决问题。",
                container: null,
                active:1
            };
        },
        mounted() {

        },
        methods: {
            getAreaResult(provence, city, county) {
                axios.get('/home', {
                    params: {
                        id: 123456
                    }
                }).then(res => {
                    window.console.log(res.data)
                    window.console.log(provence, city, county)
                })
            }
        }
    }

</script>

<style scoped>
    #body {
        max-width: 1000px;
    }
    /*div{*/
    /*    box-shadow: 0 2px 5px 0*/
    /*}*/
</style>
