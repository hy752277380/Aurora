<template>
    <Row :gutter="10">
        <Col span="6">
            <Input v-model="keyword" placeholder="keywords..." clearable/>
        </Col>
        <Col span="6">
            <Select v-model="author">
                <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix"
                        size="small"/>
                <Option v-for="(item,index) in options1" :value="item" :key="index">
                    <Avatar style="float: right; margin-top: -7px;"
                            src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                            size="small"/>
                    {{ item }}
                </Option>
            </Select>
        </Col>
        <Col span="6">
            <Input v-model="value" placeholder="Don't use..." clearable/>
        </Col>
        <Col span="6" style="text-align: right">
            <Button type="primary">查询</Button>
            <Button type="Default">重置</Button>
            <Dropdown>
                <Button type="primary">
                    <Icon type="ios-power"/>
                    视图
                </Button>
                <DropdownMenu slot="list" style="text-align: left">
                    <DropdownItem selected>
                        <Icon type="ios-menu"/>
                        详情信息
                    </DropdownItem>
                    <DropdownItem>
                        <Icon type="ios-apps"/>
                        列表
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Col>
    </Row>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                options1: ['Alabama', 'Alaska', 'Arizona'],
                keyword: '',
                author: '',
                value: '',
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .ivu-row {
        background-color: white;
        height: 60px;
        line-height: 60px;
        border-radius: 4px;
    }

    .ivu-col {
        margin: auto;
    }

    span {
        font-weight: bold;
        font-size: 14px;
    }

    Button {
        margin-left: 10px;
    }
</style>
