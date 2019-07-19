<template>
    <Card title="Options" icon="ios-options" :padding="0">
        <CellGroup>
            <template v-for="(item,index) in labels">
                <Cell :title="item.name">
                    <Badge :count="item.nums" slot="extra"/>
                    <Icon type="md-list" slot="extra"/>
                </Cell>
            </template>
        </CellGroup>
    </Card>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                labels: []
            }
        },
        created() {
            this.$axios.get("/dashboard/labels").then(res => {
                this.labels = res.data;
            })
        },
    }
</script>

<style scoped>

</style>
