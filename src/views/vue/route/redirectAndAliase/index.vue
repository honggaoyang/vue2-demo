<template>
  <div>
    <el-card>
      <strong>重定向</strong>
      <pre>
        重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b：
        const router = new VueRouter({
          routes: [
            { path: '/a', redirect: '/b' }
          ]
        })


        重定向的目标也可以是一个命名的路由：
        const router = new VueRouter({
          routes: [
            { path: '/a', redirect: { name: 'foo' }}
          ]
        })


        甚至是一个方法，动态返回重定向目标：
        const router = new VueRouter({
          routes: [
            { path: '/a', redirect: to => {
              // 方法接收 目标路由 作为参数
              // return 重定向的 字符串路径/路径对象
              const { hash, query, params } = to
              if(hash=='') return {name:'',hash:''}
              if(query=='') return {path:'',query:null}
              if(params=='') return {'/a/:id'}
              else return {'/a'}
            }}
          ]
        })
      </pre>
    </el-card>

    <el-card>
      <strong>别名</strong>
      <p>
        /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为
        /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
      </p>

      <pre>
        const router = new VueRouter({
          routes: [
            { path: '/a', component: A, alias: '/b' }
          ]
        })

        “别名”的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。
      </pre>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>