<template>
    <Card :bordered="false">
        <p slot="title">{{info.title}}</p>
        <p class="content">{{info.description}} </p>
        <p class="tag">
            <Button id="label" type="text" icon="ios-pricetags-outline">{{info.label}}</Button>
            <Button type="text" icon="md-time">{{info.time}}</Button>
            <Button type="text" icon="ios-bonfire">{{info.watch}}</Button>
            <router-link to="/article/info">
                <Icon type="md-book"/>
                阅读原文
            </router-link>
        </p>
    </Card>
</template>

<script>
    export default {
        name: "index",
        props: {
            info: Object
        },
        created() {
        }
    }
</script>

<style scoped>
    a {
        float: right;
        cursor: pointer;
        color: cornflowerblue;
    }

    .content {
        color: #657180;
        text-align: left;
        text-indent: 2em;
        line-height: 25px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        font-size: 12px;
    }
</style>
