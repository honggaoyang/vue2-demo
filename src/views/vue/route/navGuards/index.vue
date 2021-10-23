<template>
  <div>
    <el-card>
      <strong>全局前置守卫</strong>
      <p>
        当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫
        resolve 完之前一直处于 等待中。
      </p>
      <pre>
        router.beforeEach((to, from, next) => {
            console.log(to);
            console.log(from);
            next()
        })
      </pre>
      <p>to: 即将要进入的目标 路由对象</p>
      <p>from: 当前导航正要离开的路由</p>
      <p>
        next: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next
        方法的调用参数
      </p>
    </el-card>

    <el-card>
      <strong>全局解析守卫</strong>
      <p>
        在 2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和
        router.beforeEach
        类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
      </p>
    </el-card>

    <el-card>
      <strong>全局后置钩子</strong>
      <p>
        你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next
        函数也不会改变导航本身：
      </p>
      <pre>
            router.afterEach((to, from) => {
            // ...
            })
        </pre
      >
    </el-card>

    <el-card>
      <strong>路由独享的守卫</strong>
      <p>在路由配置上直接定义 beforeEnter 守卫：</p>
      <pre>
            const router = new VueRouter({
            routes: [
                {
                    path: '/foo',
                    component: Foo,
                    beforeEnter: (to, from, next) => {
                        // ...
                    }
                }
            ]
            })
        </pre
      >

      这些守卫与全局前置守卫的方法参数是一样的。
    </el-card>
    <el-card>
      <strong>组件内的守卫</strong>
      <p>可以在组件中定义守卫，可以在路由组件内直接定义以下路由导航守卫：</p>
      <p>beforeRouteEnter</p>
      <p>beforeRouteUpdate (2.2 新增)</p>
      <p>beforeRouteLeave</p>
      <pre>
        export default {
            beforeRouteEnter(to, from, next) {
                // 在渲染该组件的对应路由被 confirm 前调用
                // 不！能！获取组件实例 `this`
                // 因为当守卫执行前，组件实例还没被创建
            },
            beforeRouteUpdate(to, from, next) {
                // 在当前路由改变，但是该组件被复用时调用
                // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
                // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
                // 可以访问组件实例 `this`
            },
            beforeRouteLeave(to, from, next) {
                // 导航离开该组件的对应路由时调用
                // 可以访问组件实例 `this`
            },
        };
      </pre>
      <el-button
        @click="$router.push({ path: '/navGuards', query: { id: 111 } })"
        type="primary"
        >触发 beforeRouteUpdate</el-button
      >
    </el-card>

    <el-card>
      <strong>完整的导航解析流程</strong>
      <p>1、导航被触发。</p>
      <p>2、在失活的组件里调用 beforeRouteLeave 守卫。</p>
      <p>3、调用全局的 beforeEach 守卫。</p>
      <p>4、在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。</p>
      <p>5、在路由配置里调用 beforeEnter。</p>
      <p>6、解析异步路由组件。</p>
      <p>7、在被激活的组件里调用 beforeRouteEnter。</p>
      <p>8、调用全局的 beforeResolve 守卫 (2.5+)。</p>
      <p>9、导航被确认。</p>
      <p>10、调用全局的 afterEach 钩子。</p>
      <p>11、触发 DOM 更新。</p>
      <p>
        12、调用 beforeRouteEnter 守卫中传给 next
        的回调函数，创建好的组件实例会作为回调函数的参数传入。
      </p>
    </el-card>
    <el-button @click="toInfo" type="success">查看更多教程</el-button>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter', '渲染组件了');
    next();
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate', '路由改变，组件被复用了');
    next();
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave', '导航离开组件');
    next();
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
  methods: {
    toInfo() {
      window.open(
        'https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB'
      );
    },
  },
};
</script>

<style>
</style>