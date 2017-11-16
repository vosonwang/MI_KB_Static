import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import Locales from './locale';
import en_Us from 'iview/dist/locale/en-US';
import zh_CN from 'iview/dist/locale/zh-CN';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
/*Vuex*/
import store from './store'

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueI18n);


// 多语言配置
const locales = Locales;

const messages = {
    en_Us: Object.assign(locales['en-US'], en_Us),
    zh_CN: Object.assign(locales['zh-CN'], zh_CN)
};

Vue.locale = () => {};

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: store.state.Lang,  // set locale
    messages  // set locale messages
});


// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    /*Vuex*/
    store,
    i18n,
    router: router,
    render: h => h(App)
});
