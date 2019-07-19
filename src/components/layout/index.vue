<template>
    <Row>
        <Col span="2" offset="4">
            <logo></logo>
        </Col>
        <Col span="12">
            <menu-comp></menu-comp>
        </Col>
        <Col span="2">
            <tools></tools>
        </Col>
    </Row>
    <Row>
        <Col id="crumb" span="16" offset="4">

        </Col>
    </Row>

</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style scoped>
    .ivu-col {
        background-color: white;
    }
</style>
