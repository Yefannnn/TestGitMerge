// 创建 路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
          path:'/',
          redirect:'/sign'  
        },
        {
            path: '/sign',
            name:'sign',
            component: ()=> import('@/layout/index.vue'),
            meta:{
                path:'sign'
            },
            children:[{
                path:'',
                component:()=> import ('@/pages/sign.vue')
            }]
        },
        {
            path: '/video',
            name:'video',
            component: ()=> import('@/layout/index.vue'),
            meta:{
                path:'video'
            },
            children:[{
                path:'',
                component:()=> import ('@/pages/video.vue')
            }]
        },
        {
            path:'/diolog',
            name:'diolog',
            component: ()=> import('@/layout/index.vue'),
            meta:{
                path:'diolog'
            },
            children:[{
                path:'',
                component:()=> import ('@/pages/diolog.vue')
            }]
        },{
            path:'/print',
            name:'print',
            component: ()=> import('@/layout/index.vue'),
            meta:{
                path:'print'
            },
            children:[{
                path:'',
                component:()=> import ('@/pages/print.vue')
            }]
        },{
            path:'/curt',
            name:'curt',
            component: ()=> import('@/layout/index.vue'),
            meta:{
                path:'curt'
            },
            children:[{
                path:'',
                component:()=> import ('@/pages/curt.vue')
            }]
        },
        {
            path: '/button',
            name:'button',
            component: ()=> import('@/layout/index.vue'),
            meta:{
                path:'button'
            },
            children:[{
                path:'',
                component:()=> import ('@/pages/button.vue')
            }]
        },
        {
            path: '/map',
            name:'map',
            component: ()=> import('@/layout/index.vue'),
            meta:{
                path:'map'
            },
            children:[{
                path:'',
                component:()=> import ('@/pages/mapPage.vue')
            }]
        },
    ]
})