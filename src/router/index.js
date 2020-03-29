import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)
const router = new Router({
    routes: [{
            path: '/',
            redirect: '/init'
        },
        {
            path: '/Teller',
            name: 'Teller',
            component: () =>
                import ('../view/ma_ruilin/Teller')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () =>
                import ('../view/ma_ruilin/admin')
        },
        {
            path: '/init',
            name: 'init',
            component: () =>
                import ('../view/ma_ruilin/init')
        },
        {
            path: '/cancle',
            name: 'cancle',
            component: () =>
                import ('../view/ma_ruilin/cancle')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('../view/ma_ruilin/login')
        },
    ]
})


export default router;