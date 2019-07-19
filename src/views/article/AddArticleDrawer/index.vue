<template>
    <Drawer
            title="新增文章"
            v-model="isShow"
            width="720"
            :mask-closable="true"
            :styles="styles"
            @on-visible-change="close"
            :closable="true"
    >
        <Form :model="formData">
            <Row :gutter="32">
                <Col span="12">
                    <FormItem label="标题" label-position="top" required>
                        <Input v-model="formData.name" placeholder="please enter article title"/>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="Url" label-position="top">
                        <Input
                                ref="fileInput"
                                v-model="formData.url"
                                search
                                enter-button="Upload"
                                @on-search="uploadMarkDown"
                                placeholder="please enter markdown url">
                            <span slot="prepend">http://</span>
                        </Input>
                        <Upload
                                style="display:none;"
                                action="http://www.test.zyx"
                                accept=".md"
                                @before-upload="beforeUpload"
                                @on-progress="onProgress"
                                @on-success="onSuccess"
                                @on-error="onError">
                            <Button ref="uploadBtn"></Button>
                        </Upload>
                    </FormItem>
                </Col>
            </Row>

            <Row :gutter="32">
                <Col span="12">
                    <FormItem label="作者" label-position="top">
                        <Select v-model="formData.owner" placeholder="please select an author">
                            <Option value="jobs">Steven Paul Jobs</Option>
                            <Option value="ive">Sir Jonathan Paul Ive</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="标签" label-position="top">
                        <Select v-model="formData.type" placeholder="please choose the label">
                            <Option value="private">Private</Option>
                            <Option value="public">Public</Option>
                        </Select>
                    </FormItem>
                </Col>
            </Row>

            <Row :gutter="32">
                <Col span="12">
                    <FormItem label="原始链接（如没有则视为原创）" label-position="top">
                        <Input v-model="formData.approver" placeholder="please enter original link">
                            <Select slot="prepend" style="width: 80px">
                                <Option value="http">http://</Option>
                                <Option value="https">https://</Option>
                            </Select>
                        </Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="是否私密" label-position="top">
                        <Select v-model="formData.date">
                            <Option value="true">是</Option>
                            <Option value="false">否</Option>
                        </Select>
                    </FormItem>
                </Col>
            </Row>
            <FormItem label="Description" label-position="top">
                <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="please enter the description"/>
            </FormItem>
        </Form>

        <div class="demo-drawer-footer">
            <Button style="margin-right: 8px" @click="isShow = false">Cancel</Button>
            <Button type="primary" @click="isShow = false">Submit</Button>
        </div>
    </Drawer>
</template>

<script>
    import iView from 'iview';

    export default {
        name: "index",
        data() {
            return {
                isShow: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    url: '',
                    owner: '',
                    type: '',
                    approver: '',
                    date: '',
                    desc: ''
                },
            }
        },
        methods: {
            showDrawer() {
                this.isShow = true;
                this.$store.state.articleDate.needToAddArticle = false;
            },
            close(visible) {
                if (!visible)
                    this.$store.state.articleDate.needToAddArticle = false;
            },
            uploadMarkDown() {
                this.$refs.uploadBtn.$el.click();
            },
            beforeUpload(file) {
                // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
                this.formData.url = "test.url";
            },
            onProgress() {
                // 文件上传时的钩子，返回字段为 event, file, fileList
                iView.LoadingBar.start();
            },
            onSuccess() {
                // 文件上传成功时的钩子，返回字段为 response, file, fileList
                iView.LoadingBar.finish();
            },
            onError() {
                // 文件上传失败时的钩子，返回字段为 error, file, fileList
            }
        },
    }
</script>

<style scoped>
    .demo-drawer-footer {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }

</style>
