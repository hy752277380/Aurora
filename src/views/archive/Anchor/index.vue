<template>
    <Card :bordered="false">
        <p slot="title">
            <Dropdown trigger="click">
                <a href="javascript:void(0)">
                    归档方式
                    <Icon type="ios-apps" style="margin-top: -4px;"/>
                    ✿ฺ{{anchorType}}
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem>月份</DropdownItem>
                    <DropdownItem>年份</DropdownItem>
                    <DropdownItem>标签</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </p>
        <Anchor show-ink="true">
            <AnchorLink href="#first-sty" title="first-sty"/>
            <AnchorLink href="#first_ee" title="first_ee"/>
            <AnchorLink href="#API" title="API"/>
        </Anchor>
    </Card>
</template>

<script>
    export default {
        name: "anchor",
        data() {
            return {
                anchorType: "月份"
            }
        }
    }
</script>

<style scoped>
    a {
        color: #2d8cf0;
    }
</style>
