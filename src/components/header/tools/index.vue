<template>
    <ul>
        <li>
            <Icon type="ios-bowtie-outline" size="24"/>
        </li>
        <li>
            <Icon type="ios-bowtie-outline" size="24"/>
        </li>
        <li>
            <Icon type="md-alarm" size="24" style="color: #2d8cf0"/>
        </li>
        <li>
            <slot name="add"></slot>
        </li>
        <li>
            <slot name="edit"></slot>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    ul {
        line-height: 60px;
    }

    li {
        cursor: pointer;
        display: inline;
        margin-left: 10px;
    }

    li:hover {
        color: #2d8cf0;
    }
</style>
