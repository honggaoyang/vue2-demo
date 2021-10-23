<template>
  <div>
    <el-card>
      <strong>HTML5 History 模式</strong>

      <pre>
        const router = new VueRouter({
          mode: 'history',
          routes: [...]
        })
      </pre>

      <p>vue设置 history 模式，需要配置后台信息，具体查看官网信息</p>
      <el-button @click="toInfo" type="success">查看更多教程</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    toInfo() {
      window.open(
        'https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90'
      );
      // window.location.href ='https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90';
    },
  },
};
</script>

<style>
</style>