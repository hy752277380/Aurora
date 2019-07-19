<template>
    <Menu
            ref="menus"
            mode="horizontal"
            :theme="theme1"
            :active-name="active"
            @on-select="onSelect"
    >
        <MenuItem name="1" to="/">
            <Icon type="ios-paper"></Icon>
            主页
        </MenuItem>
        <MenuItem name="2" to="/article">
            <Icon type="ios-people"/>
            文章
        </MenuItem>
        <MenuItem name="3" to="/archive">
            <Icon type="md-person"/>
            归档
        </MenuItem>
        <MenuItem name="4" to="/material">
            <Icon type="md-person"/>
            资料
        </MenuItem>
        <MenuItem name="5" to="/about">
            <Icon type="ios-settings"/>
            关于
        </MenuItem>
        <Submenu name="6">
            <template slot="title">
                <Icon type="ios-stats"></Icon>
                统计
            </template>
            <MenuGroup title="本站">
                <MenuItem name="6-1">文章</MenuItem>
                <MenuItem name="6-2">访问</MenuItem>
            </MenuGroup>
            <MenuGroup title="其他">
                <MenuItem name="6-3">留存</MenuItem>
                <MenuItem name="6-4">流失</MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                theme1: 'light',
                active: 1 //默认值为1，当刚进入本站时候，就是主页面
            }
        },
        methods: {
            onSelect(activeName) {
                this.active = activeName;
                // 存入sessionStorage
                window.sessionStorage.setItem("activeName", activeName);
            }
        },
        created: function () {
            // 获取sessionStorage，保证在页面刷新时候，可以正常读取到目前的导航name
            let activeName = window.sessionStorage.getItem("activeName");
            if (activeName) this.active = activeName;
            else this.active = 1;
            this.$nextTick(() => {
                this.$refs.menus.updateActiveName();
            })
        }
    }
</script>

<style scoped>
    .ivu-menu-horizontal.ivu-menu-light::after {
        background-color: white;
    }

    li, a {
        border-bottom-width: 3px !important;
    }
</style>
