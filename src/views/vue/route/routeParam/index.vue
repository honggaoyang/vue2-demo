<template>
  <div>
    <el-card>
      <strong>正常路由组件传参 333</strong>
      <p>
        在组件中使用 $route
        会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL
        上使用，限制了其灵活性。
      </p>
      <p>使用 props 将组件和路由解耦：</p>
      <p>正常传参获取参数</p>
      <p title="this.$route.params">获取到的参数为：{{ this.$route.params }}</p>
      <el-button
        type="primary"
        @click="$router.push({ name: 'RouteParam', params: { id: 333 } })"
        title="$router.push({ name: 'RouteParam', params: { id: 333 } })"
        >获取参数</el-button
      >
    </el-card>
    <el-card>
      <strong>布尔模式 666</strong>
      <p>
        通过 props 解耦，在路由中设置 props：true，在页面中添加props:
        ['id']，在页面直接获取id就行
      </p>
      <p>对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：</p>
      <p>获取到的参数为：{{ id }}</p>
      <el-button
        type="primary"
        @click="$router.push('/routeParam/666')"
        title="$router.push('/routeParam/666')"
        >获取参数</el-button
      >
    </el-card>

    <el-card>
      <strong>对象模式</strong>
      <p>
        如果 props 是一个对象，它会被按原样设置为组件属性。当 props
        是静态的时候有用。
      </p>
      <pre>
        const router = new VueRouter({
          routes: [
            {
              path: '/routeParam/:id',
              component: Promotion,
              props: { name: 'zhangsan' }
            }
          ]
        })

        export default {
          props: ['id', 'name'],
        };
      </pre>
      获取到的name为： {{ name }}
    </el-card>

    <el-card>
      <strong>函数模式</strong>
      <p>
        你可以创建一个函数返回
        props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。
      </p>
      <pre>
        const router = new VueRouter({
          routes: [
            {
              path: '/search',
              component: SearchUser,
              props: route => ({ query: route.query.q })
            }
          ]
        })
      </pre>

      <p>获取到的name：{{ name }}</p>
      <p>获取到的id：{{ id }}</p>
      {{hh}}
    </el-card>
    <el-button @click="toInfo" type="success">查看更多教程</el-button>
  </div>
</template>

<script>
export default {
  props: ['id', 'name','hh'],
  data() {
    return {
      msg: '<div>User {{ id }}</div>',
    };
  },
  methods: {
    toInfo(){
      window.open('https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F')
    }
  }
};
</script>

<style>
</style>