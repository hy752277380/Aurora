<template>
    <div>
        <article-search/>
        <article-writings/>
        <!-- 与上部分无关 -->
        <add-article-drawer ref="addDrawer"/>
        <edit-article-drawer ref="editDrawer"/>
    </div>
</template>

<script>
    import articleSearch from "@/views/article/Search";
    import articleWritings from "@/views/article/Writings";
    import addArticleDrawer from "@/views/article/AddArticleDrawer";
    import editArticleDrawer from "@/views/article/EditArticleDrawer"

    export default {
        name: "index",
        data() {
            return {}
        },
        methods: {},
        watch: {
            '$store.state.articleDate.needToAddArticle': function (newVal, oldVal) {
                //你需要执行的代码
                if (newVal) this.$refs.addDrawer.showDrawer();
            },
            '$store.state.articleDate.needToEditArticle': function (newVal, oldVal) {
                //你需要执行的代码
                if (newVal) this.$refs.editDrawer.showDrawer();
                //if (newVal) this.$Message.error('对方不想说话，并且向你抛出了一个异常！');
            }
        },
        components: {
            articleSearch,
            articleWritings,
            addArticleDrawer,
            editArticleDrawer
        }
    }
</script>

<style scoped>
    div {
        margin-top: 10px;
    }
</style>
