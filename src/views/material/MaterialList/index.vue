<template>
    <CellGroup>
        <Cell>
            <Icon @click="a" type="md-cloud-download" slot="extra" size="35"/>
            <Tooltip :delay="1000" placement="right" content="BMP">
                <svg class="file-icon" aria-hidden="true">
                    <use xlink:href="#icon-geshi_tupianbmp"></use>
                </svg>
            </Tooltip>
            <h4>assets文件夹与static文件夹的区别
                <span>
                    <Icon type="ios-clock-outline"></Icon>
                    2019-6-20
                </span>
            </h4>
        </Cell>
    </CellGroup>
</template>

<script>
    export default {
        name: "MaterialList",
        data() {
            return {}
        },
        methods: {
            a() {
                console.log("ssss");
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .file-icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        color: #2d8cf0;
        float: left;
    }

    h4
        display inline
        text-align center
        margin auto 10px

        span
            font-size smaller
            margin-left 10px
</style>
