import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/views/login/index'),
    hidden: true //当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面(默认 false)
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },
  //home
  {
    path: '/home',
    component: layout,
    redirect: '/welcome',
    hidden: true,
    children: [{
      path: '/welcome',
      component: () => import('@/views/welcome/index'),
    }]
  },
  //vue
  {
    path: '/Vue',
    component: layout,
    meta: { title: 'Vue', icon: 'el-icon-menu' },
    children: [
      // 指令
      {
        path: '/instruct',
        component: () => import('@/views/vue/instruct/index'),
        meta: { title: '指令' },
        children: [
          {
            path: '/instruct/vif',
            component: () => import('@/views/vue/instruct/vif/index'),
            meta: { title: 'v-if', icon: '' },
          },
          {
            path: '/instruct/velse',
            component: () => import('@/views/vue/instruct/velse/index'),
            meta: { title: 'v-else' },
          },
          {
            path: '/instruct/vshow',
            component: () => import('@/views/vue/instruct/vshow/index'),
            meta: { title: 'v-show' },
          },
          {
            path: '/instruct/customInstruction',
            component: () => import('@/views/vue/instruct/customInstruction/index'),
            meta: { title: '自定义指令' },
          }
        ]
      },
      // 生命周期
      {
        path: '/vlifecycle',
        component: () => import('@/views/vue/lifecycle/index'),
        meta: { title: '生命周期' },
      },
      // key
      {
        path: '/key',
        name: 'vueKey',
        component: () => import('@/views/vue/key/index'),
        meta: { title: 'key' },
      },
      // router
      {
        path: '/route',
        component: () => import('@/views/vue/route/index'),
        meta: { title: 'Router' },
        children: [
          {
            // 动态路径参数 以冒号开头
            path: '/dynamicRoute/:id/:type',
            name: 'dynamicRoute',
            component: () => import('@/views/vue/route/dynamicRoute/index'),
            meta: { title: '动态路由匹配' },
          },
          {
            path: '/nestRoute',
            name: 'nestRoute',
            component: () => import('@/views/vue/route/nestRoute'),
            meta: { title: '嵌套路由' },
            children: [
              { path: 'zhangsan', component: () => import('@/views/vue/route/nestRoute/zhangsan') },
              { path: 'lisi', component: () => import('@/views/vue/route/nestRoute/lisi') }
            ]
          },
          {
            path: '/bcNav',
            component: () => import('@/views/vue/route/bcNav'),
            meta: { title: '编程式的导航' },
          },
          {
            path: '/nameRoute',
            component: () => import('@/views/vue/route/nameRoute'),
            meta: { title: '命名路由' },
          },
          {
            path: '/nameView',
            component: () => import('@/views/vue/route/nameView'),
            meta: { title: '命名视图' },
            children: [
              //命名视图
              {
                path: 'website',
                components: {
                  default: () => import('@/views/vue/route/nameView/header'),
                  content: () => import('@/views/vue/route/nameView/content'),
                  footer: () => import('@/views/vue/route/nameView/footer')
                }
              },
            ]
          },
          {
            path: '/redirectAndAliase',
            component: () => import('@/views/vue/route/redirectAndAliase'),
            meta: { title: '重定向和别名' },
          },
          {
            path: '/routeParam/:id',
            name: 'RouteParam',
            component: () => import('@/views/vue/route/routeParam'),
            meta: { title: '路由组件传参' },
            // props: true, 布尔模式
            // props: { name: 'zhangsan'}  对象模式
            props: (route) => ({    //函数模式
              name: 'zhangsan',
              id: route.params.id,
              // hh:route.query.id
            })
          },
          {
            path: '/historyMode',
            component: () => import('@/views/vue/route/historyMode'),
            meta: { title: 'HTML5 History 模式' },
          },
          {
            path: '/navGuards',
            component: () => import('@/views/vue/route/navGuards'),
            meta: { title: '导航守卫' },
          },
          {
            path: '/meta',
            component: () => import('@/views/vue/route/meta'),
            meta: { title: '路由元信息' },
          },
          {
            path: '/transitions',
            component: () => import('@/views/vue/route/transitions'),
            meta: { title: '过渡动效' },
          },
          {
            path: '/dataFetch',
            component: () => import('@/views/vue/route/dataFetch'),
            meta: { title: '数据获取' },
          },
          {
            path: '/scroll',
            component: () => import('@/views/vue/route/scroll'),
            meta: { title: '滚动行为' },
            children: [
              {
                path: 'menu1',
                component: () => import('@/views/vue/route/scroll/menu1'),
              },
              {
                path: 'menu2',
                component: () => import('@/views/vue/route/scroll/menu2'),
              },
            ]
          },
        ]
      },
      // prors 父向子传值
      {
        path: '/props',
        component: () => import('@/views/vue/props'),
        meta: { title: '父向子传值' },
      },
      // emit 子向父传值
      {
        path: '/emit',
        component: () => import('@/views/vue/emit/Parent'),
        meta: { title: '子向父传值' },
      },
      // 父访问子属性或方法 children refs
      {
        path: '/parentVisitChild',
        component: () => import('@/views/vue/parentVisitChild/Parent'),
        meta: { title: '父访问子方法或属性' },
      },
      // 子访问父属性或方法  parent root
      {
        path: '/childVisitParent',
        component: () => import('@/views/vue/childVisitParent/Parent'),
        meta: { title: '子访问父方法或属性' },
      },
      // 事件总线（非父子之间事件传递）
      {
        path: '/eventBus',
        component: () => import('@/views/vue/eventBus/index'),
        meta: { title: '事件总线' },
      },
    ]
  },
  //js
  {
    path: '/javascript',
    component: layout,
    meta: { title: 'javascript', icon: 'el-icon-menu' },
    children: [
      {
        path: '/javascript/debounce',
        component: () => import('@/views/javascript/debounce'),
        meta: { title: '防抖', icon: 'el-icon-menu' },
      },
      {
        path: '/javascript/throttle',
        component: () => import('@/views/javascript/throttle'),
        meta: { title: '节流', icon: 'el-icon-menu' },
      },
    ]
  },
  //css
  {
    path: '/css',
    component: layout,
    meta: { title: 'css3', icon: 'el-icon-menu', disabled: 'true' },
    children: [
      {
        path: '/font-size',
        component: layout,
        meta: { title: 'font-size', icon: '' },
      },
      {
        path: '/color',
        component: layout,
        meta: { title: 'color', icon: '' },
      },
    ]
  },
  //问题
  {
    path: '/question',
    component: layout,
    meta: { title: '问题', icon: 'el-icon-menu' },
    children: [{
      path: '/question',
      component: () => import('@/views/question'),
      meta: { title: '问题', icon: 'el-icon-menu' },
    }],
  },

  // 404页必须放在最后。通配符,放到最后，当路径没有找到的时候展示404
  // 会匹配所有路径
  { path: '*', redirect: '/404', hidden: true }

]

const router = new Router({
  routes,
})


//路由链接重复点击报错问题
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router;

/**
 * meta: { title: 'javascript', icon: 'el-icon-menu', disabled: 'true' },
 *
 * title 导航标题
 * icon 图标
 * disabled 是否禁用该菜单
 */