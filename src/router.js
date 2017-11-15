/*TODO 路由*/
const routers = [
    {
        path: '/',
        meta: {
            /*TODO 1.修改title*/
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
];
export default routers;