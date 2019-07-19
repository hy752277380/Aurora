<template>
    <Row :gutter="10">
        <!-- 动态部分 -->
        <Col span="8">
            <Card :title="recentPostsData.title" icon="md-options" :padding="0" :bordered="false">
                <CellGroup>
                    <template v-for="articleItem in recentPostsData.data">
                        <Cell :title="articleItem.title"
                              :to="{path:'/article/info',params: {id: articleItem.id}}"
                              :label="articleItem.date">
                            <Avatar slot="extra"
                                    :src="articleItem.url"
                            />
                        </Cell>
                    </template>
                </CellGroup>
                <a href="#" slot="extra">
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            视图
                            <Icon type="ios-arrow-down"/>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>文章</DropdownItem>
                            <DropdownItem>评论</DropdownItem>
                            <DropdownItem divided>
                                <Icon type="ios-refresh" style="font-size: 24px;"/>
                                更新
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </a>
            </Card>
        </Col>
        <!-- 中间部分 -->
        <Col span="8">
            <Card padding="0" :bordered="false">
                <div style="text-align:center">
                    <img src="@/assets/sky.jpg" style="width: 100%;height: 100%;">
                    <h3>A high quality UI Toolkit based on Vue.js</h3>
                </div>
            </Card>
        </Col>
        <!-- 标签部分 -->
        <Col span="8">
            <Card :title="tagData.title" icon="md-options" :padding="0" :bordered="false">
                <a href="#" slot="extra">
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            视图
                            <Icon type="ios-arrow-down"/>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>文章</DropdownItem>
                            <DropdownItem>评论</DropdownItem>
                            <DropdownItem divided>
                                <Icon type="ios-refresh" style="font-size: 24px;"/>
                                更新
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </a>
                <CellGroup>
                    <template v-for="(labelItem,index) in tagData.data">
                        <Cell :title="labelItem.name" to="/article">
                            <Badge :count="labelItem.nums" slot="extra"/>
                        </Cell>
                    </template>
                </CellGroup>
            </Card>
        </Col>
    </Row>
</template>

<script>
    export default {
        name: "RecentTab",
        data() {
            return {
                recentPostsData: {
                    title: '动态',
                    data: []
                },
                area: {
                    data: []
                },
                tagData: {
                    title: '标签',
                    data: []
                }
            }
        },
        methods: {
            recentPosts() {
                this.$axios.get("/dashboard/recentPosts").then((res) => {
                    this.recentPostsData.data = res.data;
                })
            },
            tag() {
                this.$axios.get("/dashboard/labels").then((res) => {
                    this.tagData.data = res.data;
                })
            }
        },
        created: function () {
            this.$axios.all([this.recentPosts(), this.tag()])
        }
    }
</script>

<style scoped>

</style>
