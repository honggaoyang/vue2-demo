<template>
  <div>
    <strong>子组件</strong>
    <p>用户名：{{ userName }}</p>
    <el-button type="primary" @click="setName">修改用户名</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'zhangsan',
    };
  },
  methods: {
    setName() {
      this.userName = 'lisi';
    },
  },
};
</script>

<style>
</style>