<style scoped>

</style>
<template>
    <div class="layout-content">
        <Row>
            <Col span="5">
            <Menu :open-names="['1','2','3']" >
                <template v-for="(li,index) in list">
                    <Submenu :name="index">
                        <template slot="title">
                            {{li.item}}
                        </template>
                    </Submenu>
                </template>
            </Menu>
            </Col>
            <Col span="19">
            <div class="layout-content-main">
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">主办方</BreadcrumbItem>
                        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
                        <BreadcrumbItem>iView</BreadcrumbItem>
                    </Breadcrumb>
                    <router-link :to="{ name: 'test'}">test</router-link>
                    <router-view></router-view>
                </div>
            </div>
            </Col>
        </Row>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                list: [
                    {id: "cc818aac-5df9-11e7-8edb-00163e0665970faadb", item: "展会管理",sort:1, child: [{id:"cc818aac-5df9-11e7-8edb-00163e0665970faadb",subItem:"展会及网站"},{id:"cc818aac-5df9-11e7-8edb-00163e0665970faadb",subItem:"同期活动"}]},
                    {id: "cc818aac-5df9-11e7-8edb-00163e0665970faadb", item: "市场推广",sort:2, child: [{id:"cc818aac-5df9-11e7-8edb-00163e0665970faadb",subItem:"邮件模板"},{id:"cc818aac-5df9-11e7-8edb-00163e0665970faadb",subItem:"短信模板"},{id:"cc818aac-5df9-11e7-8edb-00163e0665970faadb",subItem:"市场活动"},{id:"cc818aac-5df9-11e7-8edb-00163e0665970faadb",subItem:"设置"}]},
                    {id: "cc818aac-5df9-11e7-8edb-00163e0665970faadb", item: "参展商CRM",sort:3, child: [{id:"cc818aac-5df9-11e7-8edb-00163e0665970faadb",subItem:"商机"},{id:"cc818aac-5df9-11e7-8edb-00163e0665970faadb",subItem:"设置"}]},
                ]
            }
        }
    }
</script>
