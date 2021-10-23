<template>
  <div>
    <el-card>
      <strong>嵌套路由</strong>
      <p>
        要在页面嵌套别的组件，需要配置父路由的children属性，在父页面添加router-view占位符
      </p>
      <pre>
        当/nestRoute/zhangsan 时候加载zhangsan的组件，/nestRoute/lisi  加载lisi组件

        const router = new VueRouter({
          routes: [
            {
              path: '/nestRoute',
              component: nestRoute,
              children: [
                { 
                  path: 'zhangsan',
                  component: zhangsan
                },
                { 
                  path: 'lisi',
                  component: lisi
                }
              ]
            }
          ]
        }) 

        注意:以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
      </pre>
    </el-card>
    <p>
      <el-button type="primary" @click="zsBtn">张三</el-button>
      <el-button type="primary" @click="lsBtn">李四</el-button>
    </p>
    <el-card>
      <router-view />
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    zsBtn() {
      this.$router.push('/nestRoute/zhangsan');
    },
    lsBtn() {
      this.$router.push('/nestRoute/lisi');
    },
  }, 
};
</script>

<style>
</style>