/*TODO 路由*/
const routers = [
    {
        path: '/',
        meta: {
            /*TODO 1.修改title*/
            title: '首页'
        },
        name:'index',
        component: (resolve) => require(['./views/organizer.vue'], resolve)
    },
    {
        path: '/kb/organizer',
        meta: {
            /*TODO 1.修改title*/
            title: '主办方'
        },
        name:'organizer',
        component: (resolve) => require(['./views/organizer.vue'], resolve)
    },
    {
        path: '/kb/exhibitor',
        meta: {
            /*TODO 1.修改title*/
            title: '展商'
        },
        name:'exhibitor',
        component: (resolve) => require(['./views/exhibitor.vue'], resolve)
    },
    {
        path: '/kb/visitor',
        meta: {
            /*TODO 1.修改title*/
            title: '观众'
        },
        name:'visitor',
        component: (resolve) => require(['./views/visitor.vue'], resolve)
    }
];
export default routers;