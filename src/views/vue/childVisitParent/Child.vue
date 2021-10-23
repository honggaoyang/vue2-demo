<template>
  <div>
    <strong>子组件</strong>
    <p>父组件的用户名：{{ userName }}</p>
    <el-button type="primary" @click="getName">获取父组件用户名</el-button>
    <el-button type="primary" @click="setName">修改父组件用户名</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    
    getName() {
      console.log(this.$parent);
      this.userName = this.$parent.$parent.userName;
    },
    setName() {
      this.$parent.$parent.setName();
    },
  },
};
</script>

<style>
</style>