<template>
    <mavon-editor
            v-model="value"
            :subfield="false"
            :defaultOpen="defaultData"
            :toolbarsFlag="false"
            :boxShadow="false"
            :ishljs="true"/>
</template>

<script>
    import {mavonEditor} from "mavon-editor";
    import 'mavon-editor/dist/css/index.css';
    import md from "@/static/remember.md";

    export default {
        name: "info",
        data() {
            return {
                value: md,
                defaultData: "preview"
            }
        },
        components: {
            mavonEditor
        },
        props: {
            articleId: {}
        }
    }
</script>

<style scoped>
    div {
        margin-top: 10px;
    }

    .v-show-content {
        background-color: white;
    }
</style>
