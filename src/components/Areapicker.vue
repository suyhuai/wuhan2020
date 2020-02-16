<template>
    <div>

        <van-field
                readonly
                clickable
                :value="value"
                placeholder="请选择地区"
                @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
            <van-area
                    ref="areaPicker"
                    :value="value"
                    :area-list="areaList"
                    :columns-placeholder="['选择省份', '选择城市', '选择区县']"
                    title="地区"
                    columns-num="3"
                    @confirm="onConfirm"
                    @cancel="onCancel"
            />
        </van-popup>
    </div>
</template>

<script>
    import {Area, Field, Popup, RadioGroup, Radio} from 'vant';
    import AreaList from '../static/js/area';

    export default {
        name: 'AreaPicker',
        components: {
            [Area.name]: Area,
            [Field.name]: Field,
            [Popup.name]: Popup,
            [RadioGroup.name]: RadioGroup,
            [Radio.name]: Radio
        },
        data() {
            return {
                provence: '',
                city: '',
                county: '',
                areaList: AreaList,
                value: '',
                showPicker: false,
            };
        },
        methods: {
            //确定选择城市
            onConfirm(val) {
                let provence = val[0]
                let city = val[1]
                let county = val[2]

                this.value = ''
                this.provence = ''
                this.city = ''
                this.county = ''

                if (provence && provence.name) {
                    this.provence = provence.name
                    this.value = this.provence
                }
                if (city && city.name) {
                    this.city = city.name
                    this.value += "," + this.city
                }
                if (county && county.name) {
                    this.county = county.name
                    this.value += "," + this.county
                }

                this.$store.commit("setArea", {area: this.value})
                this.showPicker = false
            },
            //取消选中城市
            onCancel() {
                this.showPicker = false
                this.$refs.areaPicker.reset()// 重置城市列表
            }
        }
    }

</script>

<style>
</style>
