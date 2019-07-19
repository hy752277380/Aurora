<template>
    <div id="app">
        <header-comp></header-comp>
        <Row type="flex" justify="center">
            <Col span="16">
                <transition
                        enter-active-class="animated fadeInLeft"
                        leave-active-class="animated bounceOutRight">
                    <router-view style="position: absolute;width: 100%;"/>
                </transition>
            </Col>
        </Row>
    </div>
</template>
<script>
    import "@/static/Animate.css";
    import headerComp from "@/components/header";

    export default {
        name: "App",
        data() {
            return {}
        },
        watch: {},
        components: {headerComp}
    }
    ;
</script>
<style lang="stylus">
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        /*text-align center*/
        color #2c3e50
        background-color #f7f7f7
</style>
