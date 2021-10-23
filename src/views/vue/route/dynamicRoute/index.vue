<template>
  <div>
    <el-card>
      <strong>动态路由</strong>
      <p><i>设置单个参数</i></p>
      <pre>
        const router = new VueRouter({
          routes: [
            // 动态路径参数 以冒号开头
            { path: '/dynamicRoute/:id', component: dynamicRoute }
          ]
        })
      </pre>
      <i>也可以设置多个参数</i>
      <pre>
        const router = new VueRouter({
          routes: [
            // 动态路径参数 以冒号开头
            { path: '/dynamicRoute/:id/:type', component: dynamicRoute }
          ]
        })
      </pre>
      <p>
        一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到
        this.$route.params，可以在每个组件内使用。于是，我们可以更新 当前
        的模板，输出当前用户的 ID：{{ $route.params }}
      </p>
    </el-card>
    <el-button type="primary" @click="handleBtn">动态路由</el-button>
    <p>获取到的ID：{{ $route.params.id }}</p>
    <p>获取到的type：{{ $route.params.type }}</p>
    <el-card>
      <strong>响应路由参数的变化</strong>
      <p>
        当使用路由参数时，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。
        不过，这也意味着组件的生命周期钩子不会再被调用。复用组件时，想对路由参数的变化作出响应的话，可以使用
        watch (监测变化) $route 对象：
      </p>
      <pre>
        有子路由才可以监听路由变化
        watch: {
          $route(to, from) {
            console.log('to', to);
            console.log('from', from);
          },
        },
      </pre>
    </el-card>
    <el-card>
      <strong>捕获所有路由或 404 Not found 路由</strong>
      <pre>
        匹配所有路径
        { path: '*', redirect: '/404', hidden: true } 

        匹配以 `/user-` 开头的任意路径
        { path: '/user-*', redirect: '/404', hidden: true }
      </pre>
      <p>注意：通配符的路由应该放在最后</p>
      <p>当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。它包含了 URL 通过通配符被匹配的部分：</p>
      <pre>
        给出一个路由 { path: '/user-*' }
        this.$router.push('/user-admin')
        this.$route.params.pathMatch ===> 'admin'

        给出一个路由 { path: '*' }
        this.$router.push('/non-existing')
        this.$route.params.pathMatch ===> '/non-existing'
      </pre>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    handleBtn() { 
      this.$router.push('/dynamicRoute/8/one');
      // this.$router.push({ name: 'dynamicRoute', params: { id: 123 } });
    },
  },
  
};
</script>

<style>
</style>