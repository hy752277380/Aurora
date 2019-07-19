<template>
    <div id="nav">
        <Row>
            <Col span="2" offset="4">
                <logo />
            </Col>
            <Col span="12">
                <menu-comp />
            </Col>
            <Col span="6">
                <tools>
                    <template v-if="isShow">
                        <Icon @click="updateAddState" type="md-create" size="21" slot="add" style="color: red;"/>
                        <Icon @click="updateEditState" type="logo-markdown" size="22" slot="edit" style="color: red;"/>
                    </template>
                </tools>
            </Col>
        </Row>
        <bread-crumb></bread-crumb>
    </div>
</template>

<script>
    import menu from "@/components/header/menu"
    import logo from "@/components/header/logo"
    import tools from "@/components/header/tools"
    import breadCrumb from "@/components/breadcrumb";

    export default {
        name: "index",
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            updateAddState() {
                this.$store.state.articleDate.needToAddArticle = true;
            },
            updateEditState() {
                this.$store.state.articleDate.needToEditArticle = true;
            }
        },
        created() {
            let flag_user = !!this.$store.state.user;
            let flag_path = this.$route.path.indexOf("/article") !== -1;
            // 出现编辑图标
            if (flag_user && flag_path) this.isShow = true;
        },
        components: {
            menuComp: menu,
            logo,
            tools,
            breadCrumb
        }
    }
</script>

<style scoped>
    .ivu-row {
        background-color: #ffffff;
    }


</style>
