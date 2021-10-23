<template>
  <div>
    <el-card>
      <strong>过渡动效</strong>
      <p>单个路由的过渡</p>
      <pre>
         {{ msg }}


        添加样式
        .slide-left-enter, .slide-right-leave-to {
            opacity: 0;
            transform: translateX(100%)
        }

        .slide-left-leave-to, .slide-right-enter {
            opacity: 0;
            transform: translateX(-100%)
        }

        .slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
            transition: 1.5s;
            position: absolute;
            top:0;
        }
      </pre>
    </el-card>

    <el-button type="success" @click="serMore">查看更多教程</el-button>
    <el-button type="danger" @click="serMore2">查看更多过渡</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: `<transition name="slide-right">
            <router-view></router-view>
       </transition>`,
    };
  },
  methods: {
    serMore() {
      window.open(
        'https://router.vuejs.org/zh/guide/advanced/transitions.html'
      );
    },

    serMore2() {
      window.open('https://cn.vuejs.org/v2/guide/transitions.html');
    },
  },
};
</script>

<style>
</style>