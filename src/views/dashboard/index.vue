<template>
    <div>
        <analysis-card></analysis-card>
        <recent-tab></recent-tab>
    </div>
</template>

<script>
    import AnalysisCard from "@/views/dashboard/AnalysisCard";
    import RecentTab from "@/views/dashboard/RecentTab";

    export default {
        name: "dashboard",
        data() {
            return {}
        },
        components: {
            AnalysisCard,
            RecentTab
        }

    }
</script>

<style scoped>

    div > .ivu-row:first-child {
        margin-top: 20px;
    }

    div > .ivu-row:not(:first-child) {
        margin-top: 10px;
    }

</style>
