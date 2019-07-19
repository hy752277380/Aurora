<template>
    <Row :gutter="10" type="flex" justify="center" align="top" class="code-row-bg">
        <Col id="write" span="20">
            <Card :bordered="false">
                <article-list/>
            </Card>
        </Col>
        <Col span="4">
            <anchor/>
        </Col>
    </Row>
</template>

<script>
    import Anchor from "@/views/archive/Anchor";
    import ArticleList from "@/views/archive/ArticleList";

    export default {
        name: "index",
        components: {
            ArticleList,
            Anchor
        },
    }
</script>

<style scoped>
    .code-row-bg {
        margin-top: 10px;
    }

</style>
