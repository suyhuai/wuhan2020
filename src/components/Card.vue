<template>
    <div>
        <van-panel class="card-panel" :title="info.productions" :desc="info.remark" >
            <div>
                <van-tag mark color="#f2826a" style="margin-left: 16px;">已核实</van-tag>
                <van-cell readonly :border="false" title-class="cell-title" title="联系人" v-model="info.person" input-align="right"/>
                <van-cell readonly :border="false" title-class="cell-title" title="电话" v-model="info.tel" input-align="right"/>
                <van-cell readonly :border="false" title-class="cell-title" title="单价" v-model="info.price" input-align="right" v-show="info.type=='供应'"/>
                <van-cell readonly :border="false" title-class="cell-title" title="数量" v-model="info.amount" input-align="right"/>
                <van-cell readonly :border="false" title-class="cell-title" title="企业" v-model="info.company" input-align="right" v-show="info.type=='供应'"/>
                <van-cell readonly :border="false" title-class="cell-title" title="地区" v-model="info.area" input-align="right"/>
            </div>
        </van-panel>
    </div>
</template>

<script>
    import {Panel, CellGroup, Cell, Tag} from 'vant';

    export default {
        name: "Card",
        props: {
            info: Object
        },
        components: {
            [Panel.name]: Panel,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Tag.name]: Tag
        },
        data() {
            return {
                active: 0
            };
        },

        methods: {}
    }
</script>

<style>
    .card-panel .van-cell{
        padding: 0 16px;
    }
    .cell-title{
        color:#969799;
    }
</style>