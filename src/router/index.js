import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path:'/', redirect: '/login'},
        {path: '/login', name: "login", component: resolve => require(['@/app/userLogin/login'],resolve)},
        {path: '/register', name: 'register', component: resolve => require(['@/app/userLogin/register'], resolve)},
        {path: '/index', name: 'index', component: resolve => require(['@/app/index/index'], resolve), children: [
            
        ]}
    ]
})
