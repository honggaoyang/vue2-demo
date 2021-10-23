<template>
  <el-container>
    <!-- 3.使用组件 侧边导航栏 -->
    <nav-bar />
    <!-- 右边内容 -->
    <el-main>
      <!-- 1.router-view 上加上一个唯一的 key，来保证路由切换时都会重新渲染触发钩子了,不加key可能会复用组件比如传入不同参数渲染组件 -->
      <!-- 2.因为Vue会有组件之间的复用，如果两个路由都使用到了某一个组件，这个组件是不会再去执行created和mounted这些钩子函数的，加了key就是可以当成两个不同的界面去使用。 -->
      <transition name="component-fade" mode="out-in">
        <router-view :key="key" />
      </transition>
    </el-main>
  </el-container>
</template>


<script>
//1.引入组件
import NavBar from './components/NavBar.vue';
export default {
  //2.注册组件
  components: { NavBar },
  data() {
    return {};
  },
  computed: {
    key() {
      //只要保证 key 唯一性就可以了，保证不同页面的 key 不相同
      return this.$route.path;
    },
  },
  // 有子路由才可以监听路由变化
  // watch: {
  //   $route(to, from) {
  //     console.log('to', to);
  //     console.log('from', from);
  //   },
  // },
};
</script>

<style scoped>
.el-container {
  height: 100vh;
}


/* 添加动画 */
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>