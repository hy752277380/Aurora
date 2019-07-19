<template>
    <Row type="flex" justify="center" align="top" :gutter="10">
        <Col span="8">
            <Card :bordered="false">
                <div class="user-photo" style="text-align:center;">
                    <img
                            @click.ctrl="ctrlClick"
                            src="@/assets/4.jpg"
                            style="border-radius: 50%; width: 200px; height: 200px;">
                    <h3>A high quality UI Toolkit based on Vue.js</h3>
                    <Drawer title="点击切换" :closable="false" v-model="showDrawer">
                        <Card style="border-radius: 4px;">
                            <div style="text-align:center">
                                <img src="@/assets/4.jpg">
                                <h3>A high quality UI Toolkit based on Vue.js</h3>
                            </div>
                        </Card>
                        <br/>
                    </Drawer>
                </div>
                <Divider/>
                <p><Icon type="logo-github"/> &nbsp;https://github.com/halo-dev/halo</p>
                <p><Icon type="ios-mail"/> &nbsp;123456@163.com</p>
                <p><Icon type="md-calendar"/> &nbsp;23days</p>
                <Divider/>
            </Card>
        </Col>
        <Col span="16">
            <Card :bordered="false">
                <Tabs>
                    <TabPane label="Message" icon="logo-apple">
                        <Collapse simple>
                            <Panel name="1">
                                史蒂夫·乔布斯
                                <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                            </Panel>
                            <Panel name="2">
                                斯蒂夫·盖瑞·沃兹尼亚克
                                <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                                    Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                                    Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                            </Panel>
                            <Panel name="3">
                                乔纳森·伊夫
                                <p slot="content">
                                    乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                            </Panel>
                        </Collapse>
                    </TabPane>
                    <TabPane label="Windows" icon="logo-windows"></TabPane>
                    <TabPane label="Linux" icon="logo-tux"></TabPane>
                </Tabs>
            </Card>
        </Col>
    </Row>
</template>

<script>

    export default {
        name: "about",
        data() {
            return {
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                showDrawer: false
            }
        },
        methods: {
            ctrlClick() {
                this.showDrawer = true;
            }
        },
        components: {}
    }
</script>

<style scoped>
    .ivu-row-flex {
        margin-top: 10px;
    }

    img {
        border-radius: 50%;
    }

    .user-photo {
        text-align: center;
        background-size: cover;
    }
</style>
