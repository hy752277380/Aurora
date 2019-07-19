<template>
    <Card :bordered="false">
        <span>资源标签：
            <tag checkable color="default">全部</tag>
            <Tag checkable color="primary">标签一</Tag>
            <Tag checkable color="success">标签二</Tag>
            <Tag checkable color="error">标签三</Tag>
            <Tag checkable color="warning">标签四</Tag>
        </span>
        <Divider/>
        <span>关键词：</span><Input suffix="ios-search" placeholder="Enter text" style="width: 60%;"/>
        <Button type="primary">查询</Button>
        <Dropdown>
            <Button type="primary">
                下拉菜单
                <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Divider/>
        <material-list/>
    </Card>
</template>

<script>
    import ("@/static/iconfont.js");
    import MaterialList from "@/views/material/MaterialList";

    export default {
        name: "material",
        components: {
            MaterialList
        }
    }
</script>

<style lang="stylus" scoped>
    .ivu-card {
        margin-top: 10px;
    }

    button {
        margin-left: 10px;
    }
</style>
