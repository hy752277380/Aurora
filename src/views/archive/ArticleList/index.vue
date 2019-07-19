<template>
    <Timeline>
        <TimelineItem id="first-sty">
            <p class="time">2019年5月</p>
            <CellGroup>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
                <Cell title="Open link in new window" to="/components/button" target="_blank"/>
            </CellGroup>
        </TimelineItem>
    </Timeline>
</template>

<script>
    export default {
        name: "ArticleList",
        data(){
            return{

            }
        },
    }
</script>

<style scoped>
    .time {
        font-size: 14px;
        font-weight: bold;
    }
</style>
