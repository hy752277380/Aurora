<template>
    <Row :gutter="10" type="flex" justify="center" align="top" class="code-row-bg">
        <Col id="write" span="16">
            <template v-for="(item,index) in articles">
                <writings-article :info="item"/>
            </template>
        </Col>
        <Col span="8">
            <writings-options/>
        </Col>
    </Row>
</template>

<script>
    import WritingsArticle from "@/views/article/Writings/WritingsArticle";
    import WritingsOptions from "@/views/article/Writings/WritingsOptions";

    export default {
        name: "Writings",
        data() {
            return {
                articles: []
            }
        },
        created() {
            this.$axios.get("/article/articles").then(res => {
                this.articles = res.data;
            })
        },
        components: {
            WritingsArticle,
            WritingsOptions
        }
    }
</script>

<style scoped>

    #write > .ivu-card:not(:first-child) {
        margin-top: 10px;
    }

</style>
