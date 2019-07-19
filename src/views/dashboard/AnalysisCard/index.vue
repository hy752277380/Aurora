<template>
    <Row :gutter="10">
        <Col span="6" v-for="item,index in dashboardItem.data">
            <Card :bordered="false">
                <p class="card-name">{{item.type}}
                    <Icon :type="item.icon" size="30"></Icon>
                </p>
                <p class="card-nums">{{dashboardItem.nums[index]}}</p>
            </Card>
        </Col>
    </Row>
</template>

<script>
    import anime from '@/static/anime.es.js';

    export default {
        name: "AnalysisCard",
        data() {
            return {
                dashboardItem: {
                    data: [
                        {type: "文章", icon: "ios-stats"},
                        {type: "评论", icon: "md-chatbubbles"},
                        {type: "访问", icon: "ios-bonfire"},
                        {type: "天数", icon: "ios-calendar"}
                    ],
                    nums: [0, 0, 0, 0]
                }
            }
        },
        methods: {
            getAnalysisCount() {
                this.$axios.get('/dashboard/analysis').then(res => {
                    this.dashboardItem.nums = res.data;
                });
            }
        },
        created: function () {
            this.getAnalysisCount();
        }
    }
</script>

<style scoped>
    * {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    .card-name {
        font-size: 14px;
        color: #657180;
    }

    .card-nums {
        font-size: 24px;
        color: #464c5b;
        font-weight: bold;
    }

    .ivu-icon {
        float: right;
        color: #2d8cf0;
    }
</style>
