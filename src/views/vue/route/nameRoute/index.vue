<template>
  <div>
    <el-card>
      <strong>命名路由</strong>
      <p>
        有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建
        Router 实例的时候，在 routes 配置中给路由设置name属性。
      </p>
      <pre>
        const router = new VueRouter({
          routes: [
            {
              path: '/user/:userId',
              name: 'user',
              component: User
            }
          ]
        })
      </pre>
      <p>要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：</p>

      <pre>
        {{ msg }}
      </pre>

      <p>这跟代码调用 router.push() 是一回事：</p>
      <pre>
        router.push({ name: 'user', params: { userId: 123 } })
      </pre>
    </el-card>

    <el-button type="primary" title="$router.push({ name: 'vueKey' })" @click="$router.push({ name: 'vueKey' })">命名路由跳转到Key菜单</el-button>

    <el-button type="primary" title="$router.push({ name: 'vueKey',params:{name:333} })" @click="$router.push({ name: 'vueKey',params:{name:333} })">命名路由跳转到Key菜单带params参数</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: `<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>`,
    };
  },
};
</script>

<style>
</style>