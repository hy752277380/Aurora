<template>
    <Row>
        <Col id="crumb" span="16" offset="4">
            <Breadcrumb>
                <template v-for="(item,index) in breadcrumbItem">
                    <BreadcrumbItem :to="item.path">{{item.name}}</BreadcrumbItem>
                </template>
            </Breadcrumb>
        </Col>
    </Row>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                breadcrumbItem: [
                    {path: '/', name: '主页'}
                ]
            }
        },
        watch: {
            // 监听,当路由发生变化的时候执行
            $route(to, from) {
                // console.log(this.breadcrumbItem.length)
                // console.log(from.path + "-------" + to.path);
                // 页面刷新时候的from
                if (from.path === '/') this.breadcrumbItem = JSON.parse(window.sessionStorage.getItem("breadcrumbItem"));
                // 路由向下级
                else if (to.fullPath.indexOf(from.path) != -1) this.breadcrumbItem.push({
                    path: to.fullPath,
                    name: to.name
                })
                // 路由向同级
                else this.emptyBreadcrumbItem(to).push({path: to.fullPath, name: to.name});
                // 每次变换后存进sessionStorage
                window.sessionStorage.setItem("breadcrumbItem", JSON.stringify(this.breadcrumbItem))
            }
        },
        methods: {
            emptyBreadcrumbItem(to) {
                if (to.path === '/home') return this.breadcrumbItem = [];
                else return this.breadcrumbItem = [{path: '/', name: '主页'}];
            }
        }
    }
</script>

<style scoped>
    #crumb {
        text-align: left;
    }

    .ivu-row {
        margin-top: 2px;
        background-color: white;
        height: 40px;
        line-height: 40px;
    }
</style>
