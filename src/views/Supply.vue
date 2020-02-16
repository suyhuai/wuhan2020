<template>
    <div>
        <van-row type="flex" justify="center">
            <van-col span="24">
                <van-nav-bar title="物资发布" left-text="返回" right-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
                    <van-cell-group style="padding: 12px">
                        <van-field v-model="productions" center clearable label="类型" placeholder="请选择物资类型" required>
                            <van-button slot="button" center clearable size="mini" type="primary" @click="showProductionPopup">选择</van-button>
                        </van-field>
                        <van-field v-model="price" label="单价" placeholder="请输入价格"/>
                        <van-field v-model="amount" label="数量" placeholder="请输入数量" required/>
                        <van-field v-model="company" label="企业" placeholder="请输入企业名称" required/>
                        <van-field v-model="person" label="姓名" placeholder="请输入姓名" required/>
                        <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" required/>
                        <van-field readonly clickable is-link label="地区" :value="area" placeholder="请选择地区" @click="showAreaPopup" required/>
                        <van-field v-model="remark" rows="2" autosize label="备注" type="textarea" maxlength="100" placeholder="请输入留言" show-word-limit/>
                        <van-button round  type="primary" block color="linear-gradient(to right, #FF0000, #FF7F50)" @click="onSave()">提交</van-button>
                    </van-cell-group>

                <van-popup v-model="showProduction" position="top">
                    <van-checkbox-group v-model="productionSelected">
                        <van-cell-group>
                            <van-cell v-for="(item, index) in list" clickable :key="item" :title="item" @click="checkBoxToggle(index)">
                                <van-checkbox :name="item" ref="checkboxes" slot="right-icon"/>
                            </van-cell>
                        </van-cell-group>
                    </van-checkbox-group>
                    <van-button block type="info" @click="onProductionConfirm">确认</van-button>
                </van-popup>

                <van-popup v-model="showArea" position="bottom">
                    <van-area ref="areaPicker" :value="area" :area-list="areaList" :columns-placeholder="['选择省份', '选择城市', '选择区县']" title="地区" columns-num="3" @confirm="onConfirmArea" @cancel="onCancelArea"/>
                </van-popup>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import {
        Col,
        Row,
        Toast,
        NavBar,
        Field,
        CellGroup,
        Button,
        Popup,
        Cell,
        Checkbox,
        CheckboxGroup,
        Area
    } from 'vant'
    import AreaList from '../static/js/area';
    import axios from "axios";

    export default {
        name: 'supply',
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Toast.name]: Toast,
            [NavBar.name]: NavBar,
            [Field.name]: Field,
            [CellGroup.name]: CellGroup,
            [Button.name]: Button,
            [Popup.name]: Popup,
            [Cell.name]: Cell,
            [Checkbox.name]: Checkbox,
            [CheckboxGroup.name]: CheckboxGroup,
            [Area.name]: Area
        },
        data() {
            return {
                areaList: AreaList,
                showProduction: false,
                showArea: false,
                productionSelected: [],
                list: ['口罩', '防护服', '防护眼镜','防护配件','其他物资'],
                productions: "",
                price: "",
                amount: "",
                company: "",
                person:"",
                tel: "",
                area:"",
                remark: "",
            }
        },
        methods: {
            onSave() {
                if (this.productions && this.amount && this.company && this.person && this.tel && this.tel){
                    let params = {
                        productions: this.productions,
                        price: this.price,
                        amount: this.amount,
                        company: this.company,
                        person: this.person,
                        tel: this.tel,
                        area: this.area,
                        remark: this.remark,
                        goodsType: "supply"
                    }

                    axios.post('/supply/upload', params).then(() => {
                        Toast.success("上传成功")
                        this.$router.push({name: 'home'})
                    }).catch(() => {
                        Toast.fail("上传失败，请稍后再试")
                    })
                }else {
                    Toast.fail('"请填写完必填选项"')
                    return
                }
            },

            onClickLeft() {
                this.$router.push({name:'home'})
            },
            onClickRight() {
            },
            checkBoxToggle(index) {
                this.$refs.checkboxes[index].toggle();
            },
            onProductionConfirm() {
                this.showProduction = false
                let productions = []
                for (let item of this.$refs.checkboxes){
                    if (item.checked){
                        productions.push(item.name)
                    }
                }
                this.productions = productions.join(",")
            },
            showProductionPopup() {
                this.showProduction = true
            },
            showAreaPopup(){
                this.showArea = true
            },
            onConfirmArea(val) {
                let result = []

                if (val[0] && val[0].name) {
                    this.provence = val[0].name
                    result.push(val[0].name)
                }
                if (val[1] && val[1].name) {
                    this.city = val[1].name
                    result.push(val[1].name)
                }
                if (val[2] && val[2].name) {
                    this.county = val[2].name
                    result.push(val[2].name)
                }

                this.area=result.join(",")
                this.showArea = false
            },
            //取消选中城市
            onCancelArea() {
                this.showArea = false
                this.$refs.myArea.reset()// 重置城市列表
            }
        }
    }

</script>

<style scoped>
    #body {
        max-width: 1000px;
    }
</style>
