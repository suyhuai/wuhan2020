<template>
    <div>
        <van-row type="flex" justify="center">
            <van-col id="body" span="24">
                <Banner content="武汉加油！中国加油！"/>
                <NoticeBar :content="notice"/>
                <van-row type="flex" align="center" justify="space-between">
                    <van-col span="12" style="padding: 0 12px">
                        <van-button block round icon="edit" color="linear-gradient(to right, #4bb0ff, #6149f6)"
                                    size="small" to="/supply">发布供应
                        </van-button>
                    </van-col>
                    <van-col span="12" style="padding: 0 12px">
                        <van-button block round icon="edit" color="linear-gradient(to right, #FF0000, #FF7F50)"
                                    size="small" to="/needs">发布需求
                        </van-button>
                    </van-col>
                </van-row>
                <List/>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import {Col, Row, Button,Dialog} from 'vant'
    import Banner from '@/components/Banner.vue'
    import NoticeBar from '@/components/Noticebar.vue'
    import List from '@/components/List.vue'


    export default {
        name: 'home',
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Button.name]: Button,
            [Banner.name]: Banner,
            [NoticeBar.name]: NoticeBar,
            [List.name]: List,
            [Dialog.name]: Dialog
        },
        data() {
            return {
                bannerContents: [],
                notice: "勤洗手，常开窗；戴口罩，把毒挡；少聚会，不徬徨；缓出行，同舒畅；病魔来，我刚强；遇不适，上医堂；粗淡饭，保安康；多运动，免疫强；破困局，勇担当；紧跟着，党中央。",
                container: null
            };
        },
        mounted() {
            if (!window.isReloaded){
                Dialog.alert({
                    title: '免责申明',
                    message: '免责声明\n' +
                        '\n' +
                        '第一条 协议订立\n' +
                        '\n' +
                        '1.1用户在同意本网站:疫情防护物资供需发布平台 (https://2019-ncov.hsmap.com/) 的免责协议后，方可使用本网络服务平台(以下简称“平台”)提供的疫情防护物资供需信息相关服务(以下简称“服务”)。\n' +
                        '\n' +
                        '1.2用户在使用本平台提供的服务前请务必认真阅读本协议，一旦用户使用本平台提供的服务即表示用户同意与本平台签订本协议且同意受本协议之约束。\n' +
                        '\n' +
                        '第二条 服务说明\n' +
                        '\n' +
                        '2.1 通过本平台获取的捐赠机构、组织和个体，平台均称为 “捐赠方”，通过本平台获取的物资供应商，平台均称为 “供应方”。本平台仅为技术服务提供方。\n' +
                        '\n' +
                        '2.2 由于情况各异且随时会发生变化，本平台所有供应方、捐赠方目前均无法承诺实际情况。\n' +
                        '\n' +
                        '2.3 需求内容以各机构在各大官方发布信息为准(认证微博、官方微信公众号、医院盖章文件等)，平台只做内容收集展示及部分人工核实。\n' +
                        '\n' +
                        '第三条 用户的权利和义务\n' +
                        '\n' +
                        '3.1 用户使用本平台前，应仔细阅读各方具体信息。本协议中涉及交易双方、捐赠双方权利义务的内容，如有与我国相关法律冲突的，以我国相关法律为准。\n' +
                        '\n' +
                        '3.2 用户发布信息时，应当准确填写物资类目及具体数量等信息内容。\n' +
                        '\n' +
                        '3.3 如采购方、捐赠方需取得相应凭证，应与相关合作单位联系取得。在交易和捐赠等过程中，如因各项事宜产生争议，由用户与对应方协商解决。\n' +
                        '\n' +
                        '3.4 用户同意本平台向购买方、需求方、捐赠方、接受捐赠方等相关单位披露用户提交的信息中所涉及的各项内容（包括但不限于所在单位、联系电话等个人信息）。\n' +
                        '\n' +
                        '第四条 免责说明\n' +
                        '\n' +
                        '4.1 因疫情变化，本平台显示的信息仅供参考，最终以实际供应及需求为准。\n' +
                        '\n' +
                        '4.2 因用户提供错误信息所导致的损失，由用户自行承担，本平台不承担任何责任。\n' +
                        '\n' +
                        '4.3 用户充分知晓并认可，本平台仅为公益性信息平台，物资供应方与需求方、捐赠方产生任何纠纷与本平台无关，本平台不因平台服务而承担任何担保、保证或连带责任。\n' +
                        '\n' +
                        '4.4 本平台会尽力维护平台信息的安全，但法律规定的不可抗力，以及因为黑客入侵、计算机病毒等原因造成用户资料泄露、丢失、被盗用、被篡改的，本平台不承担任何责任。\n' +
                        '\n' +
                        '4.5 本平台仅提供技术服务，不是交易合同、赠与合同等合同的权利义务主体，不介入用户与交易方之间的纠纷，但本平台将提供协助，保护用户的合法权益。\n' +
                        '\n' +
                        '4.6 本平台如被恶意篡改用于不正当募捐和交易使用，一律追责。\n' +
                        '\n' +
                        '4.7 本平台唯一官方网址 https://2019-ncov.hsmap.com/(疫情防护物资供需发布平台)如被人恶意假借名义进行不正当行为，与本平台无关。但本平台保留追究其法律责任的权利。\n' +
                        '\n' +
                        '第五条 争议解决及法律适用\n' +
                        '\n' +
                        '5.1 在用户有意向捐赠、求购、发布信息后，如果在约定内容履行过程中，对相关事宜的履行发生争议，用户同意按照中华人民共和国现行有效的相关法律法规来解决争议，并同意接受平台方所在地浙江省杭州市滨江区有管辖权的人民法院的管辖。'
                }).then(() => {
                    // on close
                });
                window.isReloaded = true
            }

        },
        methods: {
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
